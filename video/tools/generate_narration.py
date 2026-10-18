#!/usr/bin/env python3
"""
Generates the voiceover for the video with Piper TTS (offline), schedules each
narration segment on the timeline, and writes:

  public/narration/<id>.wav   one clip per segment
  src/narration.json          [{id, scene, file, start, duration, text}]
  ../out/captions.srt         subtitles (SubRip)
  ../out/captions.vtt         subtitles (WebVTT)

Each segment has a *desired* start time (seconds). If the previous segment is
still playing, the segment is pushed later and the script reports it, so the
timing printed at the end is the real timing used by the composition.

Usage:  python3 tools/generate_narration.py            (from video/)
        VOICE=tools/voices/other.onnx python3 tools/generate_narration.py
"""
import json
import os
import sys
import wave
from pathlib import Path

from piper import PiperVoice, SynthesisConfig

ROOT = Path(__file__).resolve().parent.parent
VOICE = Path(os.environ.get("VOICE", ROOT / "tools/voices/en_US-lessac-medium.onnx"))
LENGTH_SCALE = float(os.environ.get("LENGTH_SCALE", "1.0"))  # >1 = slower, calmer
GAP = 0.25  # minimum silence between consecutive clips (seconds)

# Scene boundaries (seconds). Must match SCENES in src/timeline.ts.
SCENES = {
    "hook": (0, 13),
    "build": (13, 34),
    "deleteWhere": (34, 66),
    "deleteAll": (66, 93),
    "drop": (93, 114),
    "quiz": (114, 137),
    "recap": (137, 150),
}

# (id, scene, desired start, caption text, spoken text or None if identical)
SEGMENTS = [
    # Scene 1 — hook
    ("s1a", "hook", 0.6, "Want to remove something from your database?", None),
    ("s1b", "hook", 3.2, "These two commands can leave you with very different results.", None),
    ("s1c", "hook", 6.6, "DELETE… and DROP.", "DELETE. And DROP."),
    ("s1d", "hook", 8.3, "One of them keeps your table. The other one doesn't.", None),
    ("s1e", "hook", 11.2, "Let's see which is which.", None),
    # Scene 2 — build the example
    ("s2a", "build", 13.6, "Here's a small Employees table.", None),
    ("s2b", "build", 15.8, "First, CREATE TABLE builds the structure: three columns — id, name, and department.",
     "First, CREATE TABLE builds the structure: three columns. I D, name, and department."),
    ("s2c", "build", 21.9, "Think of it as an empty cabinet with labeled slots.", None),
    ("s2d", "build", 25.0, "Then INSERT adds the rows: four employees, two of them in Sales.", None),
    ("s2e", "build", 29.3, "Two separate things, then: the table's structure, and the rows stored inside it.", None),
    # Scene 3 — DELETE with WHERE
    ("s3a", "deleteWhere", 34.5, "Let's remove only the Sales employees.", None),
    ("s3b", "deleteWhere", 37.2, "DELETE FROM Employees, WHERE department equals 'Sales'.",
     "DELETE FROM Employees, WHERE department equals Sales."),
    ("s3c", "deleteWhere", 40.8, "The WHERE clause is the filter.", None),
    ("s3d", "deleteWhere", 43.0, "The database checks each row's department…", "The database checks each row's department."),
    ("s3e", "deleteWhere", 45.6, "and marks the ones that match.", None),
    ("s3f", "deleteWhere", 47.9, "So which rows will go?", None),
    # 2-second prediction pause here
    ("s3g", "deleteWhere", 51.5, "Just these two.", None),
    ("s3h", "deleteWhere", 53.0, "The Sales rows are gone —", "The Sales rows are gone."),
    ("s3i", "deleteWhere", 54.9, "but Priya and Marcus remain, along with the headers and the table itself.", None),
    ("s3j", "deleteWhere", 59.6, "Selected rows removed. Table stays.", None),
    # Scene 4 — DELETE without WHERE
    ("s4a", "deleteAll", 66.5, "Let's reset to the original four rows.", None),
    ("s4b", "deleteAll", 69.2, "Now the same DELETE — but notice: no WHERE clause.", "Now the same DELETE. But notice: no WHERE clause."),
    ("s4c", "deleteAll", 72.9, "No filter means every row matches.", None),
    ("s4d", "deleteAll", 75.5, "Run it… and all four rows are removed.", "Run it. And all four rows are removed."),
    ("s4e", "deleteAll", 78.5, "But look: the Employees table is still here.", None),
    ("s4f", "deleteAll", 81.7, "Its name, its columns, its structure — all intact. Just empty.",
     "Its name, its columns, its structure. All intact. Just empty."),
    ("s4g", "deleteAll", 86.0, "So before running destructive SQL, check: is there a WHERE clause, and does it match what you intend?",
     "So before running destructive S Q L, check: is there a WHERE clause, and does it match what you intend?"),
    # Scene 5 — DROP TABLE
    ("s5a", "drop", 93.3, "One more reset, back to four rows.", None),
    ("s5b", "drop", 95.9, "This time: DROP TABLE Employees.", None),
    ("s5c", "drop", 98.6, "Watch what happens.", None),
    ("s5d", "drop", 100.2, "The rows go…", "The rows go."),
    ("s5e", "drop", 101.5, "the headers go…", "The headers go."),
    ("s5f", "drop", 103.0, "the table itself is gone.", "The table itself is gone."),
    ("s5g", "drop", 104.8, "There is no Employees table anymore.", None),
    ("s5h", "drop", 107.2, "Back to our cabinet: DELETE removes the contents, and the cabinet stays.", None),
    ("s5i", "drop", 111.8, "DROP removes the cabinet itself.", None),
    # Scene 6 — quiz
    ("s6a", "quiz", 114.4, "Quick quiz.", None),
    ("s6b", "quiz", 115.8, "Remove only employees in Sales. Which command?", None),
    # 2-second thinking pause
    ("s6c", "quiz", 121.0, "DELETE, with a WHERE clause.", None),
    ("s6d", "quiz", 123.0, "Rows filtered, table kept.", None),
    ("s6e", "quiz", 125.4, "Next: remove the Employees table itself. Which command?", None),
    # 2-second thinking pause
    ("s6f", "quiz", 131.3, "DROP TABLE.", None),
    ("s6g", "quiz", 132.6, "The whole table is gone.", None),
    # Scene 7 — recap
    ("s7a", "recap", 137.6, "So remember: DELETE removes rows, and the table remains.", None),
    ("s7b", "recap", 141.4, "DROP TABLE removes the table entirely.", None),
    ("s7c", "recap", 144.2, "DELETE clears the contents. DROP removes the container.", None),
]


