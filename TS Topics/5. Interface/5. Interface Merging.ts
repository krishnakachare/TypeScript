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
