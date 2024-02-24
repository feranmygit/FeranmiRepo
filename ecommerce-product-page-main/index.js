const close = document.getElementById('close');
const items = document.getElementById('itemsList');

if (close) {
    close.addEventListener('click', () => {
        items.classList.remove('active')
    })
}