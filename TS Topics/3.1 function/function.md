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
