const inquirer = require('inquirer');
const colorKeywords = require('./color.js');

// Ask user for input on logo parameters
const promptUser = () => {
    return inquirer.prompt([
        {
            type: 'input',
            name: 'text',
            message: 'Please enter up to three characters for the text of your logo:',
            //validate that input is not greater than three characters
            validate: function(input) {
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
            validation: function(input) {
                if (colorKeywords.includes(input.toUppercase())) {
                    return true;
                }
                if (/^([0-9A-Fa-f]{3}){1,2}$/.test(input)) {
                    return true;
                }
                return "Please enter a valid color or hexadecimal value";
            }
        }
    ])
}

module.exports = { promptUser };