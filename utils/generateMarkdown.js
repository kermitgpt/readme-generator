/*const inquirer = require("inquirer"); */
/* const fs = require("fs"); */
/* const index = require("/Users/mattgrogan/Desktop/readme-generator/index.js"); */

// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(response) {
  if (response.license !== "No License") {
    return `![badge](
      https://img.shields.io/badge/license-${response.license}-blue
    )`;
  } else {
    return "";
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(response) {
  if (response.license === "MIT") {
    return `[Link to opensource.org license info](https://opensource.org/licenses/MIT)`;
  }
  if (response.license === "BSD") {
    return `[Link to opensource.org license info](https://opensource.org/licenses/BSD-2-Clause)`;
  }
  if (response.license === "GPL") {
    return `[Link to opensource.org license info](https://opensource.org/licenses/GPL-3.0)`;
  }
  if (response.license === "No License") {
    return "";
  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(response) {
  if (response.license !== "No License") {
    return `## License\n Licensed under the ${response.license} license. [Link to ${response.license} license text](${response.license}.txt).
`;
  } else {
    return "";
  }
}

// TODO: Create a function to generate markdown for README

function generateMarkdown(response) {
  //Put down all of the readme info. Pass in responses from inquirer (user response)
  return `
<p align="center">
  <font size="5">${response.title}</font> 
</p>

${renderLicenseBadge(response)}

## Description
${response.description}


## Table of Contents

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

  
## Contribution-Guidelines
${response.contribution}


## Test-Instructions
${response.test}


## Questions
If you have any questions regarding this project please contact either on GitHub or by Email below.
GitHub: ${response.github}
Email: ${response.email}

${renderLicenseSection(response)}
${renderLicenseLink(response)}

`;
}

module.exports = generateMarkdown;
