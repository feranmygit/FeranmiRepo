// var hamburger = document.getElementById('hamburger').addEventListener('click', function(){
//     document.getElementById('remove').classList.toggle('show');
// });

const crew = document.querySelectorAll('.crewbtns');
let index = 0;

function clickContainers() {

    for (let i = 0; i < 4;) {
        if (index < crew.length) {
            crew[index].click();
            index++;
        } else {
            index = 0;
        }
    }
}
setInterval(clickContainers, 2000);


// function toggleCrew() {
//     crew.forEach(crew => {
//         crew.style.display = 'none'; 
//     });

//     if (index < crew.length) {
//         crew[index].style.display = 'block', index++;
//     } else {
//         index = 0;
//     }
// }

// setInterval(toggleCrew, 2000);