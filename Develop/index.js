// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const util = require('util');
const generateMarkdown = require('./utils/generateMarkdown');
// TODO: Create an array of questions for user input

// Questions
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
    message: "What is your project description",
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
  
//   .then((answers) => {
//     const htmlPageContent = generateHTML(answers);

//     fs.writeFile('index.html', htmlPageContent, (err) =>
//       err ? console.log(err) : console.log('Successfully created index.html!')
//     );
//   });
// ];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
  return fs.writeFileSync(path.join(process.cwd(), fileName), data);
}

// TODO: Create a function to initialize app
function init() {
  inquirer.prompt(questions).then((inquirerResponses) => {
    console.log('Generating README...');
    writeToFile('README.md', generateMarkdown({ ...inquirerResponses }));
  });
}

// Function call to initialize app
init();
