Absolutely! Here's a **well-structured theoretical explanation** of **"TypeScript Basics"** along with **TypeScript code examples** for each concept — perfect for fullstack development preparation.

---

# 📘 Chapter 3: TypeScript Basics

---

## ✅ Type Inference vs Type Annotation

### Type Inference
TypeScript automatically infers the type from the assigned value.

```ts
let message = "Hello"; // inferred as string
let count = 5;         // inferred as number
```

### Type Annotation
You explicitly tell TypeScript the type of a variable.

```ts
let message: string = "Hello, TypeScript!";
let age: number = 25;
```

---

## 🧱 Core Types in TypeScript

### 1. `number`
Represents both integer and floating-point numbers.

```ts
let age: number = 30;
```

### 2. `string`
Represents textual data.

```ts
let username: string = "Alice";
```

### 3. `boolean`
Represents logical true/false values.

```ts
let isLoggedIn: boolean = true;
```

### 4. Literal Types
Restrict variable to a specific value.

```ts
let direction: "left" | "right" = "left";
```

### 5. `object`
Represents key-value pairs.

```ts
let person: { name: string; age: number } = {
  name: "John",
  age: 25,
};
```

### 6. `any` (❗ avoid when possible)
Opt-out of type checking.

```ts
let result: any = 5;
result = "Changed to string";
```

### 7. `unknown` (safer alternative to `any`)
Type-safe and forces type checking before use.

```ts
let input: unknown = "Text";
if (typeof input === "string") {
  console.log(input.toUpperCase());
}
```

### 8. Union Types (`|`)
Allow a value to be one of several types.

```ts
let id: number | string = 101;
id = "ABC123";
```

### 9. Arrays (`type[]`)
```ts
let scores: number[] = [90, 85, 75];
let mixedArray: (string | number)[] = ["A", 1, "B", 2];
```

### 10. Tuple (Fixed-length array with specific types)
```ts
let user: [string, number] = ["Alice", 30];
user.push("Developer"); // allowed in TypeScript
```

### 11. Type Alias (Custom Types)
Create reusable custom types.

```ts
type Employee = {
  name: string;
  id: number;
};

let emp: Employee = { name: "Jane", id: 101 };
```

Also useful for unions and intersections:
```ts
type Status = "active" | "inactive";
```

### 12. Enum
Define a set of named constants.

```ts
enum Direction {
  Up,
  Down,
  Left,
  Right
}

let move: Direction = Direction.Left;
```

### 13. Function Types
Define the shape of functions.

```ts
function greet(name: string): string {
  return "Hello " + name;
}
```

### 14. `void`
Used when a function doesn't return anything.

```ts
function logMessage(): void {
  console.log("Logging message...");
}
```

### 15. `undefined`
A value not assigned.

```ts
let notAssigned: undefined = undefined;
```

### 16. `never`
For functions that never return (e.g., throw errors or infinite loops).

```ts
function throwError(message: string): never {
  throw new Error(message);
}
```

---

## 🪄 Type Assertions

Force a value to be treated as a specific type.

```ts
let someValue: unknown = "TypeScript";
let length: number = (someValue as string).length;
// or: let length: number = (<string>someValue).length;
```

---

## 🔁 Functions in TypeScript

### Function Return Types
Specify what a function should return.

```ts
function add(a: number, b: number): number {
  return a + b;
}
```

### Optional & Default Parameters
- `?` makes a parameter optional.
- Assigning a value makes it default.

```ts
function greet(name: string, greeting: string = "Hello"): string {
  return `${greeting}, ${name}`;
}
```

### Rest Parameters
Handle a variable number of arguments.

```ts
function sum(...numbers: number[]): number {
  return numbers.reduce((a, b) => a + b, 0);
}
```

### Function Overloading
Define multiple function signatures.

```ts
function combine(a: number, b: number): number;
function combine(a: string, b: string): string;
function combine(a: any, b: any): any {
  return a + b;
}
```

---

## 🧠 Summary

| Concept              | Description                         |
|----------------------|-------------------------------------|
| Type Inference        | Automatically detect variable types |
| Type Annotation       | Explicitly set a variable's type    |
| `any` vs `unknown`    | Use `unknown` for safer typing      |
| Union & Tuple         | Support multiple and fixed types    |
| Function Overloading  | Different behaviors based on types  |
| Enum & Alias          | Define custom, readable types       |

---

Would you like me to continue with the next chapter — **Object-Oriented Programming in TypeScript** — or generate a downloadable Markdown file for this section?