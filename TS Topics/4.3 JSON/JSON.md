# 1. JSON itself cannot contain TypeScript annotations

A `.json` file is plain JSON. You **cannot** write TypeScript types inside it.

❌ Invalid (`student.json`)

```json
{
  "name": string,
  "age": number
}
```

❌ Invalid

```json
{
  "name": "Krishna" as string
}
```

JSON only allows data, not types.

---

# 2. Annotating imported JSON in TypeScript

Suppose you have `student.json`:

```json
{
  "name": "Krishna",
  "age": 28,
  "isActive": true
}
```

Create an interface:

```ts
interface Student {
  name: string;
  age: number;
  isActive: boolean;
}
```

Import the JSON:

```ts
import student from "./student.json";

const data: Student = student;

console.log(data.name);
```

Here the annotation is:

```ts
const data: Student = student;
```

---

# 3. Annotating JSON.parse()

`JSON.parse()` returns `any` by default.

```ts
const json = '{"name":"Krishna","age":28}';

const data = JSON.parse(json);
```

Better approach:

```ts
interface Student {
  name: string;
  age: number;
}

const data: Student = JSON.parse(json);
```

Or

```ts
const data = JSON.parse(json) as Student;
```

---

# 4. Array Annotation

JSON

```json
[
  {
    "name": "Krishna",
    "age": 28
  },
  {
    "name": "Ram",
    "age": 30
  }
]
```

TypeScript

```ts
interface Student {
  name: string;
  age: number;
}

import students from "./students.json";

const data: Student[] = students;
```

---

# 5. Nested Object Annotation

JSON

```json
{
  "name": "Krishna",
  "address": {
    "city": "Pune",
    "pin": 411001
  }
}
```

TypeScript

```ts
interface Address {
  city: string;
  pin: number;
}

interface Student {
  name: string;
  address: Address;
}

const student: Student = data;
```

---

# 6. Optional Properties

JSON may not always include every field.

JSON

```json
{
  "name": "Krishna"
}
```

TypeScript

```ts
interface Student {
  name: string;
  age?: number;
}
```

The `?` means the property is optional.

---

# 7. Readonly Properties

```ts
interface Student {
  readonly id: number;
  name: string;
}
```

```ts
student.id = 10;
```

❌ Error

---

# 8. Union Types

Sometimes JSON values can have multiple possible types.

```json
{
  "status": "success"
}
```

```ts
interface Response {
  status: "success" | "failed";
}
```

Or

```ts
interface User {
  id: number | string;
}
```

---

# 9. Record Type

JSON

```json
{
  "english": 90,
  "math": 80,
  "science": 95
}
```

TypeScript

```ts
type Marks = Record<string, number>;
```

Equivalent to:

```ts
{
  [subject: string]: number;
}
```

---

# 10. Index Signature

When keys are unknown beforehand.

```json
{
  "A101": {
    "name": "Krishna"
  },
  "A102": {
    "name": "Ram"
  }
}
```

TypeScript

```ts
interface Student {
  name: string;
}

interface Students {
  [rollNo: string]: Student;
}
```

---

# 11. Type Alias

```ts
type Student = {
  name: string;
  age: number;
};
```

Instead of

```ts
interface Student {
  name: string;
  age: number;
}
```

---

# 12. Generic Annotation

```ts
function loadData<T>(data: T): T {
  return data;
}

const student = loadData<Student>({
  name: "Krishna",
  age: 28,
});
```

---

# 13. `typeof` Annotation

```ts
import student from "./student.json";

type Student = typeof student;
```

Now TypeScript automatically infers the type from the JSON structure.

---

# 14. `satisfies` Operator (TypeScript 4.9+)

```ts
interface Student {
  name: string;
  age: number;
}

const student = {
  name: "Krishna",
  age: 28,
} satisfies Student;
```

This checks that the object matches the interface while preserving the object's inferred types.

---

# 15. `as const`

```ts
const config = {
  theme: "dark",
  version: 1,
} as const;
```

Now

```ts
config.theme;
```

has the literal type:

```ts
"dark";
```

instead of

```ts
string;
```

---

# Complete TypeScript Features Used with JSON

| Feature           | Syntax                   | Purpose                                         |
| ----------------- | ------------------------ | ----------------------------------------------- |
| Interface         | `interface Student {}`   | Describe JSON structure                         |
| Type Alias        | `type Student = {}`      | Alternative to interface                        |
| Array             | `Student[]`              | JSON arrays                                     |
| Optional Property | `age?: number`           | Field may be missing                            |
| Readonly          | `readonly id`            | Prevent modification                            |
| Union             | `string \| number`       | Multiple allowed types                          |
| Literal Types     | `"success" \| "failed"`  | Fixed values                                    |
| Record            | `Record<string, number>` | Dynamic key-value objects                       |
| Index Signature   | `[key: string]: Student` | Unknown object keys                             |
| Type Assertion    | `as Student`             | Tell TypeScript the expected type               |
| `typeof`          | `type T = typeof obj`    | Infer type from an object or imported JSON      |
| Generics          | `function<T>()`          | Reusable typed functions                        |
| `satisfies`       | `obj satisfies Student`  | Validate shape while keeping inference          |
| `as const`        | `obj as const`           | Preserve literal values and readonly properties |

### For a TypeScript developer, the most important annotations to master with JSON are:

1. `interface`
2. `type`
3. `Student[]` (arrays)
4. Optional properties (`?`)
5. Nested interfaces
6. `Record`
7. Index signatures
8. `JSON.parse()` with type assertions
9. `typeof`
10. `satisfies`
11. `as const`
