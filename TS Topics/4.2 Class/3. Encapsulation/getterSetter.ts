/* 
1. Inheritance --> extends, super().

2. Abstraction : 
    Involves hiding complex implementation details and showing only the necessary features of an object.

3. Encapsulation: 
    Is the practice of wrapping data(variables) and methods (functions) into a singleunit called a class.

# Getter setter methods use :
    Access and mutate the properties of an object.
    Able to achive Encapsulation
*/


class person {
    static a = 10 // static/class level properties
    // private properties--> '_', '#'
    // _keyName 
    // #keyName --> Hiding data --> not able retrive
    #pin
    constructor(num) {
        this.fName = null  // instance level properties
        this.lastName = null
        this.#pin = num
    }

    // Abstraction Example:
    withdraw(ammount, password) {
        if (this.#pin === password)
            console.log(`Correct PIN : Can withdraw ${ammount} Rs`)
        else
            console.error("Incorrect PIN : Access Denid !!!")
    }

    // Getter methods:
    get getFullName() {
        return `My fullName : ${this.fName} ${this.lastName}`
    }

    // Setter method:
    set name(para) {
        this.fName = para
    }
    // name(para) {
    //     this.fName = para
    // }
    set lastname(para) {
        this.lastName = para
    }
}
person.a // 10
person.fName // no

let human = new person(123);
console.log(human)
// setter use:
human.fName = "JS"
// human.name = "JS"
// human.name("JS") --> normal method
human.lastName = "ABC"
console.log(`My fullName : ${human.fName} ${human.lastName}`)
console.log(human)
// getter use:
console.log(human.getFullName) // JS
console.log(human.fName) // JS --> instance level properties

// Encapsulation: 
// console.log(human.#pin)  // not able to access private properties
// human.withdraw(200, 222)
human.withdraw(200, 123)
