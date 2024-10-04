/*
 * DOTS: Level Two
 *
 */
let score = 0

const balls = document.querySelectorAll('.js-ball')
const scoreDisplay = document.querySelector('.js-score')
const levelWinner = document.querySelector('.level-winner')

balls.forEach (ball => {
    ball.addEventListener ('click', () => {
        console.log(ball.getAttribute('data-incremebt'))
        score +=10;
        scoreDisplay.innerText = score.toString();
        if (score >= 100) {
            levelWinner.style.setProperty ('opacity', 100);
        }
    })
})