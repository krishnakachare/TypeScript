These three concepts are closely related, but they serve different purposes. They are also common interview questions.

---

# Quick Comparison

| Concept                   | What it does                                                                                      | Runtime Check? | Safe?             | Changes Actual Type? |
| ------------------------- | ------------------------------------------------------------------------------------------------- | -------------- | ----------------- | -------------------- |
| **Type Narrowing**        | TypeScript automatically (or through control flow) reduces a broader type to a more specific type | ✅ Yes         | ✅ Very Safe      | ❌ No                |
| **Type Guard**            | A technique used to perform a runtime check that enables type narrowing                           | ✅ Yes         | ✅ Very Safe      | ❌ No                |
| **Type Assertion** (`as`) | Tells TypeScript to trust you about a value's type                                                | ❌ No          | ⚠️ Depends on you | ❌ No                |

---

# 1. Type Narrowing

## Definition

Type narrowing is the process where TypeScript **reduces a variable's possible types** based on your code.

For example:

```ts
let value: string | number = "Hello";
```

Initially, TypeScript sees:

```ts
string | number;
```

Now:

```ts
if (typeof value === "string") {
  console.log(value.toUpperCase());
}
```

Inside the `if` block, TypeScript automatically narrows the type to:

```ts
string;
```

Outside the block, it is still:

```ts
string | number;
```

### Before narrowing

```
value
│
├── string
└── number
```

### After narrowing

```
value
│
└── string
```

So, **type narrowing is the result** of proving the type through code.

---

# 2. Type Guard

## Definition

A type guard is **the runtime check that allows TypeScript to narrow a type**.

Think of it like this:

```
Type Guard
      ↓
Type Narrowing
```

The guard performs a check, and TypeScript narrows the type based on the outcome.

---

## Example using `typeof`

```ts
let value: unknown = "TypeScript";

if (typeof value === "string") {
  console.log(value.toUpperCase());
}
```

Here:

```ts
typeof value === "string";
```

is the **type guard**.

Inside the block:

```ts
value;
```

is narrowed to:

```ts
string;
```

---

## Example using `instanceof`

```ts
class Dog {
  bark() {
    console.log("Woof");
  }
}

const pet: Dog | Date = new Dog();

if (pet instanceof Dog) {
  pet.bark();
}
```

Here:

```ts
pet instanceof Dog;
```

is the type guard.

---

## Example using `in`

```ts
type Car = {
  drive(): void;
};

type Boat = {
  sail(): void;
};

function move(vehicle: Car | Boat) {
  if ("drive" in vehicle) {
    vehicle.drive();
  } else {
    vehicle.sail();
  }
}
```

`"drive" in vehicle` is the type guard.

---

## User-defined Type Guard

```ts
type User = {
  name: string;
};

function isUser(value: unknown): value is User {
  return typeof value === "object" && value !== null && "name" in value;
}

const data: unknown = {
  name: "Krishna",
};

if (isUser(data)) {
  console.log(data.name);
}
```

Here:

```ts
value is User
```

creates a custom type guard.

---

# 3. Type Assertion

## Definition

Type assertion tells TypeScript:

> "I know the type better than you."

TypeScript does **not** perform any runtime check.

---

## Example

```ts
let value: unknown = "Hello";

const text = value as string;

console.log(text.toUpperCase());
```

You are telling TypeScript:

```
Treat value as a string.
```

TypeScript simply trusts you.

---

## Dangerous Example

```ts
let value: unknown = 100;

const text = value as string;

console.log(text.toUpperCase());
```

TypeScript compiles this.

At runtime:

```
TypeError:
text.toUpperCase is not a function
```

Why?

Because assertions don't validate the value—they only change how the compiler treats it.

---

# Does Type Assertion Convert Data?

**No.**

It only changes TypeScript's understanding of the type.

```ts
let value: unknown = 100;

const text = value as string;
```

Actual value:

```
100
```

It is **still a number**.

The assertion does **not** convert it into `"100"`.

---

# Type Conversion (Actual Conversion)

Type conversion changes the actual value.

```ts
let value = 100;

const text = String(value);

console.log(text);
```

Output:

```
"100"
```

The value has become a string.

Other examples:

```ts
Number("123");
Boolean(1);
String(100);
```

These perform real conversions at runtime.

---

# Assertion vs Conversion

### Type Assertion

```ts
let value: unknown = 100;

const text = value as string;
```

Actual value:

```
100
```

TypeScript thinks:

```
string
```

JavaScript value:

```
number
```

No conversion happens.

---

### Type Conversion

```ts
const text = String(100);
```

Actual value:

```
"100"
```

The value itself changes.

---

# Real-life Analogy

Imagine you receive a sealed box.

### Type Guard

You open the box to check what's inside.

```
if (box contains apples)
```

Now you know it's apples.

---

### Type Narrowing

After checking, you confidently say:

```
This box contains apples.
```

The set of possible contents has been narrowed.

---

### Type Assertion

You don't open the box.

You simply label it:

```
"Contains Apples"
```

If you're wrong, you'll only discover it later when you try to use it.

---

# Complete Example

```ts
function print(value: string | number) {
  // Type Guard
  if (typeof value === "string") {
    // Type Narrowing
    console.log(value.toUpperCase());
  } else {
    // Type Narrowing
    console.log(value.toFixed(2));
  }
}
```

Here:

- `typeof value === "string"` → **Type Guard**
- Inside each branch, `value` becomes `string` or `number` → **Type Narrowing**

---

Now compare with type assertion:

```ts
let value: unknown = "Hello";

// Type Assertion
const text = value as string;

console.log(text.toUpperCase());
```

No check is performed. TypeScript trusts your assertion.

---

# Summary

| Concept             | Purpose                                                                             | Example                                   |
| ------------------- | ----------------------------------------------------------------------------------- | ----------------------------------------- |
| **Type Guard**      | Checks the type at runtime                                                          | `typeof value === "string"`               |
| **Type Narrowing**  | The compiler refines a broader type to a more specific one after a successful check | Inside the `if`, `value` becomes `string` |
| **Type Assertion**  | Tells TypeScript to treat a value as a specific type without checking it            | `value as string`                         |
| **Type Conversion** | Actually converts the value at runtime                                              | `String(100)` → `"100"`                   |

### Easy way to remember

- **Type Guard** = _"Check first."_
- **Type Narrowing** = _"Now TypeScript knows the exact type."_
- **Type Assertion** = _"Trust me, I know the type."_
- **Type Conversion** = _"Change the value into a different type."_
