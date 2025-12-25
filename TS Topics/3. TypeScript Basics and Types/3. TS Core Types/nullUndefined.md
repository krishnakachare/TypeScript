# 1️⃣ `null` vs `undefined` (MOST IMPORTANT)

## Meaning

|                 | `null`                       | `undefined`        |
| --------------- | ---------------------------- | ------------------ |
| Meaning         | Intentional absence of value | Value not assigned |
| Who assigns     | Developer                    | JavaScript         |
| Default value   | ❌ No                        | ✅ Yes             |
| TypeScript type | `null`                       | `undefined`        |

---

## JavaScript behavior

```js
let a;
console.log(a); // undefined

let b = null;
console.log(b); // null
```

---

## TypeScript strict mode

```ts
let a: number = undefined; // ❌
let b: number = null; // ❌
```

✔ Correct:

```ts
let a: number | undefined;
let b: number | null;
```

---

## Equality (INTERVIEW QUESTION)

```js
null == undefined; // true
null === undefined; // false
```

---

# 2️⃣ `object` vs `{}` vs `Object` (CONFUSING BUT CRITICAL)

## `object` (recommended)

```ts
let a: object;

a = {}; // ✅
a = []; // ✅
a = () => {}; // ✅
a = null; // ❌
a = 10; // ❌
```

👉 Means **any non-primitive**

---

## `{}` (avoid using)

```ts
let b: {};

b = {}; // ✅
b = []; // ✅
b = 10; // ✅ 😱
b = "hello"; // ✅ 😱
b = null; // ❌
```

⚠ `{}` means **anything except null & undefined**

---

## `Object` (avoid)

```ts
let c: Object;

c = {}; // ✅
c = []; // ✅
c = "text"; // ✅ 😱
c = 100; // ✅ 😱
```

⚠ Wrapper object type — **not safe**

---

## ✔ BEST PRACTICE

```ts
let user: { name: string; age: number };
```

or

```ts
interface User {
  name: string;
  age: number;
}
let user: User;
```

---

# 3️⃣ Why Angular & Node.js enable `strictNullChecks`

## Without strict null checks (BAD)

```ts
let user: { name: string };

console.log(user.name); // 💥 runtime crash if user is null
```

---

## With strict null checks (GOOD)

```ts
let user: { name: string } | null;

if (user) {
  console.log(user.name); // ✅ safe
}
```

---

# 4️⃣ Real-world Angular Example

```ts
user: User | null = null;

ngOnInit() {
  this.user = this.userService.getUser();
}
```

Template:

```html
<div *ngIf="user">{{ user.name }}</div>
```

---

# 5️⃣ Optional Chaining (Modern Solution)

```ts
console.log(user?.name); // no crash
```

---

# 6️⃣ Interview Cheat Sheet (MEMORIZE THIS)

### ❓ Why TypeScript doesn't allow `null` as object?

> Because `null` represents absence of value and TypeScript avoids the historical JavaScript bug where `typeof null === "object"`.

### ❓ How to allow object or null?

```ts
object | null;
```

### ❓ Difference between `{}` and `object`?

- `{}` allows primitives
- `object` does not

---

# 7️⃣ Golden Rule 🏆

> ❗ If a value can be missing → **always use union types**

```ts
User | null;
number | undefined;
```

---
