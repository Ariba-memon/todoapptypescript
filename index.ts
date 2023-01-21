#! /usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";
import chalkAnimation from "chalk-animation";









const sleep = () => {
    return new Promise((res) => {
        setTimeout(res, 3000)
    })
}
async function welcome() {
    let rainbowTitle = chalkAnimation.pulse(" Welcome to Todo App");
    await sleep();
    rainbowTitle.stop();
}

await welcome()
async function askQuestion() {
    const answers = await inquirer
        .prompt([
            /* Pass your questions in here */
            {
                type: "input",
                name: "operator",
                message: "Add a Todo? ",

            },

        ]);
    console.log(answers.operator)
}
askQuestion()
