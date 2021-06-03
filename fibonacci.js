const prompt = require('prompt-sync')();


let usercycleNumber = prompt("Please enter a number for fibonacci sequence.")

let fibNumberzero =0
let fibNumberone =1
let numRotations = Number(usercycleNumber)

while (numRotations !== 0){
    fibNumberzero = (fibNumberzero + fibNumberone)
    fibNumberone = (fibNumberzero + fibNumberone)
    numRotations= (numRotations -1)
    
    console.log(fibNumberzero)
    console.log(fibNumberone)
}


console.log("You are at zero")