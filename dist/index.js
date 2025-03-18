"use strict";
// program One 
let msg = "hello";
console.log(msg);
console.log(msg);
//--------------------------
// primitive datatypes 
let isMarried = true;
let mobile = 7709192441;
let fullName = "chinmay deshpande";
// array or set 
let numbers = [11, 22, 33];
let numbers2 = [22, 33, 44];
console.log(numbers);
// let setA:Set<number> = new Set([11,22,33,44,55,66,44])
// console.log(setA)
//-------------------->
// let a = "20"
// let b = a = 30
// console.log(a+b)
let names = ["chinmay", "shirish", "deshpande", "ram"];
console.log(names);
let names2 = ["amol", "mayuri"]; // tuple
names2 = ["ram", "krishna"];
names2.push('amol');
console.log(names2);
// object 
let person = {
    fullName: "chinmay",
    age: 34
};
let centre = {
    x: 12,
    y: 233
};
let centre2 = {
    x: 12,
    y: 233
};
let centre4 = {
    x: 12,
    y: 233
};
let centre3 = {
    x: 12,
    y: 233
};
let otp = [2, 3, 4, 5];
let mpin = [2, 3, 4, 5];
// function 
function addition(x, y) {
    console.log(x + y);
    return x + y;
}
let s = addition(1, 3);
console.log(s);
// function addition2(x:number,y:number):void {
//     console.log(x+y)
// let s = addition2(1,3)
// console.log(s)
function add(...abc) {
    return abc.reduce((acc, el) => {
        return acc + el;
    }, 0);
}
add(22, 33, 44, 55, 66);
