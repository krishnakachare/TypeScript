/* 
## 🔁 Mapped Types

Mapped types let you create new types by transforming properties of an existing type.

```ts
type ReadonlyUser<T> = {
  readonly [P in keyof T]: T[P];
};

interface User {
  name: string;
  age: number;
}

const readonlyUser: ReadonlyUser<User> = {
  name: "John",
  age: 30,
};
// readonlyUser.name = "Alice"; // ❌ Error
```

### Built-in Mapped Utility Types:
- `Readonly<T>`
- `Partial<T>`
- `Required<T>`
- `Pick<T, K>`
- `Omit<T, K>`

```ts
type PartialUser = Partial<User>;
const u1: PartialUser = { name: "Sam" }; // `age` is optional

type RequiredUser = Required<PartialUser>;
const u2: RequiredUser = { name: "Sam", age: 25 };
```

---

## ✅ Summary

- Index signatures allow dynamic key-value mapping.
- The `Record` utility type provides a more type-safe and expressive way to create similar mappings.
- Mapped types allow transformation and generation of new types from existing ones.


🛠️ More Utility Types

1. Pick<T, K>

Creates a new type by selecting a subset of properties from an existing type.

type Person = {
  name: string;
  age: number;
  email: string;
};

// Only picks name and email
type ContactInfo = Pick<Person, 'name' | 'email'>;

2. Omit<T, K>

Creates a new type by omitting certain keys from a type.

type WithoutEmail = Omit<Person, 'email'>;

3. Exclude<T, U>

Removes types from T that are assignable to U.

type Primitive = string | number | boolean;
type NotBoolean = Exclude<Primitive, boolean>; // string | number

4. Extract<T, U>

Extracts types from T that are assignable to U.

type OnlyBoolean = Extract<Primitive, boolean>; // boolean

5. NonNullable<T>

Removes null and undefined from a type.

type Name = string | null | undefined;
type ValidName = NonNullable<Name>; // string

✅ Summary

Index signatures enable dynamic property names.

Record provides a quick way to create uniform object types.

Mapped and utility types help transform and refine types effectively.
==================================================================


## 🔁 Mapped Types

Mapped types let you create new types by transforming properties of an existing type using `keyof` and `in`.

```ts
interface User {
  name: string;
  age: number;
}

type ReadonlyUser = {
  readonly [K in keyof User]: User[K];
};
```

You can also remove modifiers using `-`:
```ts
type Mutable<T> = {
  -readonly [K in keyof T]: T[K];
};
```
*/
