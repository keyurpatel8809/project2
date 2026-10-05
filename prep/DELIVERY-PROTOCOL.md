# Lesson Delivery Protocol (decided 2026-10-04)

**Decision:** no scheduler, no email. Lessons are delivered **on demand in this chat**. You wake Claude up, you get the next lesson.
Day 0 is Monday 5 October 2026 (setup, Planly, baseline). Day 1 is Tuesday 6 October 2026, a TUF+ day.

## How a day goes

1. You open this chat and say something like **"next"**, **"lesson"**, or **"day 7"**.
2. Claude posts the lesson in chat, writes it to `prep/days/day-NNN.md`, and commits it to branch `claude/java-fullstack-interview-prep-uuaku8` (pushed when GitHub access works; never to `main`).
3. You do the 35 minutes.
4. You reply **"done"** with your drill score, for example `done 2/3`, plus anything that confused you. On TUF+ days add how many problems you solved without hints, for example `done, 2 solved, 1 with hint`.
5. Claude updates `progress.md` (XP, streak, level, weak spots), and the next lesson's warm-up uses what you missed.

## Rules that keep the plan honest

- **Calendar day decides the lesson type.** Mon/Wed/Fri are track days, Tue/Thu are TUF+ days, Saturday is the boss fight, Sunday is rest or optional AI Lab. If you ask on a Sunday you get the optional block, never a core lesson.
- **Missed days do not skip content.** If you come back after a gap, you get the next uncompleted lesson, with a 2-minute catch-up block on top. The streak resets, the XP does not.
- **A day is not done until you say "done".** Reading the lesson earns 10 XP only when you report back.
- **Real interviews jump the queue.** Say "interview debrief" and Claude walks you through `interviews/TEMPLATE.md`; the missed questions go to weak spots and shape the next two lessons.
- **Pause** by saying "pause". Resume by saying "resume". Nothing happens in between.

## Useful commands

| You say | Claude does |
|---|---|
| `next` / `lesson` | Posts the next lesson |
| `done 3/3` | Records the day, updates XP and streak |
| `interview debrief` | Runs the interview debrief form |
| `weak spots` | Lists open weak spots with a 10-minute repair drill for the top one |
| `status` | Shows XP, level, streak, phase, and this week's remaining days |
| `redo day N` | Re-sends an earlier lesson with fresh drill questions |
| `push` | Retries the git push after you fix GitHub access |
