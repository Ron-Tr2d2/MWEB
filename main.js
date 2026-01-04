
let tag = document.createElement('script');
tag.src = "https://www.youtube.com/iframe_api";
document.body.appendChild(tag);


const players = [];


function onYouTubeIframeAPIReady() {
  const iframes = document.querySelectorAll('iframe');

  iframes.forEach((iframe, index) => {
    players[index] = new YT.Player(iframe, {
      events: {}
    });
  });
}


const buttons = document.querySelectorAll('.song-button');

buttons.forEach((button, index) => {
  button.addEventListener('click', () => {


    button.classList.add('pulse-flash');
    setTimeout(() => button.classList.remove('pulse-flash'), 400);

  
    if (players[index]) {
      players[index].playVideo();
    }
  });
});
