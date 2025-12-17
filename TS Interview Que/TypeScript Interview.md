Great choice 👍
Since you’re preparing **Full-Stack (Angular + Node.js)** and already have solid frontend/backend experience, below is a **complete TypeScript interview preparation guide** — from **basic → advanced → Angular & Node.js–specific → coding questions**.

This is structured exactly how interviewers ask questions.

---

# 🔹 TypeScript Interview Questions & Answers (Complete Guide)

---

## 1️⃣ TypeScript Basics

### 1. What is TypeScript?

**Answer:**
TypeScript is a **superset of JavaScript** developed by Microsoft that adds **static typing**, **interfaces**, and **compile-time checks** to JavaScript. It compiles into plain JavaScript.

---

### 2. Why use TypeScript instead of JavaScript?

**Answer:**

* Static typing
* Better IDE support (IntelliSense)
* Compile-time error detection
* Object-oriented programming support
* Scalable for large applications (Angular)

---

### 3. Is TypeScript interpreted or compiled?

**Answer:**
TypeScript is **compiled** into JavaScript using the TypeScript compiler (`tsc`).

---

### 4. What are the advantages of TypeScript?

**Answer:**

* Early bug detection
* Improved code readability
* Better refactoring
* Supports ES6+ features
* Strong typing

---

### 5. What are the disadvantages of TypeScript?

**Answer:**

* Additional compilation step
* Learning curve
* Slightly more verbose code

---

## 2️⃣ Data Types

### 6. What are the basic data types in TypeScript?

**Answer:**

* `string`
* `number`
* `boolean`
* `array`
* `tuple`
* `enum`
* `any`
* `unknown`
* `void`
* `null`
* `undefined`
* `never`
* `object`

---

### 7. Difference between `any` and `unknown`?

**Answer:**

| any                 | unknown                    |
| ------------------- | -------------------------- |
| No type checking    | Type-safe                  |
| Can assign anything | Must check type before use |
| Avoid in large apps | Preferred over `any`       |

```ts
let a: any = 10;
let u: unknown = 10;
```

---

### 8. What is `never` type?

**Answer:**
Represents values that **never occur**, such as functions that throw errors or infinite loops.

```ts
function error(): never {
  throw new Error("Error");
}
```

---

### 9. What is `void`?

**Answer:**
Used when a function does not return any value.

```ts
function log(): void {
  console.log("Hello");
}
```

---

### 10. What is a tuple?

**Answer:**
A tuple allows fixed-length arrays with specific types.

```ts
let user: [number, string] = [1, "Krishna"];
```

---

## 3️⃣ Type Inference & Assertions

### 11. What is type inference?

**Answer:**
TypeScript automatically infers the type based on the assigned value.

```ts
let x = 10; // inferred as number
```

---

### 12. What is type assertion?

**Answer:**
Telling TypeScript about a more specific type.

```ts
let val: unknown = "Hello";
let len = (val as string).length;
```

---

### 13. Difference between `as` and `< >` assertion?

**Answer:**
`as` is preferred, especially in Angular.

```ts
let value = val as string;
```

---

## 4️⃣ Interfaces vs Types

### 14. What is an interface?

**Answer:**
Defines the structure of an object.

```ts
interface User {
  id: number;
  name: string;
}
```

---

### 15. Difference between `interface` and `type`?

| interface            | type                       |
| -------------------- | -------------------------- |
| Can be extended      | Can use union/intersection |
| Can be merged        | Cannot be merged           |
| Preferred in Angular | Flexible                   |

---

### 16. Can interfaces be merged?

**Answer:**
Yes, TypeScript allows declaration merging.

```ts
interface User { name: string; }
interface User { age: number; }
```

---

## 5️⃣ Functions

### 17. Optional and default parameters?

**Answer:**

```ts
function greet(name?: string) {}
function greet(name = "Guest") {}
```

---

### 18. What are rest parameters?

**Answer:**

```ts
function sum(...nums: number[]) {
  return nums.reduce((a, b) => a + b);
}
```

