// Constructor Circle is imported
const Circle = require('../lib/Circle');

// Testing suite for the generate Circle method
describe('Circle shape and color', () => {
    it('should generate a green circle', () => {
        // Arrange
        const expectedSVG = '<circle cx="150" cy="100" r="80" fill="green" />';
        // Act
        const circle = new Circle("KAS", "black", "green");        
        const actualSVG = circle.renderSVG();
        //Assert
        expect(actualSVG).toContain(expectedSVG)
    })
})