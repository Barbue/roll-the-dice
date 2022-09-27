const prompt = require('prompt-sync')({sigint: true});

/* 
Create a new file, custom-roll.js, that prompts the user for how many sides the dice should have, then simulates a roll of a dice with that many sides.
*/

let dice6 = prompt("Enter a number to roll the dice: ")

if(dice6 == 4){console.log(Math.ceil(Math.random()*4))}
else if(dice6 == 6){console.log(Math.ceil(Math.random()*6))}
else if(dice6 == 8){console.log(Math.ceil(Math.random()*8))}
else if(dice6 == 10){console.log(Math.ceil(Math.random()*10))}
else{console.log("The dice are either 4, 6, 8 or 10 sided; please choose one of these to roll the dice...")}








