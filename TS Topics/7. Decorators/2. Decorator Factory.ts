/* 
Decorators Factory:
Can pass parameters into a decorator by returning a decorator function from another function.
*/

function Logger1(logString: string) {
  return function (constructor: Function) {
    console.log(logString);
    console.log(constructor);
  };
}

@Logger1("LOGGING - PERSON")
class Per {
  name = "Krishna";
  constructor() {
    console.log("Creating person object...");
  }
}

const pers3 = new Per();
console.log(pers3);

//==================================================
function logClassWithArgs(filter: Object) {
  return (target: Object) => {
    // implement class decorator here, the class decorator
    // will have access to the decorator arguments (filter)
    // because they are  stored in a closure
    console.log(target, filter);
  };
}

//apply the decorator to a class
@logClassWithArgs({ when: { name: "Zeeshan" } })
class Person1 {
  public name: string;
  public surname: string;
  constructor(name: string, surname: string) {
    this.name = name;
    this.surname = surname;
  }
}
var me = new Person1("Zia", "Khan");
// New: Person
console.log(me instanceof Person1);
// true

//======================================================
function Logger(logString: string) {
  console.log("LOGGER FACTORY");
  return function (constructor: Function) {
    console.log(logString);
    console.log(constructor);
  };
}

function WithTemplate(template: string, hookId: string) {
  console.log("TEMPLATE FACTORY");
  return function <T extends { new (...args: any[]): { name: string } }>(
    originalConstructor: T
  ) {
    return class extends originalConstructor {
      constructor(..._: any[]) {
        super();
        console.log("Rendering template");
        const hookEl = document.getElementById(hookId);
        if (hookEl) {
          hookEl.innerHTML = template;
          hookEl.querySelector("h1")!.textContent = this.name;
        }
      }
    };
  };
}

// @Logger('LOGGING - PERSON')
@Logger("LOGGING")
@WithTemplate("<h1>My Person Object</h1>", "app")
class Perso {
  name = "Krishna";
  constructor() {
    console.log("Creating person object...");
  }
}
const pers2 = new Perso();
console.log(pers2);
