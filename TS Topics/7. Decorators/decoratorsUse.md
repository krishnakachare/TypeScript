Great — since you already _know what decorators are_, let’s focus on **how they actually work internally** using **very simple, real examples** in **TypeScript** that clearly show:

✔ Which thing is decorated
✔ How metadata is stored
✔ How behavior is modified later (getter/setter)
✔ How validation, transformation, and logging happen

---

## ✅ 0. Enable decorators in TypeScript

```json
// tsconfig.json
{
  "experimentalDecorators": true
}
```

---

# 🧠 1. CORE IDEA (Before examples)

A decorator is just a **function** that receives:

| Decorator Type | Gets                            |
| -------------- | ------------------------------- |
| Property       | target, propertyKey             |
| Method         | target, propertyKey, descriptor |
| Class          | constructor                     |

It runs **once at class definition time**, not at runtime object creation.

---

# ✅ 2. PROPERTY DECORATOR — Identify + Store Metadata

### 🎯 Goal:

✔ Identify decorated property
✔ Store metadata about it

```ts
const metadataStore = new Map<string, any>();

function Track(target: any, propertyKey: string) {
  console.log("Decorated:", propertyKey);

  metadataStore.set(propertyKey, {
    type: "tracked",
    class: target.constructor.name,
  });
}

class User {
  @Track
  name!: string;

  @Track
  age!: number;
}

console.log(metadataStore);
```

### 🔍 Output

```
Decorated: name
Decorated: age
Map {
  "name" => { type: "tracked", class: "User" },
  "age" => { type: "tracked", class: "User" }
}
```

✅ You can now **identify** and **store metadata** about decorated fields.

---

# ✅ 3. MODIFY BEHAVIOR — Getter/Setter Injection

### 🎯 Goal:

✔ Modify how property behaves

```ts
function LogAccess(target: any, propertyKey: string) {
  let value: any;

  Object.defineProperty(target, propertyKey, {
    get() {
      console.log(`Getting ${propertyKey}:`, value);
      return value;
    },
    set(newVal) {
      console.log(`Setting ${propertyKey}:`, newVal);
      value = newVal;
    },
  });
}

class Person {
  @LogAccess
  name!: string;
}

const p = new Person();
p.name = "Krishna";
console.log(p.name);
```

### 🔍 Output

```
Setting name: Krishna
Getting name: Krishna
Krishna
```

✅ Decorator replaced the property with **custom getter/setter**.

---

# ✅ 4. VALIDATION — Prevent Invalid Data

### 🎯 Goal:

✔ Apply validation logic

```ts
function MinLength(length: number) {
  return function (target: any, propertyKey: string) {
    let value: string;

    Object.defineProperty(target, propertyKey, {
      set(newVal: string) {
        if (newVal.length < length) {
          throw new Error(`${propertyKey} must be at least ${length} chars`);
        }
        value = newVal;
      },
      get() {
        return value;
      },
    });
  };
}

class Account {
  @MinLength(5)
  password!: string;
}

const acc = new Account();
acc.password = "123"; // ❌ Error
acc.password = "123456"; // ✅ OK
```

✅ Validation injected **without touching class logic**.

---

# ✅ 5. TRANSFORMATION — Change Value Automatically

### 🎯 Goal:

✔ Transform data

```ts
function ToUpper(target: any, propertyKey: string) {
  let value: string;

  Object.defineProperty(target, propertyKey, {
    set(newVal: string) {
      value = newVal.toUpperCase();
    },
    get() {
      return value;
    },
  });
}

class Product {
  @ToUpper
  category!: string;
}

const p = new Product();
p.category = "electronics";
console.log(p.category); // ELECTRONICS
```

✅ Decorator **transformed data on assignment**.

---

# ✅ 6. METHOD DECORATOR — Logging Execution

### 🎯 Goal:

✔ Logging behavior

```ts
function LogMethod(
  target: any,
  propertyKey: string,
  descriptor: PropertyDescriptor,
) {
  const original = descriptor.value;

  descriptor.value = function (...args: any[]) {
    console.log(`Calling ${propertyKey} with`, args);
    return original.apply(this, args);
  };
}

class Calculator {
  @LogMethod
  add(a: number, b: number) {
    return a + b;
  }
}

const c = new Calculator();
c.add(2, 3);
```

### 🔍 Output

```
Calling add with [2, 3]
```

✅ Method behavior modified via **descriptor wrapping**.

---

# 🧠 7. FULL REALISTIC EXAMPLE — All 4 Goals Together

```ts
const rules = new Map<string, any>();

function Field(options: { required?: boolean; transform?: (v: any) => any }) {
  return function (target: any, propertyKey: string) {
    rules.set(propertyKey, options);

    let value: any;

    Object.defineProperty(target, propertyKey, {
      set(newVal) {
        // ✅ Validation
        if (options.required && (newVal === null || newVal === undefined)) {
          throw new Error(`${propertyKey} is required`);
        }

        // ✅ Transformation
        value = options.transform ? options.transform(newVal) : newVal;
      },
      get() {
        return value;
      },
    });
  };
}

class User {
  @Field({ required: true, transform: (v) => v.trim() })
  name!: string;

  @Field({ transform: (v) => Number(v) })
  age!: number;
}

const u = new User();
u.name = "  Krishna  ";
u.age = "25" as any;

console.log(u.name); // Krishna
console.log(u.age); // 25
```

---

# 🔥 HOW IT WORKS INTERNALLY (Important)

```ts
@MyDecorator
prop: string;
```

Becomes:

```ts
MyDecorator(Class.prototype, "prop");
```

So you can:
✅ Detect it
✅ Store metadata
✅ Replace property descriptor
✅ Add validation / logging / transformation

---

# 🎯 Summary Table

| Goal                       | Technique                       |
| -------------------------- | ------------------------------- |
| Identify decorated element | `propertyKey`                   |
| Store metadata             | `Map`, `Reflect.defineMetadata` |
| Modify behavior            | `Object.defineProperty`         |
| Validation                 | Setter logic                    |
| Transformation             | Setter logic                    |
| Logging                    | Wrapper around getter/method    |

---

If you want, I can next show:

✅ Same concepts using **Reflect Metadata**
✅ **Class-validator style decorators**
✅ **Method + Parameter decorators**
✅ **Execution order of multiple decorators**
✅ **How Angular / NestJS use decorators internally**

Just tell me 👍
