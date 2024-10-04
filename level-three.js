/*
 * DOTS: Level Three
 *
 */

let score = 0

const ball = document.querySelector('.js-ball')
const scoreDisplay = document.querySelector('.js-score')
const levelWinner = document.querySelector('.level-winner')

ball.addEventListener ('click', () => {
    score += 10;
    scoreDisplay.innerText = score.toString();
    if (score >= 100) {
        levelWinner.style.setProperty ('opacity', 100);
    }
})