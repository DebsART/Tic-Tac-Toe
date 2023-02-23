let popUpStart = document.querySelector('#popUpStart');
function fadeOutEffect() {
let fadeEffect =setInterval(function (){
        if (!popUpStart.style.opacity) {
            popUpStart.style.opacity = 1;
        }
        if (popUpStart.style.opacity > 0) {
            popUpStart.style.opacity -= 0.1;
        } else {
            clearInterval(fadeEffect);
        }
    }, 85);
};
popUpStart.addEventListener('click', (fadeOutEffect));

let img = document.querySelector('img');
img.addEventListener('click', () => {
    let audio = new Audio("images/cursor.mp3");
    audio.play();
    
});



