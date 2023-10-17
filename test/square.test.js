// Constructor Square is imported
const Square = require('../lib/Square');

// Testing suite for the generate Square method
describe('Square shape and color', () => {
    it('should generate a blue square', () => {
        // Arrange
        const expectedSVG = '<rect width="200" height="200" fill="blue" />';
        // Act
        const square = new Square("KAS", "black", "blue");        
        const actualSVG = square.renderSVG();
        //Assert
        expect(actualSVG).toContain(expectedSVG)
    })
})