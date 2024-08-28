// Tuples -> a special kind of array provided by TS
// with some restrictions or conditions (in broader definition)

//`TUPLES` get used in an array when order of the variable types
// which are going to be insert in the array need to be maintained
//in a specific order
const user1: (number | string)[] = ["JD", 2]; //by this way the order 1:number then 2: string don't get maintained

const user2: [number, string, boolean] = [2, "JD", true];

let rgb: [number, number, number] = [255, 125, 110];

//with `type`
type User = [number, string];
const newUser: User = [12, "JD"];

// but here problem with this use case is, since `User` is an array ,TS
// wiil allow you to run array's methods like push(), splice() on the array
// which will eventually destructure the User type

export {};
