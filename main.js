// 1. Load YouTube IFrame API
let tag = document.createElement('script');
tag.src = "https://www.youtube.com/iframe_api";
document.body.appendChild(tag);

// 2. Store players
const players = {};

// 3. Called when API is ready
function onYouTubeIframeAPIReady() {
    players["UMGi6bFMP68"] = new YT.Player('video1');
    players["69FlNUmzQWc"] = new YT.Player('video2');
    players["idIkVG-g5UQ"] = new YT.Player('video3');
}

// 4. Play video by video ID
function playVideoById(videoId) {
    if (players[videoId]) {
        players[videoId].playVideo();
    } else {
        console.log("Player not ready yet:", videoId);
    }
}

// 5. Add click events to all buttons
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
