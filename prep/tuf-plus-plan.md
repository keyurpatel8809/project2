# TUF+ Plan: Planly Setup and the 24-Week Problem Schedule

**Set up today (Mon 5 Oct 2026). First TUF+ session tomorrow (Tue 6 Oct 2026). Last TUF+ week ends Sun 21 Mar 2027.**

TUF+ is used on **Tuesdays and Thursdays** for DSA, plus the DBMS/SQL, OOPs and LLD passes on track days in Weeks 9–11, and mocks, company questions and contests in Weeks 21–24.
Each DSA day is **2 core problems + 1 stretch**. Across 24 weeks that is about 150 problems, all in A2Z sheet order.

---

## Part 1 · Planly setup (10 minutes)

Planly asks for your level, target, deadline and available time, then generates weekly sprints with daily tasks, a learning timer, sprint revision notes and sprint quizzes. It also has a Daily Planner where you add your own tasks. Labels may differ slightly from the list below; enter the intent.

| Planly asks | Enter | Why |
|---|---|---|
| Goal / preparing for | **Interview preparation**, Software Developer (not campus placements) | Weighted toward interview patterns |
| Current level | **Beginner** / starting from scratch | You are rebuilding from zero; overestimating here front-loads hard problems |
| Target date / deadline | **21 March 2027** | End of Week 24 |
| Time available per day | **30–45 minutes** (lowest option offered) | Matches the 35-minute session |
| Days per week (if asked) | **2** (Tuesday, Thursday). If only "daily" exists, keep daily and treat its list as a pool | The plan uses TUF+ two days a week |
| Topics / courses to include | **DSA (A2Z)** now. Add **DBMS + SQL**, **OOPs**, **LLD** only if Planly lets you schedule them from Week 9 onward; otherwise leave them out and open them manually in Weeks 9–11 | Avoid Planly spreading core subjects across Phase 1 |
| Language | **Java** | DSA doubles as Java practice |
| Reminder time | The time you actually sit down, every day | Set it even for non-TUF+ days; the streak lives on your side |

After "Create my plan":

- [ ] Open the first sprint. If its first day is not the Java Basics module and patterns, use the **Daily Planner** to add tomorrow's tasks from Part 2 below. Planly's own list stays as a pool to pull from.
- [ ] Turn on the **Learning Timer**. Rule: 20 minutes of real attempt before opening the editorial, no exceptions.
- [ ] Bookmark **A2Z Sheet**, **Beginner Problems**, **Quick Revision**, **Mock Tests**, **Company Questions**.
- [ ] Set the editor language to Java and solve one trivial warm-up (print a pattern) so the environment is proven before tomorrow.

### How a TUF+ day runs (35 min)

```
 5 min   Warm-up: re-read yesterday's two solutions, say the pattern name out loud
 20 min  Core problem 1 (max 10 min attempt → editorial → re-code), then core problem 2 the same way
 7 min   Stretch problem: attempt only; if unsolved, read the approach, not the code, and mark it for Saturday
 3 min   Notes: one line per problem in progress.md (pattern · key trick · mistake)
```

Every problem solved without hints is **+5 XP**. A stretch solved is **+5 XP** too. A sprint quiz passed is **+10 XP**.

---

## Part 2 · The 24-week schedule

Column "TUF+ step" uses the A2Z sheet names. Core problems are mandatory. The stretch is optional.

### Phase 1 · Weeks 1–4

| Wk | Day | TUF+ step | Core problems | Stretch |
|---|---|---|---|---|
| 1 | Tue 6 Oct | Java Setup + Java Basics modules; Beginner Problems: Patterns | Finish the Java Basics module (I/O, data types, if/else, loops, functions, time complexity intro); Pattern 1 (square); Pattern 4 (number triangle) | Pattern 9 (diamond) |
| 1 | Thu 8 Oct | Beginner Problems: Basic maths | Count digits; Reverse a number; Palindrome number | GCD / HCF |
| 2 | Tue 13 Oct | Step 1 · Basic hashing | Count frequency of each element; Highest and lowest frequency element | Armstrong number |
| 2 | Thu 15 Oct | Step 1 · Basic recursion | Print 1 to N recursively; Sum of first N numbers; Factorial | Reverse an array recursively |
| 3 | Tue 20 Oct | Step 2 · Sorting | Selection sort; Bubble sort; Insertion sort | Merge sort |
| 3 | Thu 22 Oct | Step 3 · Arrays Easy | Largest element; Second largest; Remove duplicates from sorted array | Left rotate by D places |
| 4 | Tue 27 Oct | Step 3 · Arrays Easy → Medium | Move zeros to end; Missing number; Two Sum | Longest subarray with sum K |
| 4 | Thu 29 Oct | Step 3 · Arrays Medium | Sort 0s, 1s, 2s (Dutch flag); Majority element (> n/2); Kadane's maximum subarray | Best time to buy and sell stock |

