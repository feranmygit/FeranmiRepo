function toggleMenu() {
    const hambugger = document.querySelector('.hambugger');
    const removeContainer = document.querySelector('#removeContainer');
    
    if (hambugger.style.display === 'none') {
        hambugger.style.display = 'block';
        removeContainer.style.display = 'none';
    }
    else {
        hambugger.style.display = 'none';
        removeContainer.style.display = 'block';
    }
}
