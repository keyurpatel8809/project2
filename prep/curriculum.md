# 24-Week Curriculum (with TUF+ mapping)

Rhythm every week: **Mon / Wed / Fri** = phase track · **Tue / Thu** = DSA on TUF+ (one pattern, two problems) · **Sat** = boss fight + project milestone · **Sun** = rest or optional AI Lab / certification block.

Legend for TUF+: "A2Z Step n" refers to the Strivers A2Z DSA sheet steps inside TUF+. "Beginner Problems" is the TUF+ warm-up track. Use Java as the language.

---

## Phase 1 · Java Core Reloaded (Weeks 1–4)

| Wk | Mon | Wed | Fri | TUF+ (Tue/Thu) | Sat boss fight | Sat project milestone |
|---|---|---|---|---|---|---|
| 1 | How Java runs: JDK vs JRE vs JVM, bytecode, JIT, stack vs heap, `==` vs `.equals()` | OOP pillars with code: encapsulation, inheritance vs composition, polymorphism, abstraction; interface vs abstract class; default methods | Strings: immutability, string pool, `StringBuilder`, `equals`/`hashCode` contract | Java Setup + Java Basics modules; Beginner Problems (patterns, maths basics) | "Explain the equals/hashCode contract and write a correct `User` class in 3 minutes" | Create `ledgerlite` repo, generate Spring Boot 3 project (start.spring.io), push, add README skeleton |
| 2 | Collections I: `List`, `ArrayList` vs `LinkedList`, `Iterator`, fail-fast, `Arrays.asList` traps | HashMap internals: hashing, buckets, collisions, treeify, load factor, resize; `HashSet`, `LinkedHashMap`, `TreeMap` | Generics, bounded types, wildcards (PECS), `Comparable` vs `Comparator` | A2Z Step 1: Hashing + Recursion basics | "Build an LRU cache with `LinkedHashMap`, then explain HashMap internals in 2 minutes" | Domain model: `Account`, `Transaction` entities + enums; unit tests for invariants |
| 3 | Exceptions: checked vs unchecked, try-with-resources, custom exceptions, anti-patterns | Java 8 functional: lambdas, functional interfaces, method references, Streams (`map`, `filter`, `collect`, `groupingBy`), `Optional` | Modern Java 11–21: `var`, records, sealed classes, pattern matching for `switch`, text blocks, virtual threads | A2Z Step 2: Sorting + Step 3: Arrays (Easy) | "Live-code a stream pipeline: top 3 customers by total spend" | Repository + service layer; a report method written with Streams; tests |
| 4 | Multithreading I: `Thread`, `Runnable`, `ExecutorService`, `synchronized`, `volatile`, race conditions | Concurrency II: `ConcurrentHashMap`, atomics, `ReentrantLock`, `CompletableFuture`, deadlock and how to avoid it | JVM memory and GC: heap generations, GC algorithms, memory leaks, OOM, common JVM flags, profiling basics; immutability | A2Z Step 3: Arrays (Medium) | Java Core mock: 20 rapid-fire questions in 10 minutes | Thread-safe balance update with a concurrency test proving no lost updates |

---

## Phase 2 · Spring Boot & Microservices (Weeks 5–8)

| Wk | Mon | Wed | Fri | TUF+ (Tue/Thu) | Sat boss fight | Sat project milestone |
|---|---|---|---|---|---|---|
| 5 | Spring IoC/DI: beans, scopes, lifecycle, `@Component` vs `@Bean`, constructor injection, circular dependencies | Spring Boot: auto-configuration, starters, profiles, `@ConfigurationProperties`, externalised config | REST API design: controllers, DTOs vs entities, validation, `ResponseEntity`, `@ControllerAdvice`, status codes, idempotency | A2Z Step 4: Binary Search | "Walk me through what happens from the HTTP request to the database and back" | Accounts REST API with validation and global error handling; Postman collection committed |
| 6 | JPA/Hibernate I: entity states, relationships, lazy vs eager, N+1 and the fetch-join fix, DTO projections | Transactions: `@Transactional`, propagation, isolation, rollback rules, optimistic vs pessimistic locking | Testing: JUnit 5, Mockito, `@WebMvcTest`, `@DataJpaTest`, Testcontainers; TDD/BDD and Cucumber at a conversational level | A2Z Step 5: Strings | "Here is an N+1 query. Find it and fix it live." | Money transfer with `@Transactional` + optimistic locking + Testcontainers test |
| 7 | Spring Security: filter chain, authentication vs authorisation, password hashing, JWT, CORS and CSRF | OAuth2/OIDC basics, roles and method security, secret handling, OWASP top 5 for APIs | Microservices I: monolith vs microservices, API gateway, service discovery, config server, `WebClient`/Feign | A2Z Step 6: Linked List | "Secure this endpoint so only ACCOUNT_OWNER can read it, and explain every annotation" | JWT login + role-based access on account endpoints |
| 8 | Microservices II: Resilience4j (circuit breaker, retry, timeout), idempotency keys, correlation IDs, distributed tracing | Kafka: topics, partitions, consumer groups, offsets, delivery guarantees, dead-letter topics, outbox pattern; vs RabbitMQ | Actuator, health checks, metrics, production support: RCA method, log analysis, incident playbook | A2Z Step 7: Recursion patterns + Step 8: Bit Manipulation | Spring + microservices mock: 20 rapid-fire questions | Split into `account-service` + `payment-service`; publish `TransactionPosted` to Kafka; `audit-service` consumes; `docker-compose up` works |

