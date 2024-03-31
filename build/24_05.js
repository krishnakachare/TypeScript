"use strict";
let message = "Hello world";
console.log(message);
// Number String Boolean 
let numberOne = 10;
let isAdult = true;
let fullName = "chinmay deshpande";
//let notDefined:undefined = undefined
//let notPresent:null = null
//  Hositing
// set map new 
let fruits = ["apple", "mango", "banana"];
console.log(fruits);
let vegetable = ["Apple", "Grapes"];
let marks = [1, 3, 4, 5];
let mark = [1, 3];
let regExp = new RegExp('hi');
let setA = new Set([1, 2, 311, 33, 44, 2]);
// Array
let countries = ["India", "Pakistan", "Japan"];
countries.push('Cuba');
// Tuple
let countries2 = ["India", "Japan"];
countries2.push('hello');
console.log(countries);
//countries2 =["a","b","c"]
// Object 
// let obj:{x:number,y:number}= {
//     x:10,
//     y:20
// }
let i = 0;
while (i <= 5) {
    console.log(i);
    i++;
}
let y = 0;
for (y = 0; y <= 10; y++) {
    console.log(y);
}
let person = {
    name: "chinmay",
    age: 12
};
let dam = {
    x: 10,
    y: 12
};
let well = {
    x: 12,
    y: 23
};
// writing function 
function addition(x, y) {
    console.log(x + y);
}
addition(5, 6);
let info = function (obj) {
    console.log(`firstName ${obj.firstName}`);
    console.log(`firstName ${obj.lastName}`);
};
info({ firstName: "sachin", lastName: "tendulkar" });
let a = {
    a: 12,
    b: 13,
    c: 23
};
let b = {
    a: 13,
    b: 34
};
// function add(obj:pointB){
//     for(let key in obj){
//         console.log(key)
//     }
// }
// add(a)
const person1 = {
    fullName: "chinmay deshpande",
    age: 12
};
person1.fullName = "poorva vyas";
person1.age = 29;
console.log(person1);
function addition2(x, y) {
    return 34 + 44;
}
let a2 = addition2(1, 3);
function addition3(x, y) {
    return 23 + 34;
}
let a3 = addition3(1, 3);
function addition4(x, y) {
    console.log(23 + 34);
}
addition4(23, 45);
// person1 = {fullName:string,age:number} = {
//     fullName:"chinmay deshpande",
//     age:12
// }
// function additionb(x,y){
//     if(typeof x === 'number' && typeof === 'number'){
//         return x + y
//     }
//     else {
//         console.log('input valid')
//     }
// }
// additionb(122,133)
// regex
// let a = /hello/
// let b = "i am chinmay hello"
// let s = a.test(b)
// console.log(s)
// let array = [1,2,3,4]
// let array2 = new Array()
// let obj = {
//     fullName:"chinmay",
//     lastName:"deshpande"
// }
// let obj2 = new Object()
