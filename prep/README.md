# Java Full Stack Interview Prep: Zero to Hero in 35 Minutes a Day

**Owner:** Keyur Patel · **Day 0:** Mon 5 Oct 2026 · **Week 24 ends:** Sun 21 Mar 2027 · **Daily budget:** 30–40 min · **Length:** 24 weeks + maintenance mode

> This folder is the single source of truth for the prep program. The daily lessons live in `days/`,
> the week-by-week syllabus is in `curriculum.md`, your score and streak are in `progress.md`, and the
> link between your resume and your proof-of-work is in `resume-defense.md`.

---

## 1. Where you are and where you are going

| | Today | Week 24 |
|---|---|---|
| Java | Studied in B.Tech (BVM, 2022), rusty | Can explain HashMap internals, streams, concurrency, JVM memory on a whiteboard |
| Spring Boot | Know the words, cannot defend them under questioning | Built and deployed a 3-service banking system with Kafka, JWT, tests, Docker |
| DSA | Starting from zero on TUF+ | ~150 problems solved pattern-wise, can do medium problems in 25 min |
| SQL / DB | Basics | Window functions, indexing, isolation levels, Redis, Mongo, can tune a slow query |
| Frontend | Some Angular/React exposure | Angular + TypeScript app with auth, RxJS, tests, deployed |
| Cloud / DevOps | Theory | CI/CD pipeline, Docker, k8s manifests, app running on AWS free tier |
| AI | Interest | RAG service with Spring AI + pgvector + Ollama, can explain tokens, embeddings, tool calling |
| Interviews | Fail at the probing stage | 8 STAR stories, every resume bullet backed by code you wrote |

### The honest diagnosis (read this once, then move on)

Your resume says **3+ years of Java/J2EE in banking and fintech**, including CIBC payments microservices,
Kafka, Spring Security, AWS, Kubernetes, and an Ollama-based AI microservice. You told me you do not have
that real experience yet. Canadian interviewers at banks and consultancies probe every bullet with
"tell me exactly how you did that". When the answer is thin, the interview ends. That gap, not your
intelligence, is why interviews are not converting.

So this program has one rule: **every bullet on your resume must become true through a project you build,
or it comes off the resume.** By Week 24 you will have two deployed projects that mirror the resume
(a banking microservices system and an AI policy assistant), plus a STAR story for each bullet. At that
point the resume is defensible. Until then, treat the resume as the target, not the claim.

### Because you are already getting interviews (decided 2026-10-04)

You are converting resumes into interviews and losing them in the room. That changes three things:

1. **Resume defense starts in Week 2, not Week 21.** Every Saturday opens with a 2-minute "defend one resume bullet" drill.
2. **Checkpoint mocks** on the Saturdays of Weeks 4, 8, 12, 16 and 20: 30 minutes, recorded, technical plus two behavioral questions.
3. **Every real interview feeds the plan.** Fill in `interviews/TEMPLATE.md` the same day. Each missed question becomes a weak spot, and your next two lessons open with it. Keep applying while you prepare; the interviews are free mock exams.

---

## 2. How a day works (35 minutes, same shape every day)

```
 ┌──────────┬──────────────────────────────┬────────────────────┬──────────┐
 │  5 min   │          15 min              │       10 min       │  5 min   │
 │ Warm-up  │   Concept of the day         │   Hands-on task    │ Interview│
 │ recall   │   (theory + analogy + code)  │   (write/run code) │  drill   │
 └──────────┴──────────────────────────────┴────────────────────┴──────────┘
```

1. **Warm-up recall (5 min):** 3 flash questions from the last 2–3 days. Answer out loud. Spaced repetition is how this sticks.
2. **Concept of the day (15 min):** one idea, one real-world analogy, one runnable example, one diagram.
3. **Hands-on task (10 min):** type the code yourself. On DSA days this is a TUF+ problem.
4. **Interview drill (5 min):** 2–3 questions exactly as an interviewer would ask them. Say the answer out loud, then open the model answer.

Every lesson file in `days/` has exactly these four blocks, plus an XP line at the bottom.

### Why it is fun (the game layer)

