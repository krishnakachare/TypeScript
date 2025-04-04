Awesome! Let’s deep dive into **Chapter 6: Decorators** — one of the most powerful and advanced features of TypeScript, especially useful in frameworks like **Angular** or when building **class-based architecture**.

---

# 📘 Chapter 6: Decorators in TypeScript

---

## 🔹 What are Decorators?

Decorators are **special functions** that can **modify classes, methods, properties, or parameters** at design time (before runtime). They're part of **TypeScript's experimental metadata reflection system**.

> Decorators enable _meta-programming_, allowing you to write reusable annotations for your code.

To enable decorators, you must set the following in your `tsconfig.json`:

```json
{
  "experimentalDecorators": true,
  "emitDecoratorMetadata": true
}
```

---

## 🛠️ Decorator Syntax

A decorator is a function prefixed with `@` that applies to:

```ts
@decorator
class MyClass {}
```

---

## 🔧 How to Define a Decorator

A **basic class decorator** looks like this:

```ts
function Logger(constructor: Function) {
  console.log("Logging constructor...");
  console.log(constructor);
}

@Logger
class User {
  constructor(public name: string) {}
}
```

---

## 🧩 Types of Decorators

### 1. Class Decorator

Used to **modify or observe the constructor** of a class.

```ts
function Component(constructor: Function) {
  console.log(`Component: ${constructor.name}`);
}

@Component
class HeaderComponent {}
```

---

### 2. Property Decorator

Used to observe or modify a **property declaration**.

```ts
function LogProperty(target: any, propertyKey: string) {
  console.log(`Property: ${propertyKey}`);
}

class Product {
  @LogProperty
  title: string;

  constructor(title: string) {
    this.title = title;
  }
}
```

---

### 3. Method Decorator

Used to modify or log **method behavior**.

```ts
function LogMethod(
  target: any,
  propertyName: string,
  descriptor: PropertyDescriptor
) {
  const originalMethod = descriptor.value;
  descriptor.value = function (...args: any[]) {
    console.log(`Calling ${propertyName} with`, args);
    return originalMethod.apply(this, args);
  };
}

class Calculator {
  @LogMethod
  add(a: number, b: number) {
    return a + b;
  }
}
```

---

### 4. Accessor Decorator

Used for **getter/setter modification**.

```ts
function LogAccessor(
  target: any,
  name: string,
  descriptor: PropertyDescriptor
) {
  console.log(`Accessor: ${name}`);
}

class User {
  private _age = 25;

  @LogAccessor
  get age() {
    return this._age;
  }
}
```

---

### 5. Parameter Decorator

Used to access **metadata about method parameters**.

```ts
function LogParam(target: any, methodName: string, index: number) {
  console.log(`Parameter in ${methodName} at position ${index}`);
}

class Demo {
  test(@LogParam msg: string) {
    console.log(msg);
  }
}
```

---

### 6. Decorator Factories

You can **pass parameters** into a decorator by returning a decorator function from another function.

```ts
function LoggerWithMsg(msg: string) {
  return function (constructor: Function) {
    console.log(msg);
  };
}

@LoggerWithMsg("This is a logged class")
class Vehicle {}
```

---

## 🧠 When to Use Decorators?

- When you need **metadata**, logging, validation, or component registration.
- For **dependency injection** (like in Angular).
- To **enhance behavior** without modifying actual logic.
- To apply **cross-cutting concerns** like security, caching, or profiling.

---

## ⚠️ Important Notes

- Decorators are **experimental**, though widely used in frameworks.
- Must enable `"experimentalDecorators": true` in `tsconfig.json`.
- Can't be used with plain JavaScript.

---

## 🧠 Summary

| Decorator Type | Applies To         | Use Case                       |
| -------------- | ------------------ | ------------------------------ |
| Class          | Class declarations | Logging, DI, Metadata          |
| Property       | Class properties   | Validation, default values     |
| Method         | Class methods      | Logging, wrapping behavior     |
| Accessor       | Getters/Setters    | Modify or observe accessor use |
| Parameter      | Method parameters  | Metadata for params            |
| Factory        | Any                | Pass arguments to decorators   |
