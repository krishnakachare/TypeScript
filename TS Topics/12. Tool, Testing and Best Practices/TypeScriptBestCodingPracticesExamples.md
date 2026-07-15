# TypeScript Best Practices Interview Questions

## Section 1: Type Safety

### Q1. Why should we avoid using `any` in TypeScript?

**Expected Answer:**

- Disables type checking
- Loses IntelliSense
- Runtime errors are more likely
- Makes code difficult to maintain

---

### Q2. When should you use `unknown` instead of `any`?

**Expected Answer:**

Use `unknown` when the data type is not known at compile time because it forces type checking before use.

---

### Q3. How do you safely access an `unknown` value?

```ts
let value: unknown = "Hello";

if (typeof value === "string") {
  console.log(value.toUpperCase());
}
```

---

### Q4. Explain `strict` mode.

```json
{
  "compilerOptions": {
    "strict": true
  }
}
```

It enables:

- strictNullChecks
- noImplicitAny
- strictFunctionTypes
- strictPropertyInitialization
- strictBindCallApply

---

### Q5. Which compiler options do you always enable?

Good answer:

```json
{
  "strict": true,
  "noImplicitAny": true,
  "strictNullChecks": true,
  "noUnusedLocals": true,
  "noUnusedParameters": true,
  "noImplicitReturns": true
}
```

---

# Section 2: Interfaces & Types

### Q6. Why do you use interfaces?

Answer:

- Reusability
- Better readability
- Strong typing
- Easier maintenance

---

### Q7. Interface vs Type?

Interview summary:

| Interface                 | Type                                   |
| ------------------------- | -------------------------------------- |
| Best for object contracts | Best for unions, intersections, tuples |
| Can extend                | Can combine with `&`                   |
| Can merge declarations    | Cannot merge                           |

---

### Q8. Why avoid inline object types?

Instead of

```ts
const emp: {
  id: number;
  name: string;
};
```

Use

```ts
interface Employee {}
```

---

# Section 3: Null Safety

### Q9. Explain Optional Chaining.

```ts
user?.address?.city;
```

Avoids runtime errors when intermediate properties are `null` or `undefined`.

---

### Q10. Explain Nullish Coalescing.

```ts
const name = user.name ?? "Guest";
```

Only uses `"Guest"` if `user.name` is `null` or `undefined`.

---

### Q11. Why avoid the Non-Null Assertion (`!`)?

```ts
button!.click();
```

It suppresses compiler checks and can cause runtime errors.

---

# Section 4: Generics

### Q12. Why use Generics?

Avoids code duplication while preserving type safety.

```ts
function identity<T>(value: T): T {
  return value;
}
```

---

### Q13. Why not use `any` in generic functions?

Because generics preserve the actual type, while `any` loses it.

---

# Section 5: Type Guards

### Q14. What is a Type Guard?

A runtime check that narrows a variable's type.

Examples:

- `typeof`
- `instanceof`
- `in`
- User-defined type guards

---

### Q15. Why use Type Guards?

They make union types safe to use.

---

# Section 6: Readonly

### Q16. Why use `readonly`?

Prevents accidental modification.

```ts
readonly id: number;
```

---

### Q17. Why use `Readonly<T>`?

Creates an immutable version of a type.

---

# Section 7: Utility Types

### Q18. Which utility types have you used?

Examples:

- `Partial`
- `Required`
- `Readonly`
- `Pick`
- `Omit`
- `Record`
- `Exclude`
- `Extract`

---

### Q19. Why use `Partial<T>`?

Useful for update APIs where only some properties are required.

---

### Q20. When would you use `Record<K, V>`?

For dynamic key-value objects.

```ts
Record<string, number>;
```

---

# Section 8: Code Quality

### Q21. Why use `const` instead of `let`?

Prevents reassignment and improves code clarity.

---

### Q22. Why never use `var`?

Because of:

- Function scope
- Hoisting issues
- Variable redeclaration

---

### Q23. Why keep functions small?

- Easier testing
- Better readability
- Easier debugging
- Follows the Single Responsibility Principle

---

### Q24. Why avoid duplicate interfaces?

Reuse through:

```ts
extends
```

or

```ts
&
```

---

### Q25. What naming conventions do you follow?

Examples:

- `camelCase` → variables/functions
- `PascalCase` → classes/interfaces/types
- `UPPER_SNAKE_CASE` → constants

---

# Section 9: Modern TypeScript

### Q26. What is `satisfies`?

```ts
const user = {
  name: "Krishna",
  age: 28,
} satisfies User;
```

It validates the object's shape while preserving inferred types.

---

### Q27. What is `as const`?

Creates immutable literals.

```ts
const config = {
  theme: "dark",
} as const;
```

---

### Q28. Why avoid excessive type assertions?

```ts
value as User;
```

Assertions tell the compiler to trust you, even if you're wrong. Prefer proper type guards whenever possible.

---

# Section 10: Project Best Practices

### Q29. How do you organize interfaces?

```
types/
    user.ts
    api.ts
    product.ts
```

---

### Q30. How do you structure a Playwright TypeScript project?

```
tests/
pages/
utils/
types/
fixtures/
constants/
config/
```

---

### Q31. How do you use JSON in TypeScript?

- Import JSON
- Create interfaces
- Enable `resolveJsonModule`
- Avoid `any`

---

### Q32. Why use ESLint?

- Detects bad coding practices
- Finds unused variables
- Enforces coding standards

---

### Q33. Why use Prettier?

Maintains consistent code formatting across the project.

---

### Q34. What is Type Inference?

TypeScript automatically infers types when possible.

```ts
const name = "Krishna";
```

No need to write:

```ts
const name: string = "Krishna";
```

---

### Q35. Why use Optional Properties (`?`)?

Useful when API responses or JSON objects may omit some fields.

```ts
interface User {
  name: string;
  phone?: string;
}
```

---

# Questions Specifically Asked in Playwright + TypeScript Interviews

These are frequently asked in QA Automation interviews:

- Why do you avoid `any`?
- What is `unknown`?
- Interface vs Type?
- Type Narrowing vs Type Assertion?
- Optional Chaining?
- Nullish Coalescing?
- Utility Types (`Partial`, `Pick`, `Omit`, `Record`)?
- Generics?
- Type Guards?
- `strict` mode?
- `noImplicitAny`?
- Type Inference?
- `readonly`?
- `as const`?
- `satisfies`?
- `tsconfig.json` options?
- ESLint + Prettier?
- How do you type API responses?
- How do you type JSON test data?
- How do you make a Playwright framework type-safe?

---

## My recommendation for interview preparation

Since you already know **Playwright and TypeScript**, focus deeply on these **15 high-priority topics**:

1. `any` vs `unknown`
2. `interface` vs `type`
3. Type Inference
4. Type Narrowing
5. Type Guards
6. Generics
7. Utility Types
8. Optional Chaining (`?.`)
9. Nullish Coalescing (`??`)
10. `strict` mode & `tsconfig.json`
11. `readonly` & `Readonly<T>`
12. `Record<K, V>`
13. `as const` & `satisfies`
14. `JSON.parse()` and typing imported JSON
15. Type-safe API responses and Playwright test data
