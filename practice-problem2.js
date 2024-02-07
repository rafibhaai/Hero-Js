// Task--1
// const heights2 = [167, 190, 120, 165, 137];
// const temp = Math.min(...heights2)
// console.log(temp)

// Task--2

// const heights2 = ['rahim', 'robin', 'rafi', 'ron', 'rashed'];
// let temp = heights2[0].length
// let long = "";
//     for (const i of heights2){
//         if (i.length>temp){
//             long = i;
//             temp=i.length
//         }
//     }
// console.log(long)

// Task--3

// function calculateElectronicsBudget(koydaLaptop,koydaTablet,koydaMobile){
//     const laptop = 35000;
//     const tablet = 15000;
//     const mobile = 20000;
//     const totalLagbe = (koydaLaptop*laptop)+(koydaTablet*tablet)+(koydaMobile*mobile);
//     return totalLagbe
// }
// const temp = calculateElectronicsBudget(4,5,7)
// console.log(temp)

// Task--4
// You are given an array of phone objects, each containing information about the model, brand, and price. Your task is to write a JavaScript function named findAveragePhonePrice that takes this array as input and returns the average price of phone.

// node practice-problem2.js
// let phones = [
//     { model: "PhoneA", brand: "Iphone", price: 95000 },
//     { model: "PhoneB", brand: "Samsung", price: 40000 },
//     { model: "PhoneC", brand: "Oppo", price: 26000 },
//     { model: "PhoneD", brand: "Nokia", price: 35000 },
//     { model: "PhoneE", brand: "Iphone2", price: 105000 },
//     { model: "PhoneF", brand: "HTC", price: 48000 },
// ];

// function findAveragePhonePrice(phones){
//     let sum= 0;
//     let counter = 0;
//     for (const i of phones){
//         sum+= i.price
//         counter+=1
//     }
//     return avg=sum/counter
// }
// const box = findAveragePhonePrice(phones)
// console.log(box)

// Task--5 (Hard)
// For each employee their current salary is calculated by multiplying yearly increment with experience then adding the result to the starting salary. Now calculate the total salary has to be provided by the company in a month.
 const employees = [
            { name: "shahin", experience: 5, starting: 20000, increment: 5000 },
            { name: "shihab", experience: 3, starting: 15000, increment: 7000 },
            { name: "shikot", experience: 9, starting: 30000, increment: 1000 },
            { name: "shohel", experience: 0, starting: 29000, increment: 4000 },
];
 function salary(employees){
    let total = 0;
    for (const i of employees){
        total+= (i.increment*i.experience)+i.starting
    }
    return `Total Salary {total}`  
 }
const box = salary(employees)
console.log(box)
