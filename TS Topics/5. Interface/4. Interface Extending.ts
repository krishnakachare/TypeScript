interface Shape {
  color: string;
}

interface Square extends Shape {
  sideLength: number;
}

var square = <Square>{};
square.color = "blue";
square.sideLength = 10;
square.a = 5; //Error

//An interface can extend multiple interfaces, creating a combination of all of the interfaces:

interface PenStroke {
  penWidth: number;
}

interface Square1 extends Shape, PenStroke {
  sideLength: number;
}

var square1 = {} as Square1; //Alternative syntax for casting
square1.color = "blue";
square1.sideLength = 10;
square1.penWidth = 5.0;

////////////////////////////

//A class declaration creates two things: a type representing instances of the class and a constructor function.
//Because classes create types, you can use them in the same places you would be able to use interfaces.

class Point {
  x: number;
  y: number;
}

interface Point3d extends Point {
  z: number;
}

var point3d: Point3d = { x: 1, y: 2, z: 3 };

///////////

interface User {
  readonly dbId: number;
  email: string;
  userId: number;
  googleId?: string;
  // startTrail: () => string
  startTrail(): string;
  getCoupon(couponname: string, value: number): number;
}

interface User {
  githubToken: string;
}

interface Admin extends User {
  role: "admin" | "ta" | "learner";
}

const hitesh: Admin = {
  dbId: 22,
  email: "h@h.com",
  userId: 2211,
  role: "admin",
  githubToken: "github",
  startTrail: () => {
    return "trail started";
  },
  getCoupon: (name: "KK", off: 10) => {
    return 10;
  },
};
hitesh.email = "h@hc.com";
// hitesh.dbId = 33
