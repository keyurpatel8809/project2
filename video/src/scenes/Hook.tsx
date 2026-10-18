import React from "react";
import { AbsoluteFill } from "remotion";
import { CommandLabel, Headline } from "../components/Chrome";
import { Table } from "../components/Table";
import { COLUMNS, EMPLOYEES } from "../data";
import { C, FONT_UI } from "../theme";
import { popIn, pulse, ramp, useT } from "../timeline";

/** Scene 1 (0–13 s): two identical tables, DELETE vs DROP, outcome teased but not revealed. */
export const Hook: React.FC = () => {
  const t = useT("hook");
  const headline = popIn(t, 0.5, 0.5);
  const sub = popIn(t, 3.2, 0.5);
  const tables = ramp(t, 0.2, 0.8);
  const delLabel = popIn(t, 6.5, 0.4);
  const dropLabel = popIn(t, 7.3, 0.4);
  // Tease: the DELETE side's rows flicker, the DROP side's whole table flickers.
  const rowTease = pulse(t, 8.5, 1.8);
  const tableTease = pulse(t, 9.5, 1.8);
  const q = popIn(t, 11.2, 0.4);

  return (
    <AbsoluteFill>
      <div style={{ position: "absolute", top: 70, left: 0, right: 0, textAlign: "center" }}>
        <Headline text="Want to remove something from your database?" size={58} opacity={headline.opacity} />
        <Headline
          text="These two commands can leave you with very different results."
          size={34}
          weight={500}
          color={C.muted}
          opacity={sub.opacity}
          style={{ marginTop: 14 }}
        />
      </div>

      {[
        { x: 190, label: "DELETE", color: C.del, lbl: delLabel, rowDim: rowTease, tableDim: 0 },
        { x: 1040, label: "DROP", color: C.drop, lbl: dropLabel, rowDim: 0, tableDim: tableTease },
      ].map((side) => (
        <div key={side.label} style={{ position: "absolute", left: side.x, top: 250 }}>
          <div style={{ height: 90, display: "flex", alignItems: "center", justifyContent: "center", width: 760 * 0.9 }}>
            <CommandLabel text={side.label} color={side.color} opacity={side.lbl.opacity} />
          </div>
          <div style={{ opacity: tables * (1 - 0.75 * side.tableDim) }}>
            <Table
              columns={COLUMNS}
              rows={EMPLOYEES}
              scale={0.9}
              rowStates={EMPLOYEES.map((e) => ({ dim: e.department === "Sales" ? side.rowDim : 0 }))}
            />
          </div>
        </div>
      ))}

      <div
        style={{
          position: "absolute",
          left: 0,
          right: 0,
          top: 540,
          textAlign: "center",
          fontFamily: FONT_UI,
          fontSize: 96,
          fontWeight: 900,
          color: C.muted,
          opacity: q.opacity,
          transform: q.transform,
        }}
      >
        ?
      </div>
    </AbsoluteFill>
  );
};
