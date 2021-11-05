// Declare constants and variables
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

let userScore = document.getElementById('user-score');
let cpuScore = document.getElementById('cpu-score');


// Run game after DOM has finished loading
document.addEventListener("DOMContentLoaded", function() {
    // Add event listeners to buttons 
    for (let button of buttons) {
        let userSelection = button.getAttribute("data-type");
        button.addEventListener('click', () => runGame(userSelection));
    }
})


/**
 * Main game function.
 */
function runGame(userSelection) {
    // Change image in user area
    changeImage(userImage, userSelection);

    // Assign random cpu selection and change image
    let cpuIndex = Math.floor(Math.random() * 5);
    let cpuSelection = options[cpuIndex]
    changeImage(cpuImage, cpuSelection);

    checkAnswer(userSelection, cpuSelection);
};

/**
 * Changes the player's image depending on selection.
 */
function changeImage(playerImage, selection) {
    playerImage.src = `assets/images/${selection}.png`;
}


/**
 * Takes the selections of the user and cpu and determines the outcome.
 */
function checkAnswer(userSelection, cpuSelection) {
    // Determine the winner
    // Match user selection to index of options
    for (let i = 0; i < options.length; i++) {
        if (userSelection !== options[i]) {
            continue;
        } else {

            // Outcome Logic - Determine the case (win, lose, draw)
            let winner;
            if (cpuSelection === cases[i][0] || cpuSelection === cases[i][1]) {
                document.getElementById('current-result').innerHTML = `You win!<br>${userSelection} beats ${cpuSelection}.`;

                console.log(`You win! ${userSelection} beats ${cpuSelection}.`);
                Swal.fire({
                    title: 'Well Done!',
                    text: `You win! ${userSelection} beats ${cpuSelection}.`,
                    icon: 'success',
                    timer: 1500
                })
                winner = 'user';
                incrementScore(winner);

            } else if (cpuSelection === cases[i][2] || cpuSelection === cases[i][3]) {
                document.getElementById('current-result').innerHTML = `You lose!<br>${cpuSelection} beats ${userSelection}.`;

                console.log(`You lose! ${cpuSelection} beats ${userSelection}.`);
                Swal.fire({
                    title: 'Unlucky!',
                    text: `You lose! ${cpuSelection} beats ${userSelection}.`,
                    icon: 'error',
                    timer: 1500
                })
                winner = 'cpu';
                incrementScore(winner);

            } else if (cpuSelection === cases[i][4]) {
                console.log("It's a draw!");
                Swal.fire({
                    title: 'Close!',
                    text: "It's a draw",
                    icon: 'info',
                    timer: 1500
                })
                winner = 'nobody';
                incrementScore(winner);

            } else {
                console.log("Error! Unknown inputs.");
                alert("Error! Unknown inputs.");
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
        alert("Congratulations! You've won the match!");
        userScore.innerHTML = 0;
        cpuScore.innerHTML = 0;
    } else if (cpuScore.innerHTML === '10') {
        console.log("Unlucky! You've lost the match!");
        alert("Unlucky! You've lost the match!");
        userScore.innerHTML = 0;
        cpuScore.innerHTML = 0;
    }
}