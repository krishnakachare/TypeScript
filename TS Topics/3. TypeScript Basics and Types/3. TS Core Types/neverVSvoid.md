Good question — **`void` and `never` look similar when used with functions**, but they represent **very different guarantees** in TypeScript.

I’ll explain this **precisely**, with **clear rules, mental models, and examples**, so the difference is crystal clear.

---

## 1️⃣ Core Meaning (One-line definition)

| Type        | Exact Meaning                                                     |
| ----------- | ----------------------------------------------------------------- |
| **`void`**  | A function **finishes execution** but **does not return a value** |
| **`never`** | A function **never finishes execution at all**                    |

👉 This single sentence already explains **90% of the difference**.

---

## 2️⃣ Execution Flow Difference (MOST IMPORTANT)

### `void` → _Function ends normally_

### `never` → _Function never ends_

```ts
function a(): void {
  console.log("Done");
}

function b(): never {
  throw new Error("Crash");
}
```

| Function | Does execution reach the next line? |
| -------- | ----------------------------------- |
| `a()`    | ✅ Yes                              |
| `b()`    | ❌ Never                            |

```ts
a();
console.log("After a"); // runs

b();
console.log("After b"); // ❌ unreachable
```

---

## 3️⃣ Return Value Rules

### `void`

- Can **return nothing**
- Can **return `undefined`**
- Returning a value is allowed (but ignored)

```ts
function f1(): void {
  return;
}

function f2(): void {
  return undefined;
}
```

⚠️ But TypeScript **does not care about the returned value**.

---

### `never`

- **Cannot return anything**
- **Must not finish**
- Must:

  - throw an error
  - or run an infinite loop

```ts
function f3(): never {
  while (true) {}
}

function f4(): never {
  throw new Error("Fatal");
}
```

❌ This is INVALID:

```ts
function f5(): never {
  return; // ❌ Error
}
```

---

## 4️⃣ Assignability Difference (VERY IMPORTANT)

### `void` has **one value**

```ts
let v: void;
v = undefined; // ✅ allowed
```

### `never` has **no values**

```ts
let n: never;
n = undefined; // ❌ error
n = null; // ❌ error
```

👉 **Nothing can be assigned to `never`**

---

## 5️⃣ `never` in Type Narrowing (REAL POWER)

This is where `never` becomes **extremely useful**.

```ts
type Shape = "circle" | "square";

function area(shape: Shape) {
  if (shape === "circle") {
    return 1;
  }
  if (shape === "square") {
    return 2;
  }

  const check: never = shape; // ✅ ensures all cases handled
}
```

If later you add:

```ts
type Shape = "circle" | "square" | "triangle";
```

❌ TypeScript ERROR appears immediately.

👉 `never` acts as **compile-time safety guard**.

---

## 6️⃣ Why They Look Similar in Functions

Because both **don’t return a value**.

```ts
function log(): void {
  console.log("hello");
}

function crash(): never {
  throw new Error();
}
```

From the _caller’s perspective_:

- Neither returns a value
- But:

  - `log()` → returns to caller
  - `crash()` → execution stops forever

---

## 7️⃣ Mental Model (Easy to Remember)

| Question                        | void    | never      |
| ------------------------------- | ------- | ---------- |
| Function completes?             | ✅ Yes  | ❌ No      |
| Can return `undefined`?         | ✅ Yes  | ❌ No      |
| Can return anything?            | Ignored | Impossible |
| Used for exhaustiveness checks? | ❌ No   | ✅ Yes     |
| Represents unreachable code?    | ❌ No   | ✅ Yes     |

---

## 8️⃣ One-line Rule to Remember

> **If code reaches the end → `void`
> If code never reaches the end → `never`**

---

## 9️⃣ When to Use What (Practical Advice)

### Use `void` when:

- Logging
- Side effects
- Event handlers
- API calls without return

```ts
function save(): void {}
```

### Use `never` when:

- Throwing errors
- Infinite loops
- Exhaustive switch checks
- Impossible states

```ts
function fatal(msg: string): never {
  throw new Error(msg);
}
```

---

## 🔥 Final Summary

- **`void`** → _Function ends, nothing meaningful returned_
- **`never`** → _Function never ends, execution stops_
- They look similar **only in syntax**, not in **behavior or intent**

============================================================

Great 👍
Here’s a **complete, interview-ready deep dive** covering:

1. **Why `never` is assignable to all types**
2. **JS vs TS behavior**
3. **Real-world Angular / Node usage**
4. **Short interview answers (ready to speak)**

---

## 1️⃣ Why `never` is assignable to all types (IMPORTANT CONCEPT)

### Key rule

> **`never` represents a value that never exists**

Because it **never produces a value**, TypeScript allows it to be assigned **to any type**.

```ts
let n: never;

let a: number = n;
let b: string = n;
let c: boolean = n;
```

✅ This is allowed
❌ But the reverse is NOT allowed

```ts
let x: number = 10;
let y: never = x; // ❌ error
```

### Mental model

- `never` = **empty set**
- Empty set is a subset of all sets
- But no set can be assigned to empty set

📌 This is why `never` is perfect for **unreachable code detection**

---

## 2️⃣ JavaScript vs TypeScript (Critical Difference)

### JavaScript

JavaScript **has no `void` or `never` types**

```js
function crash() {
  throw new Error();
}
```

JS:

- No compile-time checking
- No unreachable code detection
- No exhaustiveness checks

---

### TypeScript

TypeScript **understands execution flow**

```ts
function crash(): never {
  throw new Error();
}
```

TS:

- Knows code never continues
- Prevents invalid assignments
- Detects missing cases in switch

📌 **`never` is purely a TypeScript compile-time safety feature**

---

## 3️⃣ Real-World Usage (Angular / Node.js)

### 🔹 Node.js – Fatal error handler

```ts
function handleFatal(error: unknown): never {
  console.error(error);
  process.exit(1);
}
```

Why `never`?

- Function **terminates process**
- No code executes afterward

---

### 🔹 Angular – Exhaustive reducer / state handling

```ts
type Action = { type: "LOAD" } | { type: "SUCCESS" } | { type: "FAIL" };

function reducer(action: Action) {
  switch (action.type) {
    case "LOAD":
      return;
    case "SUCCESS":
      return;
    case "FAIL":
      return;
    default:
      const check: never = action; // compile-time safety
  }
}
```

📌 If a new action is added → **compiler error immediately**

---

## 4️⃣ `void` in Real Projects

### Event handlers (Angular / DOM)

```ts
button.addEventListener("click", (): void => {
  console.log("clicked");
});
```

Why `void`?

- Side effect only
- Function finishes execution

---

### API calls without return

```ts
saveUser(data: User): void {
  this.http.post("/api/save", data);
}
```

---

## 5️⃣ Comparison Table (Interview Gold)

| Feature                     | void       | never         |
| --------------------------- | ---------- | ------------- |
| Function finishes execution | ✅ Yes     | ❌ No         |
| Returns a value             | ❌ Ignored | ❌ Impossible |
| Assignable from other types | ❌ No      | ❌ No         |
| Assignable to other types   | ❌ No      | ✅ Yes        |
| Used in exhaustive checks   | ❌ No      | ✅ Yes        |
| Represents unreachable code | ❌ No      | ✅ Yes        |

---

## 6️⃣ One-Line Interview Answers (Memorize This)

### ❓ What is `void`?

> `void` means a function completes execution but does not return any meaningful value.

---

### ❓ What is `never`?

> `never` represents a function or code path that never completes execution.

---

### ❓ Key difference?

> `void` returns control to the caller, `never` stops execution completely.

---

### ❓ Why is `never` useful?

> It helps detect unreachable code and ensures exhaustive type checking at compile time.

---

## 7️⃣ Common Interview Trap ⚠️

```ts
function test(): void {
  throw new Error();
}
```

✅ Valid
But ❌ **Incorrect typing**

Correct version:

```ts
function test(): never {
  throw new Error();
}
```

📌 **Always use `never` when function cannot finish**

---

## 8️⃣ Final Thumb Rule (Tattoo This 😄)

> **Side effect only → `void`
> Impossible to continue → `never`**
