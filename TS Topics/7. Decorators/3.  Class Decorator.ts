//Before we can actually use @logClass we need to declare the class decorator somewhere in our application.
//Let’s take a look to the log class decorator implementation.
//=============================================================
function Logger1(constructor: Function) {
  console.log("Logging...");
  console.log(constructor);
}

@Logger1
class Person {
  name = "Krishna";
  constructor() {
    console.log("Creating person object...");
  }
}

const pers = new Person();
console.log(pers);

//==============================================================
function logClass(target: any) {
  // save a reference to the original constructor
  var original = target;
  // a utility function to generate instances of a class
  function construct(constructor, args) {
    var c: any = function () {
      return constructor.apply(this, args);
    };
    c.prototype = constructor.prototype;
    return new c();
  }
  // the new constructor behaviour
  var f: any = function (...args) {
    console.log("New: " + original.name);
    return construct(original, args);
  };
  // copy prototype so intanceof operator still works
  f.prototype = original.prototype;
  // return new constructor (will override original)
  return f;
}

//apply the decorator to a class
@logClass
class Person2 {
  public name: string;
  public surname: string;
  constructor(name: string, surname: string) {
    this.name = name;
    this.surname = surname;
  }
}
var me2 = new Person2("Zia", "Khan");
// New: Person
console.log(me2 instanceof Person2);
// true

//================================================================
// Apply multipal decorators:
function Logger(logString: string) {
  console.log("LOGGER FACTORY");
  return function (constructor: Function) {
    console.log(logString);
    console.log(constructor);
  };
}

function WithTemplate(template: string, hookId: string) {
  console.log("TEMPLATE FACTORY");
  return function (constructor: any) {
    console.log("Rendering template");
    const hookEl = document.getElementById(hookId);
    const p = new constructor();
    if (hookEl) {
      hookEl.innerHTML = template;
      hookEl.querySelector("h1")!.textContent = p.name;
    }
  };
}

// @Logger('LOGGING - PERSON')
@Logger("LOGGING")
@WithTemplate("<h1>My Person Object</h1>", "app")
class Person3 {
  name = "Krishna";
  constructor() {
    console.log("Creating person object...");
  }
}
const pers1 = new Person3();
console.log(pers1);
