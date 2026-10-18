# SQL DELETE vs DROP — removing the data vs removing the table

Educational explainer video, 2:30 (150 s), 1920×1080, 30 fps. Audience: beginners who know what a
table looks like but mix up what the commands do.

## What was actually produced

| Deliverable | Status | Where |
|---|---|---|
| Finished video, narrated, with SFX | **Rendered** | `out/sql-delete-vs-drop.mp4` |
| Same video with burned-in captions | **Rendered** | `out/sql-delete-vs-drop-captioned.mp4` |
| Subtitle files | **Generated** | `out/captions.srt`, `out/captions.vtt` |
| Runnable animation project (Remotion) | **Complete** | `video/` — see `video/README.md` |
| Voiceover | **Generated with Piper TTS** (offline neural voice `en_US-lessac-medium`); not a human recording | `video/public/narration/` |
| Sound effects | **Synthesized with ffmpeg** (tick / whoosh / thud) | `video/public/sfx/` |
| Background music | Intentionally omitted (clarity) | — |

SQL dialect: **SQLite**. Statements are standard and run unchanged on most engines. All destructive
statements are demonstrations for a disposable practice database.

## 1. Creative concept

One idea, shown three times, then recalled. A table is a labeled storage cabinet: the cabinet is the
table's structure, the cards inside are its rows. `DELETE` takes cards out — some (with `WHERE`) or
all (without) — and the cabinet stays. `DROP TABLE` takes the cabinet away. The analogy is used
briefly to build intuition, then every scene works on the real `Employees` table with executable SQL.
Before each removal the viewer is asked to predict what will vanish, then sees it happen; a two-question
quiz at the end forces active recall before the recap.

Visual system: dark slate background; one colour per command (**DELETE = amber**, **DROP = red**,
other SQL keywords = blue, strings = green); matched rows get an amber outline **and** a "✓ MATCH" tag
(never colour alone); explicit **RESET** stamps before the second and third examples; the table frame
only ever disappears in the DROP scene. Motion is slow and purposeful (eased, ≥300 ms, no flashing).

## 2. Final timestamped voiceover script (46 lines, 324 words, ends at 2:27.6)

Deliberate silences for prediction: 0:49–0:51 ("So which rows will go?"), 1:59–2:01 (quiz 1), 2:09–2:11 (quiz 2).

| Time | Scene | Narration |
|---|---|---|
| 0:00.6 | hook | Want to remove something from your database? |
| 0:03.3 | hook | These two commands can leave you with very different results. |
| 0:06.6 | hook | DELETE… and DROP. |
| 0:08.3 | hook | One of them keeps your table. The other one doesn't. |
| 0:11.2 | hook | Let's see which is which. |
| 0:13.6 | build | Here's a small Employees table. |
| 0:15.8 | build | First, CREATE TABLE builds the structure: three columns — id, name, and department. |
| 0:21.9 | build | Think of it as an empty cabinet with labeled slots. |
| 0:25.0 | build | Then INSERT adds the rows: four employees, two of them in Sales. |
| 0:29.3 | build | Two separate things, then: the table's structure, and the rows stored inside it. |
| 0:34.5 | deleteWhere | Let's remove only the Sales employees. |
| 0:37.2 | deleteWhere | DELETE FROM Employees, WHERE department equals 'Sales'. |
| 0:40.8 | deleteWhere | The WHERE clause is the filter. |
| 0:43.0 | deleteWhere | The database checks each row's department… |
| 0:45.7 | deleteWhere | and marks the ones that match. |
| 0:47.9 | deleteWhere | So which rows will go? |
| 0:51.5 | deleteWhere | Just these two. |
| 0:53.0 | deleteWhere | The Sales rows are gone — |
| 0:54.9 | deleteWhere | but Priya and Marcus remain, along with the headers and the table itself. |
| 0:59.6 | deleteWhere | Selected rows removed. Table stays. |
| 1:06.5 | deleteAll | Let's reset to the original four rows. |
| 1:09.3 | deleteAll | Now the same DELETE — but notice: no WHERE clause. |
| 1:12.9 | deleteAll | No filter means every row matches. |
| 1:15.5 | deleteAll | Run it… and all four rows are removed. |
| 1:18.5 | deleteAll | But look: the Employees table is still here. |
| 1:21.7 | deleteAll | Its name, its columns, its structure — all intact. Just empty. |
| 1:26.4 | deleteAll | So before running destructive SQL, check: is there a WHERE clause, and does it match what you intend? |
| 1:33.3 | drop | One more reset, back to four rows. |
| 1:36.0 | drop | This time: DROP TABLE Employees. |
| 1:38.6 | drop | Watch what happens. |
| 1:40.2 | drop | The rows go… |
| 1:41.5 | drop | the headers go… |
| 1:43.0 | drop | the table itself is gone. |
| 1:44.8 | drop | There is no Employees table anymore. |
| 1:47.3 | drop | Back to our cabinet: DELETE removes the contents, and the cabinet stays. |
| 1:52.0 | drop | DROP removes the cabinet itself. |
| 1:54.4 | quiz | Quick quiz. |
| 1:55.8 | quiz | Remove only employees in Sales. Which command? |
| 2:01.0 | quiz | DELETE, with a WHERE clause. |
| 2:03.0 | quiz | Rows filtered, table kept. |
| 2:05.4 | quiz | Next: remove the Employees table itself. Which command? |
| 2:11.3 | quiz | DROP TABLE. |
| 2:12.6 | quiz | The whole table is gone. |
| 2:17.6 | recap | So remember: DELETE removes rows, and the table remains. |
| 2:21.7 | recap | DROP TABLE removes the table entirely. |
| 2:24.4 | recap | DELETE clears the contents. DROP removes the container. |

