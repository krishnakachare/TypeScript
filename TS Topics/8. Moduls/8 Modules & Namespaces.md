Great! Now, let’s move on to **Chapter 8: Working with Modules and Namespaces**—a crucial topic for organizing TypeScript code efficiently.

---

# 📘 Chapter 8: Working with Modules and Namespaces

---

## 🔹 Why Use Modules and Namespaces?

- **Encapsulation**: Helps avoid global scope pollution.
- **Code Organization**: Divides code into reusable and maintainable pieces.
- **Reusability**: Modules can be imported and reused across multiple files.
- **Scalability**: Large applications benefit from modular code.

---

## 🔄 TypeScript Modules

Modules in TypeScript are based on the **ES6 module system**, using `import` and `export` keywords.

### 🛠 Exporting and Importing Modules

#### **Named Export**

```ts
// math.ts
export function add(a: number, b: number): number {
  return a + b;
}
export const PI = 3.14;
```

```ts
// app.ts
import { add, PI } from "./math";

console.log(add(2, 3)); // Output: 5
console.log(PI); // Output: 3.14
```

#### **Default Export**

```ts
// logger.ts
export default function log(message: string): void {
  console.log(message);
}
```

```ts
// app.ts
import log from "./logger";

log("Hello, TypeScript!");
```

---

## 🔀 Module Syntax Variations

### **Wildcard Imports (`* as alias`)**

```ts
import * as MathUtils from "./math";

console.log(MathUtils.add(5, 10));
```

### **Re-exporting Modules**

```ts
// index.ts
export { add, PI } from "./math";
```

---

## 🏛️ TypeScript Namespaces

Namespaces are used to **logically group** related functionalities under a common name.

### 🏗️ Defining a Namespace

```ts
namespace Geometry {
  export class Circle {
    constructor(public radius: number) {}

    area(): number {
      return Math.PI * this.radius ** 2;
    }
  }
}
```

### 🛠 Using a Namespace

```ts
const circle = new Geometry.Circle(5);
console.log(circle.area());
```

---

## 🛠️ When to Use Modules vs. Namespaces

| Feature               | Modules (ES6)                  | Namespaces (Old)                      |
| --------------------- | ------------------------------ | ------------------------------------- |
| Code Organization     | ✅ Best for modern development | ✅ Good for internal organization     |
| Dependency Management | ✅ Works with `import/export`  | ❌ Needs `///<reference>` directive   |
| Scalability           | ✅ Highly scalable             | ❌ Less recommended in large projects |

> **Recommendation**: Use **Modules** for modern development. **Namespaces** are mostly used in legacy code.

---

## 🧠 Summary

| Feature            | Description                                  |
| ------------------ | -------------------------------------------- |
| **Modules**        | Based on ES6 module system (`import/export`) |
| **Namespaces**     | Helps organize internal code (`namespace`)   |
| **Default Export** | Allows exporting a single entity             |
| **Named Export**   | Exports multiple values with names           |
