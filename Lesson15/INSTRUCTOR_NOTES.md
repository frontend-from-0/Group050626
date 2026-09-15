# Instructor notes — Lesson 15 (Group050626)

**Cohort:** Group050626 (calendar / attendee `050626`)  
**Calendar (2026-09-21):** 15. Full Stack AI Developer Eğitimi TR saat ile 20.30  
**Topic:** Practical exercise — practice previously covered JS topics (functions, loops, conditional statements, data types)  
**Student starter PR:** "Lesson 15 preparation" (`prep-lesson-15`) — `Lesson15/contactBook.js` (commented step guide only)  
**Instructor PR:** this branch (`instructor-lesson-15`) — completed `contactBook.js` + these notes  

**Historical source:** `frontend-from-0/Group300126` Lesson17 (same topic; **lesson number differs**)  
- Starter: `8c386c11321618721d8aef7019cbc4e4a2434674` ("Lesson 17 sterter files")  
- Completed: `aa53df77dca0ed910fa00dcc95191344888024c8` ("Add Lesson17 completed files")  

**Naming:** Use **Lesson15** / “Lesson 15” for this cohort. Do not create Lesson17 folders here.

**Exercises:** Historical `300126-exercises` had Lesson17 `contactBook.js` homework (root file = completed reference; students submitted named subfolders). See separate `050626-exercises` prep if added; earlier mistaken `Lesson15/script.js` on that repo was renamed to `Lesson14` (commit `5940d57`).

---

## Teaching sequence (suggested ~90–120 min)

1. **Frame (5 min)** — Today is a **practical lab**, not new theory. Goal: one small app that forces arrays, objects, loops, conditionals, and functions together — a **Contact Book** (CRUD).
2. **Read the starter aloud (5–10 min)** — Walk STEP 1–7 comments in `contactBook.js`. Students will fill sections live.
3. **STEP 1 — Seed data (10 min)** — `generalContacts` / `workContacts` arrays of `{ name, phone, email }`. Stress: array of objects; why two lists later helps show “pass the list into the function”.
4. **STEP 2 — `displayAllContacts(contacts)` (15–20 min)** — `for` loop; template string log; empty-array guard. Call with both lists + `[]`. Optional TODO: validate each element is an object (`typeof` / `Object.keys`).
5. **Helper — `findContact(name, contactList)` (10 min)** — Linear search; case-insensitive compare with `.toLowerCase()`. Return contact or `null`.
6. **STEP 3 — `addContact` (10–15 min)** — Guard with `findContact`; `push` new object; success / warning logs. Shorthand `{ name, phone, email }`.
7. **STEP 4–5 — `viewContact` / `updateContact` (15 min)** — Reuse find helper; mutate phone/email when found.
8. **STEP 6 — `removeContact` (10 min)** — `findIndex` + `splice`; or filter-and-reassign if you want immutability discussion.
9. **STEP 7 — Demo script (5–10 min)** — Run a sequence: display → add duplicate → add new → update → remove → display. Use Node (`node contactBook.js`) or browser console.
10. **Optional enhancements (time permitting)** — `.includes` partial search; `sort` by name; search by phone/email.

---

## Core concepts

| Concept | What to stress |
|--------|----------------|
| **Object** | Contact = grouped fields (`name`, `phone`, `email`) |
| **Array** | Ordered list of contacts; index vs value |
| **Function parameters** | Pass the list in (`contactList`) so one function works for work + personal |
| **Loop** | `for` with index; mention `for...of` as alternative |
| **Conditional** | Empty list; duplicate name; not found |
| **CRUD** | Create `add`, Read `display`/`view`, Update `update`, Delete `remove` |
| **Side effects** | Functions that `console.log` and/or mutate the array |

---

## Terminology

| Term | Plain meaning |
|------|----------------|
| CRUD | Create, Read, Update, Delete |
| Index | Position in the array (`0 … length-1`) |
| `findIndex` | Returns index of first match, or `-1` |
| `splice` | Remove/insert items in-place |
| Mutation | Changing the same array/object in memory |
| Case-insensitive | Compare after normalizing with `.toLowerCase()` |
| Guard clause | Early `return` when input is invalid / not found |

---

## Questions to ask the room

1. Why pass `contacts` into `displayAllContacts` instead of using a global only?
2. What happens if two contacts share the same name with different casing?
3. `findIndex` returned `-1` — what must you check before `splice`?
4. Is `updateContact` mutating the object inside the array, or replacing it?
5. How would you change `findContact` to match partial names (`.includes`)?
6. Which data type is `phone` here — and why might that matter later (formatting, WhatsApp links)?

---

## Demos (instructor live)

1. Start from starter file; implement STEP 1–2 together; run in terminal.
2. Implement `findContact` + `addContact`; show duplicate warning.
3. Finish update/remove; run a full CRUD script at the bottom.
4. Break the app on purpose (`displayAllContacts()` with no args / bad shapes) → discuss defensive checks (TODOs in completed file).

---

## Completed solution highlights (`contactBook.js`)

- Seed: `generalContacts`, `workContacts`
- `displayAllContacts`, `findContact`, `addContact`, `viewContact`, `updateContact`, `removeContact`
- Live calls + TODOs for invalid inputs / optional enhancements left for discussion

---

## Stretch / homework

- Students push their own `contactBook.js` under `050626-exercises/Lesson15/<name>/` (mirror Group300126 exercises pattern).
- Implement optional enhancements: partial search, sort, multi-field search.
