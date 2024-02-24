function Loop(){
    let counter = 0;
    return function(){
        counter++;
        return counter;
    }
}

const print = Loop();
// console.log(print)

const value = Loop();
// console.log(value)

const box = Loop();

console.log(box);
console.log(value);
console.log(print);