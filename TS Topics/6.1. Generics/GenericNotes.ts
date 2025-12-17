// Today I explored one of TypeScript’s superpowers: Generics.
// In short? They let you write reusable, flexible code *without* losing type safety. No more “any chaos.” 🎯

// 𝐖𝐡𝐲 𝐆𝐞𝐧𝐞𝐫𝐢𝐜𝐬?

// Because sometimes you don’t know the exact type you’ll receive — but you still want TypeScript to protect you.
// Generics help you create components that work with *multiple types* while keeping everything strongly typed.

// 𝐆𝐞𝐧𝐞𝐫𝐢𝐜𝐬 𝐢𝐧 𝐅𝐮𝐧𝐜𝐭𝐢𝐨𝐧𝐬

function wrapValue<T>(value: T): T {
  return value;
}

const a = wrapValue<number>(10);
const b = wrapValue("Hello");

// ✔️ Same function
// ✔️ Different types
// ✔️ Still safe

// 𝐆𝐞𝐧𝐞𝐫𝐢𝐜𝐬 𝐢𝐧 𝐈𝐧𝐭𝐞𝐫𝐟𝐚𝐜𝐞𝐬

interface ApiResponse<T> {
  data: T;
  success: boolean;
}

const userResponse: ApiResponse<{ id: number; name: string }> = {
  data: { id: 1, name: "Aati" },
  success: true,
};
// Perfect for API structures that change per endpoint.

// 𝐆𝐞𝐧𝐞𝐫𝐢𝐜𝐬 𝐢𝐧 𝐂𝐥𝐚𝐬𝐬𝐞𝐬

class StorageBox<T> {
  items: T[] = [];
  add(item: T) {
    this.items.push(item);
  }
}

const numberBox = new StorageBox<number>();
numberBox.add(42);
// `
// Reusable containers with consistent typing — clean and predictable.

// 𝐖𝐡𝐲 𝐈𝐭 𝐌𝐚𝐭𝐭𝐞𝐫𝐬

// Generics prevent duplication, reduce bugs, and make your code scalable — especially in large apps where types differ but patterns repeat.
