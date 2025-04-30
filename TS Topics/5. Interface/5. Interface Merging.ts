/* 

# Interface Merging in TypeScript

In TypeScript, **Interface Merging** allows multiple declarations of the same interface name to be automatically merged by the compiler.

---

## 🧠 What is Interface Merging?

When two or more `interface` declarations share the same name in the same scope, TypeScript combines their members into a single interface. This is called **declaration merging**.

---

## ✅ Basic Example

```ts
interface Person {
  name: string;
}

interface Person {
  age: number;
}

const john: Person = {
  name: "John",
  age: 30,
};
```

### ✅ Resulting Merged Interface:
```ts
interface Person {
  name: string;
  age: number;
}
```

---

## 🧩 Merging Methods (Overloading)

If method names match, TypeScript treats them as **overloads**:

```ts
interface Logger {
  log(message: string): void;
}

interface Logger {
  log(message: string, level: number): void;
}

class MyLogger implements Logger {
  log(message: string, level?: number): void {
    if (level !== undefined) {
      console.log(`[Level ${level}] ${message}`);
    } else {
      console.log(message);
    }
  }
}
```

---

## 🏗️ Merging with Namespaces

You can merge an interface with a namespace to attach **static members**:

```ts
interface Vehicle {
  brand: string;
}

namespace Vehicle {
  export function getType(): string {
    return "Car";
  }
}

const car: Vehicle = { brand: "Toyota" };
console.log(Vehicle.getType()); // Car
```

---

## ⚠️ Interface Merging Rules

| Rule | Description |
|------|-------------|
| **Unique Properties** | Must not have conflicting types. |
| **Method Overloads** | Merged as function overloads. |
| **Only Interfaces** | Only `interface` supports merging, **not `type` aliases**. |
| **Cross File Support** | Merged even across files if in the same namespace/module. |

---

## ❌ Merging Doesn’t Work with `type`

```ts
type Animal = {
  name: string;
};

// ❌ Error: Duplicate identifier 'Animal'
// type Animal = {
//   age: number;
// };
```

---

## 📦 Real-World Example: Extending Window Object

```ts
interface Window {
  myAppVersion: string;
}

window.myAppVersion = "1.0.0";
console.log(window.myAppVersion); // 1.0.0
```

---

## 📝 Summary

- ✅ Interfaces with the same name are merged.
- ✅ Merging supports method overloading.
- ❌ Not possible with `type`.
- ✅ Useful for extending built-in or third-party types.

 */

/* 
# Merging Interfaces in TypeScript

## What is Interface Merging?
In **TypeScript**, if you declare multiple interfaces with the **same name**, TypeScript **automatically merges** them into a single interface.

---

## Example 1: Basic Interface Merging

```typescript
// First declaration
interface User {
  name: string;
}

// Second declaration (same name)
interface User {
  age: number;
}

// Now 'User' has both properties: 'name' and 'age'
const user: User = {
  name: "Alice",
  age: 30
};
```

### Explanation:
- The `User` interface is declared **twice**.
- TypeScript **merges** them into a **single `User` interface**.
- You must provide both `name` and `age` when creating an object.

---

## Example 2: Merging Interfaces with Functions

```typescript
// First declaration
interface Logger {
  log(message: string): void;
}

// Second declaration
interface Logger {
  error(errorMessage: string): void;
}

// 'Logger' now has both 'log' and 'error' methods
class ConsoleLogger implements Logger {
  log(message: string) {
    console.log("LOG:", message);
  }

  error(errorMessage: string) {
    console.error("ERROR:", errorMessage);
  }
}
```

### Explanation:
- Both `log` and `error` methods are **merged**.
- `ConsoleLogger` must **implement both methods**.

---

## Example 3: Function Overloads with Interface Merging

```typescript
// First declaration
interface Adder {
  (a: number, b: number): number;
}

// Second declaration
interface Adder {
  (a: string, b: string): string;
}

const add: Adder = (a: any, b: any) => a + b;

// Usage
console.log(add(5, 10));     // 15
console.log(add("5", "10")); // "510"
```

### Explanation:
- `Adder` supports both **number addition** and **string concatenation**.
- Function signatures are merged.

---

## Important Rules About Merging
- If **properties** have the same name, their **types must be compatible**.
- **Function signatures** (overloads) are **combined**.

---

## Summary

| Topic                  | Description |
|-------------------------|-------------|
| When?                   | When two interfaces have the same name. |
| How?                    | TypeScript merges their members together. |
| Key thing to watch for  | Conflicting property types must be compatible. |
| Useful for              | Extending types, modular design, adding features later. |

---

## Tip
Interface merging is especially useful when working with **third-party libraries** or **modular app design**.

*/



