// Declare constants and variables
let titleIndex = 0;
let buttonIncomplete = false;

const options = ['rock', 'paper', 'scissors', 'lizard', 'spock'];
const rockArray = ['scissors', 'lizard', 'paper', 'spock', 'rock']; // outcome array: selectionArray = [win, win, lose, lose, draw];
const paperArray = ['rock', 'spock', 'scissors', 'lizard', 'paper'];
const scissorsArray = ['paper', 'lizard', 'rock', 'spock', 'scissors'];
const lizardArray = ['paper', 'spock', 'rock', 'scissors', 'lizard'];
const spockArray = ['rock', 'scissors', 'paper', 'lizard', 'spock'];
const cases = [rockArray, paperArray, scissorsArray, lizardArray, spockArray]; // Create matrix (nested array) of all possible cases
const verticalThreshold = window.matchMedia("(max-width: 800px)");
const cpuBar = document.getElementById('cpu-bar');
const cpuImageContainer = document.getElementById('cpu-image-container');
const container = cpuImageContainer.parentNode;
const rulesArea = document.getElementById('rules-area');
const matchArea = document.getElementById('match-area');
const resultsArea = document.getElementById('results-area');
const selectAttack = document.getElementById('select-attack');
const buttons = document.getElementsByTagName('button');
const currentResult = document.getElementById('current-result');
const countdownArea = document.getElementById('countdown-area');
const userScore = document.getElementById('user-score');
const cpuScore = document.getElementById('cpu-score');
const userImage = document.getElementById('user-image');
const cpuImage = document.getElementById('cpu-image');

// Run game after DOM has finished loading, listening for button clicks.
document.addEventListener("DOMContentLoaded", function() {
    stackScore();
    verticalThreshold.addEventListener('change', stackScore);

    for (let button of buttons) {
        button.addEventListener('click', function() {
            switch (button.getAttribute('data-type')) {
                case  'play-game':
                    resetBoard();
                    break;
                case  'resume':
                    rulesArea.classList.add('hide');
                    matchArea.classList.remove('hide');
                    break;
                case  'rules':
                    rulesArea.classList.remove('hide');
                    matchArea.classList.add('hide');
                    break;
                case  'github':
                    break;
                default:
                    let userSelection = button.getAttribute("data-type");
                runGame(userSelection);
            }
        });
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
            // Delete this upon submission ****************************************
            case "9":
                userScore.innerHTML = '9';
                cpuScore.innerHTML = '9';
                break;
        }
    });
});

/**
 * Main game function.
 */
function runGame(userSelection) {
    if (buttonIncomplete) {
    } else {
        if (userScore.innerHTML === '10' || cpuScore.innerHTML === '10') {
            Swal.fire({
                title: 'Oops!',
                text: "The match has finished! Press Reset to play again.",
                icon: 'error',
            });
        } else {
            buttonIncomplete = true;
            resultsArea.classList.add('hide-center');
            selectAttack.classList.add('hide-center');
            countdownArea.classList.remove('hide-center');
            titleIndex = 0;
            countdownArea.innerHTML = options[titleIndex];
            setTimeout(() => countdown(userSelection), 300);
        }
    }
}

/**
 * Moves location of CPU score bar when in vertically stacked orientation
 */
function stackScore() {
    if (verticalThreshold.matches) {
        container.appendChild(cpuImageContainer);
        container.appendChild(cpuBar);
    } else {
        container.appendChild(cpuBar);
        container.appendChild(cpuImageContainer);
    }
}

/**
 * Create function to run countdown procedure before changing
 * images and checking answer.
 */
function countdown(userSelection) {
	titleIndex += 1;
	if (titleIndex < 5) {
        countdownArea.innerHTML = options[titleIndex];
		setTimeout(() => countdown(userSelection), 300);
	} else if (titleIndex === 5) {
        let cpuIndex = Math.floor(Math.random() * 5);
        let cpuSelection = options[cpuIndex];
        resultsArea.classList.remove('hide-center');
        countdownArea.classList.add('hide-center');
        changeImage(userImage, userSelection);
        changeImage(cpuImage, cpuSelection);
        checkAnswer(userSelection, cpuSelection);
    }
}

/**
 * Changes the player's image depending on selection.
 */
function changeImage(playerImage, selection) {
    playerImage.src = `assets/images/${selection}.webp`;
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
                currentResult.innerHTML = `It's a draw!<br>Have another try.`;
                incrementScore('nobody');
            } else {
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
        ++userScore.innerHTML;
        userScore.style.color = '#006800';
        cpuScore.style.color = '#A12B2B';
        currentResult.style.color = '#006800';
    } else if (winner === 'cpu') {
        ++cpuScore.innerHTML;
        userScore.style.color = '#A12B2B';
        cpuScore.style.color = '#006800';
        currentResult.style.color = '#A12B2B';
    } else if (winner === 'nobody') {
        userScore.style.color = '#74522F';
        cpuScore.style.color = '#74522F';
        currentResult.style.color = '#74522F';
    } else {
        alert("Error! No winner was determined.");
    }

    if (userScore.innerHTML === '10') {
        Swal.fire({
            title: 'Well Done!',
            text: "Congratulations! You've won the match!",
            icon: 'success',
        });
        declareWinner('user');
    } else if (cpuScore.innerHTML === '10') {
        Swal.fire({
            title: 'Unlucky!',
            text: "You've lost the match! Better luck next time!",
            icon: 'error',
        });
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
        changeImage(userImage, 'selection');
        changeImage(cpuImage, 'selection');
        selectAttack.classList.remove('hide-center');
    }, 3000);
    buttonIncomplete = false;
}

/**
 * Receives the victor and displays the final result
 */
function declareWinner(victor) {
    if (victor === 'user') {
        changeImage(userImage, 'winner');
        changeImage(cpuImage, 'loser');
        currentResult.innerHTML = `Well Done! You Win!<br>Click reset to play again!`;
    } else {
        changeImage(userImage, 'loser');
        changeImage(cpuImage, 'winner');
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
    userScore.style.color = '#74522F';
    cpuScore.style.color = '#74522F';
    currentResult.style.color = '#74522F';
    changeImage(userImage, 'selection');
    changeImage(cpuImage, 'selection');
    rulesArea.classList.add('hide');
    matchArea.classList.remove('hide');
}