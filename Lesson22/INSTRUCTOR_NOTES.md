# Lesson 22 – HTTP request methods — Instructor notes

**Cohort:** Group050626 (Full Stack AI Developer) · **When:** Mon 16 Nov 2026, 18:30–20:30 Stockholm (CET; 20:30 TR)
**Historical source:** `frontend-from-0/Group300126` Lesson24 (Tue 11 Aug 2026, "HTTP request methods", same course) — starter `0cb1c3b` (18:28 CEST), completed `a506ab9` (21:07 CEST), renumbered 24 → 22.
Continues Lesson 21 (JSON / fetch / Unsplash). This lesson uses the public **dummyjson.com** API — no API key, no secrets, no `.env`/`secrets.js` needed.

## Starter (student branch `prep-lesson-22`)
- `app.js`: theory comment — CRUD ↔ HTTP methods (POST / GET / PUT-PATCH / DELETE) and status code ranges.
- `http-requests.png`: request/response diagram (same as Lesson 21).
- **Pre-built plumbing (new vs. history, so class time goes to the fetch code):**
  - `index.html`: nav (Fetch Users button, Create User link), task comment, `#statusMessage` + `<ul id="container">` (historically changed in class).
  - `styles.css`: includes the `.hidden` helper (historically added in class).
  - `pages/update.html` (form with `firstName`, `../styles.css`, loads `update.js`) and `pages/create.html` (form with `firstName` + `lastName`, loads `create.js`), plus `pages/update.js` / `pages/create.js` with TODO comments only.
  - Historical `pages/create.html` linked `./styles.css` and `app.js` (wrong paths from inside `pages/`) — fixed in the starter.

## Flow (as taught historically)
1. CRUD ↔ methods + status codes (comment in `app.js`, diagram).
2. **GET list:** `#fetchUsersButton` click → `fetch('https://dummyjson.com/users')` → check `response.ok` / throw → `data.users` → `createUserCard(user)` (`li.card`, `h2` name, `p` birthDate, "Update User" link `./pages/update.html?userId=${user.id}`, "Delete User" button). Errors shown in `#statusMessage` (remove `.hidden`).
3. Event listener with arguments: `() => deleteUser(user.id)` vs. `deleteUser` reference (comments kept in the completed code).
4. **DELETE:** `fetch(\`https://dummyjson.com/users/${userId}\`, { method: 'DELETE' })` → log success. (dummyjson only simulates – nothing is really deleted.)
5. **Update page:** `new URLSearchParams(window.location.search).get('userId')` → GET single user → pre-fill `#firstName`; submit handler with `e.preventDefault()` (historically ended with `console.log(e)` – PUT not finished in class).

## Completed state
See this branch: `Lesson22/app.js`, `Lesson22/pages/update.js` (= historical completed code). `pages/create.js` was not written historically.

### Suggested completion if time allows (not in the historical code)
```js
// pages/update.js – submit
fetch(`https://dummyjson.com/users/${userId}`, {
  method: 'PUT', // or PATCH
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify({ firstName: firstNameInput.value }),
})
  .then((response) => {
    if (!response.ok) throw new Error(`Failed to update user ${userId}`);
    return response.json();
  })
  .then((user) => {
    statusMessage.textContent = `User ${user.firstName} updated.`;
    statusMessage.classList.remove('hidden');
  });

// pages/create.js – submit
fetch('https://dummyjson.com/users/add', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify({ firstName, lastName }),
}); // → 201 Created, returns the new user with id
```

## Discussion points / known quirks
- Delete does not remove the card from the DOM (and the list is appended again on every "Fetch Users" click) — good exercise: `userCard.remove()` after a successful DELETE; clear `container` before rendering.
- `data.users.map(...)` is used for side effects → `forEach` is the better fit.
- Typo "occured" in error messages.
- dummyjson write requests (POST/PUT/PATCH/DELETE) are simulated: the response looks real but GET afterwards returns the original data.

## Homework / exercises
Historical homework (`300126-exercises/Lesson24/tugba-kutlu/`): finish the app — `pages/create.js` (POST) and `pages/update.js` (PUT). Per Group050626 practice, after class copy what you push to `Group050626` main into `050626-exercises/Lesson22/`.
