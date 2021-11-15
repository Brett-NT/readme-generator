// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown');
// TODO: Create an array of questions for user input
const questions = () => {
    return inquirer.prompt([
        {
            type: 'input',
            name: 'githubUsername',
            message: 'What is your Github Username?'
        },
        {
            type: 'input',
            name: 'projectName',
            message: 'What is the name of your project?'
        },
        {
            type: 'input',
            name: 'description',
            message: 'Give a description of your project.'
        },
        {
            type: 'input',
            name: 'installation',
            message: 'Please provide any installation instructions for your project if applicable.'
        },
        {
            type: 'input',
            name: 'usage',
            message: 'Please provide information of usage for this project.'
        },
        {
            type: 'input',
            name: 'contribution',
            message: 'List any additional contributors here if applicable.'
        },
        {
            type: 'input',
            name: 'test',
            message: 'Please provide test instructions if applicable.'
        },
        {
            type: 'checkbox',
            name: 'license',
            message: 'Select a license to use for this project.',
            choices: ['MIT', 'GNU GPLv3', 'GNU AGPLv3', 'GNU LGPLv3', 'Mozilla Public 2.0', 'Apache 2.0', 'Boost Software 1.0', 'Unlicensed']
        },
        {
            type: 'input',
            name: 'email',
            message: ' What is your email address?'
        }
    ]); 
} 

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    // const fileName = 'NewREADME.md';
    const answers = questions(data);
    const createMarkdown = generateMarkdown(answers);
    
    fs.writeFile(fileName, createMarkdown, function(err) {
        if(err) {
            return console.log(err);
        }



        console.log('README created Successfully.')
    })

}

// TODO: Create a function to initialize app
function init() {
    questions()
    .then(writeToFile)
}

// Function call to initialize app
init();
