const inquirer = require('inquirer');


const promptUser = () => {
    return inquirer.prompt([
        {
            type: 'input',
            name: 'text',
            message: 'Please enter up to three characters for the text of your logo:',
        },
        {
            type: 'input',
            name: 'textColor',
            message: 'Please enter the color you would like your text to be. You can enter a color keyword (i.e, black), or a hexadecimal value:',
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
            message: 'Please enter the color you would like your shape to be. You can enter a color keyword (i.e, black), or a hexadecimal value:',
        }
    ])
}

module.exports = { promptUser };