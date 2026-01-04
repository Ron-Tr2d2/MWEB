const buttons = document.querySelectorAll('.song-button');

buttons.forEach(button => {
  
  button.addEventListener('click', () => {

    button.classList.add('pulse-flash');

    
    setTimeout(() => {
      button.classList.remove('pulse-flash');
    }, 400); // 400ms matches the CSS animation duration
  });
});
