"use strict";
/*
  інкапсуляція (абстракція)
  успадкування
  поліморфізм
*/

function logPerimetrFigure(figure){
  if(figure instanceof Figure){
    console.log(figure.name, ' perimetr = ', figure.getPerimetr())
    return;
  }
  throw new TypeError('instance must be extends Figure')
}

class Figure {
  constructor(name) {
    if(this.constructor === Figure){
      throw new Error('Not create instance from Figure!')
    }
    this.name = name;
  }
  getPerimetr() {}
  getArea() {}
}

class Circle extends Figure {
  constructor(radius) {
    super("circle");
    this.radius = radius;
  }
  get radius() {
    return this._radius;
  }
  set radius(value) {
    if (typeof value !== "number") {
      throw new TypeError("radius must be number");
    }
    if (value <= 0) {
      throw new RangeError("radius must be positive");
    }
    this._radius = value;
  }
  getPerimetr() {
    return 2 * Math.PI * this._radius;
  }
  getArea() {
    return Math.PI * this._radius * this._radius;
  }
}

class Square extends Figure {
  constructor(side) {
    super("square");
    this.side = side;
  }
  get side() {
    return this._side;
  }
  set side(value) {
    if (typeof value !== "number") {
      throw new TypeError("side must be number");
    }
    if (value <= 0) {
      throw new RangeError("side must be positive");
    }
    this._side = value;
  }
  getPerimetr() {
    return 4 * this._side;
  }
  getArea() {
    return this._side * this._side;
  }
}

class Triangular extends Figure {
  constructor(a, b, c) {
    super("triangular");
    this.setSides(a, b, c); 
  }
  setSides(a, b, c) {
    if (
      typeof a !== "number" ||
      typeof b !== "number" ||
      typeof c !== "number"
    ) {
      throw new TypeError("side must be number");
    }
    if (a <= 0 || b <= 0 || c <= 0) {
      throw new RangeError("side must be positive");
    }
    if (a + b > c && b + c > a && a + c > b) {
      this._a = a;
      this._b = b;
      this._c = c;
      return;
    }
    throw new RangeError("side must be right");
  }
  get a() {
    return this._a;
  }
  get b() {
    return this._b;
  }
  get c() {
    return this._c;
  }
  getPerimetr() {
    return this._a+this._b+this._c;
  }
  getArea() {
    //formula Gerona
  }
}

// const figure0 = new Figure('figure');
// console.log(figure0.getPerimetr());

const figure1 = new Circle(10);
figure1.radius += 2;

const figure2 = new Square(10);
figure2.side += 2;

const figure3 = new Triangular(3,4,5);


logPerimetrFigure(figure1)
logPerimetrFigure(figure2)
logPerimetrFigure(figure3)