// Import the promptUser function from userinput.js
const { promptUser } = require('./lib/userinput.js')

// Utilize promises for promptUser
const { writeFile } = require('fs').promises;

// Import generateLogo function from shapes.js
const Circle = require('./lib/Circle.js');
const Square = require('./lib/Square.js');
const Triangle = require('./lib/Triangle.js');

const init = () => {
    promptUser()

    //Pass user input from userinput.js into generateLogo function on shapes.js
    .then((userInput) => {
        if (userInput.shape === 'circle') {

            const circle = new Circle(userInput.text, userInput.textColor, userInput.shapeColor)

            return circle.generateCircle();
        }
        if (userInput.shape === 'square') {
            const square = new Square(userInput.text, userInput.textColor, userInput.shapeColor)

            return square.generateSquare();
        }
        if (userInput.shape === 'triangle') {
            const triangle = new Triangle(userInput.text, userInput.textColor, userInput.shapeColor)

            return triangle.generateTriangle();
        }        
    })
    .then((logoContent) => {
        // Write content to the logo.svg file
        return writeFile('./output/logo.svg', logoContent)
    })
    .then(() => console.log('Successfully created logo.svg'))
    .catch((err) => console.error(err));   
};

init();
