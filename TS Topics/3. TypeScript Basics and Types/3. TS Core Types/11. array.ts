let array1 : number[] = [5, 6, 7];//correct syntax
console.log(array1[1]);//correct syntax
let array2:Array<number> = [1, 2, 3];//alternative correct syntax
let array3 : number[] = [];//correct syntax to define an empty array

let array4: number[] = new number[2];//error

let array5: number[] = [];
array5.push(1234);//dynamically adding


const superHeros: string[] = []
// const heroPower: number[] = []
const heroPower: Array<number> = []

type User = {
    name: string
    isActive: boolean
}

const allUsers: User[] = []

const MLModels: number[][] = [
    [255, 255, 255],
    []
]


superHeros.push("spiderman")
heroPower.push(2)

allUsers.push({name: "", isActive: true})


// const person: {
//   name: string;
//   age: number;
// } = {
    const person = {
        name: 'Maximilian',
        age: 30,
        hobbies: ['Sports', 'Cooking']
      };
      
      let favoriteActivities: string[];
      favoriteActivities = ['Sports'];
      
      console.log(person.name);
      
      for (const hobby of person.hobbies) {
        console.log(hobby.toUpperCase());
        // console.log(hobby.map()); // !!! ERROR !!!
      }

