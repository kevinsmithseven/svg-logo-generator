// Create Shape parent constructor and add method generateLogo
class Shape {
    constructor(text, textColor, shapeColor) {
        if(!text){
            throw new Error("missing text")
        }

        if(!textColor){
            throw new Error("missing text color")
        }

        if(text.length > 3){
            throw new Error("text must not be greater than 3 characters")
        }
        this.text = text;
        this.textColor = textColor;
        this.shapeColor = shapeColor;
    }

    renderSVG(){
        throw new Error("renderSVG not yet implemented")
    }
}

module.exports = Shape;