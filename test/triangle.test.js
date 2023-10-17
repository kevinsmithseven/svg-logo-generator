// Constructor Triangle is imported
const Triangle = require('../lib/Triangle');

// Testing suite for the generate Triangle method
describe('Triangle shape and color', () => {
    it('should generate a red triangle', () => {
        // Arrange
        const expectedSVG = '<polygon points="150, 18 244, 182 56, 182" fill="red" />';
        // Act
        const triangle = new Triangle("KAS", "white", "red");        
        const actualSVG = triangle.renderSVG();
        //Assert
        expect(actualSVG).toContain(expectedSVG)
    })
})