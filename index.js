//Include packages needed for this application
const inquirer = require("inquirer");
const fs = require("fs");
const generateMarkdown = require("./generateMarkdown");


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
      name: "table of contents",
      message: "placeholder",
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

]

//Function to write README file
function writeToFile(fileName, data) {
    fs.writeFileSync(fileName, data);
}

//Function to initialize app
function init() {

    inquirer.prompt(questions).then((answers) => {
        const readmeContent = generateMarkdown(answers);
        writeToFile("README.md", readmeContent);
    });
}

// Function call to initialize app
init();
