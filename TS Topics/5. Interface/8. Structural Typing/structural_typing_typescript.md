# Structural Typing in TypeScript

**Structural Typing** in TypeScript is a way of comparing types based on their actual structure (the shape of the data) rather than their declared names or where they were defined. This concept is also known as **"duck typing"**, which follows the idea:

> “If it walks like a duck and quacks like a duck, it's a duck.”

TypeScript uses **structural typing** rather than **nominal typing** (used in languages like Java or C#), which means two types are considered compatible if their members are compatible.

---

## 🔍 Key Concept

In structural typing, **type compatibility is determined by the actual properties and methods a type has**, not by its name or explicit relationship.

---

## ✅ Example: Basic Structural Typing

```typescript
interface Person {
  name: string;
  age: number;
}

function greet(person: Person) {
  console.log(\`Hello, \${person.name}\`);
}

const user = {
  name: "Alice",
  age: 30,
  city: "New York" // extra property
};

greet(user); // ✅ Allowed! Structure matches `Person`
```

### 🔎 Explanation

- `user` has all required properties (`name`, `age`) of the `Person` interface.
- The extra `city` property is ignored because it's not required by `Person`.
- This is **structural compatibility** — TypeScript only checks whether the required structure is present.

---

## ❌ Example: Incompatible Structure

```typescript
const incompleteUser = {
  name: "Bob",
};

greet(incompleteUser); // ❌ Error: Property 'age' is missing
```

Here, the structure of `incompleteUser` does **not** match the `Person` interface — it's **structurally incompatible**.

---

## ✅ Example: Class Compatibility (Structural, not Nominal)

```typescript
class Dog {
  name: string;
  constructor(name: string) {
    this.name = name;
  }
}

interface Named {
  name: string;
}

const d: Named = new Dog("Buddy"); // ✅ OK: Dog has a 'name' property
```

Even though `Dog` does not explicitly implement the `Named` interface, it’s compatible because it has a `name` property.

---

## 📌 Use Case: Flexible APIs

Structural typing makes TypeScript useful for designing flexible APIs. You can accept any object that matches the expected structure, even if it comes from a different module or is defined inline.

---

## 🧠 Important Notes

1. **Excess property checks** apply in object literals passed directly to functions:

```typescript
greet({ name: "Alice", age: 30, city: "New York" }); // ❌ Error if strict checks are on
```

TypeScript may flag this as an error due to extra properties in object literals — this is a safeguard.

2. **Type Aliases and Interfaces** are structurally compared the same way:

```typescript
type Point = { x: number; y: number };
interface Coord {
  x: number;
  y: number;
}
let p: Point = { x: 1, y: 2 };
let c: Coord = p; // ✅ Compatible: same structure
```

---

## 🧩 Summary

| Feature             | Structural Typing                                 |
| ------------------- | ------------------------------------------------- |
| Basis of comparison | Structure (members & types)                       |
| Flexibility         | High — objects with matching shape                |
| Inheritance needed? | ❌ No explicit `extends` or `implements` required |
| Common in           | TypeScript, Go, JavaScript (dynamically)          |
