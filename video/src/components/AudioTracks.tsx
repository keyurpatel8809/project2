import React from "react";
import { Audio, Sequence, staticFile, useVideoConfig } from "remotion";
import narration from "../narration.json";

type Clip = { id: string; file: string; start: number; duration: number };

/** Voiceover: one clip per narration segment, placed at the schedule from narration.json. */
export const NarrationTrack: React.FC = () => {
  const { fps } = useVideoConfig();
  return (
    <>
      {(narration as Clip[]).map((c) => (
        <Sequence key={c.id} from={Math.round(c.start * fps)} durationInFrames={Math.ceil(c.duration * fps) + 2} name={`vo:${c.id}`}>
          <Audio src={staticFile(c.file)} volume={1} />
        </Sequence>
      ))}
    </>
  );
};

type Sfx = { t: number; file: "tick" | "whoosh" | "thud"; volume?: number };

// Restrained sound design: a tick per inserted row, a whoosh when rows leave,
// a low thud when the whole table disappears. Times are absolute seconds and
// mirror the animation cues in the scene files.
export const SFX_EVENTS: Sfx[] = [
  // Scene 2: rows inserted
  ...[26.2, 26.8, 27.4, 28.0].map((t) => ({ t, file: "tick" as const })),
  // Scene 3: Sales rows leave
  { t: 51.8, file: "whoosh" },
  // Scene 4: reset rows, then all rows leave
  ...[66.9, 67.3, 67.7, 68.1].map((t) => ({ t, file: "tick" as const })),
  { t: 76.3, file: "whoosh" },
  // Scene 5: reset rows, rows leave, table disappears
  ...[93.7, 94.1, 94.5, 94.9].map((t) => ({ t, file: "tick" as const })),
  { t: 100.4, file: "whoosh" },
  { t: 103.4, file: "thud" },
  // Scene 6: miniature replays
  { t: 122.6, file: "whoosh", volume: 0.5 },
  { t: 132.4, file: "thud", volume: 0.6 },
];

const DUR: Record<Sfx["file"], number> = { tick: 0.12, whoosh: 0.45, thud: 0.7 };
const GAIN: Record<Sfx["file"], number> = { tick: 0.45, whoosh: 0.55, thud: 0.7 };

export const SfxTrack: React.FC = () => {
  const { fps } = useVideoConfig();
  return (
    <>
      {SFX_EVENTS.map((e, i) => (
        <Sequence key={i} from={Math.round(e.t * fps)} durationInFrames={Math.ceil(DUR[e.file] * fps) + 2} name={`sfx:${e.file}`}>
          <Audio src={staticFile(`sfx/${e.file}.wav`)} volume={e.volume ?? GAIN[e.file]} />
        </Sequence>
      ))}
    </>
  );
};
