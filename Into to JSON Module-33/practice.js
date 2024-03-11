// String to Objects and Objects to String


const shop = {
    owner: "Alia",
    address : "Bd",
    isOpen : true,
    road : 25,

};

const shopify = JSON.stringify(shop);
// console.log(typeof shopify)


const box = JSON.parse(shopify);
console.log(typeof box)