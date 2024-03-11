// If i write fetch in a function call
async function khelahobe(){
    const res = await fetch("");
    const data = await res.json();
    console.log(data);
}

// If i write fetch in a variable
const khelaHobe = async()=>{
    const res = await fetch("");
    const data = await res.json();
    console.log(data);
}


khelaHobe();
khelahobe();