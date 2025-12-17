// TypeScript comes with several Utility Types that make typing easier, cleaner, and more expressive. They let you transform existing types instead of rewriting them from scratch.
// Here’s a compact rundown of the most useful ones — with simple examples.

 𝐏𝐚𝐫𝐭𝐢𝐚𝐥<𝐓>
// Makes all properties optional. Perfect when you're dealing with objects that are built step-by-step.

interface Point {
 x: number;
 y: number;
}

let pointPart: Partial<Point> = {};
pointPart.x = 10;

𝐑𝐞𝐪𝐮𝐢𝐫𝐞𝐝<𝐓>
// Makes all properties required — no exceptions.

interface Car {
 make: string;
 model: string;
 mileage?: number;
}

let myCar: Required<Car> = {
 make: "Ford",
 model: "Focus",
 mileage: 12000
};

𝐑𝐞𝐜𝐨𝐫𝐝<𝐊, 𝐓>

// Builds an object type with a specific set of keys and value types.

const nameAgeMap: Record<string, number> = {
 Alice: 21,
 Bob: 25
};

𝐎𝐦𝐢𝐭<𝐓, 𝐊>

// Removes certain keys from a type.

interface Person {
 name: string;
 age: number;
 location?: string;
}

const bob: Omit<Person, "age" | "location"> = {
 name: "Bob"
};

𝐏𝐢𝐜𝐤<𝐓, 𝐊>.

// Keeps only the specified keys.

const bobNameOnly: Pick<Person, "name"> = {
 name: "Bob"
};

𝐄𝐱𝐜𝐥𝐮𝐝𝐞<𝐓, 𝐔>

// Removes specific types from a union.

type Primitive = string | number | boolean;

const value: Exclude<Primitive, string> = true;

𝐑𝐞𝐭𝐮𝐫𝐧𝐓𝐲𝐩𝐞<𝐓>

Extracts the return type of a function.

type PointGenerator = () => { x: number; y: number; };

const point: ReturnType<PointGenerator> = {
 x: 10,
 y: 20
};

𝐏𝐚𝐫𝐚𝐦𝐞𝐭𝐞𝐫𝐬<𝐓>

// Extracts a function’s parameter types as a tuple.

type PointPrinter = (p: { x: number; y: number }) => void;

const firstParam: Parameters<PointPrinter>[0] = {
 x: 10,
 y: 20
};

𝐑𝐞𝐚𝐝𝐨𝐧𝐥𝐲<𝐓>

// Makes all properties immutable after initialization.

interface Person {
 name: string;
 age: number;
}
const person: Readonly<Person> = {
 name: "Dylan",
 age: 35
};
// If you're working with TypeScript regularly — especially in React — these utility types can dramatically simplify your code and help you write safer, more predictable components.