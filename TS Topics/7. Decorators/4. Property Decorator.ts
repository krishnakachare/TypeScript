/* ### 2. Property Decorator

Applied to a property in a class. It receives the target object and the property key.
Used to observe or modify a **property declaration**.

```ts
function LogProperty(target: any, propertyKey: string) {
  console.log(`Property: ${propertyKey}`);
}

class Product {
  @LogProperty
  title: string;

  constructor(title: string) {
    this.title = title;
  }
}
``` */

/* 
Because you can:
✔ Identify which property is decorated
✔ Store metadata about it
✔ Modify how it behaves later (getter/setter)
✔ Apply validation, transformation, logging
*/
