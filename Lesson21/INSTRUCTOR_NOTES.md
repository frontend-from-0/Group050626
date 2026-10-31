# Lesson 21 – Overview of JSON and API (network) requests in JS — Instructor notes

**Cohort:** Group050626 (Full Stack AI Developer) · **When:** Mon 2 Nov 2026, 18:30–20:30 Stockholm (CET; 20:30 TR)
**Historical source:** `frontend-from-0/Group300126` Lesson23 (4 Aug 2026, same topic) — starter `a9f8c14`, completed `e3240a6` (renumbered 23 → 21)

## Starter (student branch `prep-lesson-21`)
- `script.js`: theory comments — JSON, async programming (callbacks / promises / async-await), AJAX, Fetch API (GET/POST examples), a working `fetch('https://jsonplaceholder.typicode.com/posts')` and the same request with `XMLHttpRequest`.
- `data.json`: sample JSON (array of people with nested `address`, `studies` array).
- `dataFormats.md`: formats shared by client and server (JSON, XML, CSV, form data, …).
- `http-requests.png`, `http-request-illustration.png`: diagrams for the request/response cycle.
- **Pre-built plumbing (new vs. history):** `example/index.html` (button + `<img>`, loads `secrets.js` then `script.js`), `example/.gitignore` (ignores `secrets.js`), `example/secrets.example.js` (template with `UNSPLASH_ACCESS_KEY`), empty `example/script.js`. Historically these were created in class; pre-adding them keeps class time on the fetch code.

## Flow (as taught historically)
1. JSON: walk through `data.json`; `JSON.stringify` / `JSON.parse`; compare to JS objects (quoted keys, no functions/undefined).
2. `dataFormats.md` + diagrams: client ↔ server, request/response, HTTP methods (GET/POST/PUT/PATCH/DELETE), status codes, headers.
3. Async concepts: callbacks → promises → async/await (comments in `script.js`).
4. Run the jsonplaceholder `fetch` in the browser; open DevTools Network tab; compare with the XHR version.
5. Live example with an API key (Unsplash):
   - In class, first a quick `example.js` request logging `response` and `response.json()`.
   - Then `example/`: students copy `secrets.example.js` → `secrets.js`, paste their own Unsplash Access Key (https://unsplash.com/developers), and write `example/script.js`: click listener on `#fetch-button` → `fetch('https://api.unsplash.com/photos/random', { headers: { Authorization: \`Client-ID ${UNSPLASH_ACCESS_KEY}\` } })` → set `src` to `data.urls.regular` and `alt` to `data.alt_description`.
   - Discuss why the key goes in a git-ignored file and that a frontend key is still visible to users (real apps proxy via a backend).
6. Optional: rewrite the Unsplash request with `async/await` + `try/catch`, check `response.ok`.

## Completed state
See this branch: `Lesson21/example.js`, `Lesson21/example/script.js`.
⚠️ The historical `example.js` (Group300126) contains a hard-coded Unsplash access key committed to GitHub — it is replaced by a placeholder here. Consider revoking/rotating that key in the Unsplash dashboard.

## Homework / exercises
Not prepared in advance. Group300126 students' Lesson23 homework (in `300126-exercises/Lesson23/*`) was: fetch posts from `https://jsonplaceholder.typicode.com/posts` and render them as cards in the DOM (some added loading spinner, likes stored in `localStorage`). Established Group050626 practice: after class, the completed code Anna pushes to `main` is copied into `050626-exercises/Lesson21/`.

Next lesson in the historical sequence (Group300126): Lesson24.
