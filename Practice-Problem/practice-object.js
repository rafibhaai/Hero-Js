// Task--1

// const colors = {
//     red: "#ff0000",
//     green: "#00ff00",
//     blue: "#0000ff",
//     "golden rod": '#daa520'
// };
// console.log(colors["golden rod"])

// Task--2
// const car = {
//     make: "Toyota",
//     model: "Corolla",
//     year: 2020
// };
// car["passenger capacity"] = 5;
// const keys= Object.keys(car)
// const value= Object.values(car)
// console.log(car)

// Task--3
// const student = {
//     name: "Hamim Sakep",
//     id: 5421,
//     physics: {
//         subject: "HSC Physics",
//         author: "Shahjahan Tapan",
//         marks: 30
//     }
// };
// // console.log(student.physics.marks)
// console.log(student.physics["marks"])

// Task-4

// let student = {
//     name: 'Ariana Grande',
//     age: 21,
//     city: 'Gaibandha',
//     isStudent: true
// };
// let count = 0;
// for (i in student){
//     count+=1
// }
// console.log(count)

// Task--5

// 
// key: name | type:  string
// key: age | type:  number
// key: city | type:  string
// key: isStudent | type:  boolean
// 
let student={
    name: 'John Doe',
    age: 25,
    city: 'Example City',
    isStudent: true
}
const keys= Object.keys(student)
const value= Object.values(student)

for (let key in student){
    // console.log(`key: ${ student[key] } | type: ${ typeof student[key]}`)  
    console.log('key: ' + student[key] + ' | type: ' + typeof student[key]);
}
