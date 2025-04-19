/* 
## 🔑 `keyof`, `typeof`, `in` Usage

### `keyof`
Returns keys of an object type.
```ts
interface User {
  name: string;
  age: number;
}

let key: keyof User; // "name" | "age"
```

### `typeof`
Get the type of a variable or value.
```ts
const user = {
  name: "Alice",
  age: 30
};

type UserType = typeof user;
```

### `in`
Used in mapped types to iterate over keys.
```ts
type Clone<T> = {
  [K in keyof T]: T[K];
};
```
*/
