// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const fs = require("fs");
const generateMarkdown = require("./utils/generateMarkdown");

// TODO: Create an array of questions for user input
const questions = [
  "Enter TITLE for project", // 0
  "Enter brief DESCRIPTION for project", // 1
  "Enter INSTALLATION instructions", // 2
  "Enter USAGE information", // 3
  "Enter CONTRIBUTION guidelines", // 4
  "Enter TEST instructions", // 5
  "Please choose LICENSE for project", // 6
  "Enter GITHUB username", //7
  "Enter EMAIL address", //8
];

// TODO: Create a function to write README file
inquirer
  .prompt([
    {
      type: "input",
      message: questions[0],
      name: "title",
    },
    {
      type: "input",
      message: questions[1],
      name: "description",
    },
    {
      type: "input",
      message: questions[2],
      name: "installation",
    },
    {
      type: "input",
      message: questions[3],
      name: "usage",
    },
    {
      type: "input",
      message: questions[4],
      name: "contribution",
    },
    {
      type: "input",
      message: questions[5],
      name: "test",
    },
    {
      type: "list",
      message: questions[6],
      choices: ["BSD", "MIT", "GPL", "No License"],
      name: "license",
    },
    {
      type: "input",
      message: questions[7],
      name: "github",
    },
    {
      type: "input",
      message: questions[8],
      name: "email",
    },
  ])
  .then((response) => {
    console.log(response);
    fs.writeFile("README1.md", generateMarkdown(response), (err) =>
      err
        ? console.error(err)
        : console.log("Your new README.md file was successfully written!")
    );
  });
/* function writeToFile(fileName, data) {} */

/* // TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init(); */
