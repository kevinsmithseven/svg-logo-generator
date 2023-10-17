const inquirer = require('inquirer');
const { htmlColors } = require('./color.js');

// Ask user for input on logo parameters
const promptUser = () => {
    return inquirer.prompt([
        {
            type: 'input',
            name: 'text',
            message: 'Please enter up to three characters for the text of your logo:',
            //validate that input is not greater than three characters
            validate: function (input) {
                if (input.length > 3) {
                    return "Please enter only three characters:"
                }
                return true;
            }
        },
        {
            type: 'input',
            name: 'textColor',
            message: 'Please enter the color you would like your text to be. You can enter a color keyword (i.e, black), or a hexadecimal value that includes the starting #:',
        },
        {
            type: 'list',
            name: 'shape',
            message: 'Please select the shape for your logo:',
            choices: ['circle', 'triangle', 'square'],
        },
        {
            type: 'input',
            name: 'shapeColor',
            message: 'Please enter the color you would like your shape to be. You can enter a color keyword (i.e, black), or a hexadecimal value that includes the starting #:',
            validate: function (input) {
            //     // Filter htmlColors array to check if input is a valid color keyword or hexadecimal value
            //     const validColors = htmlColors.filter((name) => {
            //         return name.toUpperCase() === input.toUpperCase(); // Case-insensitive comparison
            //     });

            //     if (validColors.length > 0) {
            //         return true; // Input is a valid color keyword or hexadecimal value
            //     }

            //     return "Please enter a valid color or hexadecimal value.";
            }
        }
    ])
}

module.exports = { promptUser };