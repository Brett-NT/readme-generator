// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if(data.license == 'Unlicensed') {
    return '';
  }
  return `

  ![badge] (https://img.shields.io/badge/license-${data.license}-brightgreen)<br />`
  
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  const badge = `![badge] (https://img.shields.io/badge/license-${data.license}-brightgreen)`

  return badge
  `<br />
  This app is using the ${data.license} license.`
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
  return `# ${data.title}  


  ![badge] (https://img.shields.io/badge/license-${data.license}-brightgreen)<br />  

  
  ## Description  

  ${data.description}  

  <br />  

  ## Table of contents  

  - [Description](#Description)  

  - [Installation](#Installation)  

  - [Usage](#Usage)  

  - [License](#License)  

  - [Contributors](#Contributors)  

  - [Test](#Test)  

  - [data](#data)  

<br />  

  ## Installation  

  ${data.installation}  

<br />  

  ## Usage  

  ${data.usage}  

<br />  

  ## License  

  ![badge] (https://img.shields.io/badge/license-${data.license}-brightgreen)  

  <br />  

  Licensed using ${data.license}.  

<br />  

  ## Contributors  

  ${data.contributors}  

,br />  

  ## Tests  

  ${data.tests}  

<br />  

  ## data  

  My Github Username: ${data.githubUsername}  

  <br />  

  My Email address: ${data.email}  

<br />  

  README created using [README-generator](https://https://github.com/Brett-NT/readme-generator)  

`;
}

module.exports = generateMarkdown;
