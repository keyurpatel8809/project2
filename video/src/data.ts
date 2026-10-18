export type Employee = { id: number; name: string; department: string };

export const COLUMNS = ["id", "name", "department"] as const;

export const EMPLOYEES: Employee[] = [
  { id: 1, name: "Aisha Khan", department: "Sales" },
  { id: 2, name: "Priya Mehta", department: "Engineering" },
  { id: 3, name: "Marcus Lee", department: "Support" },
  { id: 4, name: "Diego Alvarez", department: "Sales" },
];

export const SALES_ROWS = EMPLOYEES.map((e, i) => (e.department === "Sales" ? i : -1)).filter((i) => i >= 0);

// Code tokens. k = kind, hl = highlight group used by scenes.
export type Token = { t: string; k?: "kw" | "del" | "drop" | "str" | "num" | "id" | "p"; hl?: string };
export type Line = Token[];

export const CREATE_TABLE: Line[] = [
  [{ t: "CREATE TABLE", k: "kw", hl: "create" }, { t: " Employees (", k: "id" }],
  [{ t: "  id", k: "id", hl: "id" }, { t: "         INTEGER PRIMARY KEY", k: "kw" }, { t: ",", k: "p" }],
  [{ t: "  name", k: "id", hl: "name" }, { t: "       TEXT NOT NULL", k: "kw" }, { t: ",", k: "p" }],
  [{ t: "  department", k: "id", hl: "department" }, { t: " TEXT NOT NULL", k: "kw" }],
  [{ t: ");", k: "p" }],
];

export const INSERT_ROWS: Line[] = [
  [{ t: "INSERT INTO", k: "kw", hl: "insert" }, { t: " Employees (id, name, department)", k: "id" }],
  [{ t: "VALUES", k: "kw", hl: "insert" }],
  [{ t: "  (", k: "p" }, { t: "1", k: "num" }, { t: ", ", k: "p" }, { t: "'Aisha Khan'", k: "str" }, { t: ",    ", k: "p" }, { t: "'Sales'", k: "str", hl: "sales" }, { t: "),", k: "p" }],
  [{ t: "  (", k: "p" }, { t: "2", k: "num" }, { t: ", ", k: "p" }, { t: "'Priya Mehta'", k: "str" }, { t: ",   ", k: "p" }, { t: "'Engineering'", k: "str" }, { t: "),", k: "p" }],
  [{ t: "  (", k: "p" }, { t: "3", k: "num" }, { t: ", ", k: "p" }, { t: "'Marcus Lee'", k: "str" }, { t: ",    ", k: "p" }, { t: "'Support'", k: "str" }, { t: "),", k: "p" }],
  [{ t: "  (", k: "p" }, { t: "4", k: "num" }, { t: ", ", k: "p" }, { t: "'Diego Alvarez'", k: "str" }, { t: ", ", k: "p" }, { t: "'Sales'", k: "str", hl: "sales" }, { t: ");", k: "p" }],
];

export const DELETE_WHERE: Line[] = [
  [{ t: "DELETE", k: "del", hl: "delete" }, { t: " FROM", k: "kw", hl: "delete" }, { t: " Employees", k: "id", hl: "delete" }],
  [{ t: "WHERE", k: "kw", hl: "where" }, { t: " department", k: "id", hl: "where" }, { t: " = ", k: "p", hl: "where" }, { t: "'Sales'", k: "str", hl: "where" }, { t: ";", k: "p" }],
];

export const DELETE_ALL: Line[] = [
  [{ t: "DELETE", k: "del", hl: "delete" }, { t: " FROM", k: "kw", hl: "delete" }, { t: " Employees", k: "id", hl: "delete" }, { t: ";", k: "p" }],
];

export const DROP_TABLE: Line[] = [
  [{ t: "DROP TABLE", k: "drop", hl: "drop" }, { t: " Employees", k: "id", hl: "drop" }, { t: ";", k: "p" }],
];

export const DELETE_WHERE_ONE_LINE: Line[] = [
  [
    { t: "DELETE", k: "del" },
    { t: " FROM", k: "kw" },
    { t: " Employees", k: "id" },
    { t: " WHERE", k: "kw", hl: "where" },
    { t: " department = ", k: "id", hl: "where" },
    { t: "'Sales'", k: "str", hl: "where" },
    { t: ";", k: "p" },
  ],
];