**Sunday option from Week 5:** OCP Java SE 21 (1Z0-830) study, 30 minutes, one objective per week.

---

## Phase 3 · Data + Design (Weeks 9–12)

| Wk | Mon | Wed | Fri | TUF+ (Tue/Thu) | Sat boss fight | Sat project milestone |
|---|---|---|---|---|---|---|
| 9 | SQL I: joins, `GROUP BY`/`HAVING`, subqueries, CTEs, window functions (`ROW_NUMBER`, `SUM OVER`) | Indexing and performance: B-tree, composite index order, covering index, `EXPLAIN`, why a query ignores an index | Normalisation, keys and constraints, ACID, isolation levels and anomalies, deadlocks. **TUF+ DBMS Pass videos as reading** | A2Z Step 9: Stack & Queue. **Plus TUF+ SQL problems (do 3/day on Mon/Wed/Fri)** | "Write SQL for top 3 accounts by monthly spend using a window function, then justify the index" | Flyway migrations, indexes, one reporting query with `EXPLAIN` output in the README |
| 10 | NoSQL: MongoDB document design, when NoSQL fits, indexes; Redis caching (cache-aside, TTL, eviction, stampede) | HikariCP connection pooling, pagination, batch inserts, Spring Data Specifications | SOLID with Java examples. **TUF+ OOPs Pass** | A2Z Step 10: Sliding Window & Two Pointers | "Refactor this God-class to SOLID in 10 minutes" | Redis cache for balance reads; MongoDB as the audit store |
| 11 | Design patterns I: Singleton, Factory, Builder, Strategy (where Spring uses each) | Design patterns II: Observer, Decorator, Template Method, Adapter, Proxy (Spring AOP). **TUF+ LLD Pass** | LLD practice: Parking Lot and Payment Processor class diagrams | A2Z Step 11: Heaps | LLD mock: "Design a notification system (email/SMS/push) with classes and interfaces" | Strategy pattern for fee calculation; Decorator for audit logging |
| 12 | HLD I: scalability, load balancing, stateless services, caching tiers, CDN | HLD II: CAP, replication, sharding, consistent hashing, queues, rate limiting | HLD III: full walkthrough method (requirements → estimates → components → data model → bottlenecks) on a URL shortener | A2Z Step 12: Greedy | HLD mock: "Design a bank transfer system handling 1,000 TPS" | Architecture diagram (Mermaid) + README for LedgerLite; OCP exam booked if ready |

---

## Phase 4 · Frontend: React + TypeScript (Weeks 13–16)

| Wk | Mon | Wed | Fri | TUF+ (Tue/Thu) | Sat boss fight | Sat project milestone |
|---|---|---|---|---|---|---|
| 13 | JavaScript for interviews: closures, `this`, event loop, promises, `async`/`await`, ES6+ | TypeScript essentials: types, interfaces, generics, utility types, narrowing | React fundamentals: components, props, state, JSX, rendering model | A2Z Step 13: Binary Trees (traversals, height, diameter) | "Predict the output order of this setTimeout / promise / sync code, then explain the event loop" | Create `ledgerlite-ui` (Vite + React + TS), layout, API client with typed DTOs |
| 14 | Hooks: `useState`, `useEffect`, `useMemo`, `useCallback`, `useRef`, custom hooks, dependency array bugs | Data fetching: loading/error states, cancellation, React Query basics | Routing, forms, validation, controlled vs uncontrolled | A2Z Step 13: Binary Trees (views, LCA, construction) | "Build a searchable, sortable transactions table live in 20 minutes" | Accounts list + transaction history pages wired to the API |
| 15 | State management: Context vs Redux Toolkit vs Zustand, and when each is justified | Auth on the client: JWT storage trade-offs, protected routes, interceptors, refresh | Testing: Jest + React Testing Library, what to test and what not to | A2Z Step 14: Binary Search Trees | React mock: 15 rapid-fire questions | Login + protected routes + 5 component tests |
| 16 | Performance: `memo`, lazy loading, code splitting, keys, re-render debugging with the Profiler | Angular at conversational level: components, services, DI, RxJS basics, how it differs from React (for bank job descriptions) | UI polish, accessibility basics, responsive layout, deploy to Vercel/Netlify | A2Z Step 15: Graphs I (BFS, DFS, connected components) | Full-stack mock: "Walk me through one feature end to end, browser to database" | UI deployed and connected to the backend; demo GIF in README |

