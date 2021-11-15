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
  if(data.license == 'Unlicensed') {
    return ''
  }
  
  return `
  ## License`
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `
  # ${data.title}  


  ${renderLicenseBadge(license)}  

  
  ## Description  

  ${data.description}   

  ## Table of contents  

  - [Description](#Description)  

  - [Installation](#Installation)  

  - [Usage](#Usage)  

  - [License](#License)  

  - [Contributors](#Contributors)  

  - [Test](#Test)  

  - [dat](#data)  

  ## Installation  

  ${data.installation}   

  ## Usage  

  ${data.usage}   

  ## License   

  ${renderLicenseLink(license)}  

  ## Contributors  

  ${data.contributors}  

  ## Tests  

  ${data.tests}   

  ## questions  

  My Github Username: ${data.githubUsername}  

  My Email address: ${data.email}   

  README created using [README-generator](https://https://github.com/Brett-NT/readme-generator)  

`;
}

module.exports = generateMarkdown;
