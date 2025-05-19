## 🔹 Generics: Writing Reusable Code

## 🧬 Generics in TypeScript

Generics allow you to write flexible, reusable code components that work with a variety of types.

### 🔹 Generic Functions

Generic functions use type parameters that are specified when the function is called.

```ts
function identity<T>(arg: T): T {
  return arg;
}

const result1 = identity<string>("Hello");
const result2 = identity<number>(42);
```

### 🔸 Generic Interfaces

You can define interfaces that work with generic types.

```ts
interface Box<T> {
  value: T;
}

const stringBox: Box<string> = { value: "test" };
const numberBox: Box<number> = { value: 123 };
```

### 🧱 Generic Classes

Generic classes enable classes to be type-safe while remaining reusable.

```ts
class Container<T> {
  private _value: T;

  constructor(value: T) {
    this._value = value;
  }

  getValue(): T {
    return this._value;
  }
}

const stringContainer = new Container<string>("Generic");
console.log(stringContainer.getValue()); // Generic
```

### 🧩 Generic Constraints

Constraints limit the types a generic can accept using `extends`.

```ts
function lengthLogger<T extends { length: number }>(arg: T): void {
  console.log(arg.length);
}

lengthLogger("Hello"); // OK
lengthLogger([1, 2, 3]); // OK
// lengthLogger(10); // ❌ Error: number has no length property
```

### 🧵 Default Generic Parameters

You can assign default types to generics if none are provided.

```ts
function wrapValue<T = string>(value: T = "" as T): T {
  return value;
}

const v1 = wrapValue(100); // number
const v2 = wrapValue(); // string (defaults)
```
