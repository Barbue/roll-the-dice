const prompt = require('prompt-sync')({sigint: true});

/*
Create a new file, rigged-dice.js, which prompts the user for a rigged number using a 6-sided die. The dice should roll the rigged number twice as frequently as the other numbers!
*/

let riggednum = prompt("Enter rigged number for 6 sided dice: ")

let roll = Math.ceil(Math.random()*8);

if(roll === 1){console.log(roll)}
else if(roll === 2){console.log(roll)}
else if(roll === 3){console.log(roll)}
else if(roll === 4){console.log(roll)}
else if(roll === 5){console.log(roll - 1)}
else if(roll === 6){console.log(roll - 2)}
else if(roll === 7){console.log(roll - 3)}
else if(roll === 8){console.log(roll - 4)}




