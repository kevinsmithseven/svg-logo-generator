// Import the promptUser function from userinput.js
const { promptUser } = require('./lib/userinput')

// Utilize promises for promptUser
const { writeFile } = require('fs').promises;

// Import generateLogo function from shapes.js
const { generateLogo} = require('./lib/Shapes');

const init = () => {
    promptUser()

    //Pass user input from userinput.js into generateLogo function on shapes.js
    .then((userInput) => {
        return generateLogo(userInput);
    })
    .then((logoContent) => {
        // Write content to the logo.svg file
        return writeFile('./output/logo.svg', logoContent)
    })
    .then(() => console.log('Successfully created logo.svg'))
    .catch((err) => console.error(err));   
};

init();
