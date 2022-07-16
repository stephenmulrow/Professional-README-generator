// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {

   // return a string
} 

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {

  // return a string
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  return `${renderLicenseBadge(license)}\n ${renderLicenseLink(license)}`
 
}


// TODO: Create a function to generate markdown for README
function generateMarkdown(answers) {
  console.log(answers)
  return `
# ${answers.title}
https://github.com/${answers.username}/${answers.title}
# Description
${answers.description}
# Table of Contents 
* [Installation](#installation)
* [Usage](#usage)
* [License](#license)
* [Contributing](#contributing)
* [Tests](#tests)
* [Questions](#questions)
# Installation
The following necessary dependencies must be installed to run the application properly: ${answers.installation}
# Usage
In order to use this app, ${answers.usage}
# License
${answers.license}
${renderLicenseSection(answers.license)} 
# Contributing
​Contributors: ${answers.contribution}
# Tests
The following is needed to run the test: ${answers.test}
# Questions
If you have any questions about the repo, open an issue or contact ${answers.username} directly at : ${answers.email}.
`
}


module.exports = generateMarkdown;
