/* 
### 4. Accessor Decorator

Targets a getter or setter. Similar to method decorators.
Used for **getter/setter modification**.

```ts
function LogAccessor(
  target: any,
  name: string,
  descriptor: PropertyDescriptor
) {
  console.log(`Accessor: ${name}`);
}

class User {
  private _age = 25;

  @LogAccessor
  get age() {
    return this._age;
  }
}
```
 */
