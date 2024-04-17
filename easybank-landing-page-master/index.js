document.querySelector('.hamburger-icon').addEventListener('click', function() {
    this.classList.toggle('open');
    const middleLine = this.querySelector('.middle-line');
    if (middleLine) {
      middleLine.classList.toggle('hidden');
    }
  });
  
 function toggleMenu() {
    var navContainer = document.getElementById('navContainer');
    var overlay = document.getElementById('overlay');
    // var overlay = document.getElementById('overlay');

    navContainer.classList.toggle('hidden');
    overlay.classList.toggle('show');
    // overlay.classList.toggle('hidden');
  }



  
//   function closeMenu() {
//     var navContainer = document.getElementById('navContainer');
//     // var overlay = document.getElementById('overlay');

//     navContainer.classList.add('hidden');
//     // overlay.classList.add('hidden');
//     document.body.classList.remove('active');
//   }
//   document.querySelector(".overlay").addEventListener("click",
// function() {

// })




