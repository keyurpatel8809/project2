import React from "react";
import { AbsoluteFill } from "remotion";
import { Chip, Stamp, Warning } from "../components/Chrome";
import { Code } from "../components/Code";
import { Table } from "../components/Table";
import { COLUMNS, DELETE_ALL, EMPLOYEES } from "../data";
import { C, FONT_CODE, FONT_UI } from "../theme";
import { easeOut, popIn, pulse, ramp, useT } from "../timeline";

const ROW_IN = [66.9, 67.3, 67.7, 68.1];
const MATCH_AT = [73.1, 73.4, 73.7, 74.0];
const EXIT_AT = 76.3;

/** Scene 4 (66–93 s): DELETE without WHERE empties the table; the table itself stays. */
export const DeleteAll: React.FC = () => {
  const t = useT("deleteAll");
  const stamp = popIn(t, 66.4, 0.4).opacity * (1 - ramp(t, 69.3, 0.5));
  const codeIn = popIn(t, 69.0, 0.5);
  const ghost = popIn(t, 70.9, 0.5);
  const noWhere = popIn(t, 71.4, 0.4);

  const exit = ramp(t, EXIT_AT, 0.6, easeOut);
  const collapse = ramp(t, EXIT_AT + 0.45, 0.4);
  const empty = ramp(t, 77.3, 0.5);

  const frameGlow = Math.max(pulse(t, 79.0, 1.4), pulse(t, 83.6, 1.1));
  const nameGlow = pulse(t, 82.0, 1.0);
  const headerGlow = pulse(t, 82.8, 1.0);

  const chip = popIn(t, 84.6, 0.5);
  const warn = popIn(t, 86.6, 0.5);

  const rowStates = EMPLOYEES.map((_, i) => ({
    enter: ramp(t, ROW_IN[i], 0.5, easeOut),
    match: ramp(t, MATCH_AT[i], 0.35) * (1 - exit),
    exit: ramp(t, EXIT_AT + i * 0.08, 0.6, easeOut),
    collapse,
  }));

  return (
    <AbsoluteFill>
      <div style={{ position: "absolute", left: 100, top: 160, opacity: codeIn.opacity, transform: codeIn.transform }}>
        <Code lines={DELETE_ALL} highlight="delete" highlightStrength={pulse(t, 69.2, 1.4)} hlColor={C.del} fontSize={44}>
          {/* Ghost WHERE line: draws attention to what is missing. */}
          <div style={{ display: "flex", alignItems: "center", gap: 22, height: 64, opacity: ghost.opacity }}>
            <span style={{ fontFamily: FONT_CODE, fontSize: 44, color: C.dim, textDecoration: "line-through", textDecorationThickness: 4, textDecorationColor: C.drop }}>
              WHERE …
            </span>
            <span
              style={{
                fontFamily: FONT_UI,
                fontSize: 24,
                fontWeight: 800,
                letterSpacing: 1,
                padding: "6px 14px",
                borderRadius: 8,
                background: C.drop,
                color: "#1A0A0A",
                opacity: noWhere.opacity,
                transform: noWhere.transform,
              }}
            >
              NO WHERE CLAUSE
            </span>
          </div>
        </Code>
      </div>

      <div style={{ position: "absolute", left: 100, top: 470, opacity: chip.opacity, transform: chip.transform }}>
        <Chip text="All rows removed. Table stays." />
      </div>
      <div style={{ position: "absolute", left: 100, top: 610, opacity: warn.opacity, transform: warn.transform }}>
        <Warning text="Before running destructive SQL, check the scope: is there a WHERE clause, and does it match what you intend? Practice in a disposable database." />
      </div>

      <div style={{ position: "absolute", left: 1080, top: 150, opacity: stamp }}>
        <Stamp />
      </div>
      <div style={{ position: "absolute", left: 1080, top: 250 }}>
        <Table
          columns={COLUMNS}
          rows={EMPLOYEES}
          rowStates={rowStates}
          emptyLabel="0 rows"
          emptyOpacity={empty}
          frameGlow={frameGlow}
          nameGlow={nameGlow}
          headerGlow={headerGlow}
        />
      </div>
    </AbsoluteFill>
  );
};
