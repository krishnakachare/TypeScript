This is an important TypeScript interview topic. **Default Types** and **Constraints** serve completely different purposes.

| Feature                 | Default Type (`=`)                    | Constraint (`extends`)                            |
| ----------------------- | ------------------------------------- | ------------------------------------------------- |
| Purpose                 | Provides a fallback type              | Restricts which types are allowed                 |
| Syntax                  | `<T = string>`                        | `<T extends string>`                              |
| When used               | When TypeScript cannot infer the type | Every time a generic type is provided or inferred |
| Can accept other types? | Yes                                   | Only if they satisfy the constraint               |
| Prevents invalid types? | ❌ No                                 | ✅ Yes                                            |

---

# 1. Default Type (`=`)

A default type is used **only when no type is specified and TypeScript cannot infer one.**

### Syntax

```ts
function print<T = string>(value: T) {
  console.log(value);
}
```

### Example 1

```ts
function print<T = string>(value: T) {}

print("Hello");
```

TypeScript infers

```ts
T = string;
```

---

### Example 2

```ts
print(100);
```

TypeScript infers

```ts
T = number;
```

No error.

The default type is ignored because inference succeeded.

---

### Example 3

```ts
function create<T = string>() {
  return null as unknown as T;
}

const result = create();
```

Since there is nothing to infer,

```ts
T = string;
```

The default type is used.

---

# 2. Constraint (`extends`)

A constraint limits which types are allowed.

### Syntax

```ts
function print<T extends string>(value: T) {
  console.log(value);
}
```

Now only strings are allowed.

---

### Valid

```ts
print("JavaScript");
```

```
T = string
```

---

### Invalid

```ts
print(100);
```

Error

```
Type 'number' does not satisfy the constraint 'string'.
```

---

# Visual Difference

## Default Type

```ts
function demo<T = string>(value: T) {}
```

Allowed

```ts
demo("Hi"); // T = string
demo(10); // T = number
demo(true); // T = boolean
```

No errors.

The default doesn't restrict anything.

---

## Constraint

```ts
function demo<T extends string>(value: T) {}
```

Allowed

```ts
demo("Hi");
```

Not allowed

```ts
demo(10);
demo(true);
```

Compilation error.

---

# Example with Objects

## Default Type

```ts
function show<T = { name: string }>(obj: T) {
  console.log(obj);
}

show({ age: 25 });
```

This works.

TypeScript infers

```ts
T = { age: number };
```

The default object type is ignored.

---

## Constraint

```ts
function show<T extends { name: string }>(obj: T) {
  console.log(obj.name);
}
```

Valid

```ts
show({ name: "Krishna", age: 25 });
```

Invalid

```ts
show({ age: 25 });
```

Error

```
Property 'name' is missing.
```

---

# Combining Both

You can use both together.

```ts
function display<T extends string = string>(value: T) {
  console.log(value);
}
```

Meaning:

- If no type is provided → use `string`.
- Even if a type is provided → it must extend `string`.

Examples

```ts
display("Hello"); // ✅

display<string>("World"); // ✅

display<number>(10); // ❌ Error
```

---

# Real-world Example

Suppose you're creating an API response type.

### Without Constraint

```ts
interface ApiResponse<T = string> {
  data: T;
}
```

Allowed

```ts
let a: ApiResponse = {
  data: "Success",
};

let b: ApiResponse<number> = {
  data: 100,
};
```

Both are valid because `number` is allowed.

---

### With Constraint

```ts
interface ApiResponse<T extends object> {
  data: T;
}
```

Valid

```ts
let user: ApiResponse<{ name: string }> = {
  data: { name: "Krishna" },
};
```

Invalid

```ts
let value: ApiResponse<number> = {
  data: 10,
};
```

Error because `number` is not an object.

---

# Interview Summary

| Default Type (`=`)                                  | Constraint (`extends`)                   |
| --------------------------------------------------- | ---------------------------------------- |
| Acts as a fallback                                  | Acts as a filter                         |
| Used only if inference fails                        | Checked every time                       |
| Doesn't restrict types                              | Restricts types                          |
| Can be overridden by inference or explicit generics | Cannot be bypassed by incompatible types |
| Example: `<T = string>`                             | Example: `<T extends string>`            |

### Easy way to remember

- **Default (`=`)** → "If nobody tells me the type, I'll assume this."
- **Constraint (`extends`)** → "Only these kinds of types are allowed."
