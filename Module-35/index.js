// console.log(1)
// console.log(2)
// setTimeout(() => {
//     console.log(3,"ki Dekhos Samarpo")
// }, 3000);

// console.log(4)
// console.log(5)
// console.log(6)




let counter=0;
const clockId = setInterval(() => {
    counter+=1;
    if(counter>6){
        clearInterval(clockId);
    }
    console.log(clockId,counter);
}, 1000);




