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

const numbers = [32,34,53,23,54,64,754];
console.log(...numbers)
const arryMax = Math.max(numbers);
console.log(arryMax)