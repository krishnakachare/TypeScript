
// define datatypes
let kk: string = "krishna"
console.log(kk)
let num: number = 10
let yes: boolean = true
let notDefined: undefined = undefined
let notPresent: null = null

// define array
// 1
let arr: Array<number> = [1, 2, 3, 4, 5]
// 2
let arr2: number[] = [1, 2, 3, 4, 5]
let arrStr: string[] = ["kk", "kk1"]
console.log(arr, arr2)

// tuple
let arrMix: [string, number] = ["kk", 2]
console.log(arrMix)

// object
// 1
let obj: { fullName: string, age: number } = {
    fullName: "krishna",
    age: 10
}
console.log(obj)

// 2
type kk = { fullName2: string, age2: number }
let obj2: kk = {
    fullName2: "krishna",
    age2: 10
}
console.log(obj2)

// function
// 1
function add(a: number, b: number) {
    return a + b
}
add(1, 1)
console.log(add(1, 1))

// 2
function add1(a: number, b: number): number {
    return a + b
}
add1(1, 1)
console.log(add1(1, 1))

// 3
function add2(a: number, b: number): any {
    console.log(a + b)
}
add2(1, 1)
console.log(add2(1, 1))

// 3 javascript
// function add3(a, b) {
//     if (typeof a === Number && typeof b === Number) console.log(a + b)
// }
// add3(1, 1)
// console.log(add3(1, 1))