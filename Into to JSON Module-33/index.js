function loadUser1(){
    fetch('https://jsonplaceholder.typicode.com/todos/1')
    .then(res => res.json())
    .then(data => show(data))
}
function show(data){
    const divx =document.getElementById("second-container");
    const jax = document.createElement("div");
    jax.innerHTML = `
    <p> userId: ${data.userId} <p/>
    <p> Id: ${data.userId} <p/>
    <p> userId: ${data.id} <p/>
    <p> Title: ${data.title} <p/>
    <p>Completed: ${data.completed} <p/>
    `;
    divx.appendChild(jax);
    
}




function loadUser2(){
    fetch("https://jsonplaceholder.typicode.com/users")
    .then(res=> res.json())
    .then(data => displayUsers(data))
}

function displayUsers(data){
    const uL = document.getElementById("users-list");
    for (i of data){
        console.log(i)
        const Li = document.createElement("li");
        Li.innerText = i.email;
        uL.appendChild(Li);

    }
}