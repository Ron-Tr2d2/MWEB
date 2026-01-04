// Load YouTube IFrame API
let tag = document.createElement('script');
tag.src = "https://www.youtube.com/iframe_api";
document.body.appendChild(tag);

// Array to store players
const players = [];

// Called when API is ready
function onYouTubeIframeAPIReady() {
    const iframes = document.querySelectorAll('iframe');
    iframes.forEach((iframe, index) => {
        players[index] = new YT.Player(iframe);
    });
}

// Button click: pulse animation + play video
const buttons = document.querySelectorAll('.song-button');
buttons.forEach((button, index) => {
    button.addEventListener('click', () => {
        // Pulse animation
        button.classList.add('pulse-flash');
        setTimeout(() => button.classList.remove('pulse-flash'), 400);

        // Play video
        if (players[index]) {
            players[index].playVideo();
        }
    });
});
