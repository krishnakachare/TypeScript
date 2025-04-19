/* 
🔑 keyof Operator

The keyof operator gets the union of property names of a type as string literal types.

interface User {
  name: string;
  age: number;
}

type UserKeys = keyof User; // "name" | "age"

This is useful for creating flexible functions:

function getProperty<T, K extends keyof T>(obj: T, key: K): T[K] {
  return obj[key];
}

const user = { name: "Sam", age: 25 };
const userName = getProperty(user, "name"); // "Sam"

🧠 typeof Operator

The typeof operator in TypeScript lets you create a type from a variable.

const person = {
  name: "Alice",
  age: 30,
};

type PersonType = typeof person;

You can also use typeof with functions:

function greet() {
  return "Hello";
}

type GreetType = typeof greet; // () => string

🔍 infer Keyword (Advanced)

infer is used in conditional types to infer a type within the true branch.

type ReturnType<T> = T extends (...args: any[]) => infer R ? R : never;

function sayHello() {
  return "Hi";
}

type HelloReturn = ReturnType<typeof sayHello>; // string

This is especially useful for library authors or creating complex types.

🔁 Conditional Types

Conditional types let you express types that depend on a condition.

type IsString<T> = T extends string ? true : false;

let check: IsString<"hello">; // true
let check2: IsString<42>;      // false

You can combine infer and extends for powerful patterns:

type ElementType<T> = T extends (infer U)[] ? U : T;

type A = ElementType<number[]>; // number

✅ Summary

keyof, typeof, infer, and conditional types allow powerful and expressive type logic.

These features are essential for advanced type safety and metaprogramming in TypeScript.

*/