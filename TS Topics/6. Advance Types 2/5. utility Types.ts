/* 
## 🔧 Record Utility Type

TypeScript's `Record` utility type is built on top of index signatures and is a convenient shorthand.

```ts
type Record<K extends keyof any, T> = {
  [P in K]: T;
};
```

### Example: Mapping Users to Scores

```ts
type UserScores = Record<string, number>;

const scores: UserScores = {
  Alice: 95,
  Bob: 88,
};
```

It’s equivalent to:
```ts
interface UserScores {
  [key: string]: number;
}
```

### Use Case: Enum Keys

```ts
type Roles = 'admin' | 'user' | 'guest';

const rolePermissions: Record<Roles, string> = {
  admin: 'all-access',
  user: 'limited-access',
  guest: 'read-only',
};
```

This ensures all role keys are accounted for — and prevents extra or missing properties.

=================================================================================
## 🧰 Utility Types

### `Partial<T>`
Makes all properties optional.
```ts
interface User {
  name: string;
  age: number;
}

const u: Partial<User> = { name: "Alice" };
```

### `Required<T>`
Makes all optional properties required.
```ts
interface Profile {
  name?: string;
  age?: number;
}

type FullProfile = Required<Profile>;
```

### `Readonly<T>`
Makes all properties read-only.
```ts
const u: Readonly<User> = {
  name: "Bob",
  age: 25
};
// u.age = 30; ❌ Error
```

### `Pick<T, K>`
Creates a type by picking specific properties.
```ts
type NameOnly = Pick<User, "name">;
```

### `Omit<T, K>`
Creates a type by omitting specific properties.
```ts
type NoAge = Omit<User, "age">;
```

### `Record<K, T>`
Constructs an object type with specific keys and values.
```ts
type PageInfo = {
  title: string;
};

const pages: Record<string, PageInfo> = {
  home: { title: "Home" },
  about: { title: "About" }
};
```

### `Exclude<T, U>`
Removes types from union.
```ts
type T = Exclude<"a" | "b" | "c", "a">; // "b" | "c"
```

### `Extract<T, U>`
Extracts matching types.
```ts
type T = Extract<"a" | "b" | "c", "a" | "c">; // "a" | "c"
```

### `NonNullable<T>`
Removes `null` and `undefined` from type.
```ts
type T = NonNullable<string | null | undefined>; // string
```
*/