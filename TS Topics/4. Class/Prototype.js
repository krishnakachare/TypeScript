/*
 2.prototype :
        -Prototype is class inbuild property who have object value.
        -Prototype is inbuild object which is inbuild attached to every instance object in javascript.
 # Use:
        -Set properties in class level
        -Inherite properties from one class to another class

All JavaScript objects inherit properties and methods from a prototype.

# Prototype chain:
  prototype ==> inbuild class property
  __proto__ ==> is a instance property. Its return instance constructor/class prototype

       Object
          |
        Array, String, Number, Boolean, Function --> inbuild and user define class
          |
        Instances...
        let arr = [1,2]

Relation bt __proto__ and prototype :
Prototype chain : Prototype chain ends at null
*/
// Object:
var obj = { a: 10 };
console.log(obj);
// Direct properties : Exist in instance/direct class
console.log(obj.a); // 10
// prototype properties : Exist in prototype
console.log(obj.hasOwnProperty('a')); // true
// Get the direct obj prototype object
console.log(obj.__proto__); // obj is instance of Object class
console.log(Object.prototype);
// Array:
var arr = []; // arr is instance of Array class
console.log(arr.__proto__); // getting direct arr prototype object
console.log(Array.prototype);
console.log(arr.__proto__ === Array.prototype); // true
console.log(arr.__proto__.__proto__);
console.log(Object.prototype);
console.log(arr.__proto__.__proto__ === Object.prototype); // true
console.log(arr.__proto__.__proto__.__proto__); // null
// Try with String, Object
