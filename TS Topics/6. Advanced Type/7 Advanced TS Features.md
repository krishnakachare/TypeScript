Great! Now let’s explore **Advanced TypeScript Features**, which are essential for writing scalable, efficient, and maintainable applications.

---

# 📘 Chapter 7: Advanced TypeScript Features

---

## 🔹 Generics: Writing Reusable Code

Generics allow us to write **reusable and type-safe** functions, classes, and interfaces.

### 🛠 Generic Function

A function that works with different types:

```ts
function identity<T>(arg: T): T {
  return arg;
}

console.log(identity<number>(10)); // Output: 10
console.log(identity<string>("Hello")); // Output: Hello
```

### 🏗️ Generic Interface

```ts
interface Box<T> {
  value: T;
}

const numberBox: Box<number> = { value: 100 };
const stringBox: Box<string> = { value: "TypeScript" };
```

### 🏛️ Generic Class

```ts
class Storage<T> {
  private items: T[] = [];

  addItem(item: T) {
    this.items.push(item);
  }

  getItems(): T[] {
    return this.items;
  }
}

const numStorage = new Storage<number>();
numStorage.addItem(5);
```

---

## 🔍 Type Guards: Checking Types at Runtime

### 🛠 `typeof` Type Guard

```ts
function printId(id: number | string) {
  if (typeof id === "string") {
    console.log(`ID: ${id.toUpperCase()}`);
  } else {
    console.log(`ID: ${id}`);
  }
}
```

### 🏗️ `instanceof` Type Guard

```ts
class Car {
  drive() {
    console.log("Driving...");
  }
}

class Boat {
  sail() {
    console.log("Sailing...");
  }
}

function move(vehicle: Car | Boat) {
  if (vehicle instanceof Car) {
    vehicle.drive();
  } else {
    vehicle.sail();
  }
}
```

### 🏛️ Custom Type Guard

```ts
interface Cat {
  meow(): void;
}

function isCat(animal: any): animal is Cat {
  return (animal as Cat).meow !== undefined;
}
```

---

## 🔄 Mapped Types: Transforming Types

Mapped types allow modifying an existing type dynamically.

### 🛠 Example: Making Properties Optional

```ts
type PartialPerson = {
  [K in keyof Person]?: Person[K];
};
```

---

## 🔀 Conditional Types: Dynamic Type Selection

Conditional types use `extends` to **evaluate** a condition.

```ts
type IsString<T> = T extends string ? "Yes" : "No";

type A = IsString<string>; // "Yes"
type B = IsString<number>; // "No"
```

---

## 🧰 Utility Types: Prebuilt Type Modifiers

| Utility Type  | Description                             |
| ------------- | --------------------------------------- |
| `Partial<T>`  | Makes all properties optional           |
| `Required<T>` | Makes all properties required           |
| `Readonly<T>` | Prevents modification of properties     |
| `Pick<T, K>`  | Selects specific properties from a type |
| `Omit<T, K>`  | Removes specific properties from a type |

### 🛠 Example:

```ts
interface User {
  id: number;
  name: string;
  email: string;
}

type PartialUser = Partial<User>;
type ReadonlyUser = Readonly<User>;
```

---

## 🧠 Summary

| Feature               | Description                            |
| --------------------- | -------------------------------------- |
| **Generics**          | Enables reusability with type safety   |
| **Type Guards**       | Helps in runtime type checking         |
| **Mapped Types**      | Modifies existing types dynamically    |
| **Conditional Types** | Uses conditions to define types        |
| **Utility Types**     | Prebuilt helpers for common operations |
