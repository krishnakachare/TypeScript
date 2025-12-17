// When Familiar 🎯 Interface in TypeScript: Structuring Dynamic JavaScript

// One of the biggest challenges in JavaScript is the lack of a fixed structure for objects and functions. While this flexibility is an advantage in small projects, it can lead to errors and maintenance challenges in large-scale applications.

// This is where Interface comes into play, providing clear contracts that enforce consistency and reliability across your codebase.

// ✔️ What is an Interface?

// An Interface defines what properties and methods an object must have.
// It acts as a formal contract, ensuring predictability and consistency throughout your project.

// ✔️ Benefits of Using Interfaces
// 🔹 1) Reliable Structure

// If data doesn’t match the defined structure, TypeScript immediately throws an error.

interface IUser {
 id: number;
 name: string;
 email: string;
}

// 🔹 2) Improved Readability & Predictability

// Functions and classes clearly specify the expected inputs.

function createUser(user: IUser) {}

// 🔹 3) Reusability & OOP Design

// Interfaces create shared contracts for multiple classes.

interface IStorable {
 save(): void;
 load(): void;
}

class Product implements IStorable { … }
class User implements IStorable { … }

// 🔹 4) Support for Inheritance

// Interfaces can extend other interfaces, enabling complex and scalable structures.

interface Person {
 name: string;
 age: number;
}

interface Employee extends Person {
 empCode: number;
}

// ✔️ Interface vs Type — When to Use Which?

// A common question: Interface or Type?

// 🔹 When to Use Interface:

// When extension (extend) is required

// In OOP-heavy projects and large-scale applications

// When multiple classes need to follow a shared contract

// When structures are expected to evolve

// When building libraries or modules for broad usage

// In short: Interface is about architecture and scalability.

// 🔹 When to Use Type:

// When inheritance or extension isn’t needed

// For simple or non-OOP data structures like tuples, arrays, unions, or function types

// When modeling flexible, non-class-based types

// Examples where type shines:

type Coordinates = [number, number];

type ApiResponse = string | number | boolean;

type UserMap = {
 [key: string]: number;
};


// In short: Type is for flexible data modeling.

// ✔️ Using Interface in Classes

// Classes must implement all Interface requirements:

interface Person {
 firstName: string;
 lastName: string;
 age: number;
 fullName(): string;
}

class Employee implements Person {
 // implement properties and methods
}

// 📌 Summary

// Interfaces provide scalable, reliable, and maintainable structures in TypeScript.
// Types offer flexibility for non-class-based and complex data definitions.

// Together, they create a powerful combination for writing clean, predictable, and maintainable code—especially in large, collaborative projects.