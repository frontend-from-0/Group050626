# Lesson 19 – Events and Event Handling in JS (Form validation) — Instructor notes

**Cohort:** Group050626 (Full Stack AI Developer) · **When:** Mon 19 Oct 2026, 19:30–21:30 Stockholm (20:30 TR)
**Historical source:** `frontend-from-0/Group300126` Lesson21 (7 Jul 2026, same topic) — starter `e792c07`, completed `d6e5d5a` (renumbered 21 → 19)

## Starter (student branch `prep-lesson-19`)
- `index.html`: checkout form (`#checkoutForm`, `novalidate`) with email, phone, first/last name, card number, expiry, CVV; error placeholders only for email (`#emailError`) and phone (`#phoneError`); hidden `#success` block.
- `styles.css`: `.input-group`, `.input-error`, `.hidden`, `.btn-success`.
- `script.js`: three regex constants only (`emailPattern`, `phonePattern`, `namePattern`).

## Flow (as taught historically)
1. Recap Lesson 18 events (`change`, `click`, `submit`, `event.preventDefault()`).
2. Why `novalidate`: we take over validation in JS; mention built-in HTML validation (`required`, `type="email"`, `pattern`) and MDN form-validation article.
3. Walk through the 6-step recipe (it is written as a comment at the bottom of the completed `script.js`):
   0. Decide required vs optional fields. 1. Static HTML/CSS for inputs + error placeholders. 2. Select form, inputs and error elements. 3. Validation rules / regexes per input. 4. Trigger validation with event listeners. 5. Optional `formValid` flag.
4. Live-code in `index.html`: add `aria-describedby` on email/phone and `aria-live="polite"` on error `<p>`s; add `#firstNameError`, `#lastNameError`, `#cardError` placeholders.
5. Live-code in `script.js`:
   - `validateEmail`, `validatePhone` (trim → regex test → set text + toggle `.hidden`).
   - Reusable `validateName(value, errorElement)` for first & last name (required + `namePattern`).
   - `cardNumberPattern` (Visa/Mastercard/Amex/Diners/Discover/JCB) + `validateCard`.
   - `blur` listeners per input; `submit` listener runs all validators after `preventDefault()`.
6. Discuss `blur` vs `input` vs `change` for validation UX; regex basics (anchors `^…$`, character classes, quantifiers); accessibility of error messages.

## Completed state
See this branch: `Lesson19/index.html` (aria attributes + extra error placeholders) and `Lesson19/script.js`.

## Known gaps in the historical completed code (good discussion points / fix live if time)
- `formValid` is never reset to `true` at the start of `submit`, so after one failed submit the form can never become valid; and the success branch is just a comment (`#success` is never shown).
- `validateEmail` sets `errorEmail.textContent` but toggles `emailError.classList` — works only because elements with an `id` become globals; use one variable.
- Expiration date and CVV are not validated (natural homework extension).

## Exercises
None prepared. Pattern seen on 13 Oct: Lesson 18 homework starter in `050626-exercises` was copied from the completed lesson code after class.

Next lessons (historical sequence in Group300126): Lesson22 → shopping cart.
