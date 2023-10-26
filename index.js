//Include packages needed for this application
const inquirer = require("inquirer");
const fs = require("fs");
const generateMarkdown = require("./utils/generateMarkdown");


// Array of questions for user input
const questions = [
    {
      type: "input",
      name: "title",
      message: "Enter the project title:",
    },
    {
      type: "input",
      name: "description",
      message: "Enter a project description:",
    },
    {
      type: "input",
      name: "username",
      message: "What is your github username?",
    },
    {
      type: "input",
      name: "email",
      message: "What is your email?",
    },
    {
      type: "input",
      name: "contactMe",
      message: "Provide instructions for someone to reach you with additional questions:",
    },
    {
      type: "input",
      name: "installation",
      message: "What are the steps required to install your project?",
    },
    {
      type: "input",
      name: "usage",
      message: "Provide instructions and examples for use:",
    },
    {
      type: "checkbox",
      name: "license",
      message: "Which license are you using?",
      choices: [
        "No License",
        "MIT License",
        "Apache License 2.0",
        "GNU General Public License v3.0 (GPL-3.0)",
        "BSD 2-Clause 'Simplified' License",
        "BSD 3-Clause 'New' or 'Revised' License",
        "Mozilla Public License 2.0 (MPL-2.0)",
        "GNU Lesser General Public License v3.0 (LGPL-3.0)",
        "Eclipse Public License 2.0",
        "Creative Commons Zero v1.0 Universal (CC0-1.0)",
      ],
      pageSize: 10,
    },
    {
      type: "input",
      name: "contributing",
      message: "What are the contribution guidelines for your project?",
    },
    {
      type: "input",
      name: "test",
      message: "Provide info on how to run tests for your project:"
    },
]

//Function to write README file
function writeToFile(fileName, data) {
    fs.writeFileSync(fileName, data);
}

//Function to initialize app
function init() {

    inquirer.prompt(questions).then((answers) => {
        const readmeContent = generateMarkdown(answers);
        writeToFile("GREADME.md", readmeContent);
    });
}

// Function call to initialize app
init();
