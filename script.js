const shapeCanvas = document.getElementsByClassName('shapes-canvas')[0]

function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}

class Shape {
    constructor() {

    }
};

class Square extends Shape {
    constructor () {
        super()
        let squareLength = document.getElementsByClassName('square-side')[0].value
        
        this.element = document.createElement('div');
        this.element.className = 'square'
        this.element.setAttribute('style', "width: " + squareLength + "px; height: " + squareLength + "px; bottom: " + getRndInteger(124, 564) + "px; left: " + getRndInteger(8, 1045) + "px");
    }
}

document.getElementsByClassName('square-btn')[0].addEventListener('click', function() {
    let addSquare = function() {
        const squareDiv = new Square();
        shapeCanvas.appendChild(squareDiv.element)
    };
    if (document.getElementsByClassName('square-side')[0].value !== '') {
        addSquare();
        document.getElementsByClassName('square-side')[0].value = '';
    } else return alert('There is nothing to add!');
    
});