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
