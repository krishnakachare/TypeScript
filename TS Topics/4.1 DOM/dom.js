var headingEl = document.querySelector("h1");
// let headingEl: HTMLHeadingElement | null
var headingEle = document.querySelector("h1");
// let headingEle: HTMLHeadingElement
// NOTE: ! means value not have null. Definetly value present.
var para = document.querySelector("p"); // HTMLParagraphElement
var paraClass = document.querySelector(".para"); // Element
console.log(paraClass);
// Here paraClass infert Element type which are not exact
// let userinput = document.querySelector("#input")! // Element
// console.log(userinput.value); // Property 'value' does not exist on type 'Element'.
// use type assertion/casting
var userinput = document.querySelector("#input");
console.log(userinput.value);
