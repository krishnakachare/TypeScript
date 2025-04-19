//We can use interfaces to describe function types, please note this is different from Java or C#
//where we can only use interfaces to describe class types.

//We are defining a interface with a single function, any function with the same signature will have this type

interface SearchFunc {
  (source: string, subString: string): boolean; //Note there is no name assigned to the function signature
}

var mySearch: SearchFunc = function (src: string, sub: string) {
  var result = src.search(sub);
  if (result == -1) {
    return false;
  } else {
    return true;
  }
};

//For function types to correctly type-check, the name of the parameters do not need to match.
//Function parameters are checked one at a time, with the type in each corresponding parameter position checked against each other.


//=============================================
// type AddFn = (a: number, b: number) => number;
interface AddFn {
  (a: number, b: number): number;
}

let add: AddFn;

add = (n1: number, n2: number) => {
  return n1 + n2;
};

interface Named {
  readonly name: string;
}

interface Greetable extends Named {
  greet(phrase: string): void;
}

class Person implements Greetable {
  name: string;
  age = 30;

  constructor(n: string) {
    this.name = n;
  }

  greet(phrase: string) {
    console.log(phrase + ' ' + this.name);
  }
}

let user1: Greetable;

user1 = new Person('Max');
// user1.name = 'Manu';

user1.greet('Hi there - I am');
console.log(user1);
