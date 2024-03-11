//  Way 1 is  Directly Written On HTML
// <button onclick="document.body.style.backgroundColor = 'yellow'">Make Yellow</button>





// way-2  Add onclick Function
// Etaai use korbo
// Important-----------------
function makered(){
    document.body.style.backgroundColor = 'red';
}
// <button onclick="makered()">Make Red</button>





// way-3 first One
const makeBlue = document.getElementById("make-blue");
makeBlue.onclick = makeblue;
function makeblue(){
    document.body.style.backgroundColor = 'blue';
}
// <button id="make-blue">Make Blue</button>





// way--3  Second One
const makePurple = document.getElementById("make-purple");
makePurple.onclick = function makepurple(){
    document.body.style.backgroundColor = 'purple';
}
// <button id ="make-purple">Make Purple</button>


// way--4 Most Used Case
const makePink = document.getElementById("make-pink");
makePink.addEventListener('click',makepink)
function makepink(){
    document.body.style.backgroundColor = 'pink';
}


// way--4 Most Used Case Another Case
const makeGreen = document.getElementById("make-green")
makeGreen.addEventListener('click',function makegreen(){
    document.body.style.backgroundColor = 'green';
})

// way--4 and this is the Final most used case
// Important-------------
document.getElementById("make-black").addEventListener('click', function(){
    document.body.style.backgroundColor = 'black';
})