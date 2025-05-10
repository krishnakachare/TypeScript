# Interface vs Type Alias vs Abstract Class in TypeScript

Understanding the differences between **Interface**, **Type Alias**, and **Abstract Class** is essential for designing clean and scalable TypeScript applications.

---

## 🔍 Comparison Table

| Feature                 | Interface                           | Type Alias                       | Abstract Class                                     |
| ----------------------- | ----------------------------------- | -------------------------------- | -------------------------------------------------- |
| **Purpose**             | Defines a contract for object shape | Defines a type for any structure | Provides a base class for inheritance              |
| **Extensibility**       | Can extend other interfaces         | Can use intersections            | Can extend other classes and implement interfaces  |
| **Implementation**      | Cannot contain implementations      | Cannot contain implementations   | Can include actual method/property implementations |
| **Instances**           | No runtime output                   | No runtime output                | Can be instantiated via subclasses                 |
| **Usage**               | Objects, classes, functions         | Objects, primitives, unions      | Class-based inheritance                            |
| **Declaration merging** | ✅ Yes                              | ❌ No                            | ❌ No                                              |

---

## 1️⃣ Interface

### ✅ Use When:

- Defining the structure of objects or classes.
- Want to use declaration merging.
- Want to enforce class contracts.

### ✍️ Example:

```ts
interface IUser {
  name: string;
  age: number;
  greet(): void;
}

class User implements IUser {
  constructor(public name: string, public age: number) {}

  greet(): void {
    console.log(`Hello, I am ${this.name}`);
  }
}
```

---

## 2️⃣ Type Alias

### ✅ Use When:

- Defining unions, intersections, or complex nested types.
- You need flexibility beyond just object structures.
- You want to define primitive, tuple, or array types.

### ✍️ Example:

```ts
// Object structure
type User = {
  name: string;
  age: number;
};

// Union Type
type Status = "active" | "inactive";

// Intersection Type
type Admin = User & {
  role: "admin";
};

const adminUser: Admin = {
  name: "Alice",
  age: 30,
  role: "admin",
};
```

> ❗️Note: Type Aliases **can** represent all that interfaces do and more, but they do not support declaration merging.

---

## 3️⃣ Abstract Class

### ✅ Use When:

- Creating a base class with shared logic.
- Providing some default implementation but requiring child classes to complete others.
- Enforcing a structure while also allowing some logic reuse.

### ✍️ Example:

```ts
abstract class Animal {
  constructor(public name: string) {}

  abstract makeSound(): void;

  move(): void {
    console.log(`${this.name} is moving`);
  }
}

class Dog extends Animal {
  makeSound(): void {
    console.log("Woof! Woof!");
  }
}

const myDog = new Dog("Buddy");
myDog.move(); // Buddy is moving
myDog.makeSound(); // Woof! Woof!
```

---

## 🔁 Interface vs Type Alias – In Practice

### 🔷 Similar:

```ts
interface A {
  name: string;
}

type B = {
  name: string;
};
```

Both work identically in this case.

---

### 🔶 Different:

#### ✅ Declaration Merging with Interface:

```ts
interface A {
  name: string;
}

interface A {
  age: number;
}

const obj: A = { name: "John", age: 30 }; // ✅ Works
```

#### ❌ Not possible with Type:

```ts
type A = {
  name: string;
};

// ❌ Error: Duplicate identifier
// type A = {
//   age: number;
// };
```

---

## 🏁 Summary

| Feature            | Interface                      | Type Alias                                 | Abstract Class               |
| ------------------ | ------------------------------ | ------------------------------------------ | ---------------------------- |
| **Use For**        | Object shapes, class contracts | Objects, primitives, unions, intersections | Base class with shared logic |
| **Inheritance**    | `extends`                      | `&` (intersection)                         | `extends`, `implements`      |
| **Implementation** | No                             | No                                         | Yes (partial/complete)       |
| **Runtime Output** | None                           | None                                       | JS class (compiled)          |
| **Merging**        | ✅ Yes                         | ❌ No                                      | ❌ No                        |

---

## 🔧 Recommendation

| Use Case                             | Best Choice      |
| ------------------------------------ | ---------------- |
| Object shape                         | Interface / Type |
| Multiple inheritance                 | Interface        |
| Complex types (union/intersection)   | Type             |
| Shared logic with enforced structure | Abstract Class   |

---
