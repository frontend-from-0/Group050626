# Lesson 20 – Events and Event Handling in JS (Shopping Cart) — Instructor notes

**Cohort:** Group050626 (Full Stack AI Developer) · **When:** Mon 26 Oct 2026, 18:30–20:30 Stockholm (CET; 20:30 TR)
**Historical source:** `frontend-from-0/Group300126` Lesson22 (28 Jul 2026, same topic) — starter `228d232`, completed `cf08f78` (renumbered 22 → 20)

> Note: Sweden switches to winter time on Sun 25 Oct, so the lesson starts at 18:30 Stockholm (still 20:30 TR).

## Starter (student branch `prep-lesson-20`)
- `index.html`: "FreshMart" Tailwind (CDN) page — 4 products (apples, bananas, bread, eggs) with `#<name>_add` buttons, a Cart Preview with `#<name>_cart` rows, `#<name>_quantity` spans and `#<name>_remove` buttons, static "Total Price: $25" and a "Clear Cart" button.
- `script.js`: empty.

## Flow (as taught historically)
1. Recap Lesson 18/19: `addEventListener`, `click`, event object; DOM selection by id.
2. Write the plan as a comment at the top of `script.js`:
   1. Object that holds product data (price, quantity)
   2. Select interactive elements
   3. Add event listeners (add to cart, remove, clear cart)
   4. Connect logical functions to the listeners
3. `index.html` changes: reset quantities to `0`; wrap total in `<span id="total_price">`; add `id="clear_cart"` to the Clear Cart button; add `disabled:bg-gray-500` to remove buttons (Tailwind `disabled:` variant).
4. `script.js`:
   - `products` object keyed by name → `{ price, quantity }`.
   - `Object.keys(products)` + `for…of` loop: build ids with string concatenation (`name + '_add'`) and attach listeners with arrow functions `() => addToCart(name)` (closure over loop variable — good moment to explain why `const` in `for…of` works).
   - `addToCart(name)`: increment quantity, update `<span>` via `textContent`, re-enable remove (`removeAttribute('disabled')`), `updateTotal()`.
   - `removeFromCart(name)`: decrement if ≥ 1, else `setAttribute('disabled', 'true')`.
   - `updateTotal()`: `for…in` over products, sum `price * quantity`.
5. Discuss `for…of` vs `for…in`, `Object.keys`, data-driven UI (state object → DOM).

## Completed state
See this branch: `Lesson20/index.html` and `Lesson20/script.js`.

## Known gaps in the historical completed code (discussion points / homework)
- Clear Cart only `console.log`s — implementing it (reset all quantities, update spans, total, disable removes) is a natural homework task.
- Remove button is disabled only on the *next* click after reaching 0 (check happens before decrement); better: disable right after quantity hits 0.
- `addToCart` condition `quantity >= 0` is always true.
- All prices are `1`; give realistic prices so totals are meaningful. Cart rows are always visible (could hide rows with quantity 0).
- Comment "Add if statement to enable the removeFromCart button again" left over in `addToCart`.

## Exercises
None prepared in advance. Established Group050626 practice: after class, the completed lesson code Anna pushes to `main` is copied into `050626-exercises/Lesson20/` as the homework starter (done for Lesson 18 #51 and Lesson 19 #55).

Next lesson in the historical sequence (Group300126): Lesson23 — data formats / HTTP requests (`dataFormats.md`, `script.js`).