---

### 19. Function overloading?

**Answer:**

```ts
function add(a: number, b: number): number;
function add(a: string, b: string): string;
function add(a: any, b: any) {
  return a + b;
}
```

---

## 6️⃣ Classes & OOP

### 20. Access modifiers in TypeScript?

**Answer:**

* `public` (default)
* `private`
* `protected`

---

### 21. What is readonly?

**Answer:**
Prevents reassignment after initialization.

```ts
readonly id: number;
```

---

### 22. What is inheritance?

**Answer:**

```ts
class Parent {}
class Child extends Parent {}
```

---

### 23. Abstract class?

**Answer:**
A class that cannot be instantiated.

```ts
abstract class Shape {
  abstract area(): number;
}
```

---

### 24. Difference between abstract class & interface?

**Answer:**

* Abstract class can have implementation
* Interface cannot

---

## 7️⃣ Enums

### 25. What is enum?

**Answer:**

```ts
enum Role {
  Admin,
  User
}
```

---

### 26. Types of enums?

**Answer:**

* Numeric enum
* String enum
* Heterogeneous enum (not recommended)

---

## 8️⃣ Generics (VERY IMPORTANT)

### 27. What are generics?

**Answer:**
Generics allow reusable, type-safe components.

```ts
function identity<T>(value: T): T {
  return value;
}
```

---

### 28. Generic constraints?

**Answer:**

```ts
function logLength<T extends { length: number }>(item: T) {}
```

---

## 9️⃣ Advanced Types

### 29. Union & Intersection types?

**Answer:**

```ts
type A = string | number;
type B = A & { id: number };
```

---

### 30. What is `keyof`?

**Answer:**

```ts
type Keys = keyof User;
```

---

### 31. What is `typeof`?

**Answer:**
Used to get type of a variable.

```ts
type T = typeof user;
```

---

### 32. Mapped types?

**Answer:**

```ts
type ReadOnly<T> = {
  readonly [P in keyof T]: T[P];
};
```

---

### 33. Utility Types (IMPORTANT)

**Answer:**

* `Partial<T>`
* `Required<T>`
* `Readonly<T>`
* `Pick<T, K>`
* `Omit<T, K>`
* `Record<K, T>`

---

## 🔟 TypeScript with Angular

### 34. Why TypeScript is mandatory in Angular?

**Answer:**
Angular is built using TypeScript and relies on:

* Decorators
* Interfaces
* Strong typing
* Dependency Injection

---

### 35. What are decorators?

**Answer:**

```ts
@Component({...})
@Injectable()
```

Decorators add metadata to classes.

---

### 36. What is strict mode in TypeScript?

**Answer:**
Enables strict type-checking.

```json
"strict": true
```

---

## 1️⃣1️⃣ TypeScript with Node.js

### 37. How to run TypeScript in Node.js?

**Answer:**

* Use `ts-node`
* Compile using `tsc`

---

### 38. What is `tsconfig.json`?

**Answer:**
Configuration file for TypeScript compiler.

Important options:

* `target`
* `module`
* `strict`
* `outDir`
* `rootDir`

---

### 39. Difference between `interface` and `class` in Node?

**Answer:**

* Interface: Compile-time only
* Class: Exists at runtime

---

## 1️⃣2️⃣ Common Coding Questions

### 40. Remove duplicates from array

```ts
const arr = [1,2,2,3];
const unique = [...new Set(arr)];
```

---

### 41. Type-safe API response

```ts
interface ApiResponse<T> {
  data: T;
  status: number;
}
```

---

### 42. Create a generic service

```ts
class DataService<T> {
  getData(): T[] {
    return [];
  }
}
```

---

## 🎯 Interview Tips for You (Angular + Node)

✔ Focus more on **Generics, Utility Types, Interfaces**
✔ Be confident explaining **why TypeScript is used in Angular**
✔ Expect **coding + theory mix**
✔ Avoid `any` — mention `unknown`


