In TypeScript, a **Namespace** is a way to logically group related code to avoid name collisions and make the code more modular and manageable. Namespaces are primarily used to organize code in a global context and were more popular before ES6 modules became standard. However, they are still useful in some scenarios, especially when you're not using modules or need to include multiple scripts on the same page.

---

## 🔸 What is a Namespace?

A **namespace** is a container that holds a set of related functionalities such as functions, classes, interfaces, constants, etc. It allows you to encapsulate code and avoid polluting the global scope.

### Syntax:

```typescript
namespace MyNamespace {
  // code inside the namespace
}
```

---

## 🔸 Example: Basic Namespace

```typescript
namespace MathOperations {
  export function add(x: number, y: number): number {
    return x + y;
  }

  export function subtract(x: number, y: number): number {
    return x - y;
  }
}

// Usage
console.log(MathOperations.add(10, 5)); // Output: 15
console.log(MathOperations.subtract(10, 5)); // Output: 5
```

### Explanation:

- `MathOperations` is the namespace.
- `export` keyword makes functions accessible outside the namespace.
- Without `export`, they are private to the namespace.

---

## 🔸 Nesting Namespaces

Namespaces can be nested within one another.

```typescript
namespace Company {
  export namespace Department {
    export function getName(): string {
      return "Development";
    }
  }
}

console.log(Company.Department.getName()); // Output: Development
```

---

## 🔸 Using Interface and Class in Namespace

```typescript
namespace Animals {
  export interface Animal {
    name: string;
    makeSound(): void;
  }

  export class Dog implements Animal {
    name: string;

    constructor(name: string) {
      this.name = name;
    }

    makeSound(): void {
      console.log("Woof!");
    }
  }
}

const myDog = new Animals.Dog("Buddy");
myDog.makeSound(); // Output: Woof!
```

---

## 🔸 Alias for Namespace

You can create an alias to shorten access to a namespace:

```typescript
namespace Shapes {
  export namespace Circle {
    export function area(radius: number): number {
      return Math.PI * radius * radius;
    }
  }
}

import CircleArea = Shapes.Circle;

console.log(CircleArea.area(5)); // Output: 78.53981633974483
```

---

## 🔸 Compiling Namespaces

When using namespaces in TypeScript, especially in browser-based applications, you'll typically compile them using the `--outFile` option:

```bash
tsc --outFile app.js file1.ts file2.ts
```

This merges all files into a single output file where namespaces help manage scope.

---

## 🔸 Namespace vs Module

| Feature     | Namespace                                 | Module (ES6 Module)                |
| ----------- | ----------------------------------------- | ---------------------------------- |
| Scope       | Global (wrapped in a namespace)           | File-based (each file is a module) |
| Use         | Pre-ES6, or when modules aren't supported | Modern TypeScript / JS projects    |
| Syntax      | `namespace X { }`                         | `export` / `import`                |
| Compilation | Use `--outFile`                           | Use `--module`                     |

> ✅ **Recommendation**: Use **modules** (`import/export`) for modern development. Use **namespaces** in legacy projects or when not using a module loader.

---

Would you like a real-world example using HTML and namespaces in a browser context?
