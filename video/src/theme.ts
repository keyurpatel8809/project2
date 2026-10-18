import { loadFont } from "@remotion/fonts";
import { staticFile } from "remotion";

// Fonts are bundled in public/fonts (SIL Open Font License, see OFL-*.txt).
loadFont({ family: "Inter", url: staticFile("fonts/Inter.ttf"), weight: "100 900" });
loadFont({ family: "JetBrains Mono", url: staticFile("fonts/JetBrainsMono.ttf"), weight: "100 800" });

export const FONT_UI = "Inter, system-ui, sans-serif";
export const FONT_CODE = "'JetBrains Mono', ui-monospace, monospace";

export const C = {
  bg: "#0F1419",
  panel: "#161D27",
  panelAlt: "#1C2531",
  border: "#2C3947",
  text: "#E8EEF4",
  muted: "#8E9BAA",
  dim: "#5C6977",
  // Command colours: consistent across the whole video.
  del: "#F5B544", // DELETE — amber
  drop: "#FF6B6B", // DROP — red
  kw: "#79B8FF", // other SQL keywords — blue
  str: "#9ADE7B", // string literals — green
  num: "#D2A8FF",
  match: "#F5B544", // matched-row outline (same amber as DELETE)
  warn: "#F5B544",
  ok: "#6EE7B7",
} as const;
