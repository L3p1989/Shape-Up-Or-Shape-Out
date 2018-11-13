const shapeCanvas = document.getElementsByClassName('shapes-canvas')[0];
const shapeName = document.getElementsByClassName('shape-name')[0];
const shapeWidth = document.getElementsByClassName('shape-width')[0];
const shapeHeight = document.getElementsByClassName('shape-height')[0];
const shapeRadius = document.getElementsByClassName('shape-radius')[0];
const shapeArea = document.getElementsByClassName('shape-area')[0];
const shapePerim = document.getElementsByClassName('shape-perimeter')[0];

Array.from(document.getElementsByTagName('form')).forEach(function(element) {
    element.addEventListener('keypress', function(event) {
        var key = event.charCode || event.keyCode || 0;     
        if (key == 13) {
        event.preventDefault();
        };
    });
});//creates an array from 'form' elements and prevents default on 'ENTER' keypress

function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
};//random number

class Shape {
    constructor() {
    };
};

Shape.prototype.describe = function() {
        shapeName.textContent = "shape: " + this.element.className;
        shapeWidth.textContent = "width: " + parseInt(this.element.style.width);
        shapeHeight.textContent = "height: " + parseInt(this.element.style.height);
        shapeArea.textContent = "area: " + (parseInt(this.element.style.width) * parseInt(this.element.style.height));
        shapePerim.textContent = "perimeter: " + (parseInt(this.element.style.width) * 2 + parseInt(this.element.style.height) * 2);
};//function to change `.side-bar`

class Rectangle extends Shape {
    constructor () {
        super();
        let rectLength = document.getElementsByClassName('rectangle-width')[0].value;
        let rectHeight = document.getElementsByClassName('rectangle-height')[0].value;
        this.element = document.createElement('div');
        this.element.className = 'rectangle';
        this.element.setAttribute('style', "width: " + rectLength + "px; height: " + rectHeight + "px; bottom: " + getRndInteger(124, 564) + "px; left: " + getRndInteger(8, 1045) + "px");
    };
};

class Square extends Shape {
    constructor () {
        super();
        let squareLength = document.getElementsByClassName('square-side')[0].value;
        this.element = document.createElement('div');
        this.element.className = 'square';
        this.element.setAttribute('style', "width: " + squareLength + "px; height: " + squareLength + "px; bottom: " + getRndInteger(124, 564) + "px; left: " + getRndInteger(8, 1045) + "px");
    };
};

class Circle extends Shape {
    constructor () {
        super();
        let circleRadius = document.getElementsByClassName('circle-radius')[0].value;
        this.element = document.createElement('div');
        this.element.className = 'circle';
        this.element.setAttribute('style', "border-radius: " + circleRadius + "%; bottom: " + getRndInteger(124, 564) + "px; left: " + getRndInteger(8, 1045) + "px");
    };
    describe() {
        shapeName.textContent = "shape: " + this.element.className;
        shapeRadius.textContent = "radius: " + parseInt(this.element.style.borderRadius);
        shapePerim.textContent = "perimeter: " + (2 * 3.14 * parseInt(this.element.style.borderRadius));
    };
};

class Triangle extends Shape {
    constructor () {
        super();
        let triheight = document.getElementsByClassName('triangle-height')[0].value;
        this.element = document.createElement('div');
        this.element.className = 'triangle';
        this.element.setAttribute('style', "border-top: " + triheight + "px solid yellow; border-left: " + triheight + "px solid transparent; bottom: " + getRndInteger(124, 564) + "px; left: " + getRndInteger(8, 1045) + "px");
    };
    describe() {
        shapeName.textContent = "shape: " + this.element.className;
        shapeArea.textContent = "area: " + (0.5 * parseInt(this.element.style.borderTop) * parseInt(this.element.style.borderTop));
        shapePerim.textContent = "perimeter: " + (2 * parseInt(this.element.style.borderTop) + 1.41421356237 * parseInt(this.element.style.borderTop));
    };
};

document.getElementsByClassName('rectangle-btn')[0].addEventListener('click', function() {
    let addRect = function() {
        const rectDiv = new Rectangle();
        shapeCanvas.appendChild(rectDiv.element);
        rectDiv.element.addEventListener('click', function() {
            rectDiv.describe();
        });//updates `side-bar` info on 'click'
        rectDiv.element.addEventListener('dblclick', function() {
            this.remove(rectDiv.event);
        });//removes rectDiv on 'dblclick'
    };
    if (document.getElementsByClassName('rectangle-width')[0].value !== '' && document.getElementsByClassName('rectangle-height').value !== '') {
        addRect();
        document.getElementsByClassName('rectangle-width')[0].value = '';
        document.getElementsByClassName('rectangle-height')[0].value = '';
    } else return alert('There is nothing to add!');
});//adds `click` event to `.rectangle-btn` that adds Rectangle to canvas

document.getElementsByClassName('square-btn')[0].addEventListener('click', function() {
    let addSquare = function() {
        const squareDiv = new Square();
        shapeCanvas.appendChild(squareDiv.element);
        squareDiv.element.addEventListener('click', function() {
            squareDiv.describe();
        });//updates `side-bar` info on 'click'
        squareDiv.element.addEventListener('dblclick', function() {
            this.remove(squareDiv.event);
        });//removes `squareDiv` on 'dblclick'
    };
    if (document.getElementsByClassName('square-side')[0].value !== '') {
        addSquare();
        document.getElementsByClassName('square-side')[0].value = '';
    } else return alert('There is nothing to add!');
});//adds `click` event to `.square-btn` that adds `Square` to canvas

document.getElementsByClassName('circle-btn')[0].addEventListener('click', function() {
    let addCircle = function() {
        const circleDiv = new Circle();
        shapeCanvas.appendChild(circleDiv.element);
        circleDiv.element.addEventListener('click', function() {
            circleDiv.describe();
        });//updates `side-bar` info on 'click
        circleDiv.element.addEventListener('dblclick', function() {
            this.remove(circleDiv.event);
        });//removes `circleDiv` on 'dblclick'
    };
    if (document.getElementsByClassName('circle-radius')[0].value !== '') {
        addCircle();
        document.getElementsByClassName('circle-radius')[0].value = '';
    } else return alert('There is nothing to add!');
});//adds `click` event to `.circle-btn` that adds `Circle` to canvas

document.getElementsByClassName('triangle-btn')[0].addEventListener('click', function() {
    let addTri = function() {
        const triDiv = new Triangle();
        shapeCanvas.appendChild(triDiv.element);
        triDiv.element.addEventListener('click', function() {
            triDiv.describe();
        });//updates `side-bar` info on 'click'
        triDiv.element.addEventListener('dblclick', function() {
            this.remove(triDiv.event);
        });//removes `triDiv` on 'dblclick'
    };
    if (document.getElementsByClassName('triangle-height')[0].value !== '') {
        addTri();
        document.getElementsByClassName('triangle-height')[0].value = '';
    } else return alert('There is nothing to add!');
});//adds `click` event to `.triangle-btn` that adds `Triangle` to canvas