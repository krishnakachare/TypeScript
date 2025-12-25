I’ll explain this in **3 layers** and then give a **clear comparison table + examples**:

1. JavaScript (normal)
2. JavaScript with `"use strict"`
3. TypeScript
   👉 And finally: **Why TypeScript was introduced even though strict mode exists**

---

## 1️⃣ JavaScript (Normal – Non-Strict Mode)

JavaScript is **dynamically typed** and **interpreted at runtime**.

### Characteristics

- No type checking
- Errors mostly appear **at runtime**
- Allows bad practices silently
- Flexible but risky for large applications

### Example

```javascript
x = 10; // No error (implicitly global)
function add(a, b) {
  return a + b;
}

console.log(add(10, "20")); // Output: "1020"
```

### Problems

- Accidental globals
- Wrong data types cause **unexpected output**
- Bugs are found **only when code runs**

---

## 2️⃣ JavaScript with `"use strict"` Mode

`"use strict"` is a **runtime safety feature**, not a type system.

It enforces **better coding rules**, but **does NOT add types**.

### What `"use strict"` Does

- Prevents silent errors
- Makes JavaScript behave more predictably
- Catches **some** mistakes at runtime

### Example

```javascript
"use strict";

x = 10; // ❌ ReferenceError: x is not defined

function add(a, b) {
  return a + b;
}

console.log(add(10, "20")); // "1020" ❌ still wrong
```

### What Strict Mode DOES NOT Do

❌ No type checking
❌ Cannot stop wrong data types
❌ No compile-time error detection

---

## 3️⃣ TypeScript

TypeScript is a **superset of JavaScript** with a **static type system**.

It adds **compile-time checking**, which JavaScript (even strict mode) cannot do.

### Key Idea

> **TypeScript finds bugs BEFORE code runs**

### Example

```typescript
function add(a: number, b: number): number {
  return a + b;
}

add(10, "20");
// ❌ Compile-time Error:
// Argument of type 'string' is not assignable to parameter of type 'number'
```

### Output JavaScript (after compilation)

```javascript
function add(a, b) {
  return a + b;
}
```

⚠️ TypeScript code **never runs directly** in browser or Node.js
✔️ It is **compiled to JavaScript**

---

## 🔥 Why TypeScript Was Introduced If `"use strict"` Exists?

### Short Answer (Interview-Ready)

> `"use strict"` improves **runtime behavior**,
> **TypeScript improves development-time safety and scalability**

### Real Reason

JavaScript became too large for:

- Enterprise applications
- Large teams
- Long-term maintenance

Strict mode **cannot solve**:

- Type safety
- Code intelligence
- Refactoring safety
- Large-scale architecture

---

## 🧠 Key Differences with Examples

### 1. Type Checking

| Feature           | JS      | JS Strict | TypeScript   |
| ----------------- | ------- | --------- | ------------ |
| Type checking     | ❌      | ❌        | ✅           |
| When errors found | Runtime | Runtime   | Compile time |

```typescript
let age: number = 25;
age = "twenty"; // ❌ Error in TypeScript
```

---

### 2. Variable Safety

```javascript
"use strict";
x = 10; // ❌ Error
```

```typescript
let x: number = 10;
x = "10"; // ❌ Error
```

👉 TypeScript is **more powerful**

---

### 3. Function Contracts

```typescript
function login(username: string, isAdmin: boolean): void {
  // logic
}

login("Krishna", "yes"); // ❌ Error
```

JS strict mode **cannot detect this**

---

### 4. Advanced Features (Not Possible in JS)

| Feature             | JavaScript | TypeScript |
| ------------------- | ---------- | ---------- |
| Interfaces          | ❌         | ✅         |
| Enums               | ❌         | ✅         |
| Generics            | ❌         | ✅         |
| Type Aliases        | ❌         | ✅         |
| Compile-time checks | ❌         | ✅         |

```typescript
interface User {
  id: number;
  name: string;
}

const user: User = {
  id: 1,
  name: "Krishna",
};
```

---

## 📊 Final Comparison Table

| Aspect          | JavaScript    | JS + Strict | TypeScript            |
| --------------- | ------------- | ----------- | --------------------- |
| Type Safety     | ❌            | ❌          | ✅                    |
| Error Detection | Runtime       | Runtime     | Compile time          |
| Code Quality    | Medium        | Better      | Best                  |
| Scalability     | Low           | Medium      | High                  |
| Tooling Support | Basic         | Basic       | Excellent             |
| Used In         | Small scripts | Medium apps | Large enterprise apps |

---

## 🎯 Interview One-Line Answer

> JavaScript strict mode improves runtime discipline, but it cannot prevent type-related bugs. TypeScript was introduced to add static typing, compile-time error detection, and scalability for large applications, which strict mode cannot provide.
