// 🚀𝐌𝐚𝐬𝐭𝐞𝐫𝐢𝐧𝐠 𝐔𝐧𝐢𝐨𝐧 𝐓𝐲𝐩𝐞𝐬 & 𝐓𝐲𝐩𝐞 𝐆𝐮𝐚𝐫𝐝𝐬 𝐢𝐧 𝐓𝐲𝐩𝐞𝐒𝐜𝐫𝐢𝐩𝐭

// TypeScript is powerful, but it doesn’t read your mind.
// When you tell it a variable might be one thing… or another, TS rightfully panics unless you clarify which one you’re actually using.
// That’s where Union Types and Type Guards shine.

// 🔹 𝐖𝐡𝐚𝐭 𝐈𝐬 𝐚 𝐔𝐧𝐢𝐨𝐧 𝐓𝐲𝐩𝐞?

// A Union Type lets you say a value can be one of several types:

type Shape = Circle | Square;

// It’s incredibly useful when your function needs to handle a variety of inputs — but not all inputs behave the same.

// Think of it like saying:
// “This function accepts a cat or a dog… just don’t blame me if you try to make the cat bark.”

// 🔹 𝐖𝐡𝐲 𝐓𝐲𝐩𝐞𝐒𝐜𝐫𝐢𝐩𝐭 𝐘𝐞𝐥𝐥𝐬 𝐖𝐢𝐭𝐡𝐨𝐮𝐭 𝐚 𝐓𝐲𝐩𝐞 𝐆𝐮𝐚𝐫𝐝

// If you write:

type Circle = { radius: number };
type Square = { side: number };

type Shape = Circle | Square;

function printArea(shape: Shape) {
  console.log(shape.side); // ❌ Error
}

// TS refuses to let you access side because a Circle doesn’t have that property.

// The fix?
// Tell TypeScript which type you're dealing with — using a Type Guard.

// 🔹 𝐓𝐲𝐩𝐞 𝐆𝐮𝐚𝐫𝐝𝐬: 𝐓𝐡𝐞 𝐆𝐨𝐨𝐝, 𝐓𝐡𝐞 𝐔𝐬𝐞𝐟𝐮𝐥, 𝐓𝐡𝐞 𝐍𝐞𝐜𝐞𝐬𝐬𝐚𝐫𝐲

// Type Guards help TS narrow down a union into a specific type.
// Here are the most practical ones, and when to use them.

// 🛡️ 𝟏. 𝐢𝐧 𝐎𝐩𝐞𝐫𝐚𝐭𝐨𝐫 — 𝐁𝐞𝐬𝐭 𝐟𝐨𝐫 𝐝𝐢𝐬𝐭𝐢𝐧𝐠𝐮𝐢𝐬𝐡𝐢𝐧𝐠 𝐨𝐛𝐣𝐞𝐜𝐭𝐬 𝐛𝐲 𝐭𝐡𝐞𝐢𝐫 𝐩𝐫𝐨𝐩𝐞𝐫𝐭𝐢𝐞𝐬

function printArea(shape: Shape) {
  if ("side" in shape) {
    console.log("Square area:", shape.side * shape.side);
  } else {
    console.log("Circle area:", Math.PI * shape.radius ** 2);
  }
}

// Perfect when your types have unique fields.

// 🛡️ 𝟐. 𝐭𝐲𝐩𝐞𝐨𝐟 — 𝐁𝐞𝐬𝐭 𝐟𝐨𝐫 𝐩𝐫𝐢𝐦𝐢𝐭𝐢𝐯𝐞 𝐭𝐲𝐩𝐞𝐬 (𝐬𝐭𝐫𝐢𝐧𝐠, 𝐧𝐮𝐦𝐛𝐞𝐫, 𝐛𝐨𝐨𝐥𝐞𝐚𝐧)

type Input = string | number;

function normalize(value: Input) {
  if (typeof value === "string") {
    return value.trim();
  }
  return value.toString();
}

// Simple, fast, and works only for primitives.

// 🛡️ 𝟑. 𝐢𝐧𝐬𝐭𝐚𝐧𝐜𝐞𝐨𝐟 — 𝐁𝐞𝐬𝐭 𝐟𝐨𝐫 𝐜𝐥𝐚𝐬𝐬𝐞𝐬 𝐚𝐧𝐝 𝐨𝐛𝐣𝐞𝐜𝐭𝐬 𝐜𝐫𝐞𝐚𝐭𝐞𝐝 𝐯𝐢𝐚 𝐧𝐞𝐰

class Car {
  drive() {
    console.log("Driving…");
  }
}

class Bike {
  pedal() {
    console.log("Pedaling…");
  }
}

type Vehicle = Car | Bike;

function move(v: Vehicle) {
  if (v instanceof Car) {
    v.drive();
  } else {
    v.pedal();
  }
}

// Use it when working with class-based systems.

// 🛡️ 𝟒. 𝐂𝐮𝐬𝐭𝐨𝐦 𝐓𝐲𝐩𝐞 𝐆𝐮𝐚𝐫𝐝𝐬 — 𝐁𝐞𝐬𝐭 𝐟𝐨𝐫 𝐫𝐞𝐮𝐬𝐚𝐛𝐥𝐞 𝐥𝐨𝐠𝐢𝐜 𝐢𝐧 𝐥𝐚𝐫𝐠𝐞 𝐚𝐩𝐩𝐬

function isCircle(shape: Shape): shape is Circle {
  return "radius" in shape;
}

function printArea(shape: Shape) {
  if (isCircle(shape)) {
    console.log("Circle area:", Math.PI * shape.radius ** 2);
  } else {
    console.log("Square area:", shape.side * shape.side);
  }
}

// Clean, readable, and scalable.
