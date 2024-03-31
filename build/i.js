"use strict";
// define datatypes
let kk = "krishna";
console.log(kk);
let num = 10;
let yes = true;
let notDefined = undefined;
let notPresent = null;
// define array
// 1
let arr = [1, 2, 3, 4, 5];
// 2
let arr2 = [1, 2, 3, 4, 5];
let arrStr = ["kk", "kk1"];
console.log(arr, arr2);
// tuple
let arrMix = ["kk", 2];
console.log(arrMix);
// object
// 1
let obj = {
    fullName: "krishna",
    age: 10
};
console.log(obj);
let obj2 = {
    fullName2: "krishna",
    age2: 10
};
console.log(obj2);
// function
// 1
function add(a, b) {
    return a + b;
}
add(1, 1);
console.log(add(1, 1));
// 2
function add1(a, b) {
    return a + b;
}
add1(1, 1);
console.log(add1(1, 1));
// 3
function add2(a, b) {
    console.log(a + b);
}
add2(1, 1);
console.log(add2(1, 1));
// 3 javascript
// function add3(a, b) {
//     if (typeof a === Number && typeof b === Number) console.log(a + b)
// }
// add3(1, 1)
// console.log(add3(1, 1))
