# Lesson 23 – Async / Await syntax in JS (instructor notes)

**Group050626 · Mon 23 Nov 2026, 18:30–20:30 CET (20:30 TR)**

Source: Group300126 Lesson25 (Tue 18 Aug 2026, same topic). Starter = commit `44241cc`, completed = commit `ec6f269`.

## Files

| File | Starter (student PR) | Completed (this branch) |
|---|---|---|
| `promises.js` | Promise theory, `new Promise` + `.then/.catch/.finally` demo, async function syntax examples (declaration / expression / arrow, try/catch/finally) | Same + commented-out `someFunction()` showing the async/await version of the `myPromise` demo |
| `exercises.js` | 6 exercises: convert `.then()` chains to async/await + try/catch | All 6 solved |
| `app.js` | – | Created during class: `getPostsAndComments` (sequential awaits) and `getPostsAndCommentsV2` (parallel with `Promise.all`) |

All examples use https://jsonplaceholder.typicode.com (no API key). Run with `node promises.js`, `node exercises.js`, `node app.js` (Node 18+ has global `fetch`), or via a `<script>` tag in the browser.

## Suggested flow (≈2 h)

1. **Recap Promises (15 min)** – walk through `promises.js`: restaurant-order analogy, `resolve`/`reject`, `.then/.catch/.finally`. Run it a few times to show both random outcomes. Point out the log order: "Promise created…" prints *before* the result → async.
2. **async/await syntax (15 min)** – the three function forms at the bottom of `promises.js`; `await` only inside `async` functions; an async function always returns a Promise; try/catch/finally replaces `.catch/.finally`.
   - Optional: uncomment `someFunction()` — note the historical code calls `myPromise()`, but `myPromise` is a Promise, not a function → it must be `await myPromise` (good "spot the bug" moment).
3. **Exercises 1–6 together (60 min)** – `exercises.js`:
   1. `fetchPosts` → async + `response.ok` check + `throw new Error(...)`.
   2. `fetchData` returns a manual Promise → keep it, write `getResult` that awaits it.
   3. `fetchUsers` → async that returns data; replace the `.then` consumer with `logTotalUsers` (await the returned promise). Mention the React `useEffect` pattern (comment in the file) — async function defined inside and called immediately.
   4. `fetchUserData` is *already* async; the task is converting the consumer (`logUserData`). Completed version switched the URL to `/users/1` (starter fetched `/posts/1` but called it "user").
   5. `getPostsAndComments` – two dependent requests in sequence (`post.id` → comments).
   6. `fetchWithTimeout` – `setTimeout` callback can be `async`; wrap in a consumer.
4. **Parallel requests – `app.js` (20 min)** – rewrite exercise 5 with `Promise.all` when requests are independent (both `fetch` calls and both `.json()` calls in parallel). Discuss when sequential is required (second request needs data from the first).
5. **Wrap-up (10 min)** – common mistakes: forgetting `await` (getting a Promise object), forgetting `response.ok` (fetch only rejects on network errors, not 404/500), `await` in a non-async function, sequential awaits that could be parallel.

## Gotchas / fixes vs. historical code

- **Fixed:** historical completed `exercises.js` declared `fetchPosts` twice (`function fetchPosts` in Ex.1 and `const fetchPosts` in Ex.6) → `SyntaxError: Identifier 'fetchPosts' has already been declared`, so the whole file wouldn't run. In this branch the Ex.6 consumer is renamed to `logPostsWithTimeout`. Expect students to hit the same error if they reuse names — good teaching moment about scope/redeclaration.
- Ex.1 in the completed file still keeps the original `function fetchPosts` *and* the async version with the same name (function declarations can be redeclared; the latter wins). Fine to leave, or comment out the original.
- Ex.6: `resolve(response.json())` resolves with a promise — works because promises flatten, but `resolve(await response.json())` is clearer.
- Typos in starter comments ("asyncrounous", "Asyc") are inherited from the original and harmless.

## Homework

No separate exercises-repo starter (Group300126 had no Lesson25 homework in `300126-exercises`). Students can finish any remaining exercises in `exercises.js` and convert the Lesson 22 CRUD app (`Lesson22/app.js`, `pages/*.js`) from `.then()` to async/await.
