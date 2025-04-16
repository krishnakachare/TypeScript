/* 
2. Inheritance using class (extend super)
  a. single level inheritance : Transfering properties and methods only in bt 2 classes
*/
class abc1 {
    a = 10
}
class abc2 extends abc1 {
    b = 20
}
let objNew = new abc2();
console.log(objNew)
console.log(objNew.b) // 20
console.log(objNew.a) // 10

/* 
b. Multilevel inheritance :
    -we can inherit properties and methods from step by step (GrandFather,Father,Son) or multilevel
    -its also call forward inheritance
    -Reverce inheritance not possible

    GrandFather --> Father --> son
*/
// Multilevel inheritance :

class GrandFather {
    constructor(name, lastName) {
        this.grandFName = name
        this.grandFLastName = lastName
    }
    printGrandFatherName = function () {
        console.log(`${this.grandFName} ${this.grandFLastName}`)
    }
}

class Father extends GrandFather {
    constructor(name, lastName, fname) {
        super(name, lastName)
        this.fatherName = fname
        // this.fatherLastName = flastName
    }
    printFatherName = function () {
        console.log(`${this.fatherName} ${this.grandFLastName}`)
        // super.printGrandFatherName(); // will automatically call printGrandFatherName()
    }
}

class Son extends Father {
    constructor(name, lastName, fname, sname) {
        super(name, lastName, fname)
        this.sonName = sname
        // this.sonLastName = slastName
    }
    printSonName = function () {
        console.log(`${this.sonName} ${this.grandFLastName}`);
        // super.printGrandFatherName();
        // super.printFatherName();
        // will automatically call printGrandFatherName() & printFatherName()
    }
}

let son = new Son("grandFather", "surName", "Father", "Son");
console.log(son)
console.log(son.sonName)
son.printSonName();
// Can call father properties & Methods on Son class instance
console.log(son.fatherName)
son.printFatherName();
// Can call grandfather properties & Methods on Son class instance
console.log(son.grandFName)
console.log(son.grandFLastName)
son.printGrandFatherName();

