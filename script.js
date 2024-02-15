
let countdown = 600; 

function updateTimer() {
    const minutes = Math.floor(countdown / 60);
    const seconds = countdown % 60;
    document.getElementById('timer').innerText = `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
}

setInterval(function () {
    countdown--;
    updateTimer();
}, 1000);


document.addEventListener("DOMContentLoaded", function() {
    setTimeout(function() {
        document.getElementById("overlay-form").classList.remove("hidden");
    }, 2000); 
});
