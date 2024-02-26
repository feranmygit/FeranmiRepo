
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
