import React from "react";
import { AbsoluteFill } from "remotion";
import { Cabinet } from "../components/Cabinet";
import { Footnote } from "../components/Chrome";
import { Code } from "../components/Code";
import { Table } from "../components/Table";
import { COLUMNS, CREATE_TABLE, EMPLOYEES, INSERT_ROWS } from "../data";
import { C } from "../theme";
import { easeOut, popIn, pulse, ramp, useT } from "../timeline";

const ROW_IN = [26.2, 26.8, 27.4, 28.0];

/** Scene 2 (13–34 s): CREATE TABLE builds the structure, INSERT fills the rows. */
export const Build: React.FC = () => {
  const t = useT("build");

  const createIn = popIn(t, 15.6, 0.5);
  const createLines = ramp(t, 15.6, 1.0, (x) => x) * CREATE_TABLE.length;
  const createPulse = pulse(t, 15.8, 1.8);

  const frame = ramp(t, 16.8, 1.0);
  const header = ramp(t, 17.2, 1.0);

  // Column call-outs synchronised with "id, name, and department".
  const colPulses = { id: pulse(t, 19.1, 1.0), name: pulse(t, 19.9, 1.0), department: pulse(t, 20.6, 1.1) };
  const activeCol = (Object.entries(colPulses).sort((a, b) => b[1] - a[1])[0] ?? ["id", 0]) as [string, number];

  const cabinetIn = popIn(t, 22.0, 0.5);
  const insertIn = popIn(t, 25.0, 0.5);
  const insertPulse = pulse(t, 25.2, 1.6);
  const salesHl = ramp(t, 28.2, 0.4);

  const structure = ramp(t, 30.6, 0.5);
  const rowsLabel = ramp(t, 32.3, 0.5);

  // Which highlight group is active in the CREATE block right now.
  let createHl: string | null = null;
  let createStrength = 0;
  if (structure > 0) {
    createHl = "create";
    createStrength = structure * (1 - rowsLabel);
  } else if (activeCol[1] > 0.02) {
    createHl = activeCol[0];
    createStrength = activeCol[1];
  } else if (createPulse > 0.02) {
    createHl = "create";
    createStrength = createPulse;
  }

  let insertHl: string | null = null;
  let insertStrength = 0;
  if (rowsLabel > 0) {
    insertHl = "insert";
    insertStrength = rowsLabel;
  } else if (salesHl > 0 && t < 30.6) {
    insertHl = "sales";
    insertStrength = salesHl;
  } else if (insertPulse > 0.02) {
    insertHl = "insert";
    insertStrength = insertPulse;
  }

  return (
    <AbsoluteFill>
      {/* Code column */}
      <div style={{ position: "absolute", left: 60, top: 150, opacity: createIn.opacity, transform: createIn.transform }}>
        <Code lines={CREATE_TABLE} visibleLines={createLines} highlight={createHl} highlightStrength={createStrength} fontSize={34} width={820} />
      </div>
      <div style={{ position: "absolute", left: 60, top: 480, opacity: insertIn.opacity, transform: insertIn.transform }}>
        <Code
          lines={INSERT_ROWS}
          highlight={insertHl}
          highlightStrength={insertStrength}
          hlColor={insertHl === "sales" ? C.del : C.kw}
          fontSize={29}
          width={820}
          label=""
        />
      </div>

      {/* Table column */}
      <div style={{ position: "absolute", left: 1080, top: 250 }}>
        <Table
          columns={COLUMNS}
          rows={EMPLOYEES}
          nameOpacity={popIn(t, 13.6, 0.5).opacity}
          frameOpacity={frame}
          headerOpacity={header}
          colGlow={{ col: activeCol[0], amount: activeCol[1] }}
          rowStates={EMPLOYEES.map((_, i) => ({ enter: ramp(t, ROW_IN[i], 0.5, easeOut) }))}
          bracketHeader={structure}
          bracketRows={rowsLabel}
        />
      </div>

      {/* Cabinet analogy, filling as rows are inserted */}
      <div style={{ position: "absolute", left: 1230, top: 690, opacity: cabinetIn.opacity, transform: cabinetIn.transform, display: "flex", gap: 36, alignItems: "flex-start" }}>
        <Cabinet cards={EMPLOYEES.map((_, i) => ramp(t, ROW_IN[i], 0.5, easeOut))} scale={0.72} />
        <div style={{ paddingTop: 40, maxWidth: 360 }}>
          <Footnote text="Think of the table as a labeled cabinet: the cabinet is the structure, the cards are the rows." style={{ fontSize: 24, lineHeight: 1.35 }} />
          <Footnote text="(A visual analogy — not how data is stored internally.)" style={{ fontSize: 19, marginTop: 10, color: C.dim }} />
        </div>
      </div>
    </AbsoluteFill>
  );
};
