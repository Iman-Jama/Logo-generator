class Shape {
    constructor(type, color) {
      this.type = type;
      this.color = color;
    }
  
    renderShape() {
      // Render the SVG shape based on its type and properties
    }
  };


class Circle extends Shape {
    constructor(colour) {
      super('circle', colour);
  
    }
  
    renderShape() {
      return `<circle cx="100" cy="100" r="100" fill="${this.colour}" />`;
    }
  };

  class Square extends Shape {
    constructor(colour) {
      super('square',colour);
    }
  
    renderShape() {
      return `<rect x="0" y="0" width="100" height="100" fill="${this.colour}" />`;
    }
  }

  class Triangle extends Shape {
    constructor(colour) {
      super('triangle',colour);
    }
  
    renderShape() {
      return `<polygon points="50,0 0,100 100,100" fill="${this.colour}" />`;
    }
  }

  module.exports = { Shape,Circle, Triangle, Square }