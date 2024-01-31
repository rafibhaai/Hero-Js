// Task--1
// let string = "bananananana";
// let count=0;
// for (let i=0; i <string.length; i+=1){
//     if (string[i] === "a"){
//         count+=1
//     }
// }

// console.log("Number of 'a's in the string:",count)

// Task--2
// let string = "bananananAnA";
// let count=0;
// for (let i=0; i <string.length; i+=1){
//     if (string[i] == "a" || string[i]== "A"){
//         count+=1
//     }
// }

// console.log("Number of 'a's in the string:",count)


// Task--3
let string = "aquickbrownfoxandjumpoverthelazydog";
let vowel = ["a","e","i","o","u"];
let shobAche = false;
for (let i = 0 ; i< vowel.length ; i+=1){
    for (let j=0 ; j<string.length ; j+=1){
        if(vowel[i] == string[j]){
            shobAche=true;
            break 
        }
        else{
            shobAche=false;

        }
    }
}
if (shobAche){
    console.log("Yes Shob thikache")
}
else{
    console.log("Naai")
}

// Task--4

















// Task--5