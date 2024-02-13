function calcu(){
    const triangleBase = document.getElementById("triangle-base");
    const triangleBaseText = triangleBase.value;
    const base= parseFloat(triangleBaseText)



    const triangleHeight = document.getElementById("triangle-height");
    const triangleHeightText = triangleHeight.value;
    const height = parseFloat(triangleHeightText);

    const area = 0.5 * base * height
    console.log("Area Of The Triangle is :",area)

    // Display Triangle Area
    const displayTriangleArea = document.getElementById("triangle-area");
    displayTriangleArea.innerText = area
  }