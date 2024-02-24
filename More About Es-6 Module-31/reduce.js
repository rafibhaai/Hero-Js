const numbers= [4,5,1,7,8,9,3];
const print = numbers.reduce((previous,current)=> previous+current,0);
console.log(print)