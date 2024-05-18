const accountId = 144553
let accountEmail = "janvi@gmail.com"
var accountPassword = "12345"
accountCity = "Jaipur"
let accountState;

//accountId = 2 //not allowed

accountEmail = "jg@gmail.com"
accountPassword = "4132415"
accountCity = "Bengluru"

console.log(accountId);
/*
prefer not to use var
because of issue in block scope and function scope
*/
console.table([accountId, accountEmail, accountPassword, accountCity,accountState])