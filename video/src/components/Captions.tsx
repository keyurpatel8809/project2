import React from "react";
import { useCurrentFrame, useVideoConfig } from "remotion";
import narration from "../narration.json";
import { C, FONT_UI } from "../theme";

type Cue = { start: number; duration: number; text: string };

const cues = narration as Cue[];

/** Same two-line balancing as tools/generate_narration.py so burned-in and SRT captions match. */
export const splitCaption = (text: string, maxLen = 44): string[] => {
  if (text.length <= maxLen) return [text];
  const words = text.split(" ");
  let best: [string, string] | null = null;
  let bestDiff = Infinity;
  for (let i = 1; i < words.length; i++) {
    const a = words.slice(0, i).join(" ");
    const b = words.slice(i).join(" ");
    const diff = Math.abs(a.length - b.length);
    if (a.length <= maxLen + 6 && b.length <= maxLen + 6 && diff < bestDiff) {
      best = [a, b];
      bestDiff = diff;
    }
  }
  return best ?? [text];
};

/** Burned-in captions: bottom-centre, high contrast, never over code or table rows. */
export const Captions: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();
  const t = frame / fps;
  const cue = cues.find((c) => t >= c.start && t < c.start + Math.max(c.duration, 1.0));
  if (!cue) return null;
  const lines = splitCaption(cue.text);
  return (
    <div
      style={{
        position: "absolute",
        left: 0,
        right: 0,
        bottom: 48,
        display: "flex",
        justifyContent: "center",
        pointerEvents: "none",
      }}
    >
      <div
        style={{
          maxWidth: 1400,
          padding: "12px 26px",
          borderRadius: 12,
          background: "rgba(0,0,0,0.78)",
          color: C.text,
          fontFamily: FONT_UI,
          fontSize: 36,
          fontWeight: 600,
          lineHeight: 1.3,
          textAlign: "center",
          textShadow: "0 2px 4px rgba(0,0,0,0.8)",
        }}
      >
        {lines.map((l, i) => (
          <div key={i}>{l}</div>
        ))}
      </div>
    </div>
  );
};
