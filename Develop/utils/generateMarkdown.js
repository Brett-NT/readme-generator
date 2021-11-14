// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if(questions.license == 'Unlicensed') {
    return '';
  }
  return `
  ![badge] (https://img.shields.io/badge/license-${questions.license}-brightgreen)<br />`
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  const badge = `![badge] (https://img.shields.io/badge/license-${questions.license}-brightgreen)`

  return badge
  `<br />
  This app is using the ${questions.license} license.`
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if(questions.license == 'Unlicensed') {
    return ''
  }
  
  return `
  ## License`
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

`;
}

module.exports = generateMarkdown;
