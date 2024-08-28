//this way of using classes in typescript isn't really get used
class User {
    email: string
    name: string
    readonly city: string = "United"
    constructor(email: string, name: string){
        this.email = email
        this.name = name
    }
}

const johndoe = new User("johndoe@gmail.com", "John Doe")
// User.city = 


