//singleton
//object.create

//object literals

const mySym = Symbol("key1")

const jsUser = {
    name: "Janvi",
    "full name": "Janvi Gevariya",
    [mySym]: "myKey1",
    age: 18,
    location: "Surat",
    email: "janvi@gmail.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Saturday"]
}

console.log(jsUser.email);
console.log(jsUser["email"]);
console.log(jsUser["full name"]);
console.log(jsUser[mySym]);
console.log(typeof jsUser.mySym);

jsUser.email = "janvi@google.com"
//Object.freeze(jsUser)
jsUser.email = "janvi@microsoft.com"

console.log(jsUser);

jsUser.greeting = function(){
    console.log("Hello js user");
}

jsUser.greeting2 = function(){
    console.log(`Hello js user, ${this.name}`);
}

console.log(jsUser.greeting());
console.log(jsUser.greeting2());




