## 🔍 Type Guards: Checking Types at Runtime

### 🛠 `typeof` Type Guard

```ts
function printId(id: number | string) {
  if (typeof id === "string") {
    console.log(`ID: ${id.toUpperCase()}`);
  } else {
    console.log(`ID: ${id}`);
  }
}
```

### 🏗️ `instanceof` Type Guard

```ts
class Car {
  drive() {
    console.log("Driving...");
  }
}

class Boat {
  sail() {
    console.log("Sailing...");
  }
}

function move(vehicle: Car | Boat) {
  if (vehicle instanceof Car) {
    vehicle.drive();
  } else {
    vehicle.sail();
  }
}
```

### 🏛️ Custom Type Guard

```ts
interface Cat {
  meow(): void;
}

function isCat(animal: any): animal is Cat {
  return (animal as Cat).meow !== undefined;
}
```
