// Import the promptUser function from userinput.js
const { promptUser } = require('./lib/userinput.js')

// Utilize promises for promptUser
const { writeFile } = require('fs').promises;

// Import Class constructors
const Circle = require('./lib/Circle.js');
const Square = require('./lib/Square.js');
const Triangle = require('./lib/Triangle.js');

// initialize app
const init = () => {
    promptUser()

    //Call renderSVG method based on user shape selection
    .then((userInput) => {
        
        let userShape;
        switch (userInput.shape) {
            case "circle":
                userShape = new Circle(userInput.text, userInput.textColor, userInput.shapeColor);
                break;
            case "square":
                userShape = new Square(userInput.text, userInput.textColor, userInput.shapeColor);
                break;
            case "triangle":
                userShape = new Triangle(userInput.text, userInput.textColor, userInput.shapeColor)
        }
        return userShape.renderSVG();
    })
    // Generate logo.svg file after promise fulfilled
    .then((logoContent) => {
        // Write content to the logo.svg file
        return writeFile('./output/logo.svg', logoContent)
    })
    // log success message if no error and catch/log any errors
    .then(() => console.log('Successfully created logo.svg'))
    .catch((err) => console.error(err));   
};

init();
