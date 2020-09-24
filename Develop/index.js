var inquirer = require("inquirer");
var fs = require("fs");
var generateMarkdown = require("./utils/generateMarkdown.js");


// array of questions for user
const questions = [
    {
        type: "input",
        name: "title",
        message: "Please enter the title for your ReadMe!"
    },
    {
        type: "input",
        name: "description",
        message: "Please enter the description for your ReadMe!"   
    },
    {
        type: "input",
        name: "installation",
        message: "Please enter the installation instruction details for your application!"
    },
    {
        type: "input",
        name: "usage",
        message: "Please enter the usage detail for your ReadMe project!"
    },
    {
        type: "input",
        name: "contribution",
        message: "Who can contribute for the ReadMe project?"
    },
    {
        type: "input",
        name: "test",
        message: "Please enter the test instructions for the ReadMe project!"
    },
    {
        type: "input",
        name: "github",
        message: "Please enter your GitHub URL!"
    },
    {
        type: "input",
        name: "email",
        message: "Please enter your email address!"
    },
    {
        type: "checkbox",
        name: "license",
        message: "What license badge would you like to use?",
        choices: [
            "GNU AGPLv3.0",
            "GNU GPLv3.0",
            "GNU LGPLv3.0",
            "MPL 2.0",
            "Apache License v2.0",
            "MIT License",
            "Boost SL v1.0"
        ]
    },
    {
        type: "input",
        name: "questions",
        message: "Please enter any questions you have about this project!"
    }
]

function promptUser() {
    return inquirer.prompt(questions);
}
promptUser()
.then(function(response) {
    console.log(response);
    
    // function to write README file
    fs.writeFile("ReadMe.md", generateMarkdown(response), function(error) {
        if (error) {
            return console.log(error);
        }
        console.log(" New ReadMe file created")
    });
});

// function writeToFile(fileName, data) {
// }

// // function to initialize program 
// function init() {

// }

// // function call to initialize program
// init();
