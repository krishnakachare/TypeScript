/* 
### 5. Parameter Decorator

Targets a method parameter. It gets the target, method name, and parameter index.
Used to access **metadata about method parameters**.

```ts
function LogParam(target: any, methodName: string, index: number) {
  console.log(`Parameter in ${methodName} at position ${index}`);
}

class Demo {
  test(@LogParam msg: string) {
    console.log(msg);
  }
}
```
 */
