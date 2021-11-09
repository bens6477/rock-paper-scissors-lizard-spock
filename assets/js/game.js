// Declare constants and variables
const rulesArea = document.getElementById('rules-area');
const matchArea = document.getElementById('match-area');
const reviewArea = document.getElementById('review-area');
const buttons = document.getElementsByTagName('button');
const userImage = document.getElementById('user-image');
const cpuImage = document.getElementById('cpu-image');
const options = ['rock', 'paper', 'scissors', 'lizard', 'spock'];
const rockArray = ['scissors', 'lizard', 'paper', 'spock', 'rock']; // outcome array: selectionArray = [win, win, lose, lose, draw];
const paperArray = ['rock', 'spock', 'scissors', 'lizard', 'paper'];
const scissorsArray = ['paper', 'lizard', 'rock', 'spock', 'scissors'];
const lizardArray = ['paper', 'spock', 'rock', 'scissors', 'lizard'];
const spockArray = ['rock', 'scissors', 'paper', 'lizard', 'spock'];
const cases = [rockArray, paperArray, scissorsArray, lizardArray, spockArray]; // Create matrix (nested array) of all possible cases
const currentResult = document.getElementById('current-result');
const userScoreReview = document.getElementById('user-score-review');
const cpuScoreReview = document.getElementById('cpu-score-review');

let titleIndex = 0;
let activeTitle = document.getElementById(`title-${options[titleIndex]}`);
let userScore = document.getElementById('user-score');
let cpuScore = document.getElementById('cpu-score');


// Run game after DOM has finished loading, listening for button clicks.
document.addEventListener("DOMContentLoaded", function() {
    for (let button of buttons) {
        button.addEventListener('click', function() {
            if (button.getAttribute('data-type') === 'play-game') {
                resetBoard();
            } else {
                let userSelection = button.getAttribute("data-type");
                runGame(userSelection)
            }
        });
    }
})


/**
 * Main game function.
 */
function runGame(userSelection) {
    titleIndex = 0;
    activeTitle = document.getElementById(`title-${options[titleIndex]}`);
    activeTitle.classList.add('active-title');
    setTimeout(() => countdown(userSelection), 300);
};


/**
 * Create function to run countdown procedure before changing
 * images and checking answer.
 */
function countdown(userSelection) {
    activeTitle.classList.remove('active-title');
	titleIndex += 1;
	if (titleIndex < 5) {
        activeTitle = document.getElementById(`title-${options[titleIndex]}`);
        activeTitle.classList.add('active-title');
		setTimeout(() => countdown(userSelection), 300);
	} else if (titleIndex === 5) {
        let cpuIndex = Math.floor(Math.random() * 5);
        let cpuSelection = options[cpuIndex];
        changeImage(userImage, userSelection);
        changeImage(cpuImage, cpuSelection);
        checkAnswer(userSelection, cpuSelection);
    }
}


/**
 * Changes the player's image depending on selection.
 */
function changeImage(playerImage, selection) {
    playerImage.src = `assets/images/${selection}.png`;
}


/**
 * Takes the selections of the user and cpu and determines the
 * outcome (win, lose, draw).
 */
function checkAnswer(userSelection, cpuSelection) {
    for (let i = 0; i < options.length; i++) {
        if (userSelection !== options[i]) {
            continue;
        } else {
            if (cpuSelection === cases[i][0] || cpuSelection === cases[i][1]) {
                currentResult.innerHTML = `You win!<br>${userSelection} beats ${cpuSelection}.`;
                incrementScore('user');
            } else if (cpuSelection === cases[i][2] || cpuSelection === cases[i][3]) {
                currentResult.innerHTML = `You lose!<br>${cpuSelection} beats ${userSelection}.`
                incrementScore('cpu');
            } else if (cpuSelection === cases[i][4]) {
                console.log("It's a draw!");
                incrementScore('nobody');
            } else {
                console.log("Whoops! Try another option.");
                alert("Whoops! Try another option.");
            }
        }
    }
}


/**
 * Receives the winner and increments the score accordingly.
 */
 function incrementScore(winner) {
    if (winner === 'user') {
        console.log(`${winner} wins.`);
        ++userScore.innerHTML;
    } else if (winner === 'cpu') {
        console.log(`${winner} wins.`);
        ++cpuScore.innerHTML;
    } else if (winner === 'nobody') {
        console.log(`${winner} wins.`);
    } else {
        console.log("Error! No winner was determined.");
        alert("Error! No winner was determined.");
    }

    if (userScore.innerHTML === '10') {
        console.log("Congratulations! You've won the match!");
        Swal.fire({
            title: 'Well Done!',
            text: "Congratulations! You've won the match!",
            icon: 'success',
            timer: 1500
        })
        reviewScores();
    } else if (cpuScore.innerHTML === '10') {
        console.log("Unlucky! You've lost the match!");
        Swal.fire({
            title: 'Unlucky!',
            text: "You've lost the match! Better luck next time!",
            icon: 'error',
            timer: 1500
        })
        reviewScores();
    }    
}

function reviewScores() {
    console.log('reviewing scores');
    userScoreReview.innerHTML = userScore.innerHTML;
    cpuScoreReview.innerHTML = cpuScore.innerHTML;
    matchArea.classList.add('hide');
    reviewArea.classList.remove('hide');
}

/**
 * Reset score to 0 after a player wins.
 */
function resetBoard() {
    userScore.innerHTML = cpuScore.innerHTML = 0;
    rulesArea.classList.add('hide');
    reviewArea.classList.add('hide');
    matchArea.classList.remove('hide');
}