document.querySelector('.hamburger-icon').addEventListener('click', function() {
    this.classList.toggle('open');
    const middleLine = this.querySelector('.middle-line');
    if (middleLine) {
      middleLine.classList.toggle('hidden');
    }
  });
  