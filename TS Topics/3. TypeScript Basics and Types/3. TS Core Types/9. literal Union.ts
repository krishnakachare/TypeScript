let score: number | string = 33;
score = 44;
score = "55";

type User = {
  name: string;
  id: number;
};

type Admin = {
  username: string;
  id: number;
};

let hitesh: User | Admin = { name: "Krishna", id: 334 };

hitesh = { username: "hc", id: 334 };

// function getDbId(id: number | string){
//     //making some API calls
//     console.log(`DB id is: ${id}`);

// }
getDbId(3);
getDbId("3");

function getDbId(id: number | string) {
  if (typeof id === "string") {
    id.toLowerCase();
  }
}

//array

const data: number[] = [1, 2, 3];
const data2: string[] = ["1", "2", "3"];
const data3: (string | number | boolean)[] = ["1", "2", 3, true];

let seatAllotment: "aisle" | "middle" | "window";

seatAllotment = "aisle";
// seatAllotment = "crew"

function addWithUnion(
  arg1: string | number | boolean,
  arg2: string | number | boolean
): string | number | boolean {
  if (typeof arg1 === "string") {
    ///This is known as a type guard and means that the type of x will be treated as a string within the if statement block
    // arg1 is treated as a string here
    return arg1 + "is a string";
  }
  if (typeof arg1 === "number") {
    // arg1 is treated as a number here
    return arg1 + 10;
  }
  if (typeof arg1 === "boolean") {
    // arg1 is treated as a boolean here
    return arg1 && false;
  }
}

function f(x: number | number[]) {
  if (typeof x === "number") {
    //This is known as a type guard and means that the type of x will be treated as a number within the if statement block
    return x + 10;
  } else {
    // return sum of numbers
  }
}

class Dog {
  woof() {}
}
class Cat {
  meow() {}
}
var pet: Dog | Cat = new Dog();
if (pet instanceof Dog) {
  //this is also a type guard
  pet.woof(); // OK
} else {
  pet.woof(); // Error
}
