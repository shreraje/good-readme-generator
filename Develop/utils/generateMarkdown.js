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
* [Test](#test)
* [License](#license)
* [Any Question](#questions)

## Installation
${data.installation}

## Usage
${data.usage}

## Contribution
${data.contribution}

## Test
${data.test}

## License
${data.license}

## How to contact me with any question:

Questions:
${data.questions}

Email:
${data.email}

GitHub Link:
https://github.com/${data.github}
`;
}

module.exports = generateMarkdown;
