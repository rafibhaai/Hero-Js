// premitive typs are passed by value
// Mane vetore change korle baire change hobena

let num1 = 5;
let num2 = 7;
function multi(a,b){
    a = 27;
    const result = a*b;
    return result
}

// const print = multi(num1,num2);
// console.log(print)



// Nonepremitive typs are passed by refference
// Mane vetore change korle baire change hobe

let juti1 = {name: "Jalil",partner: "Barsha"};
let juti2 = {name: "Riaz", partner: "Popi"};

function makeMovie(juti1,juti2){
    juti1.name = "Ananta";
}
// console.log(juti1)
makeMovie(juti1,juti2);
console.log(juti1)


// Object and array nonpremetive