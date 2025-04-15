# 📘 Chapter 5: Interfaces in TypeScript

---

## 🔹 What is an Interface?

An **interface** is a TypeScript structure used to **define the shape of an object**, specifying which properties and methods it should have — without providing implementation.

```ts
interface Person {
  name: string;
  age: number;
}

const user: Person = {
  name: "Alice",
  age: 30,
};
```

✅ Interfaces provide structure, **type-checking**, and **contract enforcement** for object types.

---

## 🔄 Difference Between Interface and Type Alias

| Feature             | `interface`             | `type`                            |
| ------------------- | ----------------------- | --------------------------------- |
| Extension           | Can be extended easily  | Can use intersections (`&`)       |
| Declaration Merging | Supported               | ❌ Not supported                  |
| Use Case            | Recommended for objects | Used for primitives, unions, etc. |

**Example:**

```ts
interface Car {
  brand: string;
}

type Color = "Red" | "Blue";
```

---

## 📦 Defining & Using Interfaces

### Basic Object Structure

```ts
interface Product {
  id: number;
  name: string;
  price: number;
}

const laptop: Product = {
  id: 101,
  name: "MacBook",
  price: 1500,
};
```

### Optional Properties

```ts
interface User {
  name: string;
  email?: string; // optional
}

const user1: User = { name: "John" };
```

### Readonly Properties

```ts
interface Config {
  readonly appName: string;
}

const config: Config = { appName: "MyApp" };
// config.appName = "NewApp"; ❌ Error
```

---

## 🧰 Interface for Functions

You can also define the shape of a function using interfaces.

```ts
interface AddFn {
  (a: number, b: number): number;
}

const add: AddFn = (x, y) => x + y;
```

---

## 🧬 Interface for Class Implementation

Interfaces can enforce a class to follow a specific structure.

```ts
interface Animal {
  name: string;
  sound(): void;
}

class Dog implements Animal {
  name: string;

  constructor(name: string) {
    this.name = name;
  }

  sound(): void {
    console.log("Bark!");
  }
}
```

---

## 🧱 Extending Interfaces

An interface can extend one or more interfaces to build upon them.

```ts
interface Shape {
  color: string;
}

interface Circle extends Shape {
  radius: number;
}

const myCircle: Circle = {
  color: "red",
  radius: 5,
};
```

You can also **extend multiple interfaces**:

```ts
interface A {
  a: string;
}
interface B {
  b: number;
}
interface AB extends A, B {}

const ab: AB = { a: "Hello", b: 42 };
```

---

## 🧠 Summary

| Feature              | Description                                  |
| -------------------- | -------------------------------------------- |
| Object Shape         | Define structure with required/optional keys |
| Interface vs Type    | Interface is best for objects and contracts  |
| Function Signatures  | Can describe function shapes                 |
| Class Implementation | Enforces class to follow a pattern           |
| Extension            | Interfaces can extend other interfaces       |
