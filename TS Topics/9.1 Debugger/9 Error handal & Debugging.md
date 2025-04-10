# 📘 Chapter 9: Error Handling and Debugging

---

## 🔹 Why Error Handling is Important?

Error handling helps to:

- Prevent application crashes.
- Provide meaningful feedback to users.
- Improve debugging and maintenance.
- Ensure better resilience in production applications.

---

## 🔥 Exception Handling in TypeScript

TypeScript follows JavaScript's **try-catch-finally** mechanism for handling errors.

### 🛠 Basic Try-Catch Example

```ts
try {
  let result = JSON.parse("invalid JSON"); // This will throw an error
} catch (error) {
  console.log("An error occurred:", error);
} finally {
  console.log("This runs regardless of an error.");
}
```

---

## 🏛️ Custom Errors in TypeScript

You can define **custom error classes** using TypeScript’s `Error` class.

### 🏗️ Creating a Custom Error Class

```ts
class ValidationError extends Error {
  constructor(message: string) {
    super(message);
    this.name = "ValidationError";
  }
}

try {
  throw new ValidationError("Invalid input provided!");
} catch (error) {
  if (error instanceof ValidationError) {
    console.log(`Validation Error: ${error.message}`);
  } else {
    console.log("Unknown Error");
  }
}
```

---

## 🔍 Debugging in TypeScript

### 🔧 Using `console.log()`

```ts
const user = { name: "Alice", age: 25 };
console.log("User Info:", user);
```

### 🛠 The `debugger` Statement

You can **pause execution** at a specific line.

```ts
let x = 10;
debugger; // Execution stops here if dev tools are open
console.log(x);
```

### 🛠 Using `breakpoints` in VS Code

1. Open VS Code.
2. Click on the **left margin** to set a breakpoint.
3. Run the TypeScript program in **debug mode**.
4. Step through the code to analyze variables.

---

## 🧑‍💻 Handling Asynchronous Errors

### ❌ Without Proper Handling (Uncaught Error)

```ts
async function fetchData() {
  let response = await fetch("invalid-url"); // Throws an error
  return await response.json();
}

fetchData();
```

### ✅ With Proper Error Handling

```ts
async function fetchData() {
  try {
    let response = await fetch("invalid-url");
    if (!response.ok) throw new Error("Network request failed");
    return await response.json();
  } catch (error) {
    console.error("Fetch Error:", error);
  }
}

fetchData();
```

---

## 🛠 Common Debugging Tools

| Tool             | Usage                                  |
| ---------------- | -------------------------------------- |
| **console.log**  | Logs data to the console               |
| **debugger**     | Pauses code execution                  |
| **Breakpoints**  | Step through code in an IDE            |
| **Stack Traces** | Helps identify where an error occurred |

---

## 🧠 Summary

| Concept                  | Description                                      |
| ------------------------ | ------------------------------------------------ |
| `try-catch-finally`      | Handles exceptions in TypeScript                 |
| **Custom Errors**        | Allows defining application-specific error types |
| **Debugger & Logs**      | Helps analyze and fix issues                     |
| **Async Error Handling** | Prevents unhandled rejections                    |
