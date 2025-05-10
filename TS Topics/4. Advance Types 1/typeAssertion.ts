let myname: unknown = "Krishna";
// console.log(myname.length);

console.log((myname as string).length);

console.log((<string>myname).length);
