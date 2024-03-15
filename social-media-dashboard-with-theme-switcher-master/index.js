function toggleTheme() {
    document.body.classList.toggle('light-mode');
    document.body.classList.toggle('dark-mode');

    updateContainers();
}

function updateContainers(){
    const colors = document.querySelectorAll('#colors');
    const mode = document.body.classList.contains('light-mode') ? 'light-mode' : 'dark-mode';

    updateContainers.forEach(colors => {
        const colorsId =colors.id;
        const colorsSelector = `#${colorsId}`;

        if (mode === 'light-mode') {
            colors.classList.remove('dark-mode');
            colors.classList.add(`#${colorsId}-light-mode`);
        } else {
            colors.classList.remove('light-mode');
            colors.classList.add(`#${colorsId}-light-mode`);
        }
    });
}

document.addEventListener('DOMContentLoaded', function() {
    updateContainers();
})