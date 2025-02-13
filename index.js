const products = [
    { id: 1, name: "P1", price: 25 },
    { id: 2, name: "P2", price: 45 },
    { id: 3, name: "P3", price: 30 },
  ];
  const cart = {};//dict-key:value
  const addToCart = (id) => {
    if(!cart[id]) cart[id] = 1;
   // card[id] = 1;
    console.log(cart);
    showCart();
  };

  const showCart = () => {
    let str = "";
    products.map((value) => {
      if (cart[value.id]) {
        str += `
        <li>${value.name}-$${value.price}-<button onclick="minus(${value.id})">-</button>${cart[value.id]}<button onclick="plus(${value.id})">+</button>-${value.price*cart[value.id]}</li>
        `;
        
      }
    });
    divCart.innerHTML = str;
    let count=Object.keys(cart).length
    items.innerHTML=count
    showTotal()
  };
const plus =(id)=>{
    cart[id]++;
    showCart();
    
}
const minus =(id)=>{
    if (cart[id] > 1) {
    cart[id]--; // Decrease quantity
    } else {
    delete cart[id]; // Remove item if quantity reaches 0
    }
    showCart();
    
}
  const showProducts = () => {
    let str = "";
    products.map((value) => {
      str += `
      <li>${value.id}-${value.name}-${value.price}-<button onclick=addToCart(${value.id})>Add to Cart</button></li>
      `;
    });
    divProducts.innerHTML = str;
  };
  
  const showTotal=()=>{
    let total=products.reduce((sum,value)=>{
    //     if(cart[value.id]){
    //         return sum + value.price * cart[value.id];
    //     }
    //     return sum;
    // },0)
    return sum + value.price * (cart[value.id]?cart[value.id]:0);
    },0)
divTotal.innerHTML=`<h3>Total: $${total}</h3>`;
  }

  const displayCart = () => {
    //divCartBlock.style.display="block"
divCartBlock.style.left="70%"
};
const hideCart =() =>{
    //divCartBlock.style.display = "none";
    divCartBlock.style.left = "100%";
}