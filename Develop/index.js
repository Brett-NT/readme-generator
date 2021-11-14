// TODO: Include packages needed for this application
const inquirer = require('inquirer');
// TODO: Create an array of questions for user input
const questions = () => {
    return inquirer.prompt([
        {
            type: 'input',
            name: 'Github Username',
            message: 'What is your Github Username?'
        },
        {
            type: 'input',
            name: 'Project Name',
            message: 'What is the name of your project?'
        },
        {
            type: 'input',
            name: 'Description',
            message: 'Give a description of your project.'
        },
        {
            type: 'input',
            name: 'installation',
            message: 'Please provide any installation instructions for your project'
        },
        {
            type: 'checkbox',
            name: 'license',
            message: 'Select a license to use for this project.',
            choices: ['MIT', 'GNU GPLv3', 'GNU AGPLv3', 'GNU LGPLv3', 'Mozilla Public 2.0', 'Apache 2.0', 'Boost Software 1.0', 'I do not wish to add a license']
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
    
}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
