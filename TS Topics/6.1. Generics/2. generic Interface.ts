// You can define interfaces that work with generic types.

interface Box<T> {
  value: T;
}

const stringBox: Box<string> = { value: "test" };
const numberBox: Box<number> = { value: 123 };
