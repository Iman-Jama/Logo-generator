
function renderShape(shape){
    if(shape==="Circle"){
        return `<circle cx="100" cy="100" r="100"`
    }else if(shape==="Triangle"){
        return 
    }
}
function renderLicenseBadge(license) {
    if (license == "MIT License") {
      return `<a href="https://www.mit.edu/~amini/LICENSE.md" alt="MIT License">
      <img src="https://img.shields.io/bower/l/css" /></a>`;
    }else if (license=="Apache License"){
      return `<a href="https://www.apache.org/licenses/LICENSE-2.0" alt="Apache License">
      <img src="https://img.shields.io/badge/Apache-License-blue" /></a>`;
    }else if (license =="GNU General Public License") {
      return `<a href="https://www.gnu.org/licenses/old-licenses/gpl-2.0.en.html" alt="GNU License">
      <img src="https://img.shields.io/badge/GNU-License-lightgrey" /></a>`;
    }else if (license=="Boost Software License"){
      return `<a href="https://www.boost.org/users/license.html" alt="Boost Software License">
      <img src="https://img.shields.io/badge/Boost%20Software-License-orange)" /></a>`;
    }else if (license=="Mozilla Public License"){
      return `<a href="https://www.mozilla.org/en-US/MPL/" alt="Mozilla Public License">
      <img src="https://img.shields.io/badge/Mozilla%20Public-License-red" /></a>`;
    }else if (license=="Eclipse Public License") {
      return `<a href="https://www.eclipse.org/legal/epl-2.0/" alt="Eclipse Public License">
      <img src="https://img.shields.io/badge/Eclipse%20Public-License-pink" /></a>`;
    }else{
      return "";
    }
    
  };
  

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  let licenseLink = " ";
  if (license == "MIT License"){
    licenseLink ="https://www.mit.edu/~amini/LICENSE.md";
  }else if (license=="Apache License"){
    licenseLink = "https://www.apache.org/licenses/LICENSE-2.0";
  }else if (license =="GNU General Public License"){
    licenseLink = "https://www.gnu.org/licenses/old-licenses/gpl-2.0.en.html";
  } else if (license =="Boost Software License"){
    licenseLink = "https://www.boost.org/users/license.html";
  }else if (license=="Mozilla Public License"){
    licenseLink = "https://www.mozilla.org/en-US/MPL/";
  } else if (license == "Eclipse Public License") {
    licenseLink = "https://www.eclipse.org/legal/epl-2.0/"
  }else{
    licenseLink = " ";
  }
  return licenseLink;
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  
  if (license == "MIT License"){
    return "I used the MIT license for this application."
  }else if (license=="Apache License"){
    return "I used the Apache license for this application."
  }else if (license =="GNU General Public License"){
    return "I used the GNU general public license for this application."
  } else if (license =="Boost Software License"){
    return "I used the Boost software License for this application."
  }else if (license=="Mozilla Public License"){
    return "I used the Mozilla Public License for this application."
  } else if (license == "Eclipse Public License") {
    return "I used the Eclipse Public License for this application."
  }else{
  return;
  }
  
};


function generateMarkdown(answer) {
    return ` # ${answer.title}
   
    ${renderLicenseBadge(answer.License)} 
    
  
    ## Description:
    ${answer.Description}
    
    
    ## Table of Contents:
    
    - [Installation](#installation)
    - [Usage](#usage)
    - [Credits](#credits)
    - [License](#license)
    - [Contribution](#contribute)
    - [Contact me](#contact)
    
    ## Installation
    ${answer.installation}
    
    
    ## Usage
    ${answer.Usage}
    
    Below is a screenshot of my application:
    ![alt text](/assets/images/${answer.screenshot}.png)
        
    
    ## Credits
    
    The following have collaborated with me on my project:<br>
    [${answer.Collaborators}](https://github.com/${answer.Collaborators})
    
    
    ## License
    ${renderLicenseSection(answer.License)} Here is the link: ${renderLicenseLink(answer.License)}
    
    ## Contribute:
    ${answer.Contribution}
    
    ## Contact:
    My github is: [${answer.Github}](https://github.com/${answer.Github}) <br>
    My email is : ${answer.email}`;
  
  
  };
  
  module.exports = generateMarkdown;
  