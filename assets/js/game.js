// Declare constants and variables
const rulesArea = document.getElementById('rules-area');
const matchArea = document.getElementById('match-area');
const reviewArea = document.getElementById('review-area');
const scoreArea = document.getElementById('score-area');
const resultsArea = document.getElementById('results-area');
const countdownArea = document.getElementById('countdown-area');
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
let buttonIncomplete;


// Run game after DOM has finished loading, listening for button clicks.
document.addEventListener("DOMContentLoaded", listeners);


/**
 * Listen for key gameplay events
 */
function listeners() {
    for (let button of buttons) {
        button.addEventListener('click', () => buttonEvents(button)); // TEST CODE (buttonEvents function)
    }

    // Enable keyboard shortcuts
    document.addEventListener("keydown", function(event) {
        switch (event.key) {
            case "1":
                runGame("rock");
                break;
            case "2":
                runGame("paper");
                break;
            case "3":
                runGame("scissors");
                break;
            case "4":
                runGame("lizard");
                break;
            case "5":
                runGame("spock");
                break;
            case "i":
                rulesArea.classList.remove('hide');
                matchArea.classList.add('hide');
                break;
            case "r":
                resetBoard();
                break;
            case "9":
                console.log('9 pressed');
                userScore.innerHTML = '9';
                cpuScore.innerHTML = '9';
                break;
        }
    })
}


// TEST CODE
function buttonEvents(button) { // TEST CODE
    if (button.getAttribute('data-type') === 'play-game') {
        resetBoard();
    } else if (button.getAttribute('data-type') === 'resume') {
        rulesArea.classList.add('hide');
        matchArea.classList.remove('hide');
    } else if (button.getAttribute('data-type') === 'rules') {
        rulesArea.classList.remove('hide');
        matchArea.classList.add('hide');
    } else {
        let userSelection = button.getAttribute("data-type");
        runGame(userSelection);
    }
}


/**
 * Main game function.
 */
function runGame(userSelection) {
    if (buttonIncomplete) {
    } else {
        if (userScore.innerHTML === '10' || cpuScore.innerHTML === '10') {
            Swal.fire({
                title: 'Oops!',
                text: "The match has finished! Press Reset Game to play again.",
                icon: 'error',
            })
        } else {
            buttonIncomplete = true;
            scoreArea.classList.add('hide-center');
            resultsArea.classList.add('hide-center');
            countdownArea.classList.remove('hide-center');
            titleIndex = 0;
            activeTitle = document.getElementById(`title-${options[titleIndex]}`);
            activeTitle.classList.add('active-title');
            countdownArea.innerHTML = options[titleIndex];
            setTimeout(() => countdown(userSelection), 300);
        }
    }
}


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
        countdownArea.innerHTML = options[titleIndex];
		setTimeout(() => countdown(userSelection), 300);
	} else if (titleIndex === 5) {
        let cpuIndex = Math.floor(Math.random() * 5);
        let cpuSelection = options[cpuIndex];
        scoreArea.classList.remove('hide-center');
        resultsArea.classList.remove('hide-center');
        countdownArea.classList.add('hide-center');
        changeImage(userImage, userSelection, 'png');
        changeImage(cpuImage, cpuSelection, 'png');
        checkAnswer(userSelection, cpuSelection);
    }
}


/**
 * Changes the player's image depending on selection.
 */
function changeImage(playerImage, selection, format) {
    playerImage.src = `assets/images/${selection}.${format}`;
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
                currentResult.innerHTML = `You lose!<br>${cpuSelection} beats ${userSelection}.`;
                incrementScore('cpu');
            } else if (cpuSelection === cases[i][4]) {
                console.log("It's a draw!");
                currentResult.innerHTML = `It's a draw!<br>Have another try.`;
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
        userScore.style.color = 'green';
        cpuScore.style.color = 'red';
        currentResult.style.color = 'green';
    } else if (winner === 'cpu') {
        console.log(`${winner} wins.`);
        ++cpuScore.innerHTML;
        userScore.style.color = 'red';
        cpuScore.style.color = 'green';
        currentResult.style.color = 'red';
    } else if (winner === 'nobody') {
        console.log(`${winner} wins.`);
        userScore.style.color = 'black';
        cpuScore.style.color = 'black';
        currentResult.style.color = 'black';
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
        })
        declareWinner('user');
    } else if (cpuScore.innerHTML === '10') {
        console.log("Unlucky! You've lost the match!");
        Swal.fire({
            title: 'Unlucky!',
            text: "You've lost the match! Better luck next time!",
            icon: 'error',
        })
        declareWinner('cpu');
    } else {
        imageReset();
    }
}

/**
 * Resets images to selection image after interval.
 */
function imageReset() {
    setTimeout(function() {
        changeImage(userImage, 'selection', 'jpg');
        changeImage(cpuImage, 'selection', 'jpg');
    }, 2000);
    buttonIncomplete = false;
}


/**
 * Receives the victor and displays the final result
 */
function declareWinner(victor) {
    victor = 'user';
    if (victor === 'user') {
        changeImage(userImage, 'winner', 'jpg');
        changeImage(cpuImage, 'loser', 'png');
        currentResult.innerHTML = `Well Done! You Win!<br>Click reset to play again!`;
    } else {
        changeImage(userImage, 'loser', 'png');
        changeImage(cpuImage, 'winner', 'jpg');
        currentResult.innerHTML = `Unlucky! You Lose.<br>Click reset to play again.`;
    }
    buttonIncomplete = false;
}


/**
 * Reset score to 0 after a player wins.
 */
function resetBoard() {
    userScore.innerHTML = cpuScore.innerHTML = 0;
    currentResult.innerHTML = "Let's Play!<br>Choose your attack.";
    userScore.style.color = 'black'
    cpuScore.style.color = 'black'
    currentResult.style.color = 'black'
    changeImage(userImage, 'selection', 'jpg');
    changeImage(cpuImage, 'selection', 'jpg');
    rulesArea.classList.add('hide');
    reviewArea.classList.add('hide');
    matchArea.classList.remove('hide');
}