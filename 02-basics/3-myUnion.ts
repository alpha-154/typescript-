// when there's an uncertainty about what should be the
// data type of a particular variable insted of using `Any`
// union `|` get used .

let score: number | string;

score = 44;
score = "none";
//score = true

type User = {
  name: string;
  id: number;
};

type Admin = {
  username: string;
  id: number;
};

let johndoe: User | Admin = { name: "john", id: 334 };
johndoe = { username: "jh", id: 223 };

//with functions
function getDbID(id: number | string) {
  // Make API calls
  console.log(`DB id is: ${id}`);
  if (typeof id === "string") {
    // Do something if id is a string
    console.log(id.toLowerCase());
  } else if (typeof id === "number") {
    // Do something if id is a number
    console.log(id + 2);
  }
  // Return the id for further processing if needed
  //return id;
}

getDbID(3);
getDbID("3");

//with arrays
const data1: number[] = [1, 2, 3, 4];
const data2: string[] = ["1", "2", "3", "4"];
const data3: (number | string)[] = [1, 2, "3", 4];

//another use case of it
let seatAllotment: "aisle" | "middle" | "window"

seatAllotment = "middle" //acceptable
//seatAllotment = "crew"  not acceptable