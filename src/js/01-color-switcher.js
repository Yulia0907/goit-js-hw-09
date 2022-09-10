const startBtn = document.querySelector('[data-start]');
const stoptBtn = document.querySelector('[data-stop]');
stoptBtn.disabled = true;
let timerId = null;

function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

startBtn.addEventListener('click', () => {
    startBtn.disabled = true;
    stoptBtn.disabled = false;
    
    timerId = setInterval( () => {
        document.body.style.background = getRandomHexColor()
    }, 1000);
});

stoptBtn.addEventListener('click', () => {
    clearInterval(timerId);
    stoptBtn.disabled = true;
    startBtn.disabled = false;
});


    