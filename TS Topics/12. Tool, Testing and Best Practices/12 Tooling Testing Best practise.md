# 📘 Chapter 12: Tooling and Best Practices  

---

## 🔹 Why Tooling and Best Practices Matter  

- Ensures **code consistency** and reduces bugs.  
- Helps in **maintaining large codebases** effectively.  
- Improves **collaboration** in team projects.  
- Enhances **performance and scalability**.  

---

## 🛠 Essential Tools for TypeScript Development  

### 1️⃣ **TypeScript Linters (`ESLint`)**  

**Linting** helps detect and fix potential issues in TypeScript code.  

### 🛠 Installing ESLint for TypeScript  

```sh
npm install --save-dev eslint @typescript-eslint/parser @typescript-eslint/eslint-plugin
```

### 🏗️ Configuring ESLint (`.eslintrc.json`)  

```json
{
  "parser": "@typescript-eslint/parser",
  "extends": ["eslint:recommended", "plugin:@typescript-eslint/recommended"],
  "rules": {
    "semi": ["error", "always"],
    "@typescript-eslint/no-explicit-any": "warn"
  }
}
```

Run ESLint:  

```sh
npx eslint src/**/*.ts
```

---

### 2️⃣ **Code Formatting (`Prettier`)**  

Prettier ensures **consistent code formatting** across the project.  

### 🛠 Installing Prettier  

```sh
npm install --save-dev prettier eslint-config-prettier
```

### 🏗️ Configuring Prettier (`.prettierrc`)  

```json
{
  "semi": true,
  "singleQuote": true,
  "trailingComma": "all"
}
```

Run Prettier:  

```sh
npx prettier --write src/**/*.ts
```

---

### 3️⃣ **Testing TypeScript Code (`Jest`)**  

Jest is a testing framework for unit and integration testing in TypeScript.  

### 🛠 Installing Jest with TypeScript  

```sh
npm install --save-dev jest ts-jest @types/jest
```

### 🏗️ Configuring Jest (`jest.config.js`)  

```js
module.exports = {
  preset: "ts-jest",
  testEnvironment: "node",
};
```

### 📌 Writing a Simple Test  

```ts
function add(a: number, b: number): number {
  return a + b;
}

test("adds numbers correctly", () => {
  expect(add(2, 3)).toBe(5);
});
```

Run tests:  

```sh
npx jest
```

---

## 🔥 Best Practices for TypeScript Development  

### ✅ **1. Enable `strict` Mode in `tsconfig.json`**  

Strict mode ensures type safety and catches potential issues early.  

```json
{
  "compilerOptions": {
    "strict": true
  }
}
```

---

### ✅ **2. Avoid Using `any`**  

❌ **Bad Practice:**  
```ts
let data: any = "Hello"; // No type safety
```

✅ **Good Practice:**  
```ts
let data: string = "Hello"; // Type-safe
```

---

### ✅ **3. Use Interfaces Instead of Type Annotations for Objects**  

❌ **Bad Practice:**  
```ts
const user: { name: string; age: number } = { name: "Alice", age: 30 };
```

✅ **Good Practice:**  
```ts
interface User {
  name: string;
  age: number;
}

const user: User = { name: "Alice", age: 30 };
```

---

### ✅ **4. Use Type Aliases for Complex Unions**  

❌ **Bad Practice:**  
```ts
let status: "active" | "inactive" | "pending";
```

✅ **Good Practice:**  
```ts
type Status = "active" | "inactive" | "pending";
let status: Status;
```

---

### ✅ **5. Use `readonly` for Immutable Data**  

❌ **Bad Practice:**  
```ts
let user = { name: "Alice" };
user.name = "Bob"; // Mutable
```

✅ **Good Practice:**  
```ts
interface User {
  readonly name: string;
}

const user: User = { name: "Alice" };
// user.name = "Bob"; ❌ Error
```

---

### ✅ **6. Use Generics for Reusability**  

❌ **Bad Practice:**  
```ts
function identity(value: any): any {
  return value;
}
```

✅ **Good Practice:**  
```ts
function identity<T>(value: T): T {
  return value;
}
```

---

### ✅ **7. Use Enums for Fixed Values**  

❌ **Bad Practice:**  
```ts
const UserRole = {
  Admin: "ADMIN",
  User: "USER"
};
```

✅ **Good Practice:**  
```ts
enum UserRole {
  Admin = "ADMIN",
  User = "USER"
}
```

---

### ✅ **8. Use Path Aliases for Clean Imports**  

Modify `tsconfig.json`:  

```json
{
  "compilerOptions": {
    "baseUrl": "./",
    "paths": {
      "@components/*": ["src/components/*"]
    }
  }
}
```

Instead of:  
```ts
import Button from "../../components/Button";
```

You can write:  
```ts
import Button from "@components/Button";
```

---

## 🎯 Summary of Tools & Best Practices  

| Tool / Concept | Purpose |
|---------------|---------|
| **ESLint** | Linting & Code Quality |
| **Prettier** | Auto-formatting |
| **Jest** | Unit Testing |
| **Strict Mode** | Type Safety |
| **Avoid `any`** | Enforce Type Safety |
| **Use Interfaces** | For Object Types |
| **Use Generics** | For Reusability |
| **Use Path Aliases** | Clean Imports |
