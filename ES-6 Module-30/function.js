// Arrow Function
function add(a,b){
    const result = a+b;
    return result;
}
const print = add(5,7);
console.log(print)



const addWithArroFunc = (a,b) => a+b;
const print1 = addWithArroFunc(100,200);
console.log(print)



const getAge = (person)=> person.age;

const age = getAge(student);
console.log(age)


const getThird = (number)=> number[2];
const third=(getThird([13,345,43,5]));
console.log(third);
