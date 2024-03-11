// Default Arguments
// function add (num1,num2=10){
//     const result = num1+num2;
//     console.log(result);
//     return result;
// }
// const sum = add(5);

// Backtik 
// const challenge = `kire
// tui bole john cena mair dimu khabi kina`
// console.log(challenge)


// const a = 10;
// const b = 20;
// const result = `The Sum of the tow number is ${a+b}`;
// console.log(result);


//Arrow Function
// function add(a,b){
//     const result =a+b;
//     return result;
// }
// const print = add(5,7);
// console.log(print)

// const addWithArroFunc = (a,b) => a+b;
// const print = addWithArroFunc(100,200);
// console.log(print)

// const getAge = (person)=> person.age;
// const student = {name: "Ananta", age:42};
// const age = getAge(student);
// console.log(age)


// const getThird = (number)=> number[2];
// const third=(getThird([13,345,43,5]));
// console.log(third);


// Large Arrow Function

// const doMath = (x,y,x) =>{
//     const sum = x+y+z;
//     const multi = x*y*z;
//     const result = sum+multi;
//     return result ;
// }


// Spread Operator

// const numbers = [32,34,53,23,54,64,754];
// // console.log(...numbers)
// const arryMax = Math.max(...numbers);
// console.log(arryMax)


// Use speread operator to copy

// const friends = [8,5,87,9];
// const bondhu = friends;
// const dosto = [...friends];
// bondhu.push(36);
// const sonkha = [...friends,999] // Add extra element while copy
// console.log(sonkha);





// Object and array distructure

// const nayok = {
//     name: "Ananta",
//     age: 32,
//     money : 121212121,
//     phone: "01734804733"
// }
// // const phone = nayok.phone;
// // console.log(phone)

// // If right side is an object left side will be also an object as well  
// // USe property name as a veriable that contains the property value
// const {money,phone} = nayok;
// // const {money,phone: mobile} = nayok;
// // console.log(mobile);
// console.log(phone);
// console.log(money);

// const numbers = [45,99,36];
// const [first,second,third]= numbers;
// console.log(second);



// function doubleThem(a,b){
//     return [a*2 ,b*2];
// }

// const [prothom,ditiyo]= doubleThem(6,9);
// console.log(ditiyo)


const nayok= {
    name : "NayokNiaz",
    age : 22,
    home:"Barisal",
    movie : "Dhoom-5",
    isHit: true
}

const keys = Object.keys(nayok);
const value = Object.values(nayok);
const pair = Object.entries(nayok)
// console.log(value)



// How to delete from an object
delete nayok.isHit;

console.log(nayok)



// We will use for of inside string or array
// We will use for in  inside Object