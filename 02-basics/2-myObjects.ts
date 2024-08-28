
// following way of coding is permissible in TS but doesn't get used in it
// bad practice
const User1 = {
    name: "John",
    email: "John Doe",
    isActive: true
}

function createUser1({name: string, isPaid: boolean}):{name: string, isPaid: boolean}{
    return {name: string, isPaid: boolean}
}

createUser1({name: "john", isPaid: true})

// instead a keyword named `type` get used to declare such objects
// which are going to be used in different functions. Simply think 
// of it as creating custom data types

type User2 = {
      name: string
      email: string
      isActive: boolean  
 }

function createUser2(user: User2): User2{
     return user
 }

createUser2({name: "JohnDoe", email: "john@gmail.com", isActive: true})

//`readonly` & optional property in object `?` in TS
// the property in an object marked as `readonly` can't be changed
// the optional property method used in an object when a property 
// get may or may not be used in that object(for uncertainity purposes)

type User3 = {
    readonly _id: string,
    name: string,
    email: string,
    isActive: boolean  
    credcardDetails?: number
}

let myUser: User3 = {
    _id: "23",
    name: "john",
    email: "johndoe@gmail.com",
    isActive: true  
}

type cardNumber = {
    cardnumber: string
}

type cardDate = {
    carddate: string
}

type cardDetails = cardNumber & cardDate & {
    cvv: number
}

myUser.name = "mathew" //is allowed
//myUser._id = "235" example of uses of readonly keyword



export {}