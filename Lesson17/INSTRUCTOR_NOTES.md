# Lesson 17 — DOM and basic DOM manipulation (Instructor Notes)

**Topic:** Document Object Model — selecting and modifying elements  
**Cohort / repo:** 050626 → `frontend-from-0/Group050626`  
**When:** Mon 5 Oct 2026, 19:30 Europe/Istanbul  
**Historical source:** `frontend-from-0/Group300126` Lesson19  
- Starter: `82070c3` “Lesson19 starter files”  
- Completed: `53cd2bc` “Lesson19 completed files”

Student PR: `DOM.md`, `DOM.png`, starter `index.html`, `questions.md`.  
This instructor PR: completed `index.html` + `script.js` + `styles.css` + `bad-script.js` + these notes. **Do not merge** into student-visible `main` until you decide; keep instructor content off the student branch.

## Goals

- Explain what the DOM is and why JS talks to the page through it.
- Practice selecting elements (`getElementById`, `querySelector` / `querySelectorAll`, collections).
- Contrast **NodeList / HTMLCollection** vs arrays (and when to spread / `Array.from`).
- Prefer **safe text updates** (`textContent` / `innerText`) over `innerHTML`; show the XSS risk with the injected `<script>` demo.
- Change look/behavior via **classList**, styles, and attributes.

## Before class

- [ ] Start / remind **recording**
- [ ] Open DevTools (Elements + Console) on the starter page
- [ ] Have completed `script.js` ready to reveal stepwise (or live-type the “Add code below” section)

## Teaching flow

1. **Warm-up / questions.md** — DOM definition; choosing selectors; NodeList vs array; safe text APIs; three ways to change look/behavior (class / style / attribute).
2. **Walk `DOM.md`** — selection methods table; when `querySelector` beats `getElementBy*`.
3. **Starter page** — empty `#container`, static list of methods, empty `<img>`. Open Console.
4. **Live `script.js` (completed):**
   - Fill `#container` with `innerHTML` (including the deliberate `<script src="./bad-script.js">`) — discuss why this is dangerous.
   - Compare `textContent` vs `innerText` on `#firstParagraph` (hidden span).
   - Update with `innerText`; re-log.
   - `setTimeout` classList add/remove on `h1` (demo only — not for real delays).
   - `querySelectorAll('li')` + `forEach` + even-index `text-secondary`.
   - `getElementsByTagName('p')` needs spread before `forEach`; add `text-large`.
5. **CSS** — `.hidden`, `.headline`, `.text-secondary`, `.text-large` as the styling levers behind classList.

## Starter vs completed

| Starter | Completed adds |
|---------|----------------|
| `DOM.md`, `DOM.png`, questions, basic `index.html` | `script.js`, `styles.css`, `bad-script.js` |
| `index.html` without stylesheet / script hooks for demos | linked CSS + script; richer markup for demos |

## Pitfalls

- Students call array methods on a live HTMLCollection without converting.
- Using `innerHTML` for plain text (XSS + parser surprises).
- Confusing `innerText` (layout-aware, slower) vs `textContent`.
- Expecting `querySelectorAll` to be live (it is static).

## Exercises

No Lesson17 / DOM homework folder found on `050626-exercises`, and `300126-exercises` has no Lesson19 DOM set. Skipped.

## Files in this instructor PR

| Path | Role |
|------|------|
| `Lesson17/*` | Completed classroom end state |
| `Lesson17/INSTRUCTOR_NOTES.md` | These notes (keep off student merge) |