### Phase 2 · Weeks 5–8

| Wk | Day | TUF+ step | Core problems | Stretch |
|---|---|---|---|---|
| 5 | Tue 3 Nov | Step 4 · Binary Search on 1-D | Binary search; Lower and upper bound; Search insert position | First and last occurrence |
| 5 | Thu 5 Nov | Step 4 · BS on rotated arrays and answers | Search in rotated sorted array; Minimum in rotated sorted array; Koko eating bananas | Aggressive cows |
| 6 | Tue 10 Nov | Step 5 · Strings Easy | Reverse words in a string; Longest common prefix; Valid anagram | Isomorphic strings |
| 6 | Thu 12 Nov | Step 5 · Strings Medium | Sort characters by frequency; Longest palindromic substring | Roman to integer |
| 7 | Tue 17 Nov | Step 6 · Linked List | Reverse a linked list (iterative and recursive); Middle of linked list; Detect a cycle | Starting point of the loop |
| 7 | Thu 19 Nov | Step 6 · Linked List Medium | Merge two sorted lists; Remove Nth node from end; Palindrome linked list | Reverse nodes in k-groups |
| 8 | Tue 24 Nov | Step 7 · Recursion patterns | Print all subsequences; Subsets; Combination Sum | Permutations |
| 8 | Thu 26 Nov | Step 8 · Bit Manipulation | Check if kth bit is set; Count set bits; Single number (XOR) | Power set using bits |

### Phase 3 · Weeks 9–12 (plus DBMS/SQL, OOPs and LLD passes on track days)

| Wk | Day | TUF+ step | Core problems | Stretch |
|---|---|---|---|---|
| 9 | Tue 1 Dec | Step 9 · Stack & Queue basics | Valid parentheses; Min stack; Infix to postfix | Implement queue using stacks |
| 9 | Thu 3 Dec | Step 9 · Monotonic stack and design | Next greater element; Trapping rain water; LRU cache | Largest rectangle in histogram |
| 10 | Tue 8 Dec | Step 10 · Sliding window | Longest substring without repeating characters; Max consecutive ones III | Longest repeating character replacement |
| 10 | Thu 10 Dec | Step 10 · Two pointers | Fruit into baskets; Minimum window substring | Subarrays with K different integers |
| 11 | Tue 15 Dec | Step 11 · Heaps | Kth largest element; Top K frequent elements | Merge K sorted lists |
| 11 | Thu 17 Dec | Step 11 · Heaps hard | Find median from data stream; Task scheduler | Connect ropes with minimum cost |
| 12 | Tue 22 Dec | Step 12 · Greedy | Assign cookies; N meetings in one room; Jump game | Minimum platforms |
| 12 | Thu 24 Dec | Step 12 · Greedy intervals | Merge intervals; Insert interval; Non-overlapping intervals | Job sequencing |

Track-day add-ons in Phase 3: **Week 9 Mon/Wed/Fri** three TUF+ SQL problems each day with the DBMS Pass videos; **Week 10 Fri** OOPs Pass; **Week 11 Wed** LLD Pass.

### Phase 4 · Weeks 13–16