---

## Phase 5 · Cloud, DevOps & AI Engineering (Weeks 17–20)

| Wk | Mon | Wed | Fri | TUF+ (Tue/Thu) | Sat boss fight | Sat project milestone |
|---|---|---|---|---|---|---|
| 17 | Docker: images, layers, multi-stage builds, compose, networking, volumes | CI/CD: GitHub Actions pipeline (build, test, Docker push); Jenkins concepts for interviews (pipeline, agents, stages) | Kubernetes basics: pods, deployments, services, configmaps/secrets, probes, HPA; minikube locally | A2Z Step 15: Graphs II (topological sort, Dijkstra) | "Explain your CI/CD pipeline and what happens when a test fails" | Dockerfiles for all services, GitHub Actions green, k8s manifests applied on minikube |
| 18 | AWS core: IAM, EC2, S3, RDS, VPC basics, free-tier guardrails | AWS for apps: ECS/Fargate or Elastic Beanstalk deploy, Lambda, SQS/SNS, CloudWatch, Secrets Manager; cost awareness | Observability: Actuator + Prometheus + Grafana, structured logging, OpenTelemetry tracing | A2Z Step 16: DP I (1-D, Fibonacci-style, climbing stairs, house robber) | AWS/DevOps mock: 15 questions | Backend deployed to AWS free tier; Grafana dashboard screenshot in README |
| 19 | LLM foundations: tokens, context window, temperature, embeddings, hallucination, cost per request | Prompt engineering + structured output; Spring AI `ChatClient` with a local Ollama model | RAG: chunking strategies, embeddings, vector store (pgvector), retrieval, citations | A2Z Step 16: DP II (grids, LCS, edit distance) | "Explain RAG to a product manager in 2 minutes, then to an engineer in 5" | Create `policypilot`; ingest 5 policy PDFs into pgvector; query endpoint returns top-k chunks |
| 20 | Tool calling and agents, MCP basics, guardrails, PII redaction | Local LLMs (Ollama) vs hosted APIs; evaluation with a golden question set; latency and cost trade-offs | AI-assisted development workflow (Claude Code, Copilot): test generation, review, refactoring, and how to talk about it in interviews | A2Z Step 16: DP III (knapsack, subsequences, partition) | AI engineering mock: 12 questions | Chat endpoint with citations + a tool call + evaluation script with 30 golden questions; AWS AI Practitioner exam booked |

---

## Phase 6 · Interview Mode (Weeks 21–24)

| Wk | Mon | Wed | Fri | TUF+ (Tue/Thu) | Sat boss fight | Sat project milestone |
|---|---|---|---|---|---|---|
| 21 | Resume defense I: rewrite each bullet in STAR form with a link to the proof (see `resume-defense.md`) | Behavioral bank: 8 STAR stories (conflict, failure, ownership, production incident, learning fast, deadline, disagreement, mentoring) | Canadian job-search system: LinkedIn profile, referral outreach script, application tracker, 10 applications/week | A2Z Step 17: Tries + Quick Revision sheet | Full behavioral mock, recorded and reviewed | Polish both READMEs; record a 2-minute demo video per project |
| 22 | Java + Spring rapid-fire: 50 questions | SQL + database rapid-fire: 30 questions | React + JavaScript rapid-fire: 30 questions | TUF+ SDE Sheet (pattern-wise) revision | Technical mock, 45 minutes, using a TUF+ mock test | Fix anything a reviewer would flag in the code |
| 23 | System design mock 1: payment system | LLD mock: Parking Lot or BookMyShow | System design mock 2: notification service or rate limiter | TUF+ Company Questions Pass (banks and consultancies) | Full loop simulation: 1 DSA + 1 design + behavioral, 90 minutes | Open-source PR submitted (docs or test) to Spring AI / LangChain4j / Testcontainers |
| 24 | Weak-spot repair I (from `progress.md`) | Weak-spot repair II | Salary negotiation and offer evaluation in Canada; contract vs full-time | Two timed TUF+ contests | Graduation boss: 60-minute full mock. Pass = Interview Hero | Final READMEs, LinkedIn "Projects" section updated |

---

## Maintenance mode (Week 25 onward, until offer)

- 3 TUF+ problems a week (mixed patterns, timed)
- 1 mock a week (alternate technical and design)
- 10 targeted applications + 5 referral messages a week
- AWS Developer Associate study, 2 Sundays a month, exam by Week 28
