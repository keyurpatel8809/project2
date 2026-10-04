# Day 0 · Setup and Baseline (do this before Day 1)

**Date:** Sunday 5 October 2026 · **Time:** 40 minutes (one-time) · **XP:** 10 for setup + 10 for the baseline quiz

## Part A · Set up your tools (20 min)

- [ ] Install **JDK 21** (Temurin or Oracle). Verify: `java -version` prints 21.
- [ ] Install **IntelliJ IDEA Community**. Enable the "Key Promoter X" plugin so you learn shortcuts as you go.
- [ ] Install **Git**, set your name and email, create a **GitHub** repo named `ledgerlite` (public, empty).
- [ ] Install **Docker Desktop** (needed from Week 6 for Testcontainers and Week 8 for Kafka).
- [ ] Install **Postman** or **Bruno** for API testing.
- [ ] On **TUF+**: set the language to **Java**. Open **Planly** and create a custom plan: 2 problems on Tuesdays and Thursdays, following the A2Z sheet order.
- [ ] Create a free **start.spring.io** project later today if time permits (Week 1 Saturday does this properly).
- [ ] Bookmark this repo's `prep/` folder and `progress.md`.

## Part B · Baseline quiz (20 min, closed book, score yourself honestly)

Answer each in one or two sentences. Mark **✅ confident**, **🟡 vague**, or **❌ no idea**. Put the counts in `progress.md`.

### Java
1. What is the difference between `==` and `.equals()` for Strings?
2. Why must you override `hashCode()` when you override `equals()`?
3. How does `HashMap.get()` find a value? Mention buckets.
4. What does `volatile` guarantee, and what does it not guarantee?
5. Name three Java 17–21 features and one use for each.
6. What is the difference between `Runnable` and `Callable`?

### Spring Boot
7. What is dependency injection, and why constructor injection over field injection?
8. What does `@Transactional` do if an unchecked exception is thrown halfway?
9. What is the N+1 problem and one fix?
10. How does Spring Security decide whether a request is allowed?
11. What is a circuit breaker, and when would you use one?
12. What is a Kafka consumer group?

### Databases
13. When does a database ignore an index you created?
14. Explain the difference between `READ COMMITTED` and `REPEATABLE READ`.
15. Write SQL to get each customer's most recent transaction.
16. When would you choose MongoDB over PostgreSQL?

### Frontend
17. What does the `useEffect` dependency array control?
18. What is the JavaScript event loop in one sentence?
19. Where should a JWT be stored in the browser, and what is the trade-off?

### DSA
20. Time complexity of binary search and why.
21. When would you use a HashMap versus a TreeMap?
22. Describe the two-pointer technique with one example problem.

### Cloud / DevOps
23. What is the difference between a Docker image and a container?
24. What is a Kubernetes Deployment versus a Service?
25. What does a CI pipeline do when a test fails?

### AI
26. What is an embedding?
27. What is RAG, and what problem does it solve?
28. What is a token, and why does the context window matter?

### Behavioral
29. Tell me about a production issue you fixed. (Can you tell it with real detail for 2 minutes?)
30. Why are you the right hire without 3 years of Canadian experience? (Say it out loud, time it.)

### Scoring
| ✅ count | What it means |
|---|---|
| 0–8 | Start exactly at Week 1. This is expected. |
| 9–16 | Start at Week 1 but take two track days a week at double speed in Phase 1 |
| 17+ | Start at Week 3 |

Record: `Baseline: ✅ __ / 🟡 __ / ❌ __` in `progress.md`, plus the three questions that embarrassed you most. Those become your first "weak spots".

---
**XP earned today:** +20 · **Streak:** 1 · Tomorrow is **Day 1: How Java actually runs**.
