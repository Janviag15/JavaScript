//primitive datatype

//7 types: String, Number, Boolean, null, undefined, Symbol, BigInt

const score = 100
const scoreValue = 100.3

const isLoggedIn = false
const outsideTemp = null
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id === anotherId);

const bigNumber = 656543527998765431n


//Referance (Non Primitive)

//Array, Objects, Functions

const heros = ["shaktiman", "naagraj", "doga"]
let myObj = {
    name: "Janvi",
    age: 18,
}

const myFunction = function(){
    console.log("Hello World");
}

console.log(typeof myFunction);

// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

//Stack Memory(Primitive)(Variable copy) ,Heap Memory(Non Primitive)(Original value change)

let myName = "Janvi"

let anotherName = myName
anotherName = "Mansi"

console.log(myName);
console.log(anotherName);

let userOne = {
    email: "user@gmail.com"

}

let userTwo = userOne
userTwo.email = "janvi@google.com"
console.log(userOne.email);
console.log(userTwo.email);






