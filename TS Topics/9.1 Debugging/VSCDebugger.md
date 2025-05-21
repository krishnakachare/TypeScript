### ✅ **How to Add Debug Points in Visual Studio Code (VS Code)**

A **debug point** or **breakpoint** tells the debugger to **pause execution** of your code at a specific line so you can inspect variables, step through logic, and troubleshoot issues.

---

## 🧭 Step-by-Step: Adding and Using Breakpoints in VS Code

---

### 🔧 1. **Set Up Your Project for Debugging**

Before you start debugging, make sure your TypeScript is correctly configured.

#### ✅ `tsconfig.json`

```json
{
  "compilerOptions": {
    "target": "es6",
    "module": "commonjs",
    "outDir": "dist",
    "rootDir": "src",
    "sourceMap": true // 👈 Required for breakpoint debugging
  }
}
```

Then compile your code:

```bash
tsc
```

---

### 📁 Example File: `src/app.ts`

```ts
function add(a: number, b: number): number {
  const sum = a + b;
  return sum;
}

const result = add(10, 20);
console.log("Result is:", result);
```

---

## 🎯 2. **Open Your Project in VS Code**

- Open the folder in VS Code (`File > Open Folder`)
- Make sure your compiled `.js` files appear in the `dist` folder

---

### 🔴 3. **Add a Breakpoint**

There are two easy ways:

| Method      | Action                                                           |
| ----------- | ---------------------------------------------------------------- |
| 🖱️ Mouse    | Click **to the left of the line number** where you want to pause |
| ⌨️ Keyboard | Place cursor on the line and press `F9`                          |

The line will show a **red dot** — this is your **debug point**.

---

## 🧭 4. **Configure the Debugger**

Create a `launch.json`:

1. Go to **Run & Debug** sidebar (`Ctrl + Shift + D`)
2. Click **"Create a launch.json file"**
3. Choose **Node.js**

### ✅ Example `.vscode/launch.json`

```json
{
  "version": "0.2.0",
  "configurations": [
    {
      "type": "node",
      "request": "launch",
      "name": "Debug TS",
      "program": "${workspaceFolder}/dist/app.js",
      "sourceMaps": true,
      "outFiles": ["${workspaceFolder}/dist/**/*.js"]
    }
  ]
}
```

---

## ▶️ 5. **Start Debugging**

- Click the green ▶️ **"Start Debugging"** button
- Or press `F5`

🔒 Execution will **pause at the breakpoint**, allowing you to inspect:

- 🧪 **Variables** (hover over them)
- 🛠 **Call stack**
- 👁 **Watch** values
- 🔄 **Step Over (`F10`)**, **Step Into (`F11`)**, **Continue (`F5`)**

---

## 🎯 6. **Debug Controls**

| Control      | Shortcut    | Use for...                            |
| ------------ | ----------- | ------------------------------------- |
| ▶️ Continue  | `F5`        | Resume until next breakpoint          |
| ⏭ Step Over  | `F10`       | Run current line, skip into functions |
| 🔽 Step Into | `F11`       | Enter into the function               |
| ⬆ Step Out   | `Shift+F11` | Exit the current function             |
| ⏹ Stop       | `Shift+F5`  | End the debug session                 |

---

### ✅ Summary: Breakpoints in VS Code

| Task                      | How to do it                            |
| ------------------------- | --------------------------------------- |
| Add breakpoint            | Click left of line number or press `F9` |
| Start debugger            | `F5` or Run → Start Debugging           |
| Inspect variables         | Hover or use `Debug Console`            |
| Use with TypeScript       | Requires `sourceMap: true` and `tsc`    |
| Map TS to JS in debugging | Use `"outFiles"` in `launch.json`       |
