
// lebu = 50;
// apple = 60;
// lebu=80;
// lebu+=20
// console.log(apple+lebu)

// console.log(58/2)

// if (3<6){
//     console.log("eda ekta sotti kotha")
// }
// const height = 5;
// const bcS = true;
// if (height>4 && bcS==true){
//     console.log("Biye Boshan Sir")

// }
// else{
//     console.log("Biye Cancel sir")
// }

// const money =0;
// if (money>300){
//     console.log("mama you are rich")
// }
// else{
//     if(money>100){
//         console.log("tui gorib o na borolok o na")
//     }
//     else{
//         if(money>0){

//             console.log("kichu toh ache at least")
//         }
//         else{
//             console.log("Shala Fokira")
//         }
//     }
// }

// Ternary
// const age=12;
// if (age>18){
//     console.log("Biye kora jabe")
// }
// else{
//     console.log("Boyos Hoy nai tor")
// }

// age>=18 ? console.log("Biye kora jabe") : console.log("boyoshoynai tor")
// console.log("Kire Mama Ki obostha")
// console.log("are shei toh")
// ----------------------------

// Tasks from Apna Collage
// for (let count=1 ; count<=10; count+=1)
// console.log("Joy Bangla")
// console.log("dfnsdc")
// for(let i=1; i<=5; i+=1){
//     console.log("TSama")
// }
// For Loops
// let sum=0;
// for (i=1; i<=5; i+=1){
//     sum+=i;
// }
// console.log("sum =",sum )

// While Loops
// let i=1;
// while(i<=5){
//     console.log("i = ",i)
//     i+=1
// }

// Print 0 to 100 All the Numbers
// for (i=1;i<=100;i+=1){
//     if (i%2==0)
//     console.log("i =",i)
// }

// count=1
// while(count<=100){
//     if(count%2==0)
//     console.log("i=",count)
//     count+=1

// }

// Hero String
// Problems----------------------------------------------------
// const Water = "WaTer";
// const Pani = "water ";
// if (Water.toLowerCase() == Pani.toLowerCase()){
//     console.log("Pani Khabo")
// }
// else{
//     console.log("Pani Kahbo Na")
// }


// const water = "water";
// const pani = "water ";
// if (water.trim()==pani.trim()){
//     console.log("Pani Khabo")
// }
// else{
//     console.log("Pani Kahbo Na")
// }
// Dictionary/Object--------------------------------------------

// let box={
//     Nam :" sodor uddin",
//     age :25,
//     salary : 25000,
//     married : true
// }
// // console.log(box.Nam)
// // console.log(box["Nam"])
// box["age"]=27
// // console.log(box["age"])
// const keys = Object.keys(box)
// const values =Object.values(box)
// // console.log(keys)
// console.log(values)

// let vowel = ["a","e","i","o","u"];
// console.log(vowel.length)

// let string ="How are you doing today";
// let box = string.split(" ");
// console.log(box)

// Arry--Module ---2
// let arr  = [1,2,3,4,5,6,7]
// let arrRev = arr.reverse()
// console.log(arrRev)
// ////////////////////
// let revA =[];
// for (let i=0 ; i<arr.length ; i+=1){
//     const box = arr[i]
//     revA.unshift(box);
// }
// console.log(revA)

// 
// const rev_numbers = []
// for (i=arr.length-1; i>=0; i-=1){
//     const box = arr[i]
//     console.log(box)
//     rev_numbers.push(box)
// }
// console.log(rev_numbers)
// console.log("Print Joy  Bangla")


// Return Statement

// function tenTimes(number){
//     const result = number*10;
//     return result;
// }
// const output = tenTimes(5);
// console.log("Output Is :",output) 

// function isEven(number){
//     if (number%2==0){
//         return true;
//     }
//     else {
//         return false;
//     }
// }
// const output = isEven(5)
// console.log(output)

// console.log(isEven(5))


// 
// function evenSizeString(str){
//     const size = str.length;
//     if (size%2==0){
//         console.log("Even Size :", size)
//         return true
//     }
//     else {
//         console.log("Odd Size :", size)
//         return false
//     }
// }
// // evenSizeString("Dhaka")
// evenSizeString("Faka")
// 
// Arry Operation

// function sumOfNumbers(numbers){
//     let sum = 0;
//     for (const i of numbers){
//         console.log(i);
//         sum+=i;
//     }
//     return sum;
    
// }
// const num = [1,2,3,4,5]
// const sum = sumOfNumbers(num)
// console.log("Sum Of Numbers :" ,sum)
// // --------------------------------------



// function evenNumbersOnly(numbers){
//     const arr =[];
//     for (const i of numbers){
//         if (i%2 == 0){
//             arr.push(i);
//         }
//     }
//     return arr
// }
// const numbers=[2,5,7,10,15];
// const even = evenNumbersOnly(numbers)
// console.log(even)



// const num = [2,5,7,10,15];
// for (const i in num){
//     console.log(i)
// }




// 
// const num = [2,5,7,10,15];
// for (const i of num){
//     console.log(i)
// }
// //

// js Coding Problem part- 2

// const products=[ 
//     {name: "shirt", price:400, quentity:3},
//     {name: "pant", price:200, quentity:4},
//     {name: "jainga", price:800, quentity:6},
//     {name: "shampoo", price:100, quentity:2}
// ]

// function totalhoise(para){
//     let total = 0;
//     for (const i of products) {
//         const sobgularPrice = i.price* i.quentity;
//         total+= sobgularPrice;
//     }
//     return total
// }
// const shoppingkorlam = totalhoise(products)
// console.log(shoppingkorlam)





// const array1 = ['a', 'b', 'c']; 

// for (const i in array1) {
//     console.log(i);
// }
// [here i represent the index of the list]

// //////////////////////////////////////////////

// const array2 = ['a', 'b', 'c']; 

// for (const i of array2) {
//     console.log(i);
// }
// [here i represent the value of the list]


// **********************************************
const employees = [
    { name: "shahin", experience: 5, starting: 20000, increment: 5000 },
    { name: "shihab", experience: 3, starting: 15000, increment: 7000 },
    { name: "shikot", experience: 9, starting: 30000, increment: 1000 },
    { name: "shohel", experience: 0, starting: 29000, increment: 4000 },
];

// Function to calculate current salary for an employee
function calculateCurrentSalary(employee) {
    return employee.starting + (employee.increment * employee.experience);
}

// Calculate total salary provided by the company in a month
let totalSalary = 0;
for (const employee of employees) {
    totalSalary += calculateCurrentSalary(employee);
}

console.log("Total salary provided by the company in a month: $" + totalSalary);
