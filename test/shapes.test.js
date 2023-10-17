const Shape = require("../lib/Shape")

// Create test suite for Shape class
describe('shape test suite', () => {
    //Happy Path test
    it('should create a new shape', () => {
        const expected = {
            text: "KAS",
            textColor: "blue",
            shapeColor: "white"
        }

        const newShape = new Shape(expected.text, expected.textColor, expected.shapeColor)

        expect(newShape.text).toEqual(expected.text)
        expect(newShape.textColor).toEqual(expected.textColor)
        expect(newShape.shapeColor).toEqual(expected.shapeColor)
    })
    
    //Sad Path test
    it('should throw an error if no text is provided', () => {
        const cb = () => new Shape();
        const err = new Error("missing text");

        expect(cb).toThrowError(err);
    })
});
