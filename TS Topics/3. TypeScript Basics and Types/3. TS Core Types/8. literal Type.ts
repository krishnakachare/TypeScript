function combine(
  input1: number | string,
  input2: number | string,
  resultConversion: "as-number" | "as-text"
) {
  let result;
  if (
    (typeof input1 === "number" && typeof input2 === "number") ||
    resultConversion === "as-number"
  ) {
    result = +input1 + +input2;
  } else {
    result = input1.toString() + input2.toString();
  }
  return result;
  // if (resultConversion === 'as-number') {
  //   return +result;
  // } else {
  //   return result.toString();
  // }
}

const combinedAges = combine(30, 26, "as-number");
console.log(combinedAges);

const combinedStringAges = combine("30", "26", "as-number");
console.log(combinedStringAges);

const combinedNames = combine("Max", "Anna", "as-text");
console.log(combinedNames);

// Union literal

let myname: string | null;

myname = null;
console.log(myname);

myname = "zia";
console.log(myname);

//myname = undefined; //Error
//myname = 12; //Error

let myAge: string | number;

myAge = 16; //narrowing
console.log(myAge);

//console.log(myAge.toLowerCase());//Error

myAge = "Dont Know"; //narrowing
console.log(myAge);

console.log(myAge.toString()); // common to both types
//can be called even without narrowing

console.log(myAge.toLowerCase()); //Can be called on string
//because of narrowing

let newAge = Math.random() > 0.6 ? "Khan" : 60;

//newAge.toLowerCase();//Error: Transpiler cannot narrow

if (newAge === "Khan") {
  // Type of newAge: string
  newAge.toUpperCase(); // Can be called
}

if (typeof newAge === "string") {
  // Type of newAge: string
  newAge.toUpperCase(); // Can be called
}

typeof newAge === "string"
  ? newAge.toUpperCase() // Ok: string
  : newAge.toFixed(); // Ok: number

let age: number | "died" | "unknown";
age = 90; //OK
age = "died"; //OK
age = "unknown"; //OK
//age = "living";//Error

let zia: "zia";
zia = "zia";
//zia = "khan";//Error

let yourName = Math.random() > 0.6 ? "Hira Khan" : undefined;

if (yourName) {
  yourName.toUpperCase(); // Ok: string
}

//yourName.toUpperCase();//Error: Object is possibly 'undefined'.

yourName?.toUpperCase(); //OK

// You can also define a type alias
type RawData = boolean | number | string | null | undefined;

let data: RawData;

// You can even combine them
type Id = number | string;
type IdMaybe = Id | undefined | null;
