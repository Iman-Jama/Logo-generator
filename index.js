const inquirer = require('inquirer');
const fs = require('fs');

const { Shape, Circle, Triangle, Square } = require('./testfiles/shapes');

const questions = [
    
        {
          type: 'list',
          name: 'shape',
          message: 'Select a shape:',
          choices: ['Circle', 'Square', 'Triangle'],
          validate: (value)=>{if(value){return true}else {return "I need an answer to continue"}},
        },
        {
          type: 'input',
          name: 'shapeColour',
          message: 'Enter a colour for the shape:',
          validate: (value)=>{if(value){return true}else {return "I need an answer to continue"}},
        },
        {
          type: 'input',
          name: 'text',
          message: 'Please write your text',
          validate: (value)=>{if(value){return true}else {return "I need an answer to continue"}},
        },
        {
          type: 'input',
          name: 'textColour',
          message: 'Please pick a colour for your text:',
          validate: (value)=>{if(value){return true}else {return "I need an answer to continue"}},
        },
      ];
  
  
  // // TODO: Create a function to initialize app
  function init() {
    inquirer.prompt(questions)
    .then(answers => {
      const { shape, shapeColour, text, textColour } = answers;
    
      let shapetype;
    
      if (shape==="Triangle") {
          shapetype = new Triangle(shapeColour);
      }else if(shape==="Square"){
        shapetype = new Square(shapeColour);
      }else if (shape === "Circle"){
        shapetype = new Circle(shapeColour); 
      } else{
        return;
      }
    
      const logo = `<svg xmlns="http://www.w3.org/2000/svg" width="100" height="100">
        ${shapetype.renderShape(shapeColour)}
        <text x="50" y="70" fill="${textColour}" text-anchor="middle">${text}</text>
      </svg>`;
    
      fs.writeFile('logo.svg', logo, (err) => {
        if (err) {
          console.error(err);
          return;
        }
        console.log('Logo created successfully!');
      });
    })}
    init()
  
  
  
  
  
  
  
  
  
  
  
  
