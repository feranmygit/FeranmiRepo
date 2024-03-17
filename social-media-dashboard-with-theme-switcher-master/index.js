
function toggleTheme() {
    document.body.classList.toggle('light-mode');
    document.body.classList.toggle('dark-mode');

    updateContainers();
}

function updateContainers(){
    const containers = document.querySelectorAll('.container');
    const mode = document.body.classList.contains('light-mode') ? 'light-mode' : 'dark-mode';

    containers.forEach(container => {
        const containerId = container.id;
        const containerSelector = `#${containerId}`;

        if (mode === 'light-mode') {
            container.classList.remove('light-mode');
            container.classList.remove(`${containerId}-dark-mode`);
            container.classList.add(`${containerId}-light-mode`);
        } else {
            container.classList.remove('dark-mode');
            container.classList.remove(`${containerId}-light-mode`);
            container.classList.add(`${containerId}-dark-mode`);
        }
    });
}

document.addEventListener('DOMContentLoaded', function() {
    updateContainers();
})


function isInViewport(element) {
    const rect = element.getBoundingClientRect();
    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
}

function handleScroll() {
    const hiddenContainer = document.querySelectorAll('.hiddenContainer');
    hiddenContainer.forEach(hiddenContainer => {
        if (isInViewport(hiddenContainer)) {
            hiddenContainer.classList.add('visible');
            hiddenContainer.classList.remove('hidden');
        } else {
            hiddenContainer.classList.remove('visible');
            hiddenContainer.classList.add('hidden');
        }
    });
}

window.addEventListener('scroll', handleScroll);