| Wk | Day | TUF+ step | Core problems | Stretch |
|---|---|---|---|---|
| 13 | Tue 29 Dec | Step 13 · Binary Tree traversals | Inorder, preorder, postorder (recursive); Level order; Height of tree | Iterative inorder |
| 13 | Thu 31 Dec | Step 13 · Binary Tree medium | Diameter; Check balanced; Maximum path sum | Zigzag traversal |
| 14 | Tue 5 Jan | Step 13 · Binary Tree medium II | Same tree; Lowest common ancestor; Right and left view | Boundary traversal |
| 14 | Thu 7 Jan | Step 13 · Binary Tree hard | Construct tree from preorder and inorder; Maximum width | Serialize and deserialize |
| 15 | Tue 12 Jan | Step 14 · BST | Search in BST; Insert into BST; Validate BST | Kth smallest in BST |
| 15 | Thu 14 Jan | Step 14 · BST II | LCA in BST; Inorder successor | Two sum in BST |
| 16 | Tue 19 Jan | Step 15 · Graphs I | Graph representation; BFS; DFS | Number of provinces |
| 16 | Thu 21 Jan | Step 15 · Graphs BFS/DFS problems | Number of islands; Rotten oranges; Flood fill | Detect cycle in undirected graph |

### Phase 5 · Weeks 17–20

| Wk | Day | TUF+ step | Core problems | Stretch |
|---|---|---|---|---|
| 17 | Tue 26 Jan | Step 15 · Topological sort | Kahn's algorithm; Course schedule I and II | Detect cycle in directed graph (DFS) |
| 17 | Thu 28 Jan | Step 15 · Shortest paths and DSU | Dijkstra; Shortest path with unit weights; Disjoint set basics | Kruskal's MST |
| 18 | Tue 2 Feb | Step 16 · DP 1-D | Climbing stairs; Frog jump; House robber | Frog jump with K distances |
| 18 | Thu 4 Feb | Step 16 · DP on grids | Grid unique paths; Minimum path sum | Triangle |
| 19 | Tue 9 Feb | Step 16 · DP on subsequences | Subset sum equals target; Partition equal subset sum | Count subsets with sum K |
| 19 | Thu 11 Feb | Step 16 · Knapsack family | 0/1 Knapsack; Coin change (minimum coins) | Unbounded knapsack |
| 20 | Tue 16 Feb | Step 16 · DP on strings | Longest common subsequence; Edit distance | Longest palindromic subsequence |
| 20 | Thu 18 Feb | Step 16 · LIS and stocks | Longest increasing subsequence; Best time to buy and sell stock II | Longest common substring |

### Phase 6 · Weeks 21–24

| Wk | Day | TUF+ step | Core problems | Stretch |
|---|---|---|---|---|
| 21 | Tue 23 Feb | Step 17 · Tries | Implement Trie (insert, search, startsWith); Longest word with all prefixes | Count distinct substrings |
| 21 | Thu 25 Feb | Quick Revision sheet | Three timed problems, one each from Steps 3, 6 and 9 | One from Step 13 |
| 22 | Tue 2 Mar | SDE Sheet revision | Three timed problems from Steps 13–16 | One hard from any step |
| 22 | Thu 4 Mar | SDE Sheet revision | Three timed problems, mixed | Topic-wise mock test |
| 23 | Tue 9 Mar | Company Questions Pass | Three problems tagged for banks and consultancies (RBC, TD, CIBC, Scotiabank, BMO, CGI, Deloitte, Accenture, Infosys, TCS, Capgemini) | One more |
| 23 | Thu 11 Mar | Company Questions Pass | Three more from the same filter | One more |
| 24 | Tue 16 Mar | Contest | One timed TUF+ contest | Review every wrong answer |
| 24 | Thu 18 Mar | Contest | One timed TUF+ contest | Review every wrong answer |

---

## Part 3 · Rules

1. **20-minute rule.** Attempt for 20 minutes total before any editorial. Then read the approach, close it, and code from memory.
2. **Pattern first.** Before coding, say the pattern name out loud: "two pointers", "monotonic stack", "BFS on grid". Interviewers listen for this.
3. **Java only.** Use `int[]`, `ArrayList`, `HashMap`, `Deque`, `PriorityQueue`. Every DSA day is also a Collections rehearsal.
4. **Re-solve on Saturday.** Any problem that needed the editorial gets re-solved cold on Saturday during the boss fight warm-up.
5. **Notes, not screenshots.** One line per problem in `progress.md`: pattern, key trick, the mistake you made.

---

## Part 4 · Trimming what Planly auto-selected (decided 10 Oct 2026)

Planly generated a plan covering the whole library. Its estimate versus what this program actually spends on TUF+:

| Section | Planly estimate | This program's TUF+ budget | Decision |
|---|---|---|---|
| DSA | 182h 31m | ~28h (48 days × 35 min) | Keep as the pool; delete **Strings (Advanced Algo)** |
| OOPS | 18h 10m | ~4h, pulled in by specific lessons | Keep all 6 modules, watch only when a lesson names one, at 1.5× speed |
| DBMS | 59h 5m | ~6h in Week 9 + SQL practice on Sundays | Keep 12 modules, delete 11 (list below) |
| Computer Networks | 24h 18m | 0h | **Delete the whole section** |
| LLD | 31h | ~8h in Weeks 10–12 and 23 | Keep all 13 modules, scheduled below |
| **Total** | **~315h** | **~46h** | Planly's percent complete is not the scoreboard. `progress.md` is. |

Why Computer Networks goes: Canadian bank and consultancy Java interviews ask HTTP methods and status codes, REST vs SOAP, TLS at a conversational level, and TCP vs UDP in one sentence. All of that is covered inside the Spring REST (Week 5) and Spring Security (Week 7) lessons. A 24-hour networking course is the wrong trade for a 35-minute day.

### DBMS: keep or delete (use the bin icon)

| Delete (11) | Keep (12) and when it is used |
|---|---|
| Getting Started | Core Foundations · Week 9 Fri (ACID, keys) |
| DBMS Foundations and Architecture | Functional Dependencies and Database Design · Week 9 Fri (normalisation) |
| Conceptual Data Modeling | Querying Essentials · Week 9 Mon |
| Database Design | Aggregation and Analysis · Week 9 Mon |
| Relational Model and Formal Query Languages | SQL Joins · Week 9 Mon/Wed + Sunday SQL practice |
| Set Operations | Subqueries · Week 9 Wed + Sunday SQL practice |
| Data Modification and Schema Evolution | Physical Storage, Indexing, and Hashing · Week 9 Wed |
| Query Processing and Optimization | Data Storage, Keys, and Query Optimization · Week 9 Wed |
| Database Recovery and Durability | Query Performance · Week 9 Wed |
| Integrity, Security, and Database Operations | Transactions and Access Control · Week 9 Fri |
| Applied Learning and Preparation | Transactions and Concurrency Control · Week 9 Fri, Week 6 Wed (locking) |
| | Distributed Databases, NoSQL, and Analytical Systems · Week 10 Mon |

### OOPS modules mapped to lessons

| Module | Used in |
|---|---|
| Introduction to OOPS | Week 1 Fri (OOP pillars) |
| Core Principles of OOPS | Week 1 Fri, Week 1 Sat boss fight |
| Advance OOPS features | Week 2 Fri (generics, interfaces, default methods) |
| Relationships and Object Behaviour | Week 10 Fri (composition vs inheritance, SOLID) |
| Advance Programming in OOPS | Week 3 Fri (modern Java features) |
| OOP Design and Lifecycle Management | Week 11 Mon (patterns) |

### LLD modules mapped to lessons

| Module | Used in |
|---|---|
| Introduction to LLD | Week 10 Fri |
| Solid Principles | Week 10 Fri |
| UML | Week 11 Fri |
| Creational Design Patterns | Week 11 Mon |
| Structural Design Patterns | Week 11 Wed |
| Behavioural Design Patterns | Week 11 Wed |
| Multithreading and Concurrency | Week 4 Mon/Wed (optional Sunday block, it overlaps the Java concurrency lessons) |
| Dependency Injection | Week 5 Mon (Spring IoC) |
| Exceptions and Error Handling | Week 3 Mon |
| Best practices in LLD | Week 11 Fri |
| Interview Problems (Part 1) | Week 11 Sat, Week 12 Sat |
| Interview Problems (Part 2) | Week 23 Wed (LLD mock) |
| Interview Problems (Part 3) | Maintenance mode, only if LLD rounds show up in real interviews |

### DSA inside Planly

Keep every DSA module except Strings (Advanced Algo). KMP, Z-function and Rabin-Karp are rare in bank interviews and cost 3.5 hours. Planly will keep offering problems beyond this plan's two-plus-one per day; treat the extras as the Saturday re-solve pool, never as a reason to skip the scheduled problem.
