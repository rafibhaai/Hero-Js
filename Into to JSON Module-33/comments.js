// function commentsInfo(){
//     fetch("https://jsonplaceholder.typicode.com/comments")
//     .then(res => res.json())
//     .then(data => console.log(data))
// }

const loadComments = async() =>{
    try{
        const res = await fetch ("https://jsonplaceholder.typicode.com/comments");
        const data = await res.json();
        console.log(data);
    }
    catch(error){
        console.error("Data Error 404");
    }
}
