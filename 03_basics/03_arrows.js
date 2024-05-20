const user = {
    username: "Janvi",
    price: 999,

    welcomeMessage: function() {
        console.log(`${this.username} , welcome to website`);
        console.log(this);
    }

}

user.welcomeMessage()
user.username = "sam"
user.welcomeMessage()
console.log(this);

function one(){
     let username = "Janvi"
     console.log(this.username);
 }

one()

const two = function () {
     let username = "Janvi"
     console.log(this.username);
}
two()

const three =  () => {
    let username = "Janvi"
    console.log(this);
}


three()

const addTwo = (num1, num2) => {
    return num1 + num2 //explicit return
}
console.log(addTwo(3,4));

const add2 = (num1, num2) =>  num1 + num2 //implicit return
console.log(add2(3,4));

const add = (num1, num2) => ( num1 + num2 )
console.log(add(3,4));

const add4 = (num1, num2) => ({username: "hitesh"})

//const myArr = [2,5,3,7,9]
//myArr.forEach(() => ())
