# DRAFT — "SQL DELETE vs DROP" explainer video (for approval)

## 1. Creative concept

**One idea, shown twice.** A table is a labeled cabinet. `DELETE` takes cards out of the cabinet; `DROP` takes the cabinet away. The whole video is built so the viewer *predicts* what will vanish before it vanishes, then sees the result — three times (DELETE with WHERE, DELETE without WHERE, DROP), then recalls it in a two-question quiz.

- **Look:** dark slate background (#0F1419), one accent per command — DELETE = amber, DROP = red, SQL keywords = blue, matched rows = amber outline + "MATCH" tag (never color alone). Large Inter/JetBrains Mono type, 1920×1080 @ 30 fps.
- **Motion:** slow, purposeful. Rows slide in/out; the table "frame" only ever disappears on DROP. The camera gently pushes in on whatever is being narrated.
- **Dialect:** SQLite (plain ANSI-compatible syntax; nothing dialect-specific).
- **Audio:** Piper neural TTS (offline, calm voice), three synthesized SFX (soft tick for insert, short "whoosh" for row removal, low thud for table removal). No music.

## 2. Technical plan

| Piece | Tool | Notes |
|---|---|---|
| Animation | Remotion 4 (React) in `video/` | Code-driven, 4500 frames @ 30 fps |
| Narration | Piper TTS (`en_US-lessac-medium`) | One clip per scene, placed at the timestamps below; subtitles derived from the same script |
| SFX | Generated with ffmpeg (sine/noise envelopes) | No external assets |
| Render | `npx remotion render` → `out/sql-delete-vs-drop.mp4` | Plus a burned-caption variant |
| Captions | `out/captions.srt` (+ WebVTT) | Positioned bottom-center, below table/code safe area |

Everything lives in the repo on branch `claude/kind-goldberg-xowb6n`. Nothing touches production.

## 3. Example data (used in every scene)

```sql
CREATE TABLE Employees (
  id         INTEGER PRIMARY KEY,
  name       TEXT NOT NULL,
  department TEXT NOT NULL
);

INSERT INTO Employees (id, name, department) VALUES
  (1, 'Aisha Khan',   'Sales'),
  (2, 'Priya Mehta',  'Engineering'),
  (3, 'Marcus Lee',   'Support'),
  (4, 'Diego Alvarez','Sales');
```

## 4. Timestamped voiceover script (≈346 words, ~150 s)

| Time | Narration |
|---|---|
| 0:00–0:12 | Want to remove something from your database? These two commands can leave you with very different results. DELETE… and DROP. One of them keeps your table. The other one doesn't. Let's see which is which. |
| 0:12–0:32 | Here's a small Employees table. First, CREATE TABLE builds the structure: three columns — id, name, and department. Think of it as an empty cabinet with labeled slots. Then INSERT adds the rows: four employees, two of them in Sales. So we have two separate things: the structure of the table, and the rows stored inside it. Keep that distinction in mind. |
| 0:32–1:05 | Let's remove only the Sales employees. DELETE FROM Employees, WHERE department equals 'Sales'. The WHERE clause is the filter. The database checks each row's department… and marks the ones that match. So which rows will go? *(2 s pause)* Just these two. The Sales rows are gone — but Priya and Marcus remain, along with the headers and the table itself. Selected rows removed. Table stays. |
| 1:05–1:28 | Let's reset to the original four rows. Now the same DELETE — but notice: no WHERE clause. No filter means every row matches. Run it… and all four rows are removed. But look: the Employees table is still here. Its name, its columns, its structure — all intact. It's just empty. Which is why, before running any destructive statement, check: is there a WHERE clause, and does it match what you intend? |
| 1:28–1:53 | One more reset, back to four rows. This time: DROP TABLE Employees. Watch what happens. The rows go… the headers go… the table itself is gone. There is no Employees table anymore. Back to our cabinet: DELETE removes the contents, and the cabinet stays. DROP removes the cabinet itself. |
| 1:53–2:18 | Quick quiz. Remove only employees in Sales. Which command? *(2 s pause)* DELETE, with a WHERE clause. Rows filtered, table kept. Next: remove the Employees table itself. Which command? *(2 s pause)* DROP TABLE. The whole table is gone. |
| 2:18–2:30 | So remember: DELETE removes rows, and the table remains. DROP TABLE removes the table entirely. DELETE clears the contents. DROP removes the container. |

## 5. Scene-by-scene storyboard

### Scene 1 — Hook (0–12 s)
- Two identical 4-row `Employees` tables side by side, labels **DELETE** (amber) left, **DROP** (red) right.
- On "very different results", left table's rows flicker/dim slightly; right table's frame flickers — a tease, no reveal.
- SFX: none.

### Scene 2 — Build the example (12–32 s)
- Code panel left, table right. `CREATE TABLE` appears; column names highlight one by one while the empty table (header + boundary) draws in. Small inline cabinet icon with three labeled slots for ~2 s.
- `INSERT` statement appears; rows slide in one at a time (tick SFX each). Sales rows get a subtle department badge.
- Caption pill: "Structure" (points at headers) → "Rows" (points at data).

### Scene 3 — DELETE with WHERE (32–65 s)
- Query shown large. 1) `WHERE department = 'Sales'` glows. 2) A scan bar moves down the department column. 3) Rows 1 and 4 get amber outline + "MATCH" tag. 4) Hold 2 s ("So which rows will go?"). 5) Matched rows slide out (whoosh), remaining rows close the gap. 6) Table frame pulses once to show it's intact.
- Takeaway chip: **Selected rows removed. Table stays.**
- Footnote (small, 3 s): "Visualization — not how the engine works internally."

