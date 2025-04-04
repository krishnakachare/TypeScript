Great! Let's continue with a well-structured explanation of **"Object-Oriented Programming (OOP) in TypeScript"**, covering each concept clearly along with TypeScript code examples. This section is especially important for building fullstack applications with clean and maintainable architecture.

---

# 📘 Chapter 4: Object-Oriented Programming in TypeScript

---

## 🧱 What is Object-Oriented Programming?

Object-Oriented Programming (OOP) is a programming paradigm that models software using objects. TypeScript enhances JavaScript's class-based programming with features like access modifiers, abstract classes, interfaces, and more.

---

## 🔹 Classes and Objects

### Defining a Class

```ts
class Person {
  name: string;
  age: number;

  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }

  greet(): void {
    console.log(`Hi, I'm ${this.name} and I'm ${this.age} years old.`);
  }
}

const john = new Person("John", 30);
john.greet();
```

---

## 🔒 Access Modifiers

### 1. `public` (default)
Accessible from anywhere.

```ts
public name: string;
```

### 2. `private`
Accessible only within the class.

```ts
private age: number;
```

### 3. `protected`
Accessible within the class and its subclasses.

```ts
protected id: number;
```

---

## 🔐 Readonly Properties

Cannot be changed after being assigned.

```ts
class Book {
  readonly title: string;

  constructor(title: string) {
    this.title = title;
  }
}
```

---

## 🧬 Inheritance

A class can extend another class using the `extends` keyword.

```ts
class Animal {
  move(): void {
    console.log("Moving...");
  }
}

class Dog extends Animal {
  bark(): void {
    console.log("Woof!");
  }
}

const dog = new Dog();
dog.move(); // Inherited
dog.bark();
```

---

## 🔁 Method Overriding

A child class can redefine a method from the parent class.

```ts
class Bird {
  makeSound(): void {
    console.log("Generic bird sound");
  }
}

class Parrot extends Bird {
  makeSound(): void {
    console.log("Squawk!");
  }
}
```

---

## 🧩 Abstract Classes

Abstract classes cannot be instantiated directly. They are used as blueprints for other classes.

```ts
abstract class Shape {
  abstract getArea(): number;
}

class Circle extends Shape {
  constructor(private radius: number) {
    super();
  }

  getArea(): number {
    return Math.PI * this.radius ** 2;
  }
}
```

---

## ⚖️ Interface vs Abstract Class

| Feature              | Interface            | Abstract Class       |
|----------------------|----------------------|-----------------------|
| Implementation       | No                   | Yes                   |
| Multiple Inheritance | Yes                  | No                    |
| Use Case             | Contract Definition  | Shared Implementation |

---

## ⚙️ Static Properties and Methods

Belong to the class, not the instance.

```ts
class MathUtil {
  static PI = 3.14;

  static calculateCircumference(radius: number): number {
    return 2 * this.PI * radius;
  }
}

console.log(MathUtil.calculateCircumference(5));
```

---

## 🧠 Summary

| Concept                 | Description                                 |
|-------------------------|---------------------------------------------|
| Class                  | Blueprint for creating objects              |
| Constructor            | Initializes properties                      |
| Access Modifiers       | Control visibility (`public`, `private`, `protected`) |
| Inheritance            | One class inherits from another             |
| Abstract Class         | Define contracts and partial implementations|
| Static Members         | Accessed on the class, not on instances     |
