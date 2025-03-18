
// program One 


let msg:string = "hello"
console.log(msg)
console.log(msg)

//--------------------------

// primitive datatypes 

let isMarried:boolean = true
let mobile:number = 7709192441
let fullName:string = "chinmay deshpande"

// array or set 

let numbers:Array<number> = [11,22,33]
let numbers2:number[] = [22,33,44]
console.log(numbers)

// let setA:Set<number> = new Set([11,22,33,44,55,66,44])
// console.log(setA)

//-------------------->
// let a = "20"
// let b = a = 30
// console.log(a+b)

let names:string[] =["chinmay","shirish","deshpande","ram"]
console.log(names)

let names2:[string,string] = ["amol","mayuri"] // tuple
names2 = ["ram","krishna"]
names2.push('amol')
console.log(names2)

// object 
let person:{fullName:string,age:number} = {
    fullName:"chinmay",
    age:34
}


let centre:{x:number,y:number} = {
    x:12,
    y:233
}

let centre2:{x:number,y:number} = {
    x:12,
    y:233
}

type axis = {x:number,y:number}

let centre4:axis = {
    x:12,
    y:233
}

let centre3:axis = {
    x:12,
    y:233
}


// type credentials = {userName:string,password:number}
// let Credentials: credentials = {
//     userName:"chinmay",
//     password:234

// }


type code = [number,number,number,number]

let otp:code = [2,3,4,5]
let mpin:code = [2,3,4,5]


// function 
function addition(x:number,y:number):number {
    console.log(x+y)
    return x+y
}
let s = addition(1,3)
console.log(s)

// function addition2(x:number,y:number):void {
//     console.log(x+y)
   
// let s = addition2(1,3)
// console.log(s)

function add(...abc:number[]){
    return abc.reduce((acc,el)=>{
        return acc + el
    },0)
}
add(22,33,44,55,66)