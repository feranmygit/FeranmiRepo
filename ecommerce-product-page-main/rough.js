document.addEventListener("DOMContentLoaded", function() {
    var oneTimecode = document.querySelectorAll(".oneTimecode");
    var element = document.querySelector(".sectionOne #element");
    var picture = document.querySelector(".sectionOne #SmallImg .picture");
    var sectionDiv_two = document.querySelector(".sectionDiv_two .newHead");
    var newSneak = document.querySelector(".sectionDiv_two .newSneak");
    var para = document.querySelector(".sectionDiv_two .para");
    /*var head_2 = document.querySelector(".sectionDiv_two .para .divIn #div .head_2");
    var head_3 = document.querySelector(".sectionDiv_two .para .divIn #div .head_3");
    var head_next = document.querySelector(".sectionDiv_two .para .divIn #srcN .head_next");
    var catContainer = document.querySelector(".sectionDiv_two .para .catContainer");
    var oneTime = document.querySelector(".sectionDiv_two .para .catContainer .oneTime");
    var srcN1 = document.querySelector(".sectionDiv_two .para .catContainer .oneTime .srcN1");
    var srcN2 = document.querySelector(".sectionDiv_two .para .catContainer .oneTime .srcN2");
    var srcN3 = document.querySelector(".sectionDiv_two .para .catContainer .oneTime .srcN3");*/
    var productContainer = document.getElementById("productContainer");
    var cartLogo = document.createElement("div");
    cartLogo.id = "cartLogo";
    var numProducts = parseInt(localStorage.getItem("cartCount"));
    updateCartLogo(numProducts);

    oneTimecode.forEach(function(button) {
        button.addEventListener("click", function() {
            var productInfo = document.createElement("div");
            productInfo.classList.add("cart-item");

            var elementClone = element.cloneNode(true);
            var pictureClone = picture.cloneNode(true);
            var sectionDiv_twoClone = sectionDiv_two.cloneNode(true);
            var newSneakClone = newSneak.cloneNode(true);
            var paraClone = para.cloneNode(true);
           /* var head_2Clone = head_2.cloneNode(true);
            var head_3Clone = head_3.cloneNode(true);
            var head_nextClone = head_next.cloneNode(true);
            var catContainerClone = catContainer.cloneNode(true);
            var oneTimeClone = oneTime.cloneNode(true);
            var srcN1Clone = srcN1.cloneNode(true);
            var srcN2Clone = srcN2.cloneNode(true);
            var srcN3Clone = srcN3.cloneNode(true);*/

            productInfo.appendChild(elementClone);
            productInfo.appendChild(pictureClone);
            productInfo.appendChild(sectionDiv_twoClone);
            productInfo.appendChild(newSneakClone);
            productInfo.appendChild(paraClone);
            /*productInfo.appendChild(head_2Clone);
            productInfo.appendChild(head_3Clone);
            productInfo.appendChild(head_nextClone);
            productInfo.appendChild(catContainerClone);
            productInfo.appendChild(oneTimeClone);
            productInfo.appendChild(srcN1Clone);
            productInfo.appendChild(srcN2Clone);
            productInfo.appendChild(srcN3Clone);*/

            productContainer.appendChild(productInfo);

            numProducts++;
            updateCartLogo();

        });
    });

    function updateCartLogo() {
        cartLogo.textContent = numProducts;
        if (numProducts > 0) {
            productContainer.appendChild(cartLogo);
        } else  {
            productContainer.removeChild(cartLogo);
        }
    }
      
    cartLogo.addEventListener("click", function() {
        if (numProducts > 0) {
            var cartItems = document.querySelectorAll(".cart-item");
            cartItems.forEach(function(item) {
                item.classList.toggle("visible");
            });
        };
    })
})











.divIn{
    margin: 0rem 1.2rem 0rem 1.2rem;
    display: flex;
    gap: 1rem;
 }
.divIn .head_2{
    font-weight: 600;
    font-family: hsl(0, 0%, 0%);
    font-size: 25px;
}
.divIn .head_3{
    background-color: hsl(25, 100%, 94%);
    padding: 3px 8px 0px 8px;
    border-radius: 10%;
    color: hsl(26, 100%, 55%);
    font-weight: 600;
    text-align: center;
    font-family: hsl(0, 0%, 0%)
}
.divIn .head_next{
    padding: 3px;
    border-radius: 20%;
    color: hsl(220, 14%, 75%);
    font-weight: 600;
    text-decoration: line-through;
    margin-inline-end: 1rem;
}
#srcN{
    margin-inline-start: auto;
    margin-inline-end: 1rem;
}

.divIn {
    display: flex;
    flex-wrap: wrap;
    gap: 1rem;
  }
  #srcN {
    margin-inline-start: 0rem;
    text-decoration: line-through;
    color: hsl(220, 14%, 75%);
  }

  .divIn {
    margin: 0rem 1.2rem 0rem 1.2rem;
    display: flex;
    flex-wrap: nowrap;
    gap: 1rem;
  }
  #srcN {
    margin-inline-start: 0rem;
    margin-inline-end: 0rem;
    margin: 0rem 0px;
    
  }
  .divIn .head_next {
    padding: 3px;
    margin-inline-end:  0rem;
    border-radius: 20%;
    color: hsl(220, 14%, 75%);
    font-weight: 600;
    text-decoration: line-through;
  }
  .divIn > div:nth-child(2){
    margin-right: 0rem;
  }