function calculateRectangleArea(){
    const rectangleWidth = document.getElementById("rectangle-width");
    const rectangleWidthText = rectangleWidth.value;
    const width = parseFloat(rectangleWidthText)



    const rectangleLength = document.getElementById("rectangle-length");
    const rectangleLengthText = rectangleLength.value;
    const length = parseFloat(rectangleLengthText)

    const area = width * length;
    console.log("Area Of The Rectangle is :",area)

    // display Rectangle area
    const displayRectangle = document.getElementById("rectangle-area")
    displayRectangle.innerText = area;
}