function hideElementById(elementId){
    const element = document.getElementById(elementId);
    element.classList.add("hidden")
}

function showElementById(elementId){
    const element = document.getElementById(elementId);
    element.classList.remove("hidden")
}

function setBackgroundColorById(elementId){
    const element = document.getElementById(elementId);
    element.classList.add("bg-orange-400");

}

function removeBackgroundColorById(elementId){
    const element = document.getElementById(elementId);
    element.classList.remove("bg-orange-400")
}

function getTextElementValueById(elementId){
    const element = document.getElementById(elementId);
    const elementValueText = element.innerText;
    const value = parseInt(elementValueText);
    return value; 
}

function setTextELementValueById(elementId,value){
    const element = document.getElementById(elementId);
    element.innerText = value;
    // ei line e problem mane bujhi naai
}

function getElementTextById(elementId){
    const element = document.getElementById(elementId);
    const text =element.innerText;
    return text
}




function getArandomAlphabet(){
    // crear an alphabet array
    const alphabetString = "abcdefghijklmnopqrstuvwxyz"
    const alphabets = alphabetString.split("")

    // get a random index between 0-25
    const randomNumber = Math.random()*25;
    const index = Math.round(randomNumber)
    

    const alphabet = alphabets[index];
    return alphabet
}