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
]
// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
