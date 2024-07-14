#! /usr/bin/env node
/////////////////////////
import inquirer from "inquirer";
import chalk from "chalk";
import Color from 'color';
const questions = [
    {
        question: "HTML stands for",
        option1: "Hyper Text markup language",
        option2: "Hyper Link markup language",
        option3: "Home Tool language",
        correctAns: "Hyper Text markup language"
    },
    {
        question: "CSS stands for",
        option1: "Cascading Style sheet",
        option2: "Cascading Styling sheet",
        option3: "Cascading super sheet",
        correctAns: "Cascading Style sheet"
    },
    {
        question: "In how many ways can CSS be written in?",
        option1: "1",
        option2: "2",
        option3: "3",
        correctAns: "3"
    },
    {
        question: "Which tag gives you the largest heading in HTML?",
        option1: "<h6>",
        option2: "<h1>",
        option3: "<h2>",
        correctAns: "<h1>"
    },
    {
        question: "How many data types in JS?",
        option1: "6",
        option2: "7",
        option3: "8",
        correctAns: "8"
    },
    {
        question: "How many days in February?",
        option1: "30",
        option2: "29",
        option3: "28",
        correctAns: "28"
    },
    {
        question: "Who is making the Web standards?",
        option1: "Microsoft",
        option2: "The World Wide Consortium",
        option3: "Google",
        correctAns: "The World Wide Consortium"
    },
    {
        question: "What is TypeScript primarily used for?",
        option1: "Memory Management",
        option2: "Dynamic Typing",
        option3: "Static Typing",
        correctAns: "Static Typing"
    }
];
let correctAnswers = 0;
async function askQuestion(index) {
    if (index >= questions.length) {
        console.log(chalk.magenta(`Quiz finished! You got ${chalk.yellowBright(correctAnswers)} / ${chalk.yellow(questions.length)} correct.`));
        return;
    }
    const dynamicColor = Color({ r: 123, g: 45, b: 67 });
    const question = questions[index];
    const answers = await inquirer.prompt([
        {
            type: 'list',
            name: 'answer',
            message: chalk.hex(dynamicColor.hex())(question.question),
            choices: [
                { name: question.option1, value: question.option1 },
                { name: question.option2, value: question.option2 },
                { name: question.option3, value: question.option3 }
            ]
        }
    ]);
    if (answers.answer === question.correctAns) {
        console.log(chalk.green("Correct!"));
        correctAnswers++;
    }
    else {
        console.log(chalk.red("Wrong!"));
    }
    askQuestion(index + 1);
}
askQuestion(0);
