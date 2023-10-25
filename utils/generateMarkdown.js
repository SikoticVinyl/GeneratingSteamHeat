// If license returns a license badge, if there is no license, returns an empty string
function renderLicenseBadge(license) {
  if (license) {
    return `![License](https://img.shields.io/badge/License-${license.replace(/ /g, '%20')}-blue.svg)`;
  }
  return "";
}

// If license then returns a license link, if there is no license, returns an empty string
function renderLicenseLink(license) {
  if (license) {
    return `[License Information](https://choosealicense.com/licenses/${license.toLowerCase()})`;
  }
  return "";
}

// if license, returns license section, if there is no license, returns an empty string
function renderLicenseSection(license) {
  if (license) {
    return `## License

This project is licensed under the ${license} License. See the ${renderLicenseLink(license)} for details.`;
  }
  return "";
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  const licenseBadge = renderLicenseBadge(data.license);
  const licenseSection = renderLicenseSection(data.license);

  return `# ${data.title}

${licenseBadge}

## Description
${data.description}

## Table of Contents
- [Installation](#installation)
- [Usage](#usage)
- [License](#license)
- [Contributing](#contributing)
- [Tests](#tests)
- [Questions](#questions)

## Installation
${data.installation}

## Usage
${data.usage}

${licenseSection}

## Contributing
${data.contributing}

## Tests
${data.test}

## Questions
You can reach out to me at ${data.email} or visit my [GitHub profile](https://github.com/${data.username}). ${data.contactMe}
`;
}

module.exports = generateMarkdown;