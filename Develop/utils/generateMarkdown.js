// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if(license == 'Unlicensed') {
    return '';
  }
  return `

  ![badge] (https://img.shields.io/badge/license-${license}-brightgreen)<br />`
  
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if(license == 'Unlicensed') {
    return '';
  }

  return `This app is using the ${license} license.`
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if(license == 'Unlicensed') {
    return ''
  }
  
  return `
  ## License`
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(questions) {
  return `
  # ${questions.projectName}  


  ${renderLicenseBadge(questions.license)}  

  
  ## Description  

  ${questions.description}   

  ## Table of contents  

  - [Description](#Description)  

  - [Installation](#Installation)  

  - [Usage](#Usage)  

  - [License](#License)  

  - [Contributors](#Contributors)  

  - [Test](#Test)  

  - [dat](#questions)  

  ## Installation  

  ${questions.installation}   

  ## Usage  

  ${questions.usage}   

  ## License   

  ${renderLicenseLink(questions.license)}  

  ## Contributors  

  ${questions.contributors}  

  ## Tests  

  ${questions.tests}   

  ## Questions  

  My Github Username: ${questions.githubUsername}  

  My Email address: ${questions.email}   

  README created using [README-generator](https://https://github.com/Brett-NT/readme-generator)  

`;
}

module.exports = generateMarkdown;
