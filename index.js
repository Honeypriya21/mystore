const products = [
    { id: 1, name: "Product1",desc:"Description of product1" ,price: 25 },
    { id: 2, name: "Product2",desc:"Description of product2" ,price: 45 },
    { id: 3, name: "Product3",desc:"Description of product3" , price: 30 },
  ];
  const cart = {};//dict-key:value
  let users = [];
let user = {}
// let useremail = "";
// let username = "";
// let currBalance = 0;
document.write("<div id=root></div>");
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
function showLogin() {
  let str = `
  <div>
      <h2>Login Form</h2>
      <div id='msg'></div>
      <p><input id="email" type="text"></p>
      <p><input id="password" type="password"></p>
      <button onclick='chkUser()'>Log In</button>
      <p><button onclick='showForm()'>Create Account</button></p>
  </div>
  `;
  root.innerHTML = str;
}
function showForm() {
  let str = `
  <h2>Registration Form</h2>
  <p><input type="text" id="name" placeholder="Name"></p>
  <p><input type="text" id="email" placeholder="Email"></p>
  <p><input type="password" id="password" placeholder="Password"></p>
  <p><input type="date" id="dob"></p>
  <p><button onclick='addUser()'>Submit</button></p>
  <p>Already a member?<button onclick='showLogin()'>Login Here</button></p>
  `;
  root.innerHTML = str;
}
function chkUser() {
  let email = document.getElementById("email").value;
  let password = document.getElementById("password").value;
  for (let i = 0; i < users.length; i++) {
    if (users[i].email == email && users[i].password == password) {
      // useremail = email;
      // username = users[i].name;
      // currBalance = users[i].balance;
      user = users[i]
      showProducts();
      break;
    } else {
      msg.innerHTML = "Access Denied";
    }
  }
}
function addUser() {
  let name = document.getElementById("name").value;
  let email = document.getElementById("email").value;
  let password = document.getElementById("password").value;
  let dob = document.getElementById("dob").value;
  let user = {
    name: name,
    email: email,
    password: password,
    dob: dob,
    balance: 0,
  };
  users.push(user);
  showLogin();
}

  const showProducts = () => {
    let str = "<div class='row'>";
    products.map((value) => {
      str += `
      <div class="box">
      <h3>${value.name}</h3>
      <p>${value.desc}</p>
      <h4>$${value.price}</h4>
      <button onclick=addToCart(${value.id})>Add to Cart</button></div>
      `;
    });
    divProducts.innerHTML = str + "</div>";
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
divCartBlock.style.left= "70%";
};
const hideCart =() =>{
    //divCartBlock.style.display = "none";
    divCartBlock.style.left = "100%";
}