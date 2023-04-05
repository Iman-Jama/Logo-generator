const inquirer = require('inquirer');
const fs = require('fs');

const questions = [
    
        {
          type: 'list',
          name: 'shape',
          message: 'Select a shape:',
          choices: ['Circle', 'Rectangle', 'Triangle']
          validate: (value)=>{if(value){return true}else {return "I need an answer to continue"}},
        },
        {
          type: 'input',
          name: 'shapeColor',
          message: 'Enter a colour for the shape:'
          validate: (value)=>{if(value){return true}else {return "I need an answer to continue"}},
        },
        {
          type: 'input',
          name: 'text',
          message: 'Enter some text:'
          validate: (value)=>{if(value){return true}else {return "I need an answer to continue"}},
        },
        {
          type: 'input',
          name: 'textColor',
          message: 'Enter a color for the text:'
          validate: (value)=>{if(value){return true}else {return "I need an answer to continue"}},
        },
      ];
  
  
  // // TODO: Create a function to initialize app
  // function init() {
  // inquirer.prompt(questions)
  // .then(function(answer){
  //     console.log(answer)
  // const SVGcontentx = generateInfo(answer);
  
  // fs.writeFile('README.md', ReadMeContent, (err) =>
  //   err ? console.log(err) : console.log('Successfully created ReadMe file!')
  // );
  // })
  // }
  
  // // Function call to initialize app
  // init();