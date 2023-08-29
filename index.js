// TODO: Include packages needed for this application
const generateMarkdown = require("./utils/generateMarkdown");
const fs = require('fs');
const path = require('path');
const inquirer = require('inquirer');

// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'title',
        message: 'What is your project name?',
    },
    {
        type: 'input',
        name: 'description',
        message: 'Provide a brief description of your project:',
    },
    {
        type: 'input',
        name: 'installation',
        message: 'What are the steps required to install your project? Provide a step-by-step description of how to get the development environment running (Optional).',
    },
    {
        type: 'input',
        name: 'usage',
        message: 'Provide instructions and examples for use. Include screenshots as needed.',
    },
    {
        type: 'input',
        name: 'license',
        message: 'Choose a license for your project.',
        choices: [
            { value: 'MIT' }, //The MIT License
            { value: 'Apache2.0' }, //Apache 2.0 License
            { value: 'BSD3' }, //BSD 3-Clause License
            { value: 'LGPL' }, //GNU LGPL v3
            { value: 'MPL' }, //Mozilla Public License 2.0
            { value: 'None' }, 
        ]
    },
    {
        type: 'input',
        name: 'contributing',
        message: 'Explain how other developers can contribute to your application (Optional).',
    },
    {
        type: 'input',
        name: 'test',
        message: 'Write tests for application, and provide examples on how to run them here (Optional).',
    },
    {
        type: 'input',
        message: 'Enter your GitHub username: ',
        name: 'github',
    },
    {
        type: 'input',
        message: 'Enter your email: ',
        name: 'email',
    }
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    return fs.writeFileSync(path.join(process.cwd(), fileName), data)
}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions).then((answers) => {
        console.log('generating README')

        writeToFile('README.md', generateMarkdown({ ...answers }))
    })
}

// Function call to initialize app
init();
