function add(n1: number, n2: number) {
  return n1 + n2;
}

function printResult(num: number): void {
  console.log("Result: " + num);
}

function addAndHandle(n1: number, n2: number, cb: (num: number) => void) {
  const result = n1 + n2;
  cb(result);
}

printResult(add(5, 12));

let combineValues: (a: number, b: number) => number;

combineValues = add;
// combineValues = printResult;
// combineValues = 5;

console.log(combineValues(8, 8));

// let someValue: undefined;

addAndHandle(10, 20, (result) => {
  console.log(result);
});

//Note: All parameters are required

//Named function
function add(x: number, y: number): number {
  return x + y;
}

//Anonymous function
let myAdd1 = function (x: number, y: number): number {
  return x + y;
};

//Anonymous function with explict type
let myAdd2: (x: number, y: number) => number = function (
  x: number,
  y: number
): number {
  return x + y;
};

//type names dont matter
let myAdd3: (baseValue: number, increment: number) => number = function (
  x: number,
  y: number
): number {
  return x + y;
};
//Lambda functions
let myAdd4 = (a: number, b: number) => a + b;
//output will be: var myAdd4 = function(a : number, b : number) {return a + b};

type GreetFunction = (a: string) => void;
function greeter(fn: GreetFunction) {
  //....
}

function buildName(firstName: string, lastName?: string): string {
  //Named function with optional parameters
  if (lastName) return firstName + " " + lastName;
  else return firstName;
}

var result1 = buildName("Bob"); //works correctly because last parameter is optional
//var result2 = buildName("Bob", "Adams", "Sr.");  //error, too many parameters
var result3 = buildName("Bob", "Adams"); //correct

//anonymous function type with optional parameters
var buildName1: (firstName: string, lastName?: string) => string = function (
  firstName: string,
  lastName?: string
): string {
  if (lastName) return firstName + " " + lastName;
  else return firstName;
};
