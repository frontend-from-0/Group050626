# Lesson 18 – Events and Event Handling in JS (Booking form) — Instructor notes

**Cohort:** Group050626 (Full Stack AI Developer) · **When:** Mon 12 Oct 2026, 19:30–21:30 Stockholm (20:30 TR)
**Historical source:** `frontend-from-0/Group300126` Lesson20 (30 Jun 2026) — starter `4b7677f`, completed `67afc0b` (renumbered 20 → 18)

## Flow
1. Recap Lesson 17 (DOM selection/manipulation). Write the 3-step recipe at the top of `script.js`: select element → addEventListener with the right event → do something.
2. Walk the starter `index.html`: date input, `.slot` time buttons, summary aside, Confirm button.
3. Live-code:
   - `change` on `#date` → format with `toLocaleDateString('en-GB')`, guard against `Invalid Date`, show in `#selected-date`.
   - `getElementsByClassName('slot')` returns an HTMLCollection → spread into an array → `forEach` + `click` listener → show `#selected-time`.
   - Shared `data = { date, time }` object + `allowSubmit()` that toggles `disabled` on `#confirm` (add `disabled` attr in HTML).
   - `submit` on `#booking-form` with `event.preventDefault()`; hide `#form-content`, show `#confirmation-message` via `.hidden` class (add to `styles.css`).
4. Discuss: `change` vs `input`, `click` vs `submit`, why buttons in a form submit by default, the `event` object (`console.log(event)`).

## Completed state
See this branch: `Lesson18/index.html` (ids + confirmation block), `script.js`, `styles.css` (`.hidden`).

Next lessons (historical sequence): form validation → shopping cart.
