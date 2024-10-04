/*
 * DOTS: Level One
 *
 * At the top of level-one.js create a score variable with an initial value of 0
We'll also need to create variables to allow access to our HTML elements and control their behavior
Create a variable ball and assign its value by grabbing the .js-ball class with a querySelector()
Create a variable scoreDisplay and assign its value to the js-score class
Create a variable levelWinner and assign its value to the level-winner class



To create the game functionality we want with Level 1, we'll need to start by adding an event listener to 
the ball variable (which is the HTML element with class js-ball) we've just created
This event listener will need an anonymous callback function to perform the logic of our game when the ball is clicked
At this point, your event listener should look like this:
ball.addEventListener('click', function() {
  // some logic for updating score and checking for a win here
});


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