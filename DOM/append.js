//1) Where to add?
const placeList = document.getElementById("places-list");
//2) What to add?
const li = document.createElement('li');
li.innerText = "Samabon";
// 3) Add the Child
placeList.append(li);


// where to add
const mainContent = document.getElementById('main-content')
// 2) What to be  addeded
const section = document.createElement('section')
const h1 = document.createElement('h1');
h1.innerText = 'My food List';
section.append(h1)
const ul = document.createElement('ul');

const li1 = document.createElement('li');
li1.innerText = 'Biriyani'
ul.appendChild(li1);

const li2 = document.createElement('li');
li2.innerText = 'kacchi'
ul.appendChild(li2);

const li3 = document.createElement('li');
li3.innerText = 'Tehari'
ul.appendChild(li3);

const li4 = document.createElement('li');
li4.innerText = 'Polauuuu'
ul.appendChild(li4);

section.appendChild(ul)
mainContent.appendChild(section)



// SET INNER HTML DIRECTLYYYYY

const sectionDress = document.createElement('section');
sectionDress.innerHTML = `
<h1> My Dress Collection </h>
<ul> 
    <li> T-shirt </li>
    <li> lungi </li>
    <li> Jainga </li>
    <li> Pant </li>

<ul/>
`
mainContent.appendChild(sectionDress)