### Scene 4 — DELETE without WHERE (65–88 s)
- Visible **RESET** stamp; the four rows slide back in.
- `DELETE FROM Employees;` — a ghosted `WHERE …` slot appears then is struck out with "no WHERE" label.
- All four rows outline as MATCH, then slide out together. Empty table remains with name, headers, boundary; "0 rows" label.
- Takeaway chip: **All rows removed. Table stays.**
- Warning banner (amber, ⚠ icon): "Before running destructive SQL, check the WHERE clause matches what you intend."

### Scene 5 — DROP TABLE (88–113 s)
- Visible **RESET** stamp again; rows return.
- `DROP TABLE Employees;` in red. Sequence: rows fade → headers fade → boundary dissolves → table name dissolves (low thud). Replaced by dashed outline + "Employees table no longer exists."
- Cabinet metaphor split: left cabinet with cards removed (DELETE), right cabinet removed entirely (DROP). Caption: "Analogy, not internals."

### Scene 6 — Quiz (113–138 s)
- Q1 card with 2 s countdown ring (silent). Reveal `DELETE FROM Employees WHERE department = 'Sales';` + mini 4-row table replaying the two-row removal.
- Q2 card, 2 s ring. Reveal `DROP TABLE Employees;` + mini table vanishing entirely.

### Scene 7 — Recap (138–150 s)
- Side-by-side cards: **DELETE** — Removes rows / Table remains. **DROP TABLE** — Removes the table / Table no longer exists.
- Final line typed in: "DELETE clears the contents. DROP removes the container." Hold on the comparison to the end. No outro.

## 6. Accessibility
- SRT/VTT captions, ≤2 short lines, bottom safe area, high contrast.
- Affected rows marked with outline + "MATCH" label, not color only.
- No flashing; all transitions ≥ 300 ms eased.

## 7. What I will deliver after approval
1. `video/` — runnable Remotion project (`npm install && npm run preview` / `npm run render`).
2. `out/sql-delete-vs-drop.mp4` (narrated, 1080p30) and `out/sql-delete-vs-drop-captioned.mp4`.
3. `out/captions.srt` and `out/captions.vtt`.
4. `video/README.md` — setup, preview, export, and how to swap the TTS voice for a human recording.
