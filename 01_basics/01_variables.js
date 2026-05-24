const accountId = 122234
let accountEmail = "rahima@google.com"
var accountPassword = "12345"
accountCity = "Mumbai"
let accountState;

// accountId = 2 // not allowed hai 

accountEmail = "pathan@google.com"
accountPassword = "67890"
accountCity = "Delhi"


/*
prefer not to used var 
because of issue in block scope and functional scope
*/

console.log(accountId);
console.table([accountId,  accountEmail, accountPassword, accountCity, accountState])