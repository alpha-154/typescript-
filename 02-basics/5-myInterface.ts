// `interface` in TS you can think of like class (superficially) or
// think of like custom object without using equal sign between variable
// name and curly braces


// `interface` vs `type` :
// Type aliases and interfaces are very similar, and in many cases you can 
// choose between them freely. Almost all features of an interface are available 
// in type, the key distinction is that a type cannot be re-opened to add new
// properties vs an interface which is always extendable.



interface User {
  readonly dbId: number;
  email: string;
  userId: number;
  googleId?: string;
  //startTrail: () => string  //same as following one
  startTrail(): string;
  getCoupon(coupon: string, value: number): number;
}

//re-opening of an interface
interface User{
  githubToken: string
}

const user: User = {
  dbId: 23,
  email: "jd@gmail.com",
  userId: 23,
  githubToken: "43kdjah3",
  startTrail: () => {
    return "start trail";
  },
  getCoupon: (name: "coupon10", off: 10) => {
    return 10;
  },
};

//inheritance in Interface
interface Admin extends User{
   role: "admin" | "editor" | "ta"
}

const user2: Admin = {
  dbId: 23,
  email: "jd@gmail.com",
  userId: 23,
  githubToken: "43kdjah3",
  role: "ta",
  startTrail: () => {
    return "start trail";
  },
  getCoupon: (name: "coupon10", off: 10) => {
    return 10;
  },
};

