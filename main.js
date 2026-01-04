const buttons = document.querySelectorAll('.song-button');

buttons.forEach(button => {
  button.addEventListener('click', () => {


    button.classList.add('pulse-flash');
    setTimeout(() => {
      button.classList.remove('pulse-flash');
    }, 400); 


    const iframe = button.nextElementSibling; 
    let src = iframe.src;

    if (!src.includes('autoplay=1')) {
      iframe.src = src + (src.includes('?') ? '&autoplay=1' : '?autoplay=1');
    }
  });
});
