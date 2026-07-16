This is one of the **most frequently asked TypeScript interview questions**.

Although both `type` and `interface` are used to define the shape of an object, they have several important differences.

---

# Type vs Interface in TypeScript

| Feature                     | interface | type         |
| --------------------------- | --------- | ------------ |
| Defines object shape        | ✅ Yes    | ✅ Yes       |
| Primitive types             | ❌ No     | ✅ Yes       |
| Union Types                 | ❌ No     | ✅ Yes       |
| Intersection Types          | Limited   | ✅ Yes       |
| Declaration Merging         | ✅ Yes    | ❌ No        |
| Extend another interface    | ✅ Yes    | ✅ Using `&` |
| Extend classes              | ✅ Yes    | ❌ No        |
| Tuples                      | ❌ No     | ✅ Yes       |
| Function types              | ✅ Yes    | ✅ Yes       |
| Mapped Types                | ❌ No     | ✅ Yes       |
| Recommended for Object APIs | ✅ Yes    | Sometimes    |

---

# 1. Basic Object Definition

## Using Interface

```typescript
interface User {
  id: number;
  name: string;
}

const user: User = {
  id: 1,
  name: "Krishna",
};
```

---

## Using Type

```typescript
type User = {
  id: number;
  name: string;
};

const user: User = {
  id: 1,
  name: "Krishna",
};
```

Output

```
{
 id:1,
 name:"Krishna"
}
```

Both are exactly the same here.

---

# 2. Interface can be Reopened (Declaration Merging)

This is one of the biggest differences.

## Interface

```typescript
interface Employee {
  id: number;
}

interface Employee {
  name: string;
}

const emp: Employee = {
  id: 101,
  name: "John",
};
```

TypeScript automatically merges both interfaces.

Final interface becomes

```typescript
interface Employee {
  id: number;
  name: string;
}
```

Output

```
{
 id:101,
 name:"John"
}
```

---

## Type

```typescript
type Employee = {
  id: number;
};

type Employee = {
  name: string;
};
```

Output

```
Error:
Duplicate identifier 'Employee'
```

A `type` alias cannot be declared twice.

---

# 3. Primitive Types

Only `type` can represent primitive types.

```typescript
type Age = number;

let age: Age = 25;
```

You cannot write:

```typescript
interface Age = number;
```

Output

```
Error
```

---

# 4. Union Types

Only `type` supports union types.

```typescript
type Status = "Pending" | "Success" | "Failed";

let order: Status = "Success";
```

Another example

```typescript
type ID = string | number;

let id1: ID = 101;

let id2: ID = "EMP101";
```

Interface cannot do this.

---

# 5. Intersection Types

Type aliases support intersections very naturally.

```typescript
type Person = {
  name: string;
};

type Employee = {
  salary: number;
};

type Staff = Person & Employee;

const staff: Staff = {
  name: "Krishna",
  salary: 50000,
};
```

Output

```
{
 name:"Krishna",
 salary:50000
}
```

---

Interfaces use `extends` to achieve a similar result:

```typescript
interface Person {
  name: string;
}

interface Employee extends Person {
  salary: number;
}
```

---

# 6. Tuples

Only `type` can directly define tuple aliases.

```typescript
type Coordinate = [number, number];

const point: Coordinate = [10, 20];
```

Output

```
[10,20]
```

---

# 7. Function Types

Both support function signatures.

## Interface

```typescript
interface Add {
  (a: number, b: number): number;
}

const sum: Add = (x, y) => x + y;

console.log(sum(10, 20));
```

Output

```
30
```

---

## Type

```typescript
type Add = (a: number, b: number) => number;

const sum: Add = (x, y) => x + y;

console.log(sum(5, 10));
```

Output

```
15
```

---

# 8. Extending

## Interface

```typescript
interface Animal {
  name: string;
}

interface Dog extends Animal {
  breed: string;
}

const d: Dog = {
  name: "Tommy",
  breed: "Labrador",
};
```

---

## Type

Types cannot use `extends`, but you can combine them with intersections (`&`).

```typescript
type Animal = {
  name: string;
};

type Dog = Animal & {
  breed: string;
};
```

---

# 9. Extending Multiple Interfaces

```typescript
interface Person {
  name: string;
}

interface Employee {
  salary: number;
}

interface Manager extends Person, Employee {
  department: string;
}

const manager: Manager = {
  name: "Krishna",
  salary: 80000,
  department: "QA",
};
```

---

# 10. Mapped Types

Mapped types are built using `type`.

```typescript
type Person = {
  name: string;
  age: number;
};

type OptionalPerson = {
  [K in keyof Person]?: Person[K];
};
```

Or using the built-in utility type:

```typescript
type OptionalPerson = Partial<Person>;
```

Interfaces cannot express mapped types directly.

---

# 11. Interface can Extend Classes

```typescript
class Animal {
  name = "Dog";
}

interface Pet extends Animal {
  age: number;
}

const pet: Pet = {
  name: "Tommy",
  age: 5,
};
```

This allows the interface to inherit the instance members of the class.

---

# 12. Class Implementation

Both interfaces and type aliases describing object shapes can be implemented by classes.

## Interface

```typescript
interface User {
  name: string;
  greet(): void;
}

class Student implements User {
  name = "Krishna";

  greet() {
    console.log("Hello");
  }
}
```

---

## Type

```typescript
type User = {
  name: string;
  greet(): void;
};

class Student implements User {
  name = "Krishna";

  greet() {
    console.log("Hello");
  }
}
```

---

# 13. Complex Types

`type` can compose many different kinds of types.

```typescript
type ID = string | number;

type User = {
  id: ID;
  name: string;
};

type Admin = User & {
  role: string;
};
```

This flexibility is one of the main reasons developers choose `type`.

---

# Summary Diagram

```
                     Type
        ----------------------------
        ✔ Object
        ✔ Primitive
        ✔ Union
        ✔ Intersection
        ✔ Tuple
        ✔ Function
        ✔ Mapped Types
        ✘ Declaration Merging

                     Interface
        ----------------------------
        ✔ Object
        ✔ Function
        ✔ Class Contracts
        ✔ Declaration Merging
        ✔ Extends Multiple Interfaces
        ✘ Primitive
        ✘ Union
        ✘ Tuple
```

---

# Which One Should You Use?

| Situation                                                          | Recommended               |
| ------------------------------------------------------------------ | ------------------------- |
| Defining the shape of objects, especially for public APIs          | `interface`               |
| Defining primitives (`string`, `number`, etc.)                     | `type`                    |
| Union types (`A \| B`)                                             | `type`                    |
| Intersection types (`A & B`)                                       | `type`                    |
| Tuples                                                             | `type`                    |
| Function type aliases                                              | Either (`type` is common) |
| Mapped types and utility-type compositions                         | `type`                    |
| When declaration merging is desirable (e.g., library augmentation) | `interface`               |

## Interview Answer (2-minute version)

> **Interfaces** are primarily used to describe the shape of objects and support features like declaration merging and `extends`, making them ideal for defining contracts in APIs and large applications.
>
> **Type aliases** are more flexible. They can represent not only object shapes but also primitive types, unions, intersections, tuples, and mapped types. However, they cannot be reopened or declaration-merged.
>
> A common guideline is:
>
> - Use **`interface`** for object-oriented contracts and extensible object shapes.
> - Use **`type`** when you need advanced type composition, such as unions, intersections, tuples, or aliases for primitive types.
