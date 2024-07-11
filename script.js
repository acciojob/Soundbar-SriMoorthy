//your JS code here. If required.
const buttons = document.querySelectorAll('.btn');
const sounds = {
    applause: new Audio('sounds/applause-180037.mp3'),
    boo: new Audio('sounds/boo.mp3'),
    gasp: new Audio('sounds/gasp.mp3'),
    tada: new Audio('sounds/tada.mp3'),
    victory: new Audio('sounds/victory.mp3'),
    wrong: new Audio('sounds/wrong.mp3')
};

buttons.forEach(button => {
    button.addEventListener('click', () => {
        stopSounds();
        const sound = button.getAttribute('data-sound');
        if (sound !== 'stop') {
            sounds[sound].play();
        }
    });
});

function stopSounds() {
    for (let sound in sounds) {
        sounds[sound].pause();
        sounds[sound].currentTime = 0;
    }
}

