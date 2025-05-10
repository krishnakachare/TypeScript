type Admin = {
  name: string;
  privileges: string[];
};

type Employee = {
  name: string;
  startDate: Date;
};

// interface ElevatedEmployee extends Employee, Admin {}

type ElevatedEmployee = Admin & Employee;

const e1: ElevatedEmployee = {
  name: "Krishna",
  privileges: ["create-server"],
  startDate: new Date(),
};

type Combinable = string | number;
type Numeric = number | boolean;

type Universal = Combinable & Numeric;

function add(a: Combinable, b: Combinable) {
  if (typeof a === "string" || typeof b === "string") {
    return a.toString() + b.toString();
  }
  return a + b;
}

type UnknownEmployee = Employee | Admin;

function printEmployeeInformation(emp: UnknownEmployee) {
  console.log("Name: " + emp.name);
  if ("privileges" in emp) {
    console.log("Privileges: " + emp.privileges);
  }
  if ("startDate" in emp) {
    console.log("Start Date: " + emp.startDate);
  }
}

printEmployeeInformation({ name: "Manu", startDate: new Date() });

class Car1 {
  drive() {
    console.log("Driving...");
  }
}

class Truck1 {
  drive() {
    console.log("Driving a truck...");
  }

  loadCargo(amount: number) {
    console.log("Loading cargo ..." + amount);
  }
}

type Vehicle1 = Car1 | Truck1;

const vv1 = new Car1();
const vv2 = new Truck1();

function useVehicle1(vehicle: Vehicle1) {
  vehicle.drive();
  if (vehicle instanceof Truck1) {
    vehicle.loadCargo(1000);
  }
}

useVehicle1(v1);
useVehicle1(v2);

//===================

/*Note on Type Guards:
A common pattern in JavaScript is to use typeof or instanceof to examine the type of an expression at runtime. 
TypeScript now understands these conditions and will change type inference accordingly when used in an if block.
This is called a type guard.*/

var x: any = "Tom"; //Line A
if (typeof x === "string") {
  //Line B
  console.log(x.lengthX); // Error, 'lengthX' does not exist on 'string' but 'lenght' does
}
// x is still any here
x.unknown(); // OK
