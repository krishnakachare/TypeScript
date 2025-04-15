# 📘 Chapter 3: TypeScript Basics

## ✅ Type Inference vs Type Annotation

### Type Inference

TypeScript automatically infers the type from the assigned value.

```ts
let message = "Hello"; // inferred as string
let count = 5; // inferred as number
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
  Right,
}

let move: Direction = Direction.Left;
```

## 🪄 Type Assertions

Force a value to be treated as a specific type.

```ts
let someValue: unknown = "TypeScript";
let length: number = (someValue as string).length;
// or: let length: number = (<string>someValue).length;
```

---

## 🧠 Summary

| Concept              | Description                         |
| -------------------- | ----------------------------------- |
| Type Inference       | Automatically detect variable types |
| Type Annotation      | Explicitly set a variable's type    |
| `any` vs `unknown`   | Use `unknown` for safer typing      |
| Union & Tuple        | Support multiple and fixed types    |
| Function Overloading | Different behaviors based on types  |
| Enum & Alias         | Define custom, readable types       |
