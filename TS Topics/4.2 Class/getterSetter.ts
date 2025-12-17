// Today I went through three concepts I already knew from JavaScript​:
// getters, setters, and polymorphism.
// But what I realized is that TypeScript doesn’t just copy these ideas — it makes them safer, stricter, and much more reliable.

// 🔹 Getters & Setters — From “Nice to Have” to “Data Control Tools”

// Sure, JavaScript supports getters and setters.
// But TypeScript changes the whole experience:

// You define strict input and output types

// You prevent incorrect assignments

// You gain full control over how internal data is accessed and updated

class User {
  private _age: number = 0;

  get age(): number {
    return this._age;
  }

  set age(value: number) {
    if (value >= 0) this._age = value;
  }
}

// TypeScript ensures that no one can accidentally do age = "hello".
// So getters/setters evolve from being “syntactic sugar” to becoming solid, reliable API layers inside your class.

// 🔹 Polymorphism — TypeScript Makes It Predictable and Type-Safe

// Polymorphism isn’t new.
// But TypeScript adds something crucial: type-safe contracts.

class Shape {
  area(): number {
    return 0;
  }
}

class Circle extends Shape {
  constructor(private r: number) {
    super();
  }

  area(): number {
    return Math.PI * this.r * this.r;
  }
}

class Square extends Shape {
  constructor(private s: number) {
    super();
  }

  area(): number {
    return this.s * this.s;
  }
}

function printArea(shape: Shape) {
  console.log(shape.area());
}

// ------------ CALLING ------------

const circle = new Circle(5);
const square = new Square(4);

printArea(circle); // 78.5398...
printArea(square); // 16

// This is polymorphism, but with the guarantee that
// every subclass follows the structure defined by Shape.
// No surprises at runtime — the compiler has your back.

// 🔹 Today’s Takeaway

// These features existed in JavaScript,
// but TypeScript turns them into stable, predictable, scalable tools:

// Stricter control

// Safer data flow

// Clear contracts

// Fewer runtime bugs

// TypeScript makes OOP feel intentional instead of optional.
