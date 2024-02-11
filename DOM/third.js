const main =document.getElementById('main-id-container');
const section = document.createElement("section");
section.innerHTML=`
<h1> My Dynamic Section </h>
<p>Extra Text  added inside the paragraph<p/>
<ul>
    <li> T-shirt </li>
    <li> lungi </li>
    <li> Jainga </li>
    <li> Pant </li>
<ul/>
`
main.appendChild(section)