## 3. Scene-by-scene storyboard

Times are the scene windows in the composition (`video/src/timeline.ts`).

### Scene 1 — The hook · 0:00–0:13
- Headline "Want to remove something from your database?"; two identical 4-row `Employees` tables side by side.
- Labels **DELETE** (amber) and **DROP** (red) pop in over each table at 0:06.5 / 0:07.3.
- Tease, no reveal: the DELETE side's Sales rows dim and return; the DROP side's whole table dims and returns. A "?" lands at 0:11.2.

### Scene 2 — Build the example · 0:13–0:34
- Table name plate appears first. `CREATE TABLE Employees (id, name, department)` fades in; the empty frame and header draw in (structure before data).
- Column call-outs synchronised with "id, name, and department" (code token + header cell highlight together).
- Cabinet icon appears at 0:22 with four empty slots, captioned as a visual analogy.
- `INSERT INTO … VALUES` appears at 0:25; four rows slide in one at a time (tick SFX at 0:26.2 / 26.8 / 27.4 / 28.0); cabinet cards fill in step. The two `'Sales'` literals glow on "two of them in Sales".
- Bracket labels **Structure** (header) and **Rows** (data) appear on "two separate things".

### Scene 3 — DELETE selected rows · 0:34–1:06
```sql
DELETE FROM Employees
WHERE department = 'Sales';
```
1. 0:40.8 — the `WHERE department = 'Sales'` tokens glow; everything else dims.
2. 0:43.4 — the `department` column highlights and a scan bar sweeps down it.
3. 0:45.9 / 0:46.5 — rows 1 and 4 get the amber outline + "✓ MATCH" tag.
4. 0:48.0–0:51.3 — chip "Predict: which rows will go?"; narration pauses ~2 s.
5. 0:51.8 — only the two matched rows slide out (whoosh); the remaining rows close the gap.
6. 0:57–0:59 — header then frame pulse while narration says "along with the headers and the table itself".
- Takeaway chip at 0:59.5: **Selected rows removed. Table stays.** Footnote: teaching visualization, not engine internals.

### Scene 4 — DELETE without WHERE · 1:06–1:33
- 1:06.4 **RESET → original 4 rows** stamp; rows slide back in (ticks).
```sql
DELETE FROM Employees;
```
- 1:10.9 — a ghosted, struck-through `WHERE …` line with a red **NO WHERE CLAUSE** tag draws attention to what is missing.
- 1:13.1–1:14.0 — all four rows get MATCH tags ("every row matches").
- 1:16.3 — all rows leave (whoosh). The frame, header and name stay; the body shows **0 rows**.
- 1:19 / 1:22–1:24 — frame, name and header pulse on "still here… its name, its columns, its structure".
- Chip at 1:24.6: **All rows removed. Table stays.** Warning banner at 1:26.6: check the WHERE clause / scope before running destructive SQL; practice in a disposable database.

### Scene 5 — DROP TABLE · 1:33–1:54
- 1:33.2 **RESET** stamp; rows return (ticks).
```sql
DROP TABLE Employees;
```
- 1:40.4 rows fade out → 1:41.7 header fades → 1:43.2 frame dissolves → 1:43.5 name dissolves (thud at 1:43.4).
- 1:44.6 — dashed red placeholder: **Employees table no longer exists.** (no structure · no rows · no name).
- 1:47.3 — cabinet metaphor returns: DELETE cabinet loses its cards but stays; at 1:52.1 the DROP cabinet itself disappears. Labelled "visual analogy only".

### Scene 6 — Active-recall quiz · 1:54–2:17
- Q1 card: "Remove only employees in Sales. Which command?" — silent ~2 s think ring (1:59.2–2:01.0).
- Reveal `DELETE FROM Employees WHERE department = 'Sales';` + miniature table replaying the two-row removal; chip "Rows filtered · table kept".
- Q2 card: "Remove the Employees table itself. Which command?" — think ring (2:09.5–2:11.3).
- Reveal `DROP TABLE Employees;` + miniature whole-table removal into the placeholder; chip "Whole table gone".

### Scene 7 — Recap · 2:17–2:30
- Side-by-side cards: **DELETE** — Removes rows · Table remains (mini table with two rows left) / **DROP TABLE** — Removes the table · Table no longer exists (placeholder).
- Final line at 2:24.4: "**DELETE** clears the contents. **DROP** removes the container." Hold on the comparison to the end. No outro.

## 4. Accessibility
- `captions.srt` / `captions.vtt` (≤2 lines per cue) plus a burned-in variant; captions sit in the bottom safe area below every table and code panel, on a dark backing box.
- Affected rows: outline + text label; commands: colour + label; reset points: explicit stamp.
- No flashing; all motion eased.

## 5. Pre-flight checklist
- Duration 2:30 (narration ends 2:27.6) ✔
- SQL verified: `CREATE TABLE`, `INSERT … VALUES`, `DELETE … WHERE`, `DELETE` (no WHERE), `DROP TABLE` — valid SQLite/standard syntax ✔
- Every visual change is cued to the sentence that describes it (cue times above) ✔
- Rows-vs-table difference shown three ways (selected rows, all rows, whole table) plus quiz and recap ✔
- Resets are visible stamps before Scenes 4 and 5 ✔
- No claims about recoverability, transactions, performance, logging or storage; no TRUNCATE/joins/indexes ✔
- Deliverables stated accurately above (TTS voice, synthesized SFX, rendered MP4s) ✔
