function info(){
    fetch("https://jsonplaceholder.typicode.com/posts")
    .then(res=> res.json())
    .then(data => displayUsers(data))
}

// 1)Get the container element where you want add the new element
// 2) Creat child element
// 3) set innerText or innerHTML
// 4) Append child

function displayUsers(post){
    const postContainer = document.getElementById("post-container");
   for (i of post){
    const div = document.createElement("div");
    div.classList.add("post")
    div.innerHTML = `
    <h4>User ${i.userId}</h4>
    <h5>Post:-${i.title} Title</h4>
    <p>Post Descriptions :- ${i.body}</p>
    `;
    postContainer.appendChild(div);
   }
}