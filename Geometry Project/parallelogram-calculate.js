function calculateParallelogramArea(){
    const base = getInputValueId("parallelogram-base")
    const height = getInputValueId("parallelogram-height")
    const area = base * height;
    console.log("Area Of The Parallelogram is :",area);
    // display function call
    setInnerTextbyId("parallelogram-area",area)
}




function getInputValueId(inputId){
    const inputField = document.getElementById(inputId);
    const inputValueText = inputField.value;
    const inputValue = parseFloat(inputValueText)
    return inputValue
}

// display Rectangle area function
function setInnerTextbyId(elementId,area){
    const element = document.getElementById(elementId)
    element.innerText = area
}