def synthesize(voice: PiperVoice, text: str, out: Path) -> float:
    with wave.open(str(out), "wb") as f:
        voice.synthesize_wav(text, f, syn_config=SynthesisConfig(length_scale=LENGTH_SCALE))
    with wave.open(str(out), "rb") as f:
        return f.getnframes() / f.getframerate()


def split_caption(text: str, max_len: int = 44) -> str:
    """Break a caption into at most two balanced lines."""
    if len(text) <= max_len:
        return text
    words = text.split()
    best, best_diff = None, 10**9
    for i in range(1, len(words)):
        a, b = " ".join(words[:i]), " ".join(words[i:])
        diff = abs(len(a) - len(b))
        if len(a) <= max_len + 6 and len(b) <= max_len + 6 and diff < best_diff:
            best, best_diff = (a, b), diff
    return "\n".join(best) if best else text


def ts_srt(t: float) -> str:
    ms = int(round(t * 1000))
    h, ms = divmod(ms, 3_600_000)
    m, ms = divmod(ms, 60_000)
    s, ms = divmod(ms, 1000)
    return f"{h:02}:{m:02}:{s:02},{ms:03}"


def ts_vtt(t: float) -> str:
    return ts_srt(t).replace(",", ".")


def main() -> int:
    if not VOICE.exists():
        print(f"Voice model not found: {VOICE}", file=sys.stderr)
        return 1
    voice = PiperVoice.load(str(VOICE))
    out_dir = ROOT / "public/narration"
    out_dir.mkdir(parents=True, exist_ok=True)

    schedule = []
    prev_end = 0.0
    problems = []
    total_words = 0
    for seg_id, scene, desired, text, spoken in SEGMENTS:
        wav = out_dir / f"{seg_id}.wav"
        duration = synthesize(voice, spoken or text, wav)
        start = max(desired, prev_end + GAP)
        if start - desired > 0.05:
            problems.append(f"  {seg_id}: pushed from {desired:.2f}s to {start:.2f}s (previous clip still playing)")
        end = start + duration
        lo, hi = SCENES[scene]
        if start < lo or end > hi + 0.4:
            problems.append(f"  {seg_id}: {start:.2f}-{end:.2f}s falls outside scene '{scene}' ({lo}-{hi}s)")
        schedule.append({
            "id": seg_id,
            "scene": scene,
            "file": f"narration/{seg_id}.wav",
            "start": round(start, 3),
            "duration": round(duration, 3),
            "text": text,
        })
        total_words += len(text.split())
        prev_end = end

    (ROOT / "src/narration.json").write_text(json.dumps(schedule, indent=2) + "\n")

    srt, vtt = [], ["WEBVTT", ""]
    for i, s in enumerate(schedule, 1):
        cue_end = s["start"] + max(s["duration"], 1.0)
        body = split_caption(s["text"])
        srt += [str(i), f"{ts_srt(s['start'])} --> {ts_srt(cue_end)}", body, ""]
        vtt += [str(i), f"{ts_vtt(s['start'])} --> {ts_vtt(cue_end)} line:90%", body, ""]
    out = ROOT.parent / "out"
    out.mkdir(exist_ok=True)
    (out / "captions.srt").write_text("\n".join(srt))
    (out / "captions.vtt").write_text("\n".join(vtt))

    print(f"{'id':5} {'scene':12} {'start':>7} {'end':>7} {'dur':>5}  text")
    for s in schedule:
        print(f"{s['id']:5} {s['scene']:12} {s['start']:7.2f} {s['start']+s['duration']:7.2f} {s['duration']:5.2f}  {s['text']}")
    print(f"\n{len(schedule)} segments, {total_words} words, narration ends at {prev_end:.2f}s")
    if problems:
        print("\nTiming notes:")
        print("\n".join(problems))
    return 0


if __name__ == "__main__":
    sys.exit(main())
