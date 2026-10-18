import { Easing, interpolate, useCurrentFrame, useVideoConfig } from "remotion";

export const FPS = 30;
export const WIDTH = 1920;
export const HEIGHT = 1080;
export const DURATION_SEC = 150;
export const DURATION_FRAMES = DURATION_SEC * FPS;

// Scene boundaries in seconds. Must match SCENES in tools/generate_narration.py.
export const SCENES = {
  hook: { start: 0, end: 13 },
  build: { start: 13, end: 34 },
  deleteWhere: { start: 34, end: 66 },
  deleteAll: { start: 66, end: 93 },
  drop: { start: 93, end: 114 },
  quiz: { start: 114, end: 137 },
  recap: { start: 137, end: 150 },
} as const;

export type SceneKey = keyof typeof SCENES;

export const sec = (s: number) => Math.round(s * FPS);

/** Absolute time (seconds) inside a <Sequence> that starts at the scene's start. */
export const useT = (scene: SceneKey) => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();
  return SCENES[scene].start + frame / fps;
};

const smooth = Easing.inOut(Easing.cubic);
const out = Easing.out(Easing.cubic);

/** 0 → 1 between start and start+dur (seconds), clamped. */
export const ramp = (t: number, start: number, dur: number, easing = smooth) =>
  interpolate(t, [start, start + dur], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
    easing,
  });

/** 1 → 0 between start and start+dur. */
export const fadeOut = (t: number, start: number, dur: number, easing = smooth) =>
  1 - ramp(t, start, dur, easing);

/** A single soft bump 0 → 1 → 0 over dur seconds (used for "look here" pulses). */
export const pulse = (t: number, start: number, dur: number) => {
  const p = ramp(t, start, dur, (x) => x);
  return Math.sin(p * Math.PI);
};

/** Eased pop-in: scale 0.92 → 1 plus opacity. */
export const popIn = (t: number, start: number, dur = 0.4) => {
  const p = ramp(t, start, dur, out);
  return { opacity: p, transform: `scale(${0.92 + 0.08 * p})` };
};

export const easeOut = out;
