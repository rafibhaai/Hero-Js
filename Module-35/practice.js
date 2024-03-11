// Task 01
//  setTimeout(() => {
//     console.log("Heloo Jaaaaaaaaaaaaaan")
//  }, 4000);



// Task02
//  setTimeout(() => {
//     console.log("Hello Alice!")
//  }, 2000);



//  Task-3
function tellJoke(){
   console.log("This is a Joke")
}

const intervalId = setInterval(() => {
   tellJoke()
   setTimeout(() => {
      clearInterval(intervalId);
   }, 10000);
},1000); 












