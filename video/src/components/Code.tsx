import React from "react";
import type { Line, Token } from "../data";
import { C, FONT_CODE, FONT_UI } from "../theme";

type Props = {
  lines: Line[];
  highlight?: string | string[] | null; // hl groups to emphasise
  highlightStrength?: number; // 0..1
  hlColor?: string;
  fontSize?: number;
  opacity?: number;
  visibleLines?: number; // progressive reveal
  label?: string;
  width?: number;
  children?: React.ReactNode; // extra content under the lines (e.g. ghost WHERE)
  style?: React.CSSProperties;
};

const rgba = (hex: string, a: number) => {
  const n = parseInt(hex.slice(1), 16);
  return `rgba(${(n >> 16) & 255}, ${(n >> 8) & 255}, ${n & 255}, ${a})`;
};

const colorFor = (k: Token["k"]) => {
  switch (k) {
    case "kw":
      return C.kw;
    case "del":
      return C.del;
    case "drop":
      return C.drop;
    case "str":
      return C.str;
    case "num":
      return C.num;
    case "p":
      return C.muted;
    default:
      return C.text;
  }
};

export const Code: React.FC<Props> = ({
  lines,
  highlight = null,
  highlightStrength = 1,
  hlColor = C.kw,
  fontSize = 36,
  opacity = 1,
  visibleLines,
  label = "SQLite",
  width = 860,
  children,
  style,
}) => {
  const groups = highlight === null ? [] : Array.isArray(highlight) ? highlight : [highlight];
  const active = groups.length > 0 ? highlightStrength : 0;
  const lineHeight = Math.round(fontSize * 1.45);
  const shown = visibleLines === undefined ? lines : lines.slice(0, Math.max(0, Math.ceil(visibleLines)));

  return (
    <div
      style={{
        position: "relative",
        width,
        padding: "26px 34px 26px 34px",
        borderRadius: 16,
        background: C.panel,
        border: `2px solid ${C.border}`,
        boxShadow: "0 10px 40px rgba(0,0,0,0.35)",
        fontFamily: FONT_CODE,
        fontSize,
        lineHeight: `${lineHeight}px`,
        color: C.text,
        opacity,
        ...style,
      }}
    >
      {label && (
        <div
          style={{
            position: "absolute",
            top: 10,
            right: 16,
            fontFamily: FONT_UI,
            fontSize: 17,
            fontWeight: 600,
            letterSpacing: 1.5,
            color: C.dim,
            textTransform: "uppercase",
          }}
        >
          {label}
        </div>
      )}
      {shown.map((line, li) => (
        <div key={li} style={{ whiteSpace: "pre", height: lineHeight }}>
          {line.map((tok, ti) => {
            const isHl = tok.hl !== undefined && groups.includes(tok.hl);
            const dimmed = active > 0 && !isHl;
            return (
              <span
                key={ti}
                style={{
                  color: colorFor(tok.k),
                  opacity: dimmed ? 1 - 0.55 * active : 1,
                  background: isHl ? rgba(hlColor, 0.2 * active) : undefined,
                  boxShadow: isHl ? `0 0 0 ${3 * active}px ${rgba(hlColor, 0.35 * active)}` : undefined,
                  borderRadius: 6,
                  fontWeight: tok.k === "del" || tok.k === "drop" || tok.k === "kw" ? 700 : 500,
                }}
              >
                {tok.t}
              </span>
            );
          })}
        </div>
      ))}
      {children}
    </div>
  );
};
