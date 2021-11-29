/*const inquirer = require("inquirer"); */
/* const fs = require("fs"); */
/* const index = require("/Users/mattgrogan/Desktop/readme-generator/index.js"); */

// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README

function generateMarkdown(response) {
  //Put down all of the readme info. Pass in responses from inquirer (user response)
  return `# ${response.title}
## Description
${response.description}

## Table of Contents
If your README is long, add a table of contents to make it easy for users to find what they need.
- [Installation](#installation)
- [Usage](#usage)
- [Contribution Guidelines](#contribution-guidelines)
- [Test Instructions](#test-instructions)
- [Questions](#questions)
- [License](#license)

## Installation
${response.installation}

## Usage
${response.usage}

    md
    ![alt text](assets/images/screenshot.png)
    
## Contribution-Guidelines
${response.contribution}

## Test-Instructions
${response.test}

## Questions
If you have any questions regarding this project please contact either on GitHub or by Email below.
GitHub: ${response.github}
Email: ${response.email}

## License
${response.license}


## Features
If your project has a lot of features, list them here.
## How to Contribute
If you created an application or package and would like other developers to contribute it, you can include guidelines for how to do so. The [Contributor Covenant](https://www.contributor-covenant.org/) is an industry standard, but you can always write your own if you'd prefer.
## Tests
Go the extra mile and write tests for your application. Then provide examples on how to run them here.
`;
}

module.exports = generateMarkdown;
