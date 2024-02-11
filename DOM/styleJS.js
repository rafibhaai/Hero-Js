const sections = document.querySelectorAll('section')
// console.log(sections)
for (const i of sections){
    i.style.border = "2px solid skyblue" ;
    i.style.marginBottom = "5px";
    i.style.borderRadius = "15px";
    i.style.paddingLeft = '7px';
}

const placesContainer = document.getElementById('places-container')
placesContainer.style.backgroundColor = 'yellow';
// placesContainer.classList.add("text-center");
placesContainer.classList.remove('large-text')