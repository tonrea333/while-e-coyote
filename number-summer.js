const prompt = require('prompt-sync')();

//User prompted to enter numbers and type done when complete.




let userEnternumbers = prompt("User please enter random numbers type \"done\" when finished for total.")

//Define some variables

let sumofNum = 0

//The while statement and loop formula

while (userEnternumbers !== "done"){
   
    sumofNum = sumofNum + Number(userEnternumbers) 
     userEnternumbers = prompt("User please enter random numbers type \"done\" when finished for total.")
     
}
  
//The output

console.log("The sum total of numbers enter is", sumofNum) 



