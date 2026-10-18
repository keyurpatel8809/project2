# SQL DELETE vs DROP — explainer video (Remotion)

A 150-second, 1920×1080 @ 30 fps educational video: *DELETE removes rows; DROP TABLE removes the table.*
Everything is code-driven — animation (Remotion/React), narration (Piper TTS, offline), sound
effects (ffmpeg-synthesized) and captions are all generated from this folder.

SQL dialect used throughout: **SQLite** (the statements are plain ANSI-style SQL and run unchanged on
most engines). The examples are demonstrations for a disposable practice database.

## Outputs (in `../out/`)

| File | What it is |
|---|---|
| `sql-delete-vs-drop.mp4` | Final video with narration + SFX |
| `sql-delete-vs-drop-captioned.mp4` | Same video with burned-in captions |
| `captions.srt`, `captions.vtt` | Separate subtitle files (synchronized to the narration) |
| `stills/` | QA frames rendered during development |

## Project layout

```
video/
├─ src/
│  ├─ timeline.ts        scene boundaries (seconds), easing helpers
│  ├─ theme.ts           colours + fonts (DELETE = amber, DROP = red, keywords = blue)
│  ├─ data.ts            Employees rows and tokenised SQL statements
│  ├─ narration.json     generated: narration schedule used by audio + captions
│  ├─ components/        Table, Code, Cabinet, Captions, AudioTracks, Chrome (chips/stamps/warnings)
│  ├─ scenes/            Hook, Build, DeleteWhere, DeleteAll, Drop, Quiz, Recap
│  ├─ Video.tsx          composition: scenes + narration + SFX (+ optional captions)
│  └─ Root.tsx           registers SqlDeleteVsDrop and SqlDeleteVsDropCaptioned
├─ public/
│  ├─ narration/*.wav    generated voice clips (one per segment)
│  ├─ sfx/*.wav          generated tick / whoosh / thud
│  └─ fonts/             Inter + JetBrains Mono (SIL OFL, licences included)
└─ tools/
   ├─ generate_narration.py   Piper TTS → clips, narration.json, captions.srt/.vtt
   ├─ generate_sfx.sh         ffmpeg → sound effects
   ├─ stills.mjs              render QA frames at given timestamps
   └─ voices/                 Piper voice model (en_US-lessac-medium)
```

## Setup

```bash
cd video
npm install                       # Remotion 4, React 18
```

Remotion needs a Chromium. On a normal machine it downloads its own headless shell automatically.
`remotion.config.ts` also picks up a pre-installed one from `REMOTION_BROWSER_EXECUTABLE` if set.

## Preview

```bash
npm run preview                   # opens Remotion Studio in the browser
```

## Export

```bash
npm run render                    # → ../out/sql-delete-vs-drop.mp4 (H.264, CRF 18)
npm run render:captioned          # → ../out/sql-delete-vs-drop-captioned.mp4
```

## Regenerating audio

The committed `public/narration/*.wav`, `src/narration.json` and `../out/captions.*` are a
matched set — keep them together. To regenerate (e.g. to change the voice):

```bash
pip install piper-tts
# put a Piper voice (.onnx + .onnx.json) in tools/voices/, then:
npm run narration                 # VOICE=tools/voices/other.onnx to pick a different model
npm run sfx                       # only if you change the sound design
```

`generate_narration.py` prints the resulting schedule and flags any segment that had to be pushed
later or spills past its scene; the animation cues in `src/scenes/*.tsx` are written against the
schedule printed in the current `narration.json`, so re-check those timings after a voice change
(Piper's synthesis has slight timing variance from run to run).

### Swapping in a human voice

Record each line in `src/narration.json` as a separate clip with the same file name (or one long
take, cut at the listed `start` times), drop the files into `public/narration/`, update `duration`
in `narration.json`, and re-render. Captions pick up the new timings automatically.

## Accessibility notes

- Affected rows are marked with an outline **and** a "✓ MATCH" label, never colour alone.
- Captions sit in the bottom safe area, below every table and code panel, with a dark backing box.
- No flashing; all motion is eased and ≥ 300 ms.
