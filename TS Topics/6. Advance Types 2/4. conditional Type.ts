/* 
## ⚖️ Conditional Types

Conditional types work like ternary operators at the type level:
```ts
type IsString<T> = T extends string ? true : false;

type A = IsString<string>; // true
type B = IsString<number>; // false
```

They allow branching logic for advanced generics.
*/
