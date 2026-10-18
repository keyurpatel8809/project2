import React from "react";
import type { Employee } from "../data";
import { C, FONT_CODE, FONT_UI } from "../theme";

export type RowState = {
  enter?: number; // 0..1 slide-in progress (default 1 = fully present)
  exit?: number; // 0..1 slide-out + fade progress
  collapse?: number; // 0..1 height collapse so the rows below close the gap
  match?: number; // 0..1 strength of the "MATCH" outline + tag
  tag?: string; // tag text (default MATCH)
  dim?: number; // 0..1 extra dimming (used for the hook tease)
};

type Props = {
  name?: string;
  columns: readonly string[];
  rows: Employee[];
  rowStates?: RowState[];
  nameOpacity?: number;
  headerOpacity?: number;
  frameOpacity?: number;
  frameGlow?: number; // 0..1 pulse on the table boundary
  headerGlow?: number; // 0..1 pulse on the header row
  nameGlow?: number; // 0..1 pulse on the table name
  colGlow?: { col: string; amount: number }; // highlight one column
  scan?: number | null; // 0..1 scan bar sweeping down the rows (department column)
  emptyLabel?: string;
  emptyOpacity?: number;
  bracketHeader?: number; // 0..1 "Structure" label
  bracketRows?: number; // 0..1 "Rows" label
  scale?: number;
  style?: React.CSSProperties;
};

export const ROW_H = 72;
export const HEAD_H = 64;
export const NAME_H = 56;
const COL_W: Record<string, number> = { id: 110, name: 330, department: 320 };
export const TABLE_W = 760;

const rgba = (hex: string, a: number) => {
  const n = parseInt(hex.slice(1), 16);
  return `rgba(${(n >> 16) & 255}, ${(n >> 8) & 255}, ${n & 255}, ${a})`;
};

