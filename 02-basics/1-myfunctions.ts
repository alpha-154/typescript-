// when there's `inference` about what should be the data type,
//variable is fine but function isn't

//bad practice
// function addTwo(num){
//     num.toUppercase() //bug
//     return num + "2"  //bug
// }
// addTwo(5)

//good practice
function addTwo(num: number): number{
    return num + 2
 }

addTwo(5)

//with arrow function
const getHello = ( num: number): string => {
    return "hello world"
}


function signUpUser(name: string, email: string, isPaid: boolean = false){
  // `isPaid: boolean = false` is assign default value of false
  // in `isPaid` variable if no argument doesn't pass for it at the time
  //of calling `signUpUser` function 
}

signUpUser("John", "JohnDoe@gmail.com") 

// how you're going to solve the following case:
// function getVal(value: number){
//     if(value> 5)
//         return true

//     return "200 OK"
// }

// getVal(2) //what should be the return data type of this function


//for array.map()
const heros = ["ironman", "thor", "blackPanther"]

heros.map( (hero): string => {
     return `current hero is ${hero}`
})
//here , we don't have to explicitly define the `hero` variable
//type since `TS` is smart enoug to deduce its type


//for `void` return type function (for logging the error use -> `void` )
function consoleError(errmsg: string): void{
    console.log(errmsg)
    //return 2 // since the function type declared as `void` 
    // returing anything from the funciton isn't possible
}

//for `never` return type function (for closing the program by throwing
// an error message use -> `never` )
// the key difference between these two return type of functions 
//is that `never` : A function returning 'never' cannot have a reachable end point.
// in a return type, this means that the function throws an exception or terminates 
//execution of the program

function handleError(errmsg: string): never{
    throw new Error(errmsg)
}




export {}