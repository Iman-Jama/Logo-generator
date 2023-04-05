

const fs = require('fs');
const inquirer = require('inquirer');

class Shape {
  constructor(color) {
    this.color = color;
  }

  draw() {
    return '';
  }
}

class Triangle extends Shape {
  constructor(color) {
    super(color);
  }

  draw() {
    return `<polygon points="50,0 0,100 100,100" fill="${this.color}" />`;
  }
}

class Square extends Shape {
  constructor(color) {
    super(color);
  }

  draw() {
    return `<rect x="0" y="0" width="100" height="100" fill="${this.color}" />`;
  }
}

class Circle extends Shape {
  constructor(color) {
    super(color);
  }

  draw() {
    return `<circle cx="50" cy="50" r="50" fill="${this.color}" />`;
  }
}

inquirer.prompt([
  {
    type: 'list',
    name: 'shape',
    message: 'Choose a shape:',
    choices: ['triangle', 'square', 'circle'],
  },
  {
    type: 'input',
    name: 'color',
    message: 'Enter a color for the shape:',
  },
  {
    type: 'input',
    name: 'text',
    message: 'Enter text to include in the logo:',
  },
  {
    type: 'input',
    name: 'textColor',
    message: 'Enter a color for the text:',
  },
]).then(answers => {
  const { shape, color, text, textColor } = answers;

  let shapeObj;

  switch (shape) {
    case 'triangle':
      shapeObj = new Triangle(color);
      break;
    case 'square':
      shapeObj = new Square(color);
      break;
    case 'circle':
      shapeObj = new Circle(color);
      break;
    default:
      shapeObj = new Shape(color);
      break;
  }

  const logo = `<svg xmlns="http://www.w3.org/2000/svg" width="100" height="100">
    ${shapeObj.draw()}
    <text x="50" y="70" fill="${textColor}" text-anchor="middle">${text}</text>
  </svg>`;

  fs.writeFile('logo.svg', logo, (err) => {
    if (err) {
      console.error(err);
      return;
    }
    console.log('Logo created successfully!');
  });
});
