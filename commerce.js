document.addEventListener("DOMContentLoaded", () => {
  let globalCount = 0;

  const productIncrement = document.getElementById("productIncrementBtn");
  const productDecrement = document.getElementById("productDecrementBtn");

  const addProcductToCart = document.getElementById("addProcductToCart");
  const cartQuantity = document.getElementById("cartCount");
  cartQuantity.style.display = "none";

  productIncrement.addEventListener("click", increaseCount);

  function increaseCount(event) {
    globalCount++;
    document.getElementById("productQuantity").innerHTML = globalCount;
    console.log(globalCount);
  }

  productDecrement.addEventListener("click", decraseCount);

  function decraseCount(event) {
    if (globalCount <= 0) {
      globalCount = 0;
      document.getElementById("productQuantity").innerHTML = globalCount;
    } else {
      globalCount--;
      document.getElementById("productQuantity").innerHTML = globalCount;
    }

    console.log(globalCount);
  }

  addProcductToCart.addEventListener("click", addingProductToCart);

  function addingProductToCart() {
    if (globalCount > 0) {
      cartQuantity.style.display = "inline";
      cartQuantity.innerHTML = globalCount;
    } else {
      cartQuantity.innerHTML = ""  
      cartQuantity.style.display = "none";
    }
  }

  const viewCartItemsBtn = document.getElementById("viewCartItemsBtn");

  viewCartItemsBtn.addEventListener("click", function () {
    const productCartView = document.getElementById("productCartView");
    const cartProductDetails = document.getElementById("cartProductDetails");
    const productXquantity = document.getElementById("productXquantity");

  productCartView.classList.toggle("view-cart");

    if (globalCount > 0) {
        cartProductDetails.style.display = "inline-block";
        productXquantity.innerHTML = `$125.00 x ${globalCount}`;
        document.getElementById("cartProductTotalPrice").innerHTML = `$${125 * globalCount}.00`
    
    } else {
      cartProductDetails.style.display = "none";
    }
  });

  const cartItemsRemovebtn = document.getElementById("cartItemsRemovebtn");

  cartItemsRemovebtn.addEventListener("click", function(){
    globalCount = 0;

    document.getElementById("productQuantity").innerHTML = globalCount;
    cartQuantity.innerHTML = globalCount;
    document.getElementById("cartProductDetails").style.display = "none"    
  })
});


