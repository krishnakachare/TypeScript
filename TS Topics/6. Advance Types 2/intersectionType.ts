// type --> intersection (&)

type Admin1 = {
  name: string;
  privileges: string[];
};

type Employee1 = {
  name: string;
  startDate: Date;
};

// interface ElevatedEmployee1 extends Employee1, Admin1 {}

type ElevatedEmployee1 = Admin1 & Employee1;

const ee1: ElevatedEmployee1 = {
  name: "Krishna",
  privileges: ["create-server"],
  startDate: new Date(),
};

type Combinable1 = string | number;
type Numeric1 = number | boolean;

type Universal1 = Combinable & Numeric;
