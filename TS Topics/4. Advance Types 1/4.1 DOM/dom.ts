let headingEl = document.querySelector("h1");
// let headingEl: HTMLHeadingElement | null
let headingEle = document.querySelector("h1")!;
// let headingEle: HTMLHeadingElement
// NOTE: ! means value not have null. Definetly value present.

let para = document.querySelector("p")!; // HTMLParagraphElement
let paraClass = document.querySelector(".para")!; // Element
console.log(paraClass);
// Here paraClass infert Element type which are not exact

// let userinput = document.querySelector("#input")! // Element
// console.log(userinput.value); // Property 'value' does not exist on type 'Element'.

// use type assertion/casting
let userinput = document.querySelector("#input")! as HTMLInputElement;
console.log(userinput.value);
