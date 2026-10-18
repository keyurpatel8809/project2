import React from "react";
import { C, FONT_UI } from "../theme";

type Props = {
  label?: string;
  cards: number[]; // opacity per card (0..1)
  bodyOpacity?: number; // the cabinet itself
  accent?: string;
  caption?: string;
  captionOpacity?: number;
  scale?: number;
  style?: React.CSSProperties;
};

/** A labeled storage cabinet: body = table structure, cards = rows. Visual analogy only. */
export const Cabinet: React.FC<Props> = ({
  label = "Employees",
  cards,
  bodyOpacity = 1,
  accent = C.kw,
  caption,
  captionOpacity = 1,
  scale = 1,
  style,
}) => {
  const slotH = 40;
  const gap = 12;
  const top = 78;
  const bodyH = top + cards.length * (slotH + gap) + 10;
  const W = 240;
  return (
    <div style={{ position: "relative", width: W * scale, fontFamily: FONT_UI, ...style }}>
      <svg
        width={W * scale}
        height={(bodyH + 16) * scale}
        viewBox={`0 0 ${W} ${bodyH + 16}`}
        style={{ display: "block" }}
        aria-hidden
      >
        <g opacity={bodyOpacity}>
          {/* body */}
          <rect x="20" y="48" width={W - 40} height={bodyH - 48} rx="14" fill={C.panelAlt} stroke={C.border} strokeWidth="3" />
          {/* label plate */}
          <rect x={W / 2 - 70} y="22" width="140" height="40" rx="8" fill={C.bg} stroke={accent} strokeWidth="3" />
          <text x={W / 2} y="49" textAnchor="middle" fontSize="21" fontWeight="700" fill={C.text} fontFamily="Inter, sans-serif">
            {label}
          </text>
          {/* slots */}
          {cards.map((_, i) => (
            <rect
              key={`slot-${i}`}
              x="40"
              y={top + i * (slotH + gap)}
              width={W - 80}
              height={slotH}
              rx="7"
              fill="none"
              stroke={C.border}
              strokeWidth="2"
              strokeDasharray="6 6"
            />
          ))}
        </g>
        {/* cards */}
        {cards.map((o, i) => (
          <g key={`card-${i}`} opacity={o * bodyOpacity} transform={`translate(${(1 - o) * 70} 0)`}>
            <rect x="46" y={top + i * (slotH + gap) + 5} width={W - 92} height={slotH - 10} rx="5" fill={C.del} opacity="0.9" />
            <line x1="62" y1={top + i * (slotH + gap) + 20} x2="140" y2={top + i * (slotH + gap) + 20} stroke="#1A1200" strokeWidth="3" strokeLinecap="round" />
          </g>
        ))}
      </svg>
      {caption && (
        <div
          style={{
            marginTop: 6,
            textAlign: "center",
            width: W * scale,
            color: C.muted,
            fontSize: 22 * scale,
            fontWeight: 600,
            opacity: captionOpacity,
          }}
        >
          {caption}
        </div>
      )}
    </div>
  );
};
