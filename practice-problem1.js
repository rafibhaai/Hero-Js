// Task--1
// function converter(num){
//     const formula = (9/5)*num + 32;
//     return formula
// }
// const value = converter(25)
// console.log(value,"Degree Fahrenheit")

// Task--2
// You are given an array of numbers. Count how many times the a number is repeated in the array.
// ++++++++++++++++++++++++++
// function repeatedValue(num,val){
//     let count =0;
//     for (const i of num){
//         if (i===val){
//             count+=1
//         }
//     }
//     return count
// }
// const num = [5,6,11,12,98, 5,5,5];
// const temp = repeatedValue(num,13)
// console.log(temp)

// Task--3
// Write a function to count the number of vowels in a string.
// function countVowel(value){
//     const val = ["a","e","i","o","u","A","E","I","O","U"];
//     let counter = 0;
//     for (const i of value){
//         for (const j of val){
//             if (i==j){
//                 counter+=1
//             }
//         }
//     }
//     return counter
// }
// const box = countVowel("abcdefid")
// console.log(box)

// Task--4
// Write a function to find the longest word in a given string.
// sample-input: I am learning Programming to become a programmer
// sample-output: Programming


function findlongestword(val){
    const box = val.split(" ")
    console.log(typeof box)
}
const temp= findlongestword("I am learning Programming to become a programmer")
console.log(temp)