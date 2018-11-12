const shapeCanvas = document.getElementsByClassName('shapes-canvas')[0];
const shapeName = document.getElementsByClassName('shape-name')[0];
const shapeWidth = document.getElementsByClassName('shape-width')[0];
const shapeHeight = document.getElementsByClassName('shape-height')[0];
const shapeRadius = document.getElementsByClassName('shape-radius')[0];
const shapeArea = document.getElementsByClassName('shape-area')[0];
const shapePerim = document.getElementsByClassName('shape-perimeter')[0];

function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
};

class Shape {
    constructor() {
        
    };
};

Shape.prototype.describe = function() {
    
};

class Square extends Shape {
    constructor () {
        super();
        let squareLength = document.getElementsByClassName('square-side')[0].value;
        
        this.element = document.createElement('div');
        this.element.className = 'square';
        this.element.setAttribute('style', "width: " + squareLength + "px; height: " + squareLength + "px; bottom: " + getRndInteger(124, 564) + "px; left: " + getRndInteger(8, 1045) + "px");
    };
    describe() {
        shapeName.textContent = this.element.className;
        shapeWidth.textContent = parseInt(this.element.style.width);
        shapeHeight.textContent = parseInt(this.element.style.height);
        shapeArea.textContent = parseInt(this.element.style.width) * parseInt(this.element.style.height);
        shapePerim.textContent = parseInt(this.element.style.width) * 2 + parseInt(this.element.style.height) * 2;
    };
};

document.getElementsByClassName('square-btn')[0].addEventListener('click', function() {
    let addSquare = function() {
        const squareDiv = new Square();
        shapeCanvas.appendChild(squareDiv.element);
        squareDiv.element.addEventListener('click', function() {
            squareDiv.describe();
        });
    };
    if (document.getElementsByClassName('square-side')[0].value !== '') {
        addSquare();
        document.getElementsByClassName('square-side')[0].value = '';
    } else return alert('There is nothing to add!');
});