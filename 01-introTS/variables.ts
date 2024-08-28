//TypeScript syntax->
//let variableName: type = value
let greeting: string = "Hello John Doe"
greeting.toString()
console.log(greeting)


//since `userId`'s type is too much obvious so there's no need 
//of explicitly declare its type. TypeScript will automatically 
//infer its type `number` and will not allow other types variables
//injection in it

//bad practice
// let userId: number = 42.345

//good practice
let userId = 42.345

//again bad practice
let isLoggedIn: boolean = true


//`any` this data type used for avoid implementing `type check` on a variable
//don't use this keyword in your code

//in this case , using `typescript` is good option since we want
//to store the return value from a function (it could be an api too) 
//specific type value bcz this variable can be passed as a response 
//to frontend

//bad practice
// let hero
// function getHero(){
//     return "thor"
// }
// hero = getHero()

//good practice
let hero: string
function getHero(){
    return "thor"
}
hero = getHero()



export {}