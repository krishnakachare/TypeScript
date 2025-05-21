In TypeScript (and JavaScript ES6 modules), **import variants** refer to the different ways you can import code (like functions, classes, variables, interfaces, etc.) from other modules. TypeScript supports multiple import styles, depending on how the module exports are structured.

---

## 🔹 1. **Named Imports**

When a module exports multiple members (functions, variables, classes, etc.) using named exports, you can import only the ones you need.

### Example

**mathUtils.ts**

```ts
export const PI = 3.14;
export function add(a: number, b: number): number {
  return a + b;
}
export function subtract(a: number, b: number): number {
  return a - b;
}
```

**app.ts**

```ts
import { PI, add } from "./mathUtils";

console.log(PI); // 3.14
console.log(add(10, 5)); // 15
```

You can also rename them during import:

```ts
import { add as addition, PI as piValue } from "./mathUtils";
```

---

## 🔹 2. **Default Import**

If a module has a **default export**, you can import it using any name (you don’t use curly braces).

### Example

**logger.ts**

```ts
export default function log(message: string): void {
  console.log("LOG:", message);
}
```

**app.ts**

```ts
import log from "./logger";

log("This is a message"); // LOG: This is a message
```

> Only **one default export** is allowed per module.

---

## 🔹 3. **Import All (Namespace Import)**

You can import everything from a module under a namespace. This is useful when you want to group all exports.

### Example

**mathUtils.ts**

```ts
export const PI = 3.14;
export function add(a: number, b: number): number {
  return a + b;
}
```

**app.ts**

```ts
import * as MathUtils from "./mathUtils";

console.log(MathUtils.PI); // 3.14
console.log(MathUtils.add(3, 2)); // 5
```

---

## 🔹 4. **Mixed Default and Named Imports**

If a module has both default and named exports, you can import them together.

### Example

**shapes.ts**

```ts
export default class Shape {
  draw() {
    console.log("Drawing shape");
  }
}
export const CIRCLE = "circle";
export const SQUARE = "square";
```

**app.ts**

```ts
import Shape, { CIRCLE, SQUARE } from "./shapes";

const shape = new Shape();
shape.draw(); // Drawing shape
console.log(CIRCLE); // circle
```

---

## 🔹 5. **Re-export and Import from Barrel Files**

You can create a **barrel** module that re-exports items from multiple modules, simplifying imports.

**mathUtils.ts**

```ts
export const PI = 3.14;
```

**stringUtils.ts**

```ts
export function capitalize(s: string): string {
  return s.charAt(0).toUpperCase() + s.slice(1);
}
```

**index.ts (Barrel File)**

```ts
export * from "./mathUtils";
export * from "./stringUtils";
```

**app.ts**

```ts
import { PI, capitalize } from "./utils/index";
```

---

## 🔹 6. **Dynamic Imports (`import()` Function)**

This allows importing modules asynchronously. It's useful for lazy loading.

### Example

```ts
async function loadLogger() {
  const loggerModule = await import("./logger");
  loggerModule.default("This was loaded dynamically");
}
```

---

## Summary Table

| Syntax                          | Description                          |
| ------------------------------- | ------------------------------------ |
| `import { x } from 'module'`    | Named import                         |
| `import x from 'module'`        | Default import                       |
| `import * as mod from 'module'` | Namespace import (all in one object) |
| `import x, { y } from 'module'` | Default + named imports              |
| `await import('module')`        | Dynamic import                       |
