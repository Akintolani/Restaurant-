let openShopping = document.querySelector(".cart-icon");
let closeShopping = document.querySelector(".check");
let list = document.querySelector(".list");
let listCard = document.querySelector(".listCard")
let body = document.querySelector('body');
let total = document.querySelector(".amount");
let quantity = document.querySelector(".quantity");

openShopping.addEventListener("click", ()=>{
    body.classList.add("active");
})
closeShopping.addEventListener("click", ()=>{
    body.classList.remove("active");
})

var cart = [];

//function displaycart(a){
  //  let j = 0;
   // if (cart.length==0){
    //    document.getElementById('cartItem').innerHTML = "Your cart is empty"
   // }
//    else{
//        document.getElementById('cartItem').innerHTML = cart.map((items)=>
//        {
            //var {image, title, price} = items;
           // return(
              //  <div class = 'cart-item'>
            //        <div class= 'row-img'>
          //              
        //            </div>
      //          </div>
    //        )
  //      })
//    }
//}