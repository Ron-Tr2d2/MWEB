// 1. Load YouTube IFrame API
let tag = document.createElement('script');
tag.src = "https://www.youtube.com/iframe_api";
document.body.appendChild(tag);

// 2. Array to store players
const players = [];

// 3. Called when YouTube API is ready
function onYouTubeIframeAPIReady() {
    const iframes = document.querySelectorAll('iframe');
    iframes.forEach((iframe, index) => {
        players[index] = new YT.Player(iframe);
    });
}

// 4. Function to play video by video ID
function playVideoById(videoId) {
    const iframes = Array.from(document.querySelectorAll('iframe'));
    const index = iframes.findIndex(iframe => iframe.src.includes(videoId));
    if (players[index]) {
        players[index].playVideo();
    }
}

// 5. Apply to all buttons (main + sidebar)
const allButtons = document.querySelectorAll('.song-button, .sidebar-button');

allButtons.forEach(button => {
    button.addEventListener('click', () => {
        // Pulse animation
        button.classList.add('pulse-flash');
        setTimeout(() => button.classList.remove('pulse-flash'), 400);

        // Play corresponding video
        const videoId = button.dataset.video;
        playVideoById(videoId);
    });
});
