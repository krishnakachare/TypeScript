### ✅ **Using `debugger` in TypeScript** – Complete Guide with Step-by-Step Debugging Procedure

---

### 🔷 What is `debugger` in TypeScript?

The `debugger` statement is a **built-in keyword** in JavaScript and TypeScript that **pauses code execution** at the line it's placed—**if the developer tools (DevTools) or debugger is open**.

It’s like a **manual breakpoint** written directly in the code.

---

### 🔸 Syntax

```ts
function multiply(a: number, b: number): number {
  debugger; // Execution pauses here
  return a * b;
}
```

---

### 🔸 When to Use It

* To inspect variable values during execution
* To pause code at runtime and step through it
* To understand flow during function calls or conditionals
* To debug complex logic or issues not caught by console logs

---

## 🔧 How to Use `debugger` in TypeScript with a Debugger

Let’s walk through a full setup.

---

## ✅ **Step-by-Step Debugging Setup**

---

### 📁 1. Project Setup

**Create your files:**

```
src/
├── app.ts
tsconfig.json
```

### 📄 `app.ts`

```ts
function greet(name: string): string {
  const message = `Hello, ${name}`;
  debugger; // 👈 Execution will pause here
  return message;
}

console.log(greet('Alice'));
```

---

### 📄 2. tsconfig.json

```json
{
  "compilerOptions": {
    "target": "es6",
    "module": "commonjs",
    "sourceMap": true,         // ✅ Required for debugging
    "outDir": "dist",
    "rootDir": "src"
  }
}
```

> 🔎 `sourceMap: true` allows the debugger to map `.js` back to `.ts`

---

### 🧪 3. Compile the Code

```bash
tsc
```

This creates:

```
dist/
├── app.js
├── app.js.map  ✅ source map
```

---

## ✅ Option 1: Debugging in **VS Code**

### 📍 Step-by-Step

1. Open the folder in **VS Code**
2. Press `Ctrl + Shift + D` (or click on the **Run and Debug** tab)
3. Click **"Create a launch.json"**
4. Choose: `Node.js`
5. Update `.vscode/launch.json` like this:

```json
{
  "version": "0.2.0",
  "configurations": [
    {
      "type": "node",
      "request": "launch",
      "name": "Debug TypeScript",
      "program": "${workspaceFolder}/dist/app.js",
      "sourceMaps": true,
      "outFiles": ["${workspaceFolder}/dist/**/*.js"]
    }
  ]
}
```

6. Set a breakpoint (or just rely on `debugger`).
7. Hit **F5** to start debugging.

🔍 When it hits the `debugger` line, VS Code will pause and allow you to:

* Inspect variables
* Step over / into functions
* Watch expressions
* Use the debug console

---

## ✅ Option 2: Debugging in Chrome (Using DevTools)

1. Serve the compiled `.js` file in a web project or run via bundler like Webpack/Vite.
2. Open Chrome → DevTools → Sources tab.
3. Run your code (in browser or Node).
4. When `debugger;` is hit, Chrome will pause execution.

---

## 🧠 Best Practices

| Tip                                 | Description                                   |
| ----------------------------------- | --------------------------------------------- |
| ✅ Use `debugger` during development | Remove in production builds                   |
| 🧪 Combine with breakpoints         | `debugger` + manual breakpoints gives control |
| 🔍 Watch variables                  | Use debugger watch panel or console           |
| 🛠 Use `sourceMap: true`            | Maps TypeScript to original line numbers      |

---

## 🧵 Example Use Case

```ts
function findUser(users: string[], target: string): string | undefined {
  for (let user of users) {
    debugger;
    if (user === target) {
      return user;
    }
  }
  return undefined;
}

const userList = ['Alice', 'Bob', 'Charlie'];
console.log(findUser(userList, 'Bob'));
```

> When this runs in debug mode, you can pause at each iteration, inspect `user`, and see the flow.

---

### ✅ Summary

| Feature    | Description                                 |
| ---------- | ------------------------------------------- |
| `debugger` | Pauses execution if dev tools are open      |
| Works with | VS Code, Chrome DevTools, Node.js debugger  |
| Needs      | `"sourceMap": true` in `tsconfig.json`      |
| Use Case   | Inspect values, trace execution, debug flow |


