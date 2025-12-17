// 📌 Abstract Class vs Interface in TypeScript — A Practical, Developer-Friendly Overview

// Today I revisited the differences between Interfaces and Abstract Classes in TypeScript.
// They often look similar at first glance, but they solve completely different problems in object-oriented design — especially in large, scalable applications.

// 🟦 𝐖𝐡𝐚𝐭 𝐈𝐬 𝐚𝐧 𝐈𝐧𝐭𝐞𝐫𝐟𝐚𝐜𝐞?
// An Interface is essentially a contract.
// It states what must exist, but never how it should work.
// No implementation
// No constructor
// No real fields
// Cannot be instantiated
// A class can implement multiple interfaces

interface Flyable {
  speed: number;
  fly(): void;
}

class Bird implements Flyable {
  speed = 20;
  fly() {
    console.log("Bird is flying...");
  }
}
// 𝐖𝐡𝐲 𝐢𝐭 𝐦𝐚𝐭𝐭𝐞𝐫𝐬:
// Interfaces are perfect when you need multiple inheritance or when you simply want to define the shape of an object or class.

// 🟦 𝐖𝐡𝐚𝐭 𝐈𝐬 𝐚𝐧 𝐀𝐛𝐬𝐭𝐫𝐚𝐜𝐭 𝐂𝐥𝐚𝐬𝐬?

// An Abstract Class is a partially implemented class:
// it may contain both abstract methods and fully implemented ones.
// Has a constructor
// Can contain real fields
// Can include implemented methods
// Cannot be instantiated directly
// A class can extend only one abstract class

abstract class Animal {
  constructor(public name: string) {}
  abstract sound(): void;
  eat() {
    console.log(`${this.name}is eating`);
  }
}

class Dog extends Animal {
  sound() {
    console.log("Woof!");
  }
}
// Why it matters:
// When you have shared logic that should be reused across multiple subclasses, abstract classes are the cleaner and more maintainable choice.

// 🟩 𝐖𝐡𝐞𝐧 𝐒𝐡𝐨𝐮𝐥𝐝 𝐘𝐨𝐮 𝐔𝐬𝐞 𝐄𝐚𝐜𝐡?

// ✔ Use Interface when:
// You need multiple inheritance
// You’re modeling data shapes or API contracts
// Every method must be implemented by subclasses
// The structure doesn’t need built-in logic

// ✔ Use Abstract Class when:
// You need shared behavior across several classes
// You want constructors, real fields, or access modifiers
// You want changes in the base class to propagate automatically
// Your project is large and object-oriented patterns matter

// 🔹 𝐀 𝐏𝐫𝐚𝐜𝐭𝐢𝐜𝐚𝐥 𝐄𝐱𝐚𝐦𝐩𝐥𝐞 (𝐂𝐨𝐦𝐛𝐢𝐧𝐢𝐧𝐠 𝐁𝐨𝐭𝐡)
interface Drivable {
  start(): void;
  stop(): void;
}

abstract class Vehicle implements Drivable {
  constructor(public model: string) {}
  abstract start(): void;
  stop() {
    console.log(`${this.model} stopped`);
  }
}

class Car extends Vehicle {
  start() {
    console.log(`${this.model} is starting`);
  }
}

const c = new Car("BMW");
c.start();
c.stop();
// This example demonstrates:
// Vehicle is an abstract class
// It implements a Drivable interface
// The abstract method start() must be implemented
// The concrete method stop() is inherited automatically
// Car gets both structure and behavior
