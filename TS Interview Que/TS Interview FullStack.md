Perfect 👍
I’ll continue **step-by-step**, exactly useful for **Angular + Node.js full-stack interviews**.

Below is **PART-2** covering:

1️⃣ **Angular-specific TypeScript interview questions**
2️⃣ **Node.js + TypeScript interview questions**
3️⃣ **Real-world scenario questions (VERY IMPORTANT)**

---

# 🔹 PART-2: TypeScript Interview Questions (Angular + Node Focus)

---

## 1️⃣ TypeScript with Angular (Most Asked)

### 1. Why Angular uses TypeScript instead of JavaScript?

**Answer:**
Angular heavily depends on:

- **Decorators** (`@Component`, `@Injectable`)
- **Interfaces** for models
- **Dependency Injection**
- **Strong typing for templates**

TypeScript helps Angular detect errors **at compile time**, not runtime.

---

### 2. What are decorators in Angular TypeScript?

**Answer:**
Decorators are special functions that add **metadata** to classes, methods, properties, or parameters.

```ts
@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
})
export class AppComponent {}
```

Types:

- Class decorators
- Method decorators
- Property decorators
- Parameter decorators

---

### 3. What is strict mode in Angular?

**Answer:**
Enables strict type checking.

```json
"strict": true
```

Includes:

- `strictNullChecks`
- `strictPropertyInitialization`
- `noImplicitAny`

👉 Interviewers **love this question**.

---

### 4. What is `strictPropertyInitialization`?

**Answer:**
Forces class properties to be initialized.

```ts
name!: string; // definite assignment assertion
```

---

### 5. What is definite assignment assertion (`!`)?

**Answer:**
Tells TypeScript that a property will be assigned later.

```ts
user!: User;
```

Used a lot in Angular components.

---

### 6. Difference between `interface` and `class` in Angular?

| Interface         | Class             |
| ----------------- | ----------------- |
| Compile-time only | Runtime           |
| No implementation | Can have logic    |
| Used for models   | Used for services |

---

### 7. Why interfaces are preferred for API models?

**Answer:**

- Lightweight
- Compile-time safety
- No runtime overhead

---

### 8. What is `readonly` in Angular models?

**Answer:**
Prevents mutation of data.

```ts
interface User {
  readonly id: number;
}
```

---

### 9. What is `Partial<T>` used for?

**Answer:**
Used when updating forms or patch requests.

```ts
updateUser(user: Partial<User>) {}
```

---

### 10. Difference between `any` and `unknown` in Angular?

**Answer:**

- `any` disables type safety
- `unknown` forces validation

Angular best practice → **avoid `any`**

---

## 2️⃣ TypeScript with Node.js

### 11. How do you configure TypeScript in Node.js?

**Answer:**
Steps:

1. Install dependencies

```bash
npm install typescript ts-node @types/node --save-dev
```

2. Create `tsconfig.json`

3. Run using:

```bash
npx ts-node index.ts
```

---

### 12. What is `tsconfig.json`?

**Answer:**
Controls TypeScript compilation.

Common options:

```json
{
  "target": "ES2020",
  "module": "commonjs",
  "outDir": "dist",
  "strict": true
}
```

---

### 13. Difference between `interface` and `type` in backend?

**Answer:**

- `interface` → preferred for objects
- `type` → preferred for unions

---

### 14. How do you type Express request & response?

**Answer:**

```ts
import { Request, Response } from "express";

app.get("/user", (req: Request, res: Response) => {
  res.send("OK");
});
```

---

### 15. How to create typed middleware?

```ts
const auth = (req: Request, res: Response, next: NextFunction) => {
  next();
};
```

---

### 16. How do you define environment variables in TypeScript?

**Answer:**

```ts
process.env.PORT as string;
```

Better approach:

```ts
const PORT = Number(process.env.PORT);
```

---

### 17. Why `unknown` is better for API responses?

**Answer:**
Because API data is dynamic and must be validated before use.

---

## 3️⃣ REAL-WORLD SCENARIO QUESTIONS (🔥 VERY IMPORTANT)

### 18. How do you type an API response in Angular?

```ts
interface ApiResponse<T> {
  data: T;
  message: string;
}
```

---

### 19. How do you type HTTP GET call?

```ts
this.http.get<User[]>("/api/users");
```

---

### 20. How do you avoid `any` in forms?

**Answer:**
Use **typed forms** (Angular 14+).

```ts
FormGroup<{ name: FormControl<string> }>;
```

---

### 21. How do you share types between frontend & backend?

**Answer:**

- Create a **shared folder/package**
- Export interfaces
- Use same types in Angular & Node

👉 This answer **impresses interviewers**.

---

### 22. How do you handle optional backend fields?

```ts
interface User {
  name?: string;
}
```

---

### 23. What happens to interfaces after compilation?

**Answer:**
Interfaces are **removed** during compilation.

---

### 24. How do you create reusable generic service?

```ts
class ApiService<T> {
  getAll(): T[] {
    return [];
  }
}
```

---

### 25. How do you validate unknown data?

```ts
if (typeof data === "string") {
}
```

---

### 26. Difference between `null` and `undefined`?

| null              | undefined |
| ----------------- | --------- |
| Intentional       | Missing   |
| Assigned manually | Default   |

---

### 27. What is `Record<K, T>`?

```ts
type UserRoles = Record<string, number>;
```

---

### 28. How do you type dynamic object keys?

```ts
[key: string]: number;
```

---

### 29. How do you make properties immutable?

```ts
Readonly<User>;
```

---

### 30. Most common TypeScript mistakes?

**Answer:**

- Overusing `any`
- Ignoring `strict` mode
- Not using utility types
- Poor generic understanding

---

## 🎯 FINAL INTERVIEW STRATEGY (For You)

Given your **Angular + Node background**, focus more on:

✔ Generics
✔ Utility types
✔ Interfaces vs Types
✔ API typing
✔ Strict mode
✔ Real-world examples
