import React from "react";
import { AbsoluteFill } from "remotion";
import { Chip, Headline, Placeholder } from "../components/Chrome";
import { Code } from "../components/Code";
import { HEAD_H, NAME_H, ROW_H, TABLE_W, Table } from "../components/Table";
import { COLUMNS, DELETE_WHERE, DROP_TABLE, EMPLOYEES, SALES_ROWS } from "../data";
import { C, FONT_UI } from "../theme";
import { easeOut, fadeOut, popIn, ramp, useT } from "../timeline";

const MINI = 0.58;
const TABLE_H = NAME_H + HEAD_H + 6 + EMPLOYEES.length * ROW_H;

const Question: React.FC<{ n: number; text: string; opacity: number; think: number; thinking: boolean; color: string }> = ({
  n,
  text,
  opacity,
  think,
  thinking,
  color,
}) => (
  <div
    style={{
      width: 840,
      padding: "26px 30px",
      borderRadius: 18,
      background: C.panel,
      border: `2px solid ${C.border}`,
      display: "flex",
      alignItems: "center",
      gap: 24,
      opacity,
      fontFamily: FONT_UI,
    }}
  >
    <div
      style={{
        flex: "0 0 auto",
        width: 56,
        height: 56,
        borderRadius: 14,
        background: color,
        color: "#0F1419",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        fontSize: 30,
        fontWeight: 900,
      }}
    >
      {n}
    </div>
    <div style={{ flex: 1, fontSize: 32, fontWeight: 700, color: C.text, lineHeight: 1.25 }}>{text}</div>
    {/* Think timer: a quiet ring that fills during the pause. */}
    <svg width="64" height="64" viewBox="0 0 64 64" style={{ opacity: thinking ? 1 : 0 }} aria-hidden>
      <circle cx="32" cy="32" r="26" fill="none" stroke={C.border} strokeWidth="6" />
      <circle
        cx="32"
        cy="32"
        r="26"
        fill="none"
        stroke={C.kw}
        strokeWidth="6"
        strokeLinecap="round"
        strokeDasharray={`${2 * Math.PI * 26}`}
        strokeDashoffset={`${2 * Math.PI * 26 * (1 - think)}`}
        transform="rotate(-90 32 32)"
      />
      <text x="32" y="38" textAnchor="middle" fontSize="18" fontWeight="800" fill={C.muted} fontFamily="Inter, sans-serif">
        ?
      </text>
    </svg>
  </div>
);

/** Scene 6 (114–137 s): two active-recall questions with deliberate pauses, then miniature replays. */
export const Quiz: React.FC = () => {
  const t = useT("quiz");
  const title = popIn(t, 114.3, 0.4);

  // Q1
  const q1 = popIn(t, 115.7, 0.5);
  const think1 = ramp(t, 119.2, 1.8, (x) => x);
  const a1 = popIn(t, 121.0, 0.5);
  const m1Match = ramp(t, 121.9, 0.3);
  const m1Exit = ramp(t, 122.6, 0.5, easeOut);
  const m1Collapse = ramp(t, 123.0, 0.3);
  const r1 = popIn(t, 123.2, 0.4);

  // Q2
  const q2 = popIn(t, 125.5, 0.5);
  const think2 = ramp(t, 129.5, 1.8, (x) => x);
  const a2 = popIn(t, 131.3, 0.5);
  const m2Exit = ramp(t, 132.0, 0.5, easeOut);
  const m2Collapse = ramp(t, 132.4, 0.3);
  const m2Header = fadeOut(t, 132.3, 0.5);
  const m2Frame = fadeOut(t, 132.6, 0.6);
  const m2Name = fadeOut(t, 132.8, 0.5);
  const ph2 = popIn(t, 133.3, 0.5);
  const r2 = popIn(t, 133.8, 0.4);

  return (
    <AbsoluteFill>
      <div style={{ position: "absolute", top: 60, left: 0, right: 0, textAlign: "center" }}>
        <Headline text="Quick quiz" size={48} opacity={title.opacity} />
      </div>

      {/* Column 1 */}
      <div style={{ position: "absolute", left: 100, top: 160 }}>
        <Question n={1} text="Remove only employees in Sales. Which command?" opacity={q1.opacity} think={think1} thinking={t >= 119.2 && t < 121.0} color={C.del} />
      </div>
      <div style={{ position: "absolute", left: 100, top: 330, opacity: a1.opacity, transform: a1.transform }}>
        <Code lines={DELETE_WHERE} highlight="where" highlightStrength={1} fontSize={32} width={840} />
      </div>
      <div style={{ position: "absolute", left: 100, top: 520, opacity: a1.opacity }}>
        <Table
          columns={COLUMNS}
          rows={EMPLOYEES}
          scale={MINI}
          rowStates={EMPLOYEES.map((_, i) => (SALES_ROWS.includes(i) ? { match: m1Match * (1 - m1Exit), exit: m1Exit, collapse: m1Collapse } : {}))}
        />
      </div>
      <div style={{ position: "absolute", left: 100, top: 790, opacity: r1.opacity, transform: r1.transform }}>
        <Chip text="Rows filtered · table kept" style={{ fontSize: 28, padding: "10px 20px" }} />
      </div>

      {/* Column 2 */}
      <div style={{ position: "absolute", left: 980, top: 160 }}>
        <Question n={2} text="Remove the Employees table itself. Which command?" opacity={q2.opacity} think={think2} thinking={t >= 129.5 && t < 131.3} color={C.drop} />
      </div>
      <div style={{ position: "absolute", left: 980, top: 330, opacity: a2.opacity, transform: a2.transform }}>
        <Code lines={DROP_TABLE} highlight="drop" highlightStrength={1} hlColor={C.drop} fontSize={32} width={840} />
      </div>
      <div style={{ position: "absolute", left: 980, top: 520, opacity: a2.opacity }}>
        <Table
          columns={COLUMNS}
          rows={EMPLOYEES}
          scale={MINI}
          rowStates={EMPLOYEES.map(() => ({ exit: m2Exit, collapse: m2Collapse }))}
          headerOpacity={m2Header}
          frameOpacity={m2Frame}
          nameOpacity={m2Name}
        />
        {ph2.opacity > 0 && (
          <div style={{ position: "absolute", left: 0, top: 0, opacity: ph2.opacity, transform: `scale(${MINI})`, transformOrigin: "top left" }}>
            <Placeholder width={TABLE_W} height={TABLE_H} text="Employees table no longer exists." />
          </div>
        )}
      </div>
      <div style={{ position: "absolute", left: 980, top: 790, opacity: r2.opacity, transform: r2.transform }}>
        <Chip text="Whole table gone" color={C.drop} icon="×" style={{ fontSize: 28, padding: "10px 20px" }} />
      </div>
    </AbsoluteFill>
  );
};
