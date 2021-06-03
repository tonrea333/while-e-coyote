const prompt = require('prompt-sync')();

//User should enter a number.

let userNumber = prompt("User enter a  number.")

//Change string value to Number variable

let doubletoHundred = Number(userNumber)

//Loop performed until number greater than or equal to resolved. Numbers multipled by 2 visable.

while  (doubletoHundred < 100) {
       doubletoHundred = doubletoHundred * 2

       console.log(doubletoHundred);
}

//Final message to user upon reaching number greater than or equal to 100.

console.log("Finished... your number is greater than or equal to 100")