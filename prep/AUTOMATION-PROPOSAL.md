# Automation Proposal (DRAFT, awaiting your approval)

Nothing in this file is set up yet. Per your preference, this is the draft of everything the automation would do.
Reply **"approve option A"** (or B, or with changes) and I will set it up. Until then, lessons are generated only when you ask.

---

## Option A (recommended) · Daily lesson, delivered every morning

**Schedule:** Monday to Saturday at 6:52 AM Toronto time (`CRON_TZ=America/Toronto 52 6 * * 1-6`). Sunday is rest, no delivery.

**What runs each morning (a fresh Claude Code session in this repository):**
1. Read `prep/curriculum.md` and `prep/progress.md` to find the next day number, phase, weekday type, and your open weak spots.
2. Generate `prep/days/day-NNN.md` in the Day 1 format: warm-up recall (3 questions pulled from the previous 2–3 days and your weak spots), concept of the day with a diagram and a runnable example, hands-on task (or the exact TUF+ step and 2 problems on Tue/Thu), interview drill with 3 hidden model answers, XP line.
3. On Saturdays, generate the boss fight and the project milestone checklist instead.
4. Append a new row to the daily log in `prep/progress.md` and bump the day counter (XP is added only when you tick the task boxes).
5. Commit with message `Day NNN: <topic>` and push to branch `claude/java-fullstack-interview-prep-uuaku8` only. Never to `main` or any production branch.
6. **Optional:** email the lesson to keyurp111.patel@gmail.com with subject `Day NNN · <topic> · 35 min` via the Gmail connector, so it is on your phone when you wake up.

**How you mark a day done:** tick the checkboxes in the day file or reply to the email with "done, drill 2/3". The next morning's run reads that and updates XP, streak, and weak spots.

**Guardrails:**
- Writes only inside `prep/` on the designated branch.
- Never opens a pull request, never merges, never touches `main`.
- If the previous day is unticked, the next lesson starts with a 2-minute catch-up block instead of skipping ahead.
- You can pause it any time by saying "pause the daily lessons".

**Cost:** one short Claude session per weekday morning.

---

## Option B · Weekly batch on Sunday evening

**Schedule:** Sundays at 7:52 PM Toronto time (`CRON_TZ=America/Toronto 52 19 * * 0`).

Generates all six lesson files for the coming week in one commit, plus one Sunday summary email with the week's plan and last week's XP. Fewer runs, less day-to-day adaptation to your weak spots.

---

## Option C · No scheduler

You say "next day" whenever you sit down, and I generate that day's lesson on the spot in this session. Zero automation, full control, but it depends on you remembering.

---

## What I need from you to switch it on

| Decision | Default if you say nothing |
|---|---|
| Option A, B, or C | A |
| Delivery time and timezone | 6:52 AM, America/Toronto |
| Email the lesson too? | Yes, to keyurp111.patel@gmail.com |
| Start date for Day 1 | The first weekday after approval (Day 0 is done by you first) |
| Primary frontend | React (Angular stays at conversational level) |

Once approved I will create the Routine, then fire it once manually so you can see Day 1 arrive and confirm the format before the schedule takes over.
