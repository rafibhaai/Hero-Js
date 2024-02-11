console.log("First File")

const allLi = document.getElementsByTagName("li");
console.log(allLi)

const allTitle = document.getElementsByClassName('section-title');
// Array Like Object but Not Array
// to select multiple elements
console.log(allTitle) 

const secondSection = document.getElementById('second-section');
// to select a specific item 
console.log(secondSection)
secondSection.style.color= 'violet';


// 1) Doucument.querySelectorAll--- It will give me the nodeList
// 2) Document.querySelector--- It will give me the first element/Matching