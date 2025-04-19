//We can use interfaces to describe an array also, please note this is different from Java or C#
//where we can only use interfaces to describe class types.

interface StringArray {
  [index: number]: string; //Note there is no name assigned to the function signature
  length: number;
}

let myArray: StringArray = ["Bob", "Fred"];

var first = myArray[0];

//Array types have an 'index' type that describes the types allowed to index the object,
//along with the corresponding return type for accessing the index.

//There are two types of supported index types: string and number.
//Index signatures are a powerful way to describe the array and 'dictionary' pattern
//array pattern is demonstrated above, dictinary is as follows:
//Case: 1
interface Dictionary {
  [index: string]: string; //Note there is no name assigned to the function signature
}

let myDictionary: Dictionary = { first: "Bob", second: "Fred" };

var first = myDictionary["first"];

//Case: 2
interface Dictionary2 {
  [index: string]: string; //Note there is no name assigned to the function signature
  length: string; // string length property
}

let myDictionary2: Dictionary2 = { first: "Bob", second: "Fred" }; // Will not work, property length is required
let myDictionary3: Dictionary2 = { first: "Bob", second: "Fred", length: "2" }; // Will work, length property is defined but not much usefull

var first = myDictionary3["first"];

//It is possible to support both types of index,
//with the restriction that the type returned from the numeric index must be a subtype of the type returned from the string index.

//While index signatures are a powerful way to describe the array and 'dictionary' pattern,
//they also enforce that all properties match their return type. In this example,
//the property does not match the more general index, and the type-checker gives an error:

interface AnotherDictionary {
  [index: string]: string; //Note there is no name assigned to the function signature
  length: number; // error, the type of 'length' is not a subtype of the indexer
}

/* 
# Index Signatures in TypeScript

In TypeScript, **Index Signatures** let you define the structure of an object that can have unknown property names but known types for the property values.

---

## 🔍 What are Index Signatures?

Index signatures are useful when you want to allow dynamic property names, like when dealing with dictionaries, configurations, or records.

```ts
interface Example {
  [key: string]: number;
}
```

This means: "An object of type `Example` can have **any string key**, and its corresponding value must be a **number**."

---

## ✅ Basic Example

```ts
interface Scores {
  [student: string]: number;
}

const scoreBoard: Scores = {
  Alice: 95,
  Bob: 87,
  Charlie: 92,
};
```

### Accessing Dynamic Keys
```ts
console.log(scoreBoard["Alice"]); // 95
```

---

## 🧠 Index Signature Key Types

- `string`: Allows string keys (and number keys since they are auto-converted to strings)
- `number`: Allows only number keys (commonly used in arrays or similar structures)

```ts
interface BooleanArray {
  [index: number]: boolean;
}

const flags: BooleanArray = [true, false, true];
```

---

## 🛑 Explicit Properties and Index Signature Type Compatibility

All explicitly defined properties must **match the type** of the index signature:

```ts
interface User {
  [key: string]: string;
  name: string;       // ✅ OK
  // age: number;     // ❌ Error: number is not assignable to string
}
```

To allow multiple value types:
```ts
interface MixedValues {
  [key: string]: string | number;
  name: string;
  age: number;
}
```

---

## 📘 Use Case: Configuration Objects

```ts
interface Config {
  [key: string]: string | number;
  appName: string;
  version: number;
}

const settings: Config = {
  appName: "MyApp",
  version: 1.0,
  theme: "dark",
};
```

---

## 🚫 Limitations

- You cannot use union types for the key (e.g., `[key: string | number]` is not allowed).
- Index signature types must be consistent across all values (unless using union types).

---

*/

// Index Signatures 

// interface TransactionObj {
//     readonly [index: string]: number
// }

interface TransactionObj {
  readonly [index: string]: number
  Pizza: number,
  Books: number,
  Job: number
}

const todaysTransactions: TransactionObj = {
  Pizza: -10,
  Books: -5,
  Job: 50,
}

console.log(todaysTransactions.Pizza)
console.log(todaysTransactions['Pizza'])

let prop: string = 'Pizza'
console.log(todaysTransactions[prop])

const todaysNet = (transactions: TransactionObj): number => {
  let total = 0
  for (const transaction in transactions) {
      total += transactions[transaction]
  }
  return total
}

console.log(todaysNet(todaysTransactions))

//todaysTransactions.Pizza = 40

console.log(todaysTransactions['Dave']) // undefined

///////////////////////////////////

interface Student {
  //[key: string]: string | number | number[] | undefined
  name: string,
  GPA: number,
  classes?: number[]
}

const student: Student = {
  name: "Doug",
  GPA: 3.5,
  classes: [100, 200]
}

// console.log(student.test)

for (const key in student) {
  console.log(`${key}: ${student[key as keyof Student]}`)
}

Object.keys(student).map(key => {
  console.log(student[key as keyof typeof student])
})

const logStudentKey = (student: Student, key: keyof Student): void => {
  console.log(`Student ${key}: ${student[key]}`)
}

logStudentKey(student, 'name')

/////////////////////////////////

// interface Incomes {
//     [key: string]: number
// }

type Streams = 'salary' | 'bonus' | 'sidehustle'

type Incomes = Record<Streams, number>

const monthlyIncomes: Incomes = {
  salary: 500,
  bonus: 100,
  sidehustle: 250
}

for (const revenue in monthlyIncomes) {
  console.log(monthlyIncomes[revenue as keyof Incomes])
}