| Mechanic | Rule |
|---|---|
| **XP** | Lesson read = 10 XP · Task completed = +5 · Boss fight = +25 · TUF+ problem solved without hints = +5 each |
| **Levels** | Every 100 XP is a level. Level 1 *Novice* → Level 5 *Builder* → Level 10 *Defender* → Level 15 *Interview Hero* |
| **Streak** | Days in a row. A missed day resets the streak but never your XP. Protect the streak, not perfection. |
| **Boss fights** | Every Saturday. A mock question you must answer out loud in under 3 minutes, plus a project milestone. |
| **Badges** | First TUF+ medium solved · First deployed service · First mock interview survived · OCP Java 21 passed · 30-day streak |

Track all of this in `progress.md`. I update it for you each time you report a finished day (see `DELIVERY-PROTOCOL.md`).

---

## 3. The weekly rhythm

| Day | Track | What you do |
|---|---|---|
| Mon | Phase track | Theory + example + task (the phase's main subject) |
| Tue | **DSA on TUF+** | One pattern, two problems from the A2Z sheet step for that week |
| Wed | Phase track | Theory + example + task |
| Thu | **DSA on TUF+** | One pattern, two problems |
| Fri | Phase track | Theory + example + task |
| Sat | **Boss fight** | 2-min "defend one resume bullet" + 10-min mock question out loud + 25-min project milestone (extend to 60 min if you can) |
| Sun | Rest / AI Lab | Rest, or an optional 30-min AI Lab or certification study block |

DSA runs on TUF+ every Tuesday and Thursday for all 24 weeks. The exact TUF+ step for each week is in `curriculum.md`.

---

## 4. The six phases

| Phase | Weeks | Theme | You can say "yes" to this in an interview afterwards |
|---|---|---|---|
| 1 | 1–4 | **Java Core Reloaded** | "Explain HashMap internals, streams, Java 21 features, threads, GC" |
| 2 | 5–8 | **Spring Boot & Microservices** | "Walk me through a request, transactions, JWT, Kafka, circuit breakers, tests" |
| 3 | 9–12 | **Data + Design** | "Tune this query, explain isolation levels, apply SOLID, design a payment system" |
| 4 | 13–16 | **Frontend (Angular + TypeScript)** | "Explain RxJS, change detection, DI, guards and interceptors, test a component" |
| 5 | 17–20 | **Cloud, DevOps & AI Engineering** | "Show your CI/CD, k8s manifests, AWS deploy, RAG pipeline with Spring AI" |
| 6 | 21–24 | **Interview Mode** | "Here are my STAR stories, mock results, and two live projects" |

After Week 24: **maintenance mode** of 3 DSA problems a week, 1 mock a week, 10 applications a week, until an offer is signed.

Full week-by-week detail with TUF+ mapping: [`curriculum.md`](curriculum.md).

---

## 5. The two projects (your "experience" substitute)

In Canada without local experience, a deployed project with tests, CI, a README, and an architecture diagram is the
closest thing to a reference. Each project maps directly to resume bullets (see `resume-defense.md`).

### Project 1 · LedgerLite (Weeks 1–18)
A small banking backend that mirrors the CIBC bullets.
- **Services:** `account-service`, `payment-service`, `audit-service` (Kafka consumer)
- **Stack:** Java 21, Spring Boot 3, Spring Data JPA, PostgreSQL, Kafka, Redis, Spring Security (JWT), Flyway, Testcontainers, Docker Compose, GitHub Actions, Kubernetes manifests, AWS free tier deploy
- **Features that match the resume:** payments and transfers, transaction validation rules, audit trail, idempotency keys, optimistic locking, roles, Actuator health, structured logs, RCA playbook in the README
- **Frontend (Weeks 13–16):** `ledgerlite-ui` in Angular + TypeScript with login, guarded routes, accounts, transaction search

### Project 2 · PolicyPilot (Weeks 19–20, polish in 21)
An AI assistant over banking policy documents, mirroring the Ollama bullet.
- **Stack:** Spring Boot + Spring AI, pgvector, Ollama locally (OpenAI/Anthropic optional), PDF ingestion, RAG with citations, tool calling for "look up account rules", evaluation script with a golden question set, PII guardrail
- **What you can say:** "I built a RAG service that chunks policy PDFs, embeds them into pgvector, retrieves top-k with metadata filters, and returns answers with citations; I measured answer quality on 30 golden questions."

Both projects are public on GitHub with a 2-minute demo video linked from the README.

---

## 6. Certifications (ranked by payoff for Canadian Java roles)

| Priority | Certification | Cost (USD) | When | Why |
|---|---|---|---|---|
| 1 | **Oracle Certified Professional: Java SE 21 Developer (1Z0-830)** | ~245 · 50 questions · 90 min · 68% to pass | Study Sundays Weeks 5–12, sit it around Week 12–14 | The label banks (CIBC, RBC, TD, Scotia) and consultancies still respect most for Java |
| 2 | **AWS Certified AI Practitioner (AIF-C01)** | ~100 | Weeks 19–21 | Cheapest credible "AI-ready" signal; pairs with PolicyPilot |
| 3 | **AWS Certified Developer – Associate (DVA-C02)** | ~150 | Weeks 24–28 (after the plan) | Backs the AWS/CI/CD bullets; AWS-certified devs report higher pay |
| Optional | Spring Certified Professional (2V0-72.22) | ~250 · 60 questions · 130 min | Only if a target employer asks | Respected by Spring shops, less known to Canadian recruiters |
| Free | Spring Academy courses, Confluent Kafka Fundamentals, MongoDB Associate Developer path, Docker Getting Started | 0 | Fill Sundays | Free badges for LinkedIn, and they teach the real thing |

Rule of thumb: two paid certifications maximum before Week 24. Certifications pass HR filters; projects pass interviews.

---

## 7. Getting a Canadian job without Canadian experience

1. **Proof of work beats claims.** Two live URLs, green CI badges, test coverage, a README with an architecture diagram.
2. **Referrals move resumes.** From Week 21, send 5 LinkedIn connection notes a week to Java developers at target companies (banks, insurers, CGI, Accenture, TechnoKwik-style consultancies). Script is in Week 21's lesson.
3. **Contract-to-hire through consultancies** is the most common entry door in the GTA for exactly your profile. Keep the resume Canadian-format (no photo, no DOB, 2 pages max).
4. **Open source, small and real.** From Week 17, one documentation or test PR a month to Spring AI, LangChain4j, or Testcontainers. One merged PR is a talking point.
5. **Apply in volume, interview in quality.** 10 targeted applications a week from Week 21, tracked in a sheet.
6. **Every bullet needs a story.** `resume-defense.md` is the checklist.

---

## 8. TUF+ usage guide

Your TUF+ subscription is used for exactly four things:

1. **DSA (Tue/Thu, all 24 weeks):** follow the A2Z sheet step named in `curriculum.md`. Watch the editorial only after a 20-minute attempt.
2. **Core subjects (Phase 3):** the **DBMS Pass + SQL problems** in Weeks 9–10, and the **OOPs Pass + Low-Level Design Pass** in Weeks 10–11.
3. **Mocks (Phase 6):** topic-wise **mock tests**, the **Company Questions Pass** for Canadian banks and consultancies, and the **Quick Revision** sheet.
4. **Planly:** set up once as described in `tuf-plus-plan.md`, which also lists the exact problems for all 48 TUF+ days.

Use **Java** as your TUF+ language setting throughout, so the DSA practice doubles as Java practice.

---

## 9. Files in this folder

| File | Purpose |
|---|---|
| `README.md` | This guide |
| `curriculum.md` | Week-by-week syllabus with TUF+ steps, boss fights, project milestones |
| `tuf-plus-plan.md` | Planly setup and the exact TUF+ problems for every Tuesday and Thursday |
| `days/day-000-setup-and-baseline.md` | Environment setup + baseline quiz (do this first) |
| `days/day-001.md` | Day 1 (Tue 6 Oct): first TUF+ session |
| `days/day-002.md` | Day 2 (Wed 7 Oct): how Java actually runs |
| `progress.md` | XP, level, streak, completed days, weak spots |
| `resume-defense.md` | Each resume bullet → skill → proof project → target week |
| `DELIVERY-PROTOCOL.md` | How lessons are delivered: on demand in this chat, no scheduler (your decision) |
| `interviews/TEMPLATE.md` | Debrief form to fill after every real interview |
