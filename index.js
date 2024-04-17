#! /user/bin/env node
import inquirer from "inquirer";
// const randomNumber = Math.random();
const randomNumber = Math.floor(Math.random() * 10 + 1);
const answer = await inquirer.prompt([
    {
        name: "UserGussedNumber",
        type: "number",
        message: "Please guess a number between 1-10:"
    }
]);
if (answer.UserGussedNumber === randomNumber) {
    console.log("You guessed it right");
}
else {
    console.log("You guessed wrong number");
}
