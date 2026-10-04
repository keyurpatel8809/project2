# Resume Defense Map

Every bullet on the resume must be backed by **(a)** a concept you can explain, **(b)** code you wrote, and **(c)** a 2-minute STAR story.
Status: ⬜ not yet · 🟨 can explain · 🟩 explained + built + story ready.

| # | Resume claim | What an interviewer will probe | Proof project / artifact | Built in | Status |
|---|---|---|---|---|---|
| 1 | Microservices banking apps with Java, Spring Boot, REST (payments, accounts, transactions) | "Draw your service boundaries. How do services talk? What happens on a failed transfer?" | LedgerLite: account-service, payment-service, audit-service | Weeks 5–8 | ⬜ |
| 2 | Responsive frontend in Angular and React consuming secure REST APIs | "How do you handle the JWT on the client? Explain change detection. What is an interceptor?" | ledgerlite-ui (Angular + TS); React at conversational level | Weeks 13–16 | ⬜ |
| 3 | Oracle and MySQL complex SQL + performance tuning; MongoDB for document storage | "Here is a slow query. What do you check first?" "Why Mongo for audit?" | Flyway migrations, `EXPLAIN` in README, Mongo audit store | Weeks 9–10 | ⬜ |
| 4 | Credit and operational risk: transaction validation logic, audit trails, secure controls | "Give me three validation rules you implemented and how you tested them." | Validation rules + audit-service + Cucumber-style scenarios | Weeks 5–8 | ⬜ |
| 5 | Production support: incidents, RCA, bug fixes, performance optimisation | "Walk me through an incident. What was the root cause? What changed afterwards?" | Incident playbook + one real self-inflicted outage written up as an RCA in the README | Week 8 | ⬜ |
| 6 | TDD/BDD with JUnit, Mockito, Cucumber | "Show me a test you are proud of. What do you mock and what do you not?" | Test suite with `@WebMvcTest`, `@DataJpaTest`, Testcontainers | Week 6 | ⬜ |
| 7 | Spring Security for authentication and authorisation | "Explain the filter chain. Where is the password checked? How do roles work?" | JWT login, role-based method security | Week 7 | ⬜ |
| 8 | AWS (EC2, S3, RDS) and CI/CD with Git, Jenkins, Maven, Docker | "Describe your pipeline stage by stage. How do you roll back?" | GitHub Actions pipeline, Dockerfiles, AWS deploy, Jenkins concepts | Weeks 17–18 | ⬜ |
| 9 | Agile/Scrum, code reviews, deployments | "What did a sprint look like? Tell me about review feedback you disagreed with." | STAR stories from building the projects solo plus one open-source PR review | Weeks 21–23 | ⬜ |
| 10 | Kafka/RabbitMQ asynchronous messaging, event-driven workflows | "What is a consumer group? How do you handle a poison message? Exactly-once?" | `TransactionPosted` event, consumer group, dead-letter topic, outbox | Week 8 | ⬜ |
| 11 | Monitoring, log analysis, health checks for high availability | "What do you look at first when latency spikes?" | Actuator + Prometheus + Grafana dashboard, correlation IDs | Week 18 | ⬜ |
| 12 | AI-assisted microservice with Spring Boot + Ollama, prompt tuning, LLM, RAG-style retrieval | "How did you chunk? Which embedding model? How did you measure quality? What about PII?" | PolicyPilot: Spring AI + pgvector + Ollama, citations, eval script, guardrail | Weeks 19–20 | ⬜ |
| 13 | DSA and algorithmic optimisation inside Spring services (GVT bullet) | Live coding of a medium problem; "where did Big-O matter in your code?" | TUF+ ~150 problems; one real optimisation in LedgerLite documented with before/after timing | Weeks 1–24 | ⬜ |
| 14 | Kubernetes (summary section) | "Deployment vs StatefulSet? How do probes work?" | k8s manifests on minikube | Week 17 | ⬜ |
| 15 | GraphQL, SOAP, DB2, Snowflake, Azure, JSF/EJB (summary section) | Usually one question each if at all | **Decision needed:** keep at "exposure" level in the skills list or remove. Recommended: remove Snowflake, DB2, EJB, JSF; keep GraphQL only if you add a GraphQL endpoint in Week 8 | Week 21 | ⬜ |

## Timeline consistency check (interviewers notice this)

- Algoma graduate certificate Jan–Aug 2023 and Canadore Jan–Aug 2024 overlap with "CIBC – TechnoKwik, Jan 2024 – Present". Be ready to explain the arrangement in one honest sentence, or adjust dates. Decide in Week 21.

## STAR story bank (fill from Week 21)

| Story | Situation | Task | Action | Result | Resume bullets it covers |
|---|---|---|---|---|---|
| Production incident | | | | | 5, 11 |
| Hard technical bug | | | | | 1, 3 |
| Disagreement / feedback | | | | | 9 |
| Learned something fast | | | | | 12 |
| Ownership beyond scope | | | | | 4, 6 |
| Missed deadline / failure | | | | | 9 |
| Security decision | | | | | 7 |
| Performance win | | | | | 3, 13 |
