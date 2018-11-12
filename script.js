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
        this.element.setAttribute('style', "width: " + squareLength + "px; height: " + squareLength + "px");
    }
}

let addSquare = function() {
    const squareDiv = new Square();
    document.getElementsByClassName('shapes-canvas')[0].appendChild(squareDiv.element)
}

document.getElementsByClassName('square-btn')[0].addEventListener('click', function() {
    addSquare();
})