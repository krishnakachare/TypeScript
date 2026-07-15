> **TypeScript does not introduce its own exception-handling mechanism.** It uses JavaScript's exception handling but enhances it with **type safety**.

Below are all the common ways to handle exceptions in TypeScript.

---

# 1. `try...catch` (Most Common)

```ts
try {
  const result = JSON.parse('{"name":"Krishna"}');
  console.log(result.name);
} catch (error) {
  console.error("Invalid JSON:", error);
}
```

**Use case:** File operations, JSON parsing, API calls, database access.

---

# 2. `try...catch...finally`

```ts
try {
  console.log("Opening connection");
  throw new Error("Connection failed");
} catch (error) {
  console.log("Error handled");
} finally {
  console.log("Closing connection");
}
```

Output:

```
Opening connection
Error handled
Closing connection
```

`finally` always executes, whether an error occurs or not.

---

# 3. Throw Custom Errors

```ts
function withdraw(balance: number, amount: number) {
  if (amount > balance) {
    throw new Error("Insufficient balance");
  }

  return balance - amount;
}
```

---

# 4. Create Custom Error Classes

```ts
class ValidationError extends Error {
  constructor(message: string) {
    super(message);
    this.name = "ValidationError";
  }
}

throw new ValidationError("Invalid Email");
```

Benefits:

- Better error categorization
- Easier handling

---

# 5. Catch Specific Error Types

```ts
try {
  throw new ValidationError("Email is invalid");
} catch (error) {
  if (error instanceof ValidationError) {
    console.log(error.message);
  }
}
```

This is preferred over treating every error the same.

---

# 6. Use `unknown` in `catch` (Best Practice)

With `useUnknownInCatchVariables` enabled, the catch variable is `unknown`.

```ts
try {
  throw new Error("Something went wrong");
} catch (error: unknown) {
  if (error instanceof Error) {
    console.log(error.message);
  }
}
```

Avoid:

```ts
catch (error: any) {
  console.log(error.message);
}
```

---

# 7. Promise `.catch()`

```ts
fetchData()
  .then((data) => console.log(data))
  .catch((error) => console.log(error));
```

Common with Promise chains.

---

# 8. Async/Await with `try...catch`

```ts
async function getUsers() {
  try {
    const users = await fetchUsers();
    console.log(users);
  } catch (error) {
    console.log(error);
  }
}
```

This is the recommended approach for asynchronous code.

---

# 9. Validate Before Throwing

Instead of letting an operation fail unexpectedly:

```ts
function divide(a: number, b: number) {
  if (b === 0) {
    throw new Error("Cannot divide by zero");
  }

  return a / b;
}
```

---

# 10. Optional Chaining to Avoid Exceptions

Without optional chaining:

```ts
console.log(user.address.city);
```

This may throw if `address` is `undefined`.

Better:

```ts
console.log(user?.address?.city);
```

---

# 11. Nullish Coalescing

Instead of risking `undefined`:

```ts
const city = user.address?.city ?? "Unknown";
```

---

# 12. Type Guards Before Access

```ts
function print(value: string | number) {
  if (typeof value === "string") {
    console.log(value.toUpperCase());
  }
}
```

Prevents calling string methods on numbers.

---

# 13. Validate JSON Parsing

```ts
try {
  const obj = JSON.parse(jsonString);
} catch {
  console.log("Invalid JSON");
}
```

Very common in backend and automation projects.

---

# 14. Safe Type Assertions

Instead of:

```ts
const user = data as User;
```

Prefer checking the structure first:

```ts
if ("name" in data) {
  console.log(data.name);
}
```

---

# 15. Return a Result Instead of Throwing (Functional Style)

```ts
type Result<T> = { success: true; data: T } | { success: false; error: string };

function divide(a: number, b: number): Result<number> {
  if (b === 0) {
    return { success: false, error: "Division by zero" };
  }

  return { success: true, data: a / b };
}
```

Useful when you want to avoid exceptions for expected failures.

---

# 16. Centralized Error Handling

Instead of repeating logic:

```ts
try {
  await login();
} catch (error) {
  logError(error);
}
```

Create a reusable function:

```ts
function logError(error: unknown) {
  if (error instanceof Error) {
    console.error(error.message);
  }
}
```

---

# 17. Logging Errors

```ts
try {
  // Code
} catch (error) {
  console.error(error);
}
```

In production, you might send errors to a logging service instead of only printing them.

---

# 18. Re-throwing Errors

Sometimes you handle part of an error but want higher-level code to deal with it.

```ts
try {
  doSomething();
} catch (error) {
  console.error("Logging error...");
  throw error;
}
```

---

# 19. Using `never` for Exhaustive Checks

```ts
type Shape =
  | { kind: "circle"; radius: number }
  | { kind: "square"; side: number };

function area(shape: Shape): number {
  switch (shape.kind) {
    case "circle":
      return Math.PI * shape.radius ** 2;
    case "square":
      return shape.side ** 2;
    default: {
      const exhaustive: never = shape;
      throw new Error(`Unhandled shape: ${exhaustive}`);
    }
  }
}
```

This helps catch missing cases during compilation.

---

# 20. Global Error Handling (Application Level)

In a Node.js application:

```ts
process.on("uncaughtException", (error) => {
  console.error("Unhandled Exception:", error);
});

process.on("unhandledRejection", (reason) => {
  console.error("Unhandled Rejection:", reason);
});
```

This is an application-level safety net, not a replacement for local error handling.

---

# Exception Handling in Playwright

A common pattern is:

```ts
test("Login", async ({ page }) => {
  try {
    await page.goto("https://example.com");
    await page.fill("#username", "admin");
    await page.click("#login");
  } catch (error) {
    await page.screenshot({ path: "error.png" });
    throw error;
  }
});
```

This captures useful debugging information before failing the test.

---

# Summary Table

| Technique                       | When to Use                              |
| ------------------------------- | ---------------------------------------- |
| `try...catch`                   | General synchronous exception handling   |
| `try...catch...finally`         | Cleanup resources                        |
| `throw new Error()`             | Signal an error                          |
| Custom Error Classes            | Domain-specific errors                   |
| `instanceof`                    | Handle specific error types              |
| `unknown` in `catch`            | Type-safe error handling                 |
| Promise `.catch()`              | Promise chains                           |
| `async/await` + `try...catch`   | Asynchronous operations                  |
| Input validation                | Prevent invalid operations               |
| Optional chaining (`?.`)        | Avoid property access errors             |
| Nullish coalescing (`??`)       | Provide safe defaults                    |
| Type guards                     | Safely narrow types                      |
| `JSON.parse()` in `try...catch` | Parse external JSON safely               |
| Result pattern                  | Avoid exceptions for expected failures   |
| Centralized logging             | Reusable error handling                  |
| Re-throwing                     | Add context while propagating errors     |
| `never` exhaustive checks       | Ensure all union cases are handled       |
| Global handlers                 | Catch unhandled application-level errors |

## Interview Answer (1 Minute)

If an interviewer asks, **"How do you handle exceptions in TypeScript?"**, you can answer:

> "I primarily use `try...catch` for synchronous code and `async/await` with `try...catch` for asynchronous operations. I avoid using `any` in `catch` blocks and prefer `unknown` with `instanceof Error` checks for type safety. I throw custom errors for business validation, create custom error classes when needed, use optional chaining and nullish coalescing to prevent runtime errors, validate inputs before performing operations, and centralize logging for consistency. In Playwright automation, I also capture screenshots or logs inside `catch` blocks before rethrowing the error so that test failures are easier to diagnose."
