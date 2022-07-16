// TODO: Include packages needed for this application
const fs = require('fs')
const inquirer = require('inquirer')
const generateMarkdown = require('./utils/generateMarkdown')
// TODO: Create an array of questions for user input
const questions = [
  {
    type: 'input',
    message: 'What is the title of your project?',
    name: 'title'
  },
  {
    type: 'input',
    message: 'What is the description of your project?',
    name: 'description'
  },
  {
      type: 'input',
      message: 'What are the installation instructions for your project?',
      name: 'instructions'
    },
    {
      type: 'input',
      message: 'What is the usage information for the project?',
      name: 'usage'
    },
    {
      type: 'input',
      message: 'What are the contribution guidelines for the project?',
      name: 'contribution'
    },
    {
      type: 'input',
      message: 'What are the test instructions for the project?',
      name: 'test'
    }, 
    {
      type: 'list',
      message: 'What license is being used for the project?',
      name: 'license',
      choices: ["MIT", "Mozilla", "Apache" , "Boost"]
    },
    { type: 'input',
      message: 'What is your GitHub username?',
      name: 'username'
  }, 
  {   type: 'input',
      message: 'What is your email?',
      name: 'email'
  },   
  ]

  
  

// TODO: Create a function to write README file
function init() {
  inquirer.prompt(questions)
  .then((scriptData) => {
  fs.writeFile("./utils/steph/README.md", generateMarkdown(scriptData) , (err) => 
  (err) ? console.error(err) : console.log("Success"))
})
};


// TODO: Create a function to initialize app
// function init() 

// // Function call to initialize app
init();