export const Table: React.FC<Props> = ({
  name = "Employees",
  columns,
  rows,
  rowStates = [],
  nameOpacity = 1,
  headerOpacity = 1,
  frameOpacity = 1,
  frameGlow = 0,
  headerGlow = 0,
  nameGlow = 0,
  colGlow,
  scan = null,
  emptyLabel,
  emptyOpacity = 0,
  bracketHeader = 0,
  bracketRows = 0,
  scale = 1,
  style,
}) => {
  const allCollapsed = rows.every((_, i) => (rowStates[i]?.collapse ?? 0) >= 0.999);
  const bodyMin = emptyLabel ? 96 : 0;
  const rowsHeight = rows.reduce((h, _, i) => h + ROW_H * (1 - (rowStates[i]?.collapse ?? 0)), 0);
  const bodyHeight = Math.max(bodyMin, rowsHeight);

  return (
    <div
      style={{
        position: "relative",
        width: TABLE_W,
        transform: `scale(${scale})`,
        transformOrigin: "top left",
        fontFamily: FONT_UI,
        ...style,
      }}
    >
      {/* Table name plate */}
      <div
        style={{
          height: NAME_H,
          display: "flex",
          alignItems: "center",
          gap: 14,
          opacity: nameOpacity,
          color: C.text,
          fontSize: 34,
          fontWeight: 700,
          letterSpacing: -0.5,
          textShadow: nameGlow ? `0 0 ${24 * nameGlow}px ${rgba(C.del, 0.9 * nameGlow)}` : undefined,
        }}
      >
        <svg width="34" height="30" viewBox="0 0 34 30" aria-hidden>
          <rect x="1.5" y="1.5" width="31" height="27" rx="4" fill="none" stroke={C.muted} strokeWidth="3" />
          <line x1="1.5" y1="10" x2="32.5" y2="10" stroke={C.muted} strokeWidth="3" />
          <line x1="1.5" y1="19" x2="32.5" y2="19" stroke={C.muted} strokeWidth="2" />
          <line x1="12" y1="10" x2="12" y2="28.5" stroke={C.muted} strokeWidth="2" />
        </svg>
        <span>{name}</span>
        <span style={{ fontSize: 20, color: C.muted, fontWeight: 500, marginLeft: 6 }}>table</span>
      </div>

      {/* Boundary / frame */}
      <div
        style={{
          position: "relative",
          borderRadius: 14,
          overflow: "hidden",
          border: `3px solid ${rgba(C.border, 1)}`,
          background: C.panel,
          opacity: frameOpacity,
          boxShadow: frameGlow
            ? `0 0 0 3px ${rgba(C.del, 0.9 * frameGlow)}, 0 0 ${60 * frameGlow}px ${rgba(C.del, 0.45 * frameGlow)}`
            : "0 10px 40px rgba(0,0,0,0.35)",
        }}
      >
        {/* Header */}
        <div
          style={{
            display: "flex",
            height: HEAD_H,
            opacity: headerOpacity,
            background: headerGlow ? rgba(C.del, 0.08 + 0.2 * headerGlow) : C.panelAlt,
            borderBottom: `2px solid ${C.border}`,
            boxShadow: headerGlow ? `inset 0 0 0 2px ${rgba(C.del, 0.9 * headerGlow)}` : undefined,
          }}
        >
          {columns.map((col) => {
            const glow = colGlow?.col === col ? colGlow.amount : 0;
            return (
              <div
                key={col}
                style={{
                  width: COL_W[col],
                  display: "flex",
                  alignItems: "center",
                  padding: "0 22px",
                  fontFamily: FONT_CODE,
                  fontSize: 24,
                  fontWeight: 700,
                  letterSpacing: 0.5,
                  color: glow ? C.del : C.muted,
                  textTransform: "lowercase",
                  background: glow ? rgba(C.del, 0.16 * glow) : undefined,
                  boxShadow: glow ? `inset 0 0 0 2px ${rgba(C.del, glow)}` : undefined,
                }}
              >
                {col}
              </div>
            );
          })}
        </div>

        {/* Body */}
        <div style={{ position: "relative", height: bodyHeight }}>
          {rows.map((row, i) => {
            const s = rowStates[i] ?? {};
            const enter = s.enter ?? 1;
            const exit = s.exit ?? 0;
            const collapse = s.collapse ?? 0;
            const match = s.match ?? 0;
            const dim = s.dim ?? 0;
            const h = ROW_H * (1 - collapse);
            const opacity = enter * (1 - exit) * (1 - 0.7 * dim);
            const tx = -60 * (1 - enter) + 110 * exit;
            return (
              <div key={row.id} style={{ height: h, overflow: "hidden" }}>
                <div
                  style={{
                    position: "relative",
                    display: "flex",
                    height: ROW_H,
                    opacity,
                    transform: `translateX(${tx}px)`,
                    background: i % 2 ? "rgba(255,255,255,0.025)" : "transparent",
                    borderBottom: i < rows.length - 1 ? `1px solid ${C.border}` : undefined,
                    boxShadow: match ? `inset 0 0 0 3px ${rgba(C.match, match)}` : undefined,
                    color: C.text,
                    fontSize: 28,
                  }}
                >
                  {columns.map((col) => {
                    const v = row[col as keyof Employee];
                    const glow = colGlow?.col === col ? colGlow.amount : 0;
                    return (
                      <div
                        key={col}
                        style={{
                          width: COL_W[col],
                          display: "flex",
                          alignItems: "center",
                          padding: "0 22px",
                          fontFamily: col === "id" ? FONT_CODE : FONT_UI,
                          color: col === "id" ? C.muted : C.text,
                          background: glow ? rgba(C.del, 0.09 * glow) : undefined,
                        }}
                      >
                        {col === "department" ? (
                          <span
                            style={{
                              padding: "4px 12px",
                              borderRadius: 8,
                              fontSize: 24,
                              fontWeight: 600,
                              background: v === "Sales" ? rgba(C.del, 0.14) : "rgba(255,255,255,0.06)",
                              color: v === "Sales" ? C.del : C.text,
                              border: `1px solid ${v === "Sales" ? rgba(C.del, 0.5) : C.border}`,
                            }}
                          >
                            {v}
                          </span>
                        ) : (
                          v
                        )}
                      </div>
                    );
                  })}
                  {/* MATCH tag — a label, not colour alone */}
                  {match > 0.01 && (
                    <div
                      style={{
                        position: "absolute",
                        right: 14,
                        top: "50%",
                        transform: `translateY(-50%) scale(${0.8 + 0.2 * match})`,
                        opacity: match,
                        padding: "4px 12px",
                        borderRadius: 6,
                        background: C.match,
                        color: "#1A1200",
                        fontSize: 18,
                        fontWeight: 800,
                        letterSpacing: 1.2,
                        fontFamily: FONT_UI,
                      }}
                    >
                      ✓ {s.tag ?? "MATCH"}
                    </div>
                  )}
                </div>
              </div>
            );
          })}

          {/* Scan bar over the department column */}
          {scan !== null && scan > 0 && scan < 1 && (
            <div
              style={{
                position: "absolute",
                left: COL_W.id + COL_W.name,
                width: COL_W.department,
                top: scan * rowsHeight - 6,
                height: 12,
                background: `linear-gradient(90deg, transparent, ${rgba(C.kw, 0.9)}, transparent)`,
                boxShadow: `0 0 18px ${rgba(C.kw, 0.8)}`,
                borderRadius: 6,
              }}
            />
          )}

          {emptyLabel && (
            <div
              style={{
                position: "absolute",
                inset: 0,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                opacity: emptyOpacity * (allCollapsed ? 1 : 0.0),
                color: C.muted,
                fontFamily: FONT_CODE,
                fontSize: 26,
                letterSpacing: 1,
              }}
            >
              {emptyLabel}
            </div>
          )}
        </div>
      </div>

      {/* Bracket labels (Structure / Rows) */}
      {bracketHeader > 0.01 && (
        <Bracket top={NAME_H} height={HEAD_H} label="Structure" color={C.kw} amount={bracketHeader} />
      )}
      {bracketRows > 0.01 && (
        <Bracket top={NAME_H + HEAD_H + 3} height={rowsHeight} label="Rows" color={C.del} amount={bracketRows} />
      )}
    </div>
  );
};

const Bracket: React.FC<{ top: number; height: number; label: string; color: string; amount: number }> = ({
  top,
  height,
  label,
  color,
  amount,
}) => (
  <div
    style={{
      position: "absolute",
      left: -26,
      top,
      height,
      width: 0,
      opacity: amount,
      transform: `translateX(${(1 - amount) * -16}px)`,
    }}
  >
    <div
      style={{
        position: "absolute",
        right: 0,
        top: 6,
        bottom: 6,
        width: 10,
        borderLeft: `4px solid ${color}`,
        borderTop: `4px solid ${color}`,
        borderBottom: `4px solid ${color}`,
        borderRadius: "8px 0 0 8px",
      }}
    />
    <div
      style={{
        position: "absolute",
        right: 28,
        top: "50%",
        transform: "translateY(-50%)",
        whiteSpace: "nowrap",
        padding: "6px 14px",
        borderRadius: 10,
        background: color,
        color: "#0F1419",
        fontFamily: FONT_UI,
        fontWeight: 800,
        fontSize: 22,
      }}
    >
      {label}
    </div>
  </div>
);
