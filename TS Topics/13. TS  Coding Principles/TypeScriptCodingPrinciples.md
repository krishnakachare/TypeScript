# TypeScript Coding Principles

Although TypeScript doesn't define its own unique set of principles, these software engineering principles are widely followed in TypeScript projects.

## 1. Type Safety

The core principle of TypeScript is to catch errors at compile time.

❌ Bad

```ts
let age: any = "28";
```

✅ Good

```ts
let age: number = 28;
```

---

## 2. Single Responsibility Principle (SRP)

A function or class should have only **one reason to change**.

❌ Bad

```ts
function login() {
  validateUser();
  saveToDatabase();
  sendEmail();
}
```

✅ Good

```ts
validateUser();
saveUser();
sendWelcomeEmail();
```

Each function has one responsibility.

---

## 3. DRY (Don't Repeat Yourself)

Avoid duplicate code.

❌ Bad

```ts
const studentName = student.name.toUpperCase();
const employeeName = employee.name.toUpperCase();
```

✅ Good

```ts
function toUpper(value: string) {
  return value.toUpperCase();
}
```

---

## 4. KISS (Keep It Simple, Stupid)

Choose the simplest solution that works.

❌ Complex

```ts
const isEven = (n: number) => Boolean(!(n & 1));
```

✅ Simple

```ts
const isEven = (n: number) => n % 2 === 0;
```

---

## 5. YAGNI (You Aren't Gonna Need It)

Don't build features until they're actually required.

Instead of creating five generic utility classes "just in case," implement what's needed today.

---

## 6. Separation of Concerns (SoC)

Keep different responsibilities separate.

Example in Playwright:

```
tests/
pages/
utils/
fixtures/
config/
```

Don't put everything into one file.

---

## 7. Encapsulation

Hide internal implementation and expose only what's necessary.

```ts
class BankAccount {
  private balance = 1000;

  getBalance() {
    return this.balance;
  }
}
```

---

## 8. Abstraction

Hide unnecessary implementation details.

```ts
interface Payment {
  pay(): void;
}
```

Different payment methods implement the same interface.

---

## 9. Open/Closed Principle (OCP)

Open for extension, closed for modification.

Instead of modifying existing code, extend it.

```ts
interface Shape {
  area(): number;
}
```

Each new shape implements the interface without changing existing code.

---

## 10. Dependency Inversion Principle (DIP)

Depend on abstractions rather than concrete implementations.

```ts
interface Logger {
  log(message: string): void;
}
```

Your application depends on `Logger`, not a specific logging library.

---

## 11. Composition Over Inheritance

Prefer combining objects over creating deep inheritance hierarchies.

Often easier to maintain and test.

---

## 12. Immutability

Avoid changing data unnecessarily.

❌

```ts
user.name = "Ram";
```

✅

```ts
const updatedUser = {
  ...user,
  name: "Ram",
};
```

---

## 13. Fail Fast

Detect invalid input as early as possible.

```ts
function divide(a: number, b: number) {
  if (b === 0) {
    throw new Error("Division by zero");
  }

  return a / b;
}
```

---

## 14. Strong Typing

Model data accurately.

```ts
interface Employee {
  id: number;
  name: string;
}
```

Instead of:

```ts
let employee: any;
```

---

## 15. Defensive Programming

Assume external data may be invalid.

```ts
if (user?.address?.city) {
  console.log(user.address.city);
}
```

---

# TypeScript Best Practices

These are the practical habits you follow while coding.

- Avoid `any`
- Prefer `unknown` over `any`
- Use `const` instead of `let`
- Use interfaces and type aliases
- Enable `strict` mode
- Use generics
- Use utility types (`Partial`, `Pick`, `Omit`, `Record`)
- Use optional chaining (`?.`)
- Use nullish coalescing (`??`)
- Use type guards
- Avoid unnecessary type assertions
- Organize code into modules
- Use ESLint and Prettier
- Keep functions small
- Use meaningful variable names
- Remove unused code

---

# Example

Imagine you're writing a login feature.

### Principle (SRP)

```
Validate User
Authenticate User
Generate Token
```

Three separate responsibilities.

### Best Practice

```ts
const token = generateToken(user);
```

Instead of

```ts
let token = generateToken(user);
```

Using `const` where possible is a best practice.

---

# Interview Answer (2 Minutes)

If the interviewer asks:

> **"What is the difference between coding principles and coding best practices?"**

You can answer:

> "Coding principles are high-level software design guidelines that help us build maintainable, scalable, and loosely coupled applications. Examples include SOLID, DRY, KISS, YAGNI, Separation of Concerns, and Encapsulation. They guide how we structure and design our code.
>
> Coding best practices are the day-to-day techniques we follow while writing code. In TypeScript, these include avoiding `any`, enabling `strict` mode, using interfaces and generics, preferring `const` over `let`, using type guards, optional chaining, and organizing code into reusable modules.
>
> In short, coding principles answer **'How should I design my software?'**, while best practices answer **'How should I write this code?'**"

---

## For TypeScript interviews, remember these:

### Coding Principles

- Type Safety
- SOLID
- DRY
- KISS
- YAGNI
- Separation of Concerns
- Encapsulation
- Abstraction
- Composition over Inheritance
- Immutability
- Fail Fast
- Defensive Programming

### Coding Best Practices

- Avoid `any`
- Prefer `unknown`
- Use `interface`/`type`
- Enable `strict`
- Use `const`
- Use generics
- Use utility types
- Use optional chaining and nullish coalescing
- Use type guards
- Keep code modular and readable
- Use ESLint and Prettier
