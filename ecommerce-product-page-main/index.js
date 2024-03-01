
function changeBackground(Big) {
    const backgroundImage = window.getComputedStyle(Big).backgroundImage;
    element.style.backgroundImage = backgroundImage;
    
}
var currentIndex = 0;
var picture = document.querySelectorAll('.picture');
var element = document.getElementById('element');
  
function nextBackground() {
    currentIndex = (currentIndex + 1) % picture.length;
    changeBackground(picture[currentIndex]);
}
function prevBackground() {
    currentIndex = (currentIndex - 1 + picture.length) % picture.length;
    changeBackground(picture[currentIndex]);
}

document.addEventListener("DOMContentLoaded", function() {
    var oneTimecode = document.querySelectorAll(".oneTimecode");
    var cartLogo = document.getElementById("cartLogo");
    var cartPreview = document.getElementById("cartPreview");
    
    var cartItems = JSON.parse(localStorage.getItem(cartItems)) || [];
    
    function updateCartLogo() {
        var numProducts = cartItems.length;
        cartLogo.textContent = numProducts;
        localStorage.setItem("cartItems", JSON.stringify(cartItems));
    }
    function updateCartPreview() {
        cartPreview.innerHTML = "";
        cartItems.forEach(function(item) {
            cartPreview.appendChild(item.cloneNode(true));
        });
    }

    updateCartPreview();
    updateCartLogo();

    oneTimecode.forEach(function(button, index) {
        button.addEventListener("click", function() {
            var mainContainer = document.querySelectorAll(".mainContainer")[index];
            var mainContainerContent = mainContainer.cloneNode(true);
            mainContainerContent.classList.add("mainContainerContent");

            cartItems.push(mainContainerContent);

            updateCartPreview();
            updateCartLogo();

        });
        
    });

    cartLogo.addEventListener("click", function() {
        cartPreview.classList.toggle("show");
    });


});