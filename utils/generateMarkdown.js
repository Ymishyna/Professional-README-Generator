// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license !== "None") {
    return `![license](https://img.shields.io/badge/license-${license}-yellowgreen.svg)`;
  }
  return '';
}


// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) { }

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) { }

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
  ${renderLicenseBadge(data.license)}

## Description 📝

${data.description}

## Table of Contents (Optional) 🗒

If your README is long, add a table of contents to make it easy for users to find what they need.

- [Installation](#installation-💻)
- [Usage](#usage-🏆)
${renderLicenseLink(data.license)}
- [Contributing](#contributing-😃)
- [Test](#Test-🧪)
- [Questions](#questions)

## Installation 💻

${data.installation}

## Usage  🏆

${data.usage}

${renderLicenseSection(data.license)}

## Contributing  😃
 
${data.contributing}

## Tests  🧪

${data.test}

## Questions

For additional questions, contact me at the email provided below. 

- Email:  ${data.email}
- GitHub: [${data.github}](https://github.com/${data.github}/)

---

_This README was generated with ❤️ by [README-Generator](https://github.com/Ymishyna/Professional-README-Generator) © 2023_
`;
}

module.exports = generateMarkdown;
