/* 
### 3. Method Decorator

Applied to a class method. It receives the target object, method name, and property descriptor.
Used to modify or log **method behavior**.

```ts
function LogMethod(
  target: any,
  propertyName: string,
  descriptor: PropertyDescriptor
) {
  const originalMethod = descriptor.value;
  descriptor.value = function (...args: any[]) {
    console.log(`Calling ${propertyName} with`, args);
    return originalMethod.apply(this, args);
  };
}

class Calculator {
  @LogMethod
  add(a: number, b: number) {
    return a + b;
  }
}
```
 */
