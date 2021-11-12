// Imported required packages
const fs = require('fs');
const path = require('path');
const inquirer = require('inquirer');
const generateMarkdown = require('./utils/generateMarkdown');

// Array of questions for user input
const questions = [
  {
    type: "input",
    name: "name",
    message: "What is your name?",
  },
  {
    type: "input",
    name: "title",
    message: "What is your project title?",
  },
  {
    type: "list",
    name: "badge",
    message: "What license badge?",
    choices: ['Apache','GPLv3','BSD 3-clause','MIT','GPLv2','BSD 2-clause','LGPLv3','AGPLv3'],
  },
  {
    type: "input",
    name: "description",
    message: "What is your project description?",
  },
  {
    type: "input",
    name: "install",
    message: "What is your installation process?",
  },
  {
    type: "input",
    name: "usage",
    message: "Please provide usage information.",
  },
  {
    type: "input",
    name: "contribute",
    message: "Who contributed to this project?",
  },
  {
    type: "input",
    name: "tests",
    message: "What are your test instructions?",
  },
  {
    type: "input",
    name: "github",
    message: "What is your Github username?",
  },
  {
    type: "input",
    name: "email",
    message: "What is your email?",
  },
];

// Function to write README file using the user input
function writeToFile(fileName, data) {
  return fs.writeFileSync(path.join(process.cwd(), fileName), data);
}

// Function to initialize app
function init() {
  inquirer.prompt(questions).then((inquirerResponses) => {
    console.log('Generating README...');
    writeToFile('README.md', generateMarkdown({ ...inquirerResponses }));
  });
}

init();

