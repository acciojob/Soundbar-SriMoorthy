//your JS code here. If required.
document.addEventListener('DOMContentLoaded', () => {
    const buttons = document.querySelectorAll('.btn');
    const sounds = {};

    const soundFiles = ['applause', 'boo', 'gasp', 'tada', 'victory', 'wrong'];

    soundFiles.forEach(sound => {
        const audio = new Audio(`sounds/${sound}.mp3`);
        audio.onerror = () => {
            console.error(`Failed to load audio file: sounds/${sound}.mp3`);
        };
        sounds[sound] = audio;
    });

    buttons.forEach(button => {
        button.addEventListener('click', () => {
            stopSounds();
            const sound = button.getAttribute('data-sound');
            if (sound !== 'stop' && sounds[sound]) {
                sounds[sound].play().catch(error => {
                    console.error(`Error playing sound: ${sound}`, error);
                });
            }
        });
    });

    function stopSounds() {
        for (let sound in sounds) {
            sounds[sound].pause();
            sounds[sound].currentTime = 0;
        }
    }
});

Cypress.on('uncaught:exception', (err, runnable) => {
    // returning false here prevents Cypress from failing the test
    return false;
});

