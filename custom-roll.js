const prompt = require('prompt-sync')({sigint: true});

/* 
Create a new file, custom-roll.js, that prompts the user for how many sides the dice should have, then simulates a roll of a dice with that many sides.
*/

let dice6 = prompt("Dice has 6 sides, click enter to roll the dice: ")

let roll = Math.ceil(Math.random()*6);

if(roll === 1){console.log("Side 1")}
else if(roll === 2){console.log("Side 2")}
else if(roll === 3){console.log("Side 3")}
else if(roll === 4){console.log("Side 4")}
else if(roll === 5){console.log("Side 5")}
else if(roll === 6){console.log("Side 6")}


