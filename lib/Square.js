const Shape = require('./Shape.js')

class Square extends Shape {
    constructor(text, textColor, shapeColor, shape) {
        super(text, textColor, shapeColor);
        this.shape = this.shape
    }

    generateSquare() {
        return `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">
        <rect width="200" height="200" fill="${this.shapeColor}" />
        <text x="100" y="120" font-size="60" text-anchor="middle" fill="${this.textColor}">${this.text}</text>
        </svg>`
    }
}

module.exports = Square;