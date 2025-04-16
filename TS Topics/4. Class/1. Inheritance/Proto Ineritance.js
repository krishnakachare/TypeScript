/* 
# OOPS :
    1. Inheritance:
       1.Prototype Inheritance:
*/

let arr = [1,2,3]
arr.push(); // push() inherited from Array class

let obj1 = {
    a: 10
}
let obj2 = {
    b: 20,
    __proto__: obj1
}
console.log(obj1.a) // 10
console.log(obj1.b) // undefined
console.log(obj2.b) // 20
console.log(obj2.a) // 10
console.log(obj2)

// class abc2 {
//     b = 20
// }
// class abc1 {
//     a = 10   
// }
// let objNew1 = new abc1()
// let objNew2 = new abc2()
// objNew1.__proto__ = obj2
// console.log(objNew1)
// console.log(objNew1.a) // 10
// console.log(objNew1.b) // 20

class abc2 {
    b = 20
}
class abc1 {
    a = 10   
}

// abc1.prototype = abc2.prototype

let objNew1 = new abc1()
let objNew2 = new abc2()
// objNew1.__proto__ = obj2
objNew1.__proto__ = abc2.prototype
console.log(objNew1)
console.log(objNew1.a) // 10
console.log(objNew1.b) // 20
