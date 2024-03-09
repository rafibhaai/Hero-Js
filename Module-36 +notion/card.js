const addProduct = () => {
  const productField = document.getElementById("product-name");
  const quantityField = document.getElementById("product-quantity");
  const product = productField.value;
    const quantity = quantityField.value;
      productField.value = "";
      quantityField.value = "";
  // console.log(product, quantity);
  displayProduct(product, quantity);
  saveProductToLocalStorage(product,quantity);
};

const displayProduct = (product, quantity) => {
  
  
  
  const ul = document.getElementById("product-container");
      const li = document.createElement("li");
  li.innerText = `${product}:${quantity}`;
    ul.appendChild(li);
};


const getStoredShoppingCard = ()=> {
    let cart = {};
  const storedCart =localStorage.getItem("cart");
  if(storedCart){
    cart = JSON.parse(storedCart);
  }
  return cart;
}


const saveProductToLocalStorage = (product,quantity) =>{
  const cart = getStoredShoppingCard();
  cart[product] = quantity;
  console.log(cart);
  const cartStringFied = JSON.stringify(cart);
  localStorage.setItem("cart",cartStringFied)
}

const displayProductsFromLocalStorage = ()=> {
    const saveCart = getStoredShoppingCard();
    console.log(saveCart);
    for (const i in saveCart){
        const quantity = saveCart[i];
        console.log(i,quantity);
        displayProduct(i,quantity);
    }
}
displayProductsFromLocalStorage()