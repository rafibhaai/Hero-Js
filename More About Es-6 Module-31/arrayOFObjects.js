const products = [
    {id : 1, name: "Lenovo",price:65000},
    {id : 2, name: "HP",price:40000},
    {id : 3, name: "DELL",price:45000},
    {id : 4, name: "MAC",price:165000}
]

// const print = products.map(i=> i.price);

// const print = products.forEach(i=> console.log(i.id));

// const print = products.filter(i=> i.price>50000);

// const print = products.find(i=> i.price<50000);

const print = products.reduce((previous , current)=> previous+ current.price,0);

console.log(print)