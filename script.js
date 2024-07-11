//your JS code here. If required.
document.addEventListener('DOMContentLoaded', () => {
    const buttons = document.querySelectorAll('.btn');
    const sounds = {
        applause: document.getElementById('applause'),
        boo: document.getElementById('boo'),
        gasp: document.getElementById('gasp'),
        tada: document.getElementById('tada'),
        victory: document.getElementById('victory'),
        wrong: document.getElementById('wrong')
    };

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


// cypress/integration/tests/test.spec.js
describe('Sound Board', () => {
    it('should play the sound when a button is clicked', () => {
        cy.visit('/main.html');
        cy.get('.btn').first().click();
        cy.get('audio').first().should('have.prop', 'paused', false);
    });
});


