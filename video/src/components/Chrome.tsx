import React from "react";
import { C, FONT_CODE, FONT_UI } from "../theme";

const rgba = (hex: string, a: number) => {
  const n = parseInt(hex.slice(1), 16);
  return `rgba(${(n >> 16) & 255}, ${(n >> 8) & 255}, ${n & 255}, ${a})`;
};

/** Short on-screen takeaway, e.g. "Selected rows removed. Table stays." */
export const Chip: React.FC<{
  text: string;
  color?: string;
  opacity?: number;
  icon?: string;
  style?: React.CSSProperties;
}> = ({ text, color = C.del, opacity = 1, icon = "✓", style }) => (
  <div
    style={{
      display: "inline-flex",
      alignItems: "center",
      gap: 16,
      padding: "16px 28px",
      borderRadius: 14,
      background: rgba(color, 0.12),
      border: `2px solid ${rgba(color, 0.8)}`,
      color: C.text,
      fontFamily: FONT_UI,
      fontSize: 34,
      fontWeight: 700,
      opacity,
      transform: `translateY(${(1 - opacity) * 14}px)`,
      ...style,
    }}
  >
    <span
      style={{
        width: 42,
        height: 42,
        borderRadius: 10,
        background: color,
        color: "#0F1419",
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center",
        fontSize: 26,
        fontWeight: 900,
      }}
    >
      {icon}
    </span>
    {text}
  </div>
);

/** Visible "RESET" stamp so example resets are never ambiguous. */
export const Stamp: React.FC<{ text?: string; opacity?: number; style?: React.CSSProperties }> = ({
  text = "RESET → original 4 rows",
  opacity = 1,
  style,
}) => (
  <div
    style={{
      display: "inline-flex",
      alignItems: "center",
      gap: 12,
      padding: "10px 22px",
      borderRadius: 999,
      background: C.bg,
      border: `3px solid ${C.ok}`,
      color: C.ok,
      fontFamily: FONT_UI,
      fontSize: 26,
      fontWeight: 800,
      letterSpacing: 1,
      opacity,
      transform: `scale(${0.9 + 0.1 * opacity}) rotate(-2deg)`,
      boxShadow: `0 0 30px ${rgba(C.ok, 0.25 * opacity)}`,
      ...style,
    }}
  >
    <span style={{ fontSize: 28 }}>↺</span>
    {text}
  </div>
);

export const Warning: React.FC<{ text: string; opacity?: number; style?: React.CSSProperties; width?: number }> = ({
  text,
  opacity = 1,
  style,
  width = 860,
}) => (
  <div
    style={{
      display: "flex",
      alignItems: "center",
      gap: 20,
      width,
      padding: "18px 26px",
      borderRadius: 14,
      background: rgba(C.warn, 0.1),
      border: `2px solid ${rgba(C.warn, 0.85)}`,
      color: C.text,
      fontFamily: FONT_UI,
      fontSize: 27,
      fontWeight: 600,
      lineHeight: 1.3,
      opacity,
      transform: `translateY(${(1 - opacity) * 14}px)`,
      ...style,
    }}
  >
    <span
      style={{
        flex: "0 0 auto",
        width: 48,
        height: 48,
        borderRadius: 12,
        background: C.warn,
        color: "#1A1200",
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center",
        fontSize: 30,
        fontWeight: 900,
      }}
    >
      !
    </span>
    <span>{text}</span>
  </div>
);

/** Dashed outline that replaces a dropped table. */
export const Placeholder: React.FC<{ width: number; height: number; text: string; opacity?: number }> = ({
  width,
  height,
  text,
  opacity = 1,
}) => (
  <div
    style={{
      width,
      height,
      borderRadius: 14,
      border: `3px dashed ${rgba(C.drop, 0.7)}`,
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      gap: 16,
      color: C.text,
      fontFamily: FONT_UI,
      fontSize: 34,
      fontWeight: 700,
      opacity,
      transform: `scale(${0.96 + 0.04 * opacity})`,
    }}
  >
    <div
      style={{
        width: 64,
        height: 64,
        borderRadius: 16,
        border: `3px solid ${C.drop}`,
        color: C.drop,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        fontSize: 40,
        fontWeight: 900,
      }}
    >
      ×
    </div>
    <div>{text}</div>
    <div style={{ fontFamily: FONT_CODE, fontSize: 22, color: C.muted }}>no structure · no rows · no name</div>
  </div>
);

export const Headline: React.FC<{
  text: string;
  size?: number;
  color?: string;
  opacity?: number;
  weight?: number;
  style?: React.CSSProperties;
}> = ({ text, size = 56, color = C.text, opacity = 1, weight = 800, style }) => (
  <div
    style={{
      fontFamily: FONT_UI,
      fontSize: size,
      fontWeight: weight,
      color,
      letterSpacing: -1,
      lineHeight: 1.15,
      opacity,
      transform: `translateY(${(1 - opacity) * 12}px)`,
      ...style,
    }}
  >
    {text}
  </div>
);

/** Big command label used in the hook and the recap: DELETE / DROP TABLE. */
export const CommandLabel: React.FC<{ text: string; color: string; opacity?: number; size?: number }> = ({
  text,
  color,
  opacity = 1,
  size = 54,
}) => (
  <div
    style={{
      display: "inline-block",
      padding: "10px 30px",
      borderRadius: 14,
      background: rgba(color, 0.14),
      border: `3px solid ${color}`,
      color,
      fontFamily: FONT_CODE,
      fontSize: size,
      fontWeight: 800,
      letterSpacing: 1,
      opacity,
      transform: `scale(${0.9 + 0.1 * opacity})`,
    }}
  >
    {text}
  </div>
);

export const Footnote: React.FC<{ text: string; opacity?: number; style?: React.CSSProperties }> = ({ text, opacity = 1, style }) => (
  <div
    style={{
      fontFamily: FONT_UI,
      fontSize: 22,
      color: C.muted,
      fontStyle: "italic",
      opacity,
      ...style,
    }}
  >
    {text}
  </div>
);
