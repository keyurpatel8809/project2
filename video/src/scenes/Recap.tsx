import React from "react";
import { AbsoluteFill } from "remotion";
import { CommandLabel, Placeholder } from "../components/Chrome";
import { HEAD_H, NAME_H, ROW_H, TABLE_W, Table } from "../components/Table";
import { COLUMNS, EMPLOYEES, SALES_ROWS } from "../data";
import { C, FONT_CODE, FONT_UI } from "../theme";
import { popIn, useT } from "../timeline";

const MINI = 0.5;
const TABLE_H = NAME_H + HEAD_H + 6 + EMPLOYEES.length * ROW_H;

const Card: React.FC<{
  command: string;
  color: string;
  lines: string[];
  opacity: number;
  transform: string;
  children: React.ReactNode;
}> = ({ command, color, lines, opacity, transform, children }) => (
  <div
    style={{
      width: 780,
      height: 600,
      padding: 36,
      borderRadius: 22,
      background: C.panel,
      border: `3px solid ${color}`,
      boxShadow: `0 20px 60px rgba(0,0,0,0.4)`,
      opacity,
      transform,
      fontFamily: FONT_UI,
      display: "flex",
      flexDirection: "column",
      gap: 24,
    }}
  >
    <CommandLabel text={command} color={color} size={44} />
    <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
      {lines.map((l, i) => (
        <div key={i} style={{ display: "flex", alignItems: "center", gap: 16, fontSize: 36, fontWeight: 700, color: C.text }}>
          <span style={{ width: 14, height: 14, borderRadius: 7, background: color, flex: "0 0 auto" }} />
          {l}
        </div>
      ))}
    </div>
    <div style={{ marginTop: "auto" }}>{children}</div>
  </div>
);

/** Scene 7 (137–150 s): side-by-side comparison; end on it. */
export const Recap: React.FC = () => {
  const t = useT("recap");
  const left = popIn(t, 137.5, 0.5);
  const right = popIn(t, 141.6, 0.5);
  const line = popIn(t, 144.4, 0.5);

  return (
    <AbsoluteFill>
      <div style={{ position: "absolute", left: 140, top: 110, display: "flex", gap: 80 }}>
        <Card command="DELETE" color={C.del} lines={["Removes rows", "Table remains"]} opacity={left.opacity} transform={left.transform}>
          <div style={{ height: TABLE_H * MINI }}>
            <Table
              columns={COLUMNS}
              rows={EMPLOYEES}
              scale={MINI}
              rowStates={EMPLOYEES.map((_, i) => (SALES_ROWS.includes(i) ? { exit: 1, collapse: 1 } : {}))}
            />
          </div>
        </Card>
        <Card command="DROP TABLE" color={C.drop} lines={["Removes the table", "Table no longer exists"]} opacity={right.opacity} transform={right.transform}>
          <div style={{ transform: `scale(${MINI})`, transformOrigin: "top left", height: TABLE_H * MINI }}>
            <Placeholder width={TABLE_W} height={TABLE_H} text="Employees table no longer exists." />
          </div>
        </Card>
      </div>

      <div
        style={{
          position: "absolute",
          left: 0,
          right: 0,
          top: 780,
          textAlign: "center",
          fontFamily: FONT_UI,
          fontSize: 50,
          fontWeight: 800,
          color: C.text,
          letterSpacing: -0.5,
          opacity: line.opacity,
          transform: line.transform,
        }}
      >
        <span style={{ fontFamily: FONT_CODE, color: C.del }}>DELETE</span> clears the contents.{"  "}
        <span style={{ fontFamily: FONT_CODE, color: C.drop }}>DROP</span> removes the container.
      </div>
    </AbsoluteFill>
  );
};
