The interviewer is not asking about TypeScript syntax. They want to know:

> **"While writing TypeScript code, what coding standards and best practices do you follow to make your code maintainable, type-safe, readable, and scalable?"**

Below is a comprehensive answer that you can confidently use in interviews.

---

# TypeScript Coding Best Practices

## 1. Avoid using `any`

❌ Bad

```ts
let user: any = {
  name: "Krishna",
};

console.log(user.age.toUpperCase());
```

No compile-time error, but it may fail at runtime.

✅ Good

```ts
interface User {
  name: string;
  age: number;
}

const user: User = {
  name: "Krishna",
  age: 28,
};
```

**Why?**

- Compile-time type checking
- Better IntelliSense
- Fewer runtime bugs

---

# 2. Prefer `unknown` over `any`

❌

```ts
let data: any;

data.toUpperCase();
```

✅

```ts
let data: unknown;

if (typeof data === "string") {
  console.log(data.toUpperCase());
}
```

**Why?**

`unknown` forces proper type checking before use.

---

# 3. Use Interfaces for Object Types

❌

```ts
const student: {
  name: string;
  age: number;
} = {
  name: "Krishna",
  age: 28,
};
```

✅

```ts
interface Student {
  name: string;
  age: number;
}

const student: Student = {
  name: "Krishna",
  age: 28,
};
```

Benefits:

- Reusable
- Readable
- Easier maintenance

---

# 4. Enable Strict Mode

```json
{
  "compilerOptions": {
    "strict": true
  }
}
```

Strict mode catches many errors during compilation.

---

# 5. Use Type Inference

❌

```ts
const name: string = "Krishna";
```

✅

```ts
const name = "Krishna";
```

TypeScript already knows it is a string.

Use explicit types only when necessary.

---

# 6. Use `const` Instead of `let`

❌

```ts
let PI = 3.14;
```

✅

```ts
const PI = 3.14;
```

Benefits:

- Prevents reassignment
- Makes code easier to understand

---

# 7. Use Enums Carefully

❌

```ts
enum Status {
  Active,
  Inactive,
}
```

Better

```ts
type Status = "Active" | "Inactive";
```

Literal unions are usually simpler and produce less JavaScript.

---

# 8. Use Type Aliases for Unions

```ts
type Status = "Pass" | "Fail";
```

Instead of

```ts
let status: string;
```

---

# 9. Use Optional Properties

```ts
interface Employee {
  id: number;
  name: string;
  email?: string;
}
```

Instead of

```ts
email: string | undefined;
```

---

# 10. Avoid Type Assertions Unless Necessary

❌

```ts
const value = data as Student;
```

Prefer

```ts
if ("name" in data) {
  console.log(data.name);
}
```

Assertions can hide real problems.

---

# 11. Use Type Guards

```ts
function print(value: string | number) {
  if (typeof value === "string") {
    console.log(value.toUpperCase());
  }
}
```

Never assume the type.

---

# 12. Avoid `!` (Non-null Assertion)

❌

```ts
document.getElementById("btn")!.click();
```

Better

```ts
const button = document.getElementById("btn");

if (button) {
  button.click();
}
```

---

# 13. Use Readonly

```ts
interface User {
  readonly id: number;
  name: string;
}
```

Prevents accidental modification.

---

# 14. Prefer `readonly` Arrays

❌

```ts
const names: string[] = [];
```

✅

```ts
const names: readonly string[] = ["A", "B"];
```

---

# 15. Use Generics

❌

```ts
function getData(data: any) {
  return data;
}
```

✅

```ts
function getData<T>(data: T): T {
  return data;
}
```

---

# 16. Avoid Duplicate Types

Instead of

```ts
interface Student { ... }

interface Employee { ... }
```

Use inheritance

```ts
interface Person {
  name: string;
}

interface Student extends Person {
  rollNo: number;
}
```

---

# 17. Organize Types

Create separate files.

```
types/
    student.ts
    employee.ts
    api.ts
```

Don't keep all interfaces in one file.

---

# 18. Enable `noImplicitAny`

```json
{
  "compilerOptions": {
    "noImplicitAny": true
  }
}
```

This prevents implicit `any`.

---

# 19. Use Descriptive Names

❌

```ts
let x;
let y;
```

✅

```ts
let employeeName;
let totalSalary;
```

---

# 20. Use Optional Chaining

❌

```ts
if (user && user.address && user.address.city) {
}
```

✅

```ts
user?.address?.city;
```

---

# 21. Use Nullish Coalescing

❌

```ts
const name = user.name || "Guest";
```

Problem: `""` becomes `"Guest"`.

✅

```ts
const name = user.name ?? "Guest";
```

Only `null` or `undefined` trigger the default.

---

# 22. Use Async/Await Instead of Promise Chains

❌

```ts
fetchData()
.then(...)
.then(...)
```

✅

```ts
const data = await fetchData();
```

Cleaner and easier to debug.

---

# 23. Avoid Large Functions

❌

```ts
function login() {
  // 300 lines
}
```

Better

```ts
validateUser();
enterCredentials();
clickLogin();
verifyHomePage();
```

---

# 24. Follow the Single Responsibility Principle (SRP)

Each function should do **one thing only**.

Example:

```ts
calculateSalary();
sendEmail();
saveEmployee();
```

Don't combine all of them into one function.

---

# 25. Use `satisfies` Instead of `as` (TS 4.9+)

```ts
const user = {
  name: "Krishna",
  age: 28,
} satisfies User;
```

Safer than

```ts
const user = {} as User;
```

---

# 26. Avoid `var`

Always use

```ts
const
```

or

```ts
let;
```

Never

```ts
var
```

---

# 27. Keep `tsconfig.json` Strict

Common options:

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

These catch many issues early.

---

# 28. Use ESLint and Prettier

- ESLint enforces coding standards and detects potential issues.
- Prettier formats code consistently.

This keeps the codebase clean and consistent across teams.

---

# 29. Use Utility Types

Instead of creating new interfaces repeatedly.

```ts
Partial<User>;
```

```ts
Readonly<User>;
```

```ts
Pick<User, "name">;
```

```ts
Omit<User, "password">;
```

---

# 30. Keep Code Modular

Instead of

```
index.ts
```

with 5,000 lines,

organize by feature:

```
pages/
tests/
utils/
types/
constants/
services/
fixtures/
```

This is especially useful in Playwright projects.

---

# Interview Answer (2-Minute Version)

If an interviewer asks:

> **"What TypeScript best practices do you follow?"**

You can answer:

> "When writing TypeScript code, I focus on type safety, readability, and maintainability. I avoid using `any` and prefer `unknown` when the type isn't known. I define reusable interfaces or type aliases for object structures, enable strict compiler options like `strict` and `noImplicitAny`, and use `const` wherever possible. I also use type guards, optional chaining, nullish coalescing, generics, and utility types to write safer and reusable code. I keep functions small and focused, organize types into separate files, avoid unnecessary type assertions, and use ESLint and Prettier to maintain consistent code quality. In Playwright automation projects, I also follow the Page Object Model, use strongly typed test data, and avoid hardcoded values by keeping constants and configuration separate."

### Most Important Best Practices to Remember

If you're preparing for QA Automation or Playwright interviews, these are the ones interviewers ask about most often:

1. Avoid `any`; prefer `unknown` when appropriate.
2. Use `interface` or `type` for object shapes.
3. Enable `strict` and `noImplicitAny`.
4. Prefer `const` over `let`.
5. Use type inference where possible.
6. Use type guards for safe narrowing.
7. Use optional chaining (`?.`) and nullish coalescing (`??`).
8. Use generics instead of `any`.
9. Avoid unnecessary type assertions (`as`).
10. Keep code modular, readable, and maintainable.
