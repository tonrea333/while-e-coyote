const prompt = require('prompt-sync')();


//Prompt created for user to input letter.

let userEntry = prompt("User type a word or letter for an output.")

let growString =  userEntry

//Create look that adds string values together to create max lenght 10.

console.log(userEntry)

while (growString  < userEntry+userEntry+userEntry+userEntry+userEntry+userEntry+userEntry+userEntry+userEntry+userEntry){
    growString =  growString + userEntry
console.log(growString)
}

