import React from "react";
import { AbsoluteFill } from "remotion";
import { Chip, Footnote, Headline } from "../components/Chrome";
import { Code } from "../components/Code";
import { Table } from "../components/Table";
import { COLUMNS, DELETE_WHERE, EMPLOYEES, SALES_ROWS } from "../data";
import { C } from "../theme";
import { easeOut, popIn, pulse, ramp, useT } from "../timeline";

const MATCH_AT = [45.9, 46.5]; // row 0, row 3
const EXIT_AT = 51.8;

/** Scene 3 (34–66 s): DELETE … WHERE removes only the matching rows; the table stays. */
export const DeleteWhere: React.FC = () => {
  const t = useT("deleteWhere");
  const codeIn = popIn(t, 36.8, 0.5);
  const whereHl = ramp(t, 40.8, 0.5) * (1 - ramp(t, 51.5, 0.6));
  const colGlow = ramp(t, 43.0, 0.5) * (1 - ramp(t, 51.5, 0.6));
  const scan = ramp(t, 43.4, 1.8, (x) => x);
  const predict = popIn(t, 48.0, 0.4).opacity * (1 - ramp(t, 51.3, 0.4));

  const exit = ramp(t, EXIT_AT, 0.6, easeOut);
  const collapse = ramp(t, EXIT_AT + 0.45, 0.4);
  const headerGlow = pulse(t, 57.0, 1.0);
  const frameGlow = pulse(t, 57.9, 1.3);
  const chip = popIn(t, 59.5, 0.5);
  const note = ramp(t, 52.2, 0.5);

  const rowStates = EMPLOYEES.map((_, i) => {
    const k = SALES_ROWS.indexOf(i);
    if (k < 0) return {};
    return { match: ramp(t, MATCH_AT[k], 0.4) * (1 - exit), exit, collapse };
  });

  return (
    <AbsoluteFill>
      <div style={{ position: "absolute", left: 100, top: 150 }}>
        <Headline text="Remove only the Sales employees" size={40} color={C.muted} weight={600} opacity={ramp(t, 34.4, 0.5)} />
      </div>
      <div style={{ position: "absolute", left: 100, top: 230, opacity: codeIn.opacity, transform: codeIn.transform }}>
        <Code lines={DELETE_WHERE} highlight="where" highlightStrength={whereHl} fontSize={44} />
      </div>

      <div style={{ position: "absolute", left: 100, top: 480, opacity: predict }}>
        <Chip text="Predict: which rows will go?" color={C.kw} icon="?" />
      </div>
      <div style={{ position: "absolute", left: 100, top: 480, opacity: chip.opacity, transform: chip.transform }}>
        <Chip text="Selected rows removed. Table stays." />
      </div>
      <div style={{ position: "absolute", left: 100, top: 600, maxWidth: 820, opacity: note }}>
        <Footnote text="Teaching visualization: the rows that match the WHERE condition are removed. It is not a literal picture of how the database engine works internally." style={{ lineHeight: 1.35 }} />
      </div>

      <div style={{ position: "absolute", left: 1080, top: 250 }}>
        <Table
          columns={COLUMNS}
          rows={EMPLOYEES}
          rowStates={rowStates}
          colGlow={{ col: "department", amount: colGlow }}
          scan={scan}
          headerGlow={headerGlow}
          frameGlow={frameGlow}
        />
      </div>
    </AbsoluteFill>
  );
};
