// const [first,second,third,...remaining] = ["Sadia","Kadia","Nadia","Padia"];
// // data access

// const data = [{name: "Nayok Niaz", home:"Barisal"}]
// console.log(data[0].home)

// const user = {
//     id : 501,
//     name : "Shoriful Raj",
//     address : {
//         street : {
//             first : "Uttar",
//             second : "Poribag er goli", 
//             third: "No Dorai"
//         },
//         city : "Dhaka"
//     }
// }
// console.log(user.address.street.second)


// MAP => to do one line loop magic 
// Map kora mane arry te sob elements er upore seh loop chalabe and prottek ta element er jonno je fuction ta ache shetake call korbe and return kora value tare seh ekta arry te rakhbe
// const numbers =[4,5,2,8,10];
//  function doubleIt(num){
//     return num*2;
//  }

// const result = numbers.map(doubleIt);
// console.log(result)



const value = [12,54,2,5,7,14];
// // More shortcut
// const output = value.map(num=> num*2);
// console.log(output);

const addFive = value.map(num=> num+5);
console.log(addFive)