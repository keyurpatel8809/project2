import React from "react";
import { AbsoluteFill } from "remotion";
import { Cabinet } from "../components/Cabinet";
import { CommandLabel, Footnote, Placeholder, Stamp } from "../components/Chrome";
import { Code } from "../components/Code";
import { HEAD_H, NAME_H, ROW_H, TABLE_W, Table } from "../components/Table";
import { COLUMNS, DROP_TABLE, EMPLOYEES } from "../data";
import { C } from "../theme";
import { easeOut, fadeOut, popIn, pulse, ramp, useT } from "../timeline";

const ROW_IN = [93.7, 94.1, 94.5, 94.9];
const TABLE_H = NAME_H + HEAD_H + 6 + EMPLOYEES.length * ROW_H;

/** Scene 5 (93–114 s): DROP TABLE removes rows, headers, boundary and name — the whole table. */
export const Drop: React.FC = () => {
  const t = useT("drop");
  const stamp = popIn(t, 93.2, 0.4).opacity * (1 - ramp(t, 96.0, 0.5));
  const codeIn = popIn(t, 95.8, 0.5);

  const rowsExit = ramp(t, 100.4, 0.7, easeOut);
  const rowsCollapse = ramp(t, 100.9, 0.4);
  const header = fadeOut(t, 101.7, 0.7);
  const frame = fadeOut(t, 103.2, 0.8);
  const name = fadeOut(t, 103.5, 0.7);
  const placeholder = popIn(t, 104.6, 0.6);

  const cabinets = popIn(t, 107.3, 0.5);
  const cardsOut = ramp(t, 108.8, 0.7, easeOut);
  const cabinetOut = ramp(t, 112.1, 0.7);

  return (
    <AbsoluteFill>
      <div style={{ position: "absolute", left: 100, top: 160, opacity: codeIn.opacity, transform: codeIn.transform }}>
        <Code lines={DROP_TABLE} highlight="drop" highlightStrength={pulse(t, 96.0, 1.6)} hlColor={C.drop} fontSize={44} />
      </div>

      {/* Cabinet analogy: DELETE empties it, DROP removes it. */}
      <div style={{ position: "absolute", left: 100, top: 360, opacity: cabinets.opacity, transform: cabinets.transform }}>
        <div style={{ display: "flex", gap: 90 }}>
          <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 18 }}>
            <CommandLabel text="DELETE" color={C.del} size={32} />
            <Cabinet cards={EMPLOYEES.map(() => 1 - cardsOut)} accent={C.del} scale={0.9} caption="contents removed · cabinet stays" captionOpacity={cardsOut} />
          </div>
          <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 18 }}>
            <CommandLabel text="DROP" color={C.drop} size={32} />
            <Cabinet cards={EMPLOYEES.map(() => 1)} accent={C.drop} bodyOpacity={1 - cabinetOut} scale={0.9} caption="cabinet removed" captionOpacity={cabinetOut} />
          </div>
        </div>
        <Footnote text="Visual analogy only — not how a database stores data internally." style={{ marginTop: 16, fontSize: 21, color: C.dim }} />
      </div>

      <div style={{ position: "absolute", left: 1080, top: 150, opacity: stamp }}>
        <Stamp />
      </div>
      <div style={{ position: "absolute", left: 1080, top: 250 }}>
        <Table
          columns={COLUMNS}
          rows={EMPLOYEES}
          rowStates={EMPLOYEES.map((_, i) => ({ enter: ramp(t, ROW_IN[i], 0.5, easeOut), exit: rowsExit, collapse: rowsCollapse }))}
          headerOpacity={header}
          frameOpacity={frame}
          nameOpacity={name}
        />
      </div>
      {placeholder.opacity > 0 && (
        <div style={{ position: "absolute", left: 1080, top: 250, opacity: placeholder.opacity }}>
          <Placeholder width={TABLE_W} height={TABLE_H} text="Employees table no longer exists." />
        </div>
      )}
    </AbsoluteFill>
  );
};
