//const tinderUser = new Object() //single tern object
const tinderUser = {} //non single tern object

tinderUser.id = "123abc"
tinderUser.name = "Sammy"
tinderUser.isLoggedIn = false

console.log(tinderUser);

const regularUser = {
    email: "some@gmail.com",
    fullName:{
        userfullname:{
            firstname: "Janvi",
            lastname:"Gevariya"
        }
    }
}

console.log(regularUser.fullName.userfullname);

const obj1 = {1:"a", 2:"b"}
const obj2 = {3:"a", 4:"b"}
const obj4 = {5:"a", 6:"b"}

//const obj3 = {obj1, obj2}
//const obj3 = Object.assign({}, obj1 , obj2, obj4) 
const obj3 = {...obj1, ...obj2}
console.log(obj3);


const users = [
    {
        id: 1,
        email: "j@gmail.com"
    },
    {
        id: 1,
        email: "j@gmail.com"
    },
    {
        id: 1,
        email: "j@gmail.com"
    },
]

users[1].email
console.log(tinderUser);

console.log(Object.keys(tinderUser));
console.log(Object.values(tinderUser));
console.log(Object.entries(tinderUser));
console.log(tinderUser.hasOwnProperty('isLoggedIn'));


const course = {
    coursename: "js in hindi",
    price: "999",
    courseInstructor: "Janvi"
}

// course.courseInstructor

const {courseInstructor: instructor} = course

//console.log(courseInstructor);
console.log(instructor);

// JSON // {
//     "name": "hitesh",
//     "coursename": "js in hindi",
//     "price": "free"
// }

[
    {},
    {},
    {}
]




