let gloablCount = 0;


const productIncrement = document.getElementById("productIncrementBtn");
const productDecrement = document.getElementById("productDecrementBtn");

const addProcductToCart = document.getElementById("addProcductToCart");
const cartQuantity = document.getElementById("cartCount");
cartQuantity.style.display = "none"

productIncrement.addEventListener("click", increaseCount);

function increaseCount(event){
    gloablCount++
    document.getElementById("productQuantity").innerHTML = gloablCount
    console.log(gloablCount)
}

productDecrement.addEventListener("click", decraseCount);

function decraseCount(event){

    if(gloablCount <= 0){
        gloablCount = 0
        document.getElementById("productQuantity").innerHTML = gloablCount
    }else{
        gloablCount--
        document.getElementById("productQuantity").innerHTML = gloablCount
    }
    
    console.log(gloablCount)
}


addProcductToCart.addEventListener("click", addingProductToCart);

function addingProductToCart(){
    if(gloablCount > 0){
        cartQuantity.style.display = "inline"
        cartQuantity.innerHTML = gloablCount
        
    }else{
        cartQuantity.style.display = "none"
    }
}