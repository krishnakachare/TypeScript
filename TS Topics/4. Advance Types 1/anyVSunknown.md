This is one of the most important TypeScript interview topics. Although both `any` and `unknown` can hold values of **any type**, they behave very differently.

> **Simple definition:**
>
> - `any` = "TypeScript, don't check anything."
> - `unknown` = "I don't know the type yet, but you must verify it before using it."

---

# 1. `any`

`any` completely disables TypeScript's type checking.

It tells TypeScript:

> "Trust me. Don't perform any type checking."

## Example

```ts
let value: any = "Hello";

value.toUpperCase(); // ✅ Allowed
value.toFixed(2); // ✅ Allowed
value.someMethod(); // ✅ Allowed
value.xyz.abc(); // ✅ Allowed

// No compile-time error
```

Even though `"Hello"` doesn't have `toFixed()`, TypeScript doesn't complain.

At runtime:

```ts
let value: any = "Hello";

console.log(value.toFixed(2));
```

Output:

```
TypeError: value.toFixed is not a function
```

TypeScript failed to protect you.

---

# Why is `any` dangerous?

Consider:

```ts
function printLength(value: any) {
  console.log(value.length);
}

printLength(10);
```

TypeScript says:

```
No error
```

Runtime:

```
undefined
```

Even worse:

```ts
function test(value: any) {
  value();
}

test(10);
```

Runtime:

```
TypeError: value is not a function
```

TypeScript could have prevented this, but `any` disables all checking.

---

# 2. `unknown`

`unknown` is the **safe version** of `any`.

It means:

> "This variable can contain anything, but you cannot use it until you verify its type."

Example:

```ts
let value: unknown = "Hello";

value.toUpperCase();
```

Error:

```
Object is of type 'unknown'.
```

TypeScript forces you to check the type first.

---

# Correct way

```ts
let value: unknown = "Hello";

if (typeof value === "string") {
  console.log(value.toUpperCase());
}
```

Output

```
HELLO
```

---

# Why does `unknown` exist?

Suppose data comes from an API.

```ts
const response: unknown = fetchData();
```

TypeScript doesn't know whether the API returned:

- string
- number
- object
- array
- null

So it forces you to validate the data.

```ts
if (typeof response === "object") {
  console.log(response);
}
```

This prevents many runtime bugs.

---

# Comparison

## Using `any`

```ts
let data: any = 10;

data.toUpperCase();
```

No compile error.

Runtime:

```
TypeError
```

---

## Using `unknown`

```ts
let data: unknown = 10;

data.toUpperCase();
```

Compile error:

```
Object is of type 'unknown'
```

TypeScript catches the mistake before the code runs.

---

# Type Narrowing

The main purpose of `unknown` is **type narrowing**.

Example:

```ts
let value: unknown = "TypeScript";

if (typeof value === "string") {
  console.log(value.toUpperCase());
}
```

TypeScript now knows:

```
value is string
```

---

Another example:

```ts
let value: unknown = 100;

if (typeof value === "number") {
  console.log(value.toFixed(2));
}
```

Output

```
100.00
```

---

# Working with Objects

```ts
let person: unknown = {
  name: "Krishna",
  age: 28,
};
```

Cannot do:

```ts
console.log(person.name);
```

Error:

```
Object is of type 'unknown'
```

Need to check first:

```ts
if (typeof person === "object" && person !== null && "name" in person) {
  console.log(person.name);
}
```

---

# Function Parameters

Using `any`

```ts
function display(value: any) {
  console.log(value.toUpperCase());
}

display(10);
```

Compiles.

Runtime error.

---

Using `unknown`

```ts
function display(value: unknown) {
  if (typeof value === "string") {
    console.log(value.toUpperCase());
  }
}

display(10);
display("hello");
```

Output

```
HELLO
```

No runtime error.

---

# Assignability

## `any`

```ts
let value: any = 10;

let num: number = value;
let str: string = value;
let obj: object = value;
```

Everything is allowed.

---

## `unknown`

```ts
let value: unknown = 10;

let num: number = value;
```

Error:

```
Type 'unknown' is not assignable to type 'number'.
```

Need assertion or narrowing.

```ts
if (typeof value === "number") {
  let num: number = value;
}
```

---

# Type Assertion

Sometimes you already know the type.

```ts
let value: unknown = "Hello";

let text = value as string;

console.log(text.toUpperCase());
```

Output

```
HELLO
```

---

# Real-world Example

Suppose you receive JSON from an API.

### Using `any`

```ts
const user: any = JSON.parse(data);

console.log(user.name.toUpperCase());
```

If `name` doesn't exist:

```
Runtime Error
```

---

### Using `unknown`

```ts
const user: unknown = JSON.parse(data);

if (typeof user === "object" && user !== null && "name" in user) {
  console.log((user as { name: string }).name.toUpperCase());
}
```

Safer and more reliable.

---

# Feature Comparison

| Feature                    | `any`       | `unknown`                        |
| -------------------------- | ----------- | -------------------------------- |
| Can store any value        | ✅          | ✅                               |
| Type checking              | ❌ Disabled | ✅ Enabled                       |
| Access properties directly | ✅          | ❌                               |
| Call methods directly      | ✅          | ❌                               |
| Assign to other types      | ✅          | ❌ (without narrowing/assertion) |
| Requires type checking     | ❌          | ✅                               |
| Runtime safety             | ❌ Low      | ✅ High                          |
| Recommended in production  | ❌ Rarely   | ✅ Yes                           |

---

# Interview Question

### Why was `unknown` introduced if `any` already exists?

**Answer:**

`any` disables TypeScript's type safety, which can lead to runtime errors. `unknown` was introduced as a **type-safe alternative**. It can hold any value, but TypeScript requires you to narrow or assert its type before you access properties, call methods, or assign it to more specific types. This catches many mistakes at compile time while still allowing you to work with values whose types are not yet known (such as API responses or user input).

---

# Best Practices

- ✅ Use `unknown` when the value's type is genuinely unknown (API responses, external libraries, `JSON.parse`, user input).
- ✅ Narrow the type using `typeof`, `instanceof`, custom type guards, or the `in` operator before using the value.
- ❌ Avoid `any` unless there is no practical alternative (for example, when gradually migrating a large JavaScript codebase to TypeScript or interacting with poorly typed third-party libraries).

## Quick Summary

| `any`                                | `unknown`                                    |
| ------------------------------------ | -------------------------------------------- |
| Opts out of TypeScript type checking | Preserves TypeScript type safety             |
| Allows any operation                 | Requires type narrowing before operations    |
| Can hide bugs until runtime          | Helps catch bugs at compile time             |
| Use sparingly                        | Preferred whenever the type is not yet known |

**Easy way to remember:**

- **`any` = "I don't care about type safety."**
- **`unknown` = "I don't know the type yet, so I'll check it before using it."**
