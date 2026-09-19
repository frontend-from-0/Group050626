# Lesson 16 — OOP in JavaScript (Instructor Notes)

**Topic:** Object-Oriented Programming in JavaScript (classes, inheritance, encapsulation)  
**Cohort:** Group050626 (Full Stack AI)  
**When:** Sun 28 Sep 2026, 19:30 Europe/Istanbul  
**Historical source:** `frontend-from-0/Group300126` Lesson18  
- Starter: `86e75c6` “L18 starter files”  
- Completed: `ecca693` “Add Lesson 18 completed files”  
Folder renumbered Lesson18 → Lesson16 for this cohort.

## Teaching sequence

1. **Paradigms warm-up** (`oop.js` header comments)  
   Contrast OOP (mutable state in objects, methods) vs FP (immutable transforms, composable functions).

2. **Problem with plain objects**  
   Starter shows `user1` / `user2` / `user3` with inconsistent shapes (`username` vs `name`, missing `role`). Motivate classes for shared structure + validation.

3. **Build `User` + `AdminUser`** (completed `oop.js`)  
   - Constructor validation (username length ≥ 2, email length ≥ 5)  
   - Default `role = 'user'`  
   - `describe()` method  
   - `AdminUser extends User`, `super(...)`, override `role` and `describe()`  
   - Live: instantiate, call `describe()`, optionally show that assigning bad `username` after construct bypasses validation (leads into encapsulation discussion).

4. **Shopping cart exercise** (`script.js`)  
   Starter is step-by-step comments only. Completed implements:
   - `ShoppingCart` with private `#items`
   - `viewCart`, `addItem` (merge quantity if name exists), `removeItem`
   - Demo calls + intentional `cart.items.splice(...)` to show private-field protection (should fail / not exist on public API)

5. **Discussion questions** (`questions.md` — unchanged starter→completed)  
   Why OOP grouping; state vs FP; encapsulation; class vs instance vs method.

## Starter vs completed

| File | Starter | Completed |
|------|---------|-----------|
| `oop.js` | Plain user objects + paradigm notes | + `User` / `AdminUser` classes and demos |
| `script.js` | Commented exercise steps only | + full `ShoppingCart` implementation and demo calls |
| `questions.md` | Same | Same |

## Classroom tips

- Run files in Node (`node oop.js`, `node script.js`).
- Emphasize `#private` fields vs accidental public mutation.
- If time is short: finish `User`/`AdminUser` together, leave cart methods as pair work using completed as answer key.
