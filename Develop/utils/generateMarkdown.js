// function to generate markdown for README
function generateMarkdown(data) {
  var licLogo = data.license;
  return `# ${data.title}

<img src="https://img.shields.io/badge/License-${licLogo}-blue.svg" alt="License image of ${data.license}" />
  
  
## Description
${data.description}

## Table of Contents
* [Description](#description)
* [Installation](#installation)
* [Usage](#usage)
* [Contribution](#contribution)
* [Screenshot](#screenshot)
* [Links](#links)
* [Contacts](#contacts)
* [Test](#test)
* [License](#license)
* [Questions](#questions)

## Installation
${data.installation}

##Screenshot of newly created ReadMe.md file
${data.screenshot}

## Link to the video showing how this app work & GitHub repo:
${data.links}

## Usage
${data.usage}

## Contribution
${data.contribution}

## Test
${data.test}

## License
${data.license}

## How to contact me with any question:

Question:
${data.questions}

## Contact me if you have any question:
${data.contacts}
Email:
${data.email}

GitHub Link:
https://github.com/${data.github}

`;
}

module.exports = generateMarkdown;
