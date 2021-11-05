// Run game after DOM has finished loading

document.addEventListener("DOMContentLoaded", function() {
    // Add event listeners to buttons 
    let buttons = document.getElementsByTagName('button');

    for (let button of buttons) {
        let userSelection = button.getAttribute("data-type");
        button.addEventListener('click', () => runGame(userSelection));
    }
})


/**
 * Main game function.
 */
function runGame(userSelection) {

    let userImage = document.getElementById('user-image');
    let cpuImage = document.getElementById('cpu-image');

    // Change image in user area
    changeImage(userImage, userSelection);

    // Assign random cpu selection and change image
    let options = ['rock', 'paper', 'scissors', 'lizard', 'spock'];
    let cpuIndex = Math.floor(Math.random() * 5);
    let cpuSelection = options[cpuIndex]
    changeImage(cpuImage, cpuSelection);

    checkAnswer(userSelection, cpuSelection);
};

/**
 * Changes the player's image depending on selection.
 */
function changeImage(playerImage, selection) {
    if (selection === "rock") {
        playerImage.src = "assets/images/rock.png";
    } else if (selection === "paper") {
        playerImage.src = "assets/images/paper.png";
    } else if (selection === "scissors") {
        playerImage.src = "assets/images/scissors.png";
    } else if (selection === "lizard") {
        playerImage.src = "assets/images/lizard.png";
    } else if (selection === "spock") {
        playerImage.src = "assets/images/spock.png";
    }
}


/**
 * Takes the selections of the user and cpu and determines the outcome.
 */
function checkAnswer(userSelection, cpuSelection) {

    // outcome array: array = [win, win, lose, lose, draw]
    let rockArray = ['scissors', 'lizard', 'paper', 'spock', 'rock'];
    let paperArray = ['rock', 'spock', 'scissors', 'lizard', 'paper'];
    let scissorsArray = ['paper', 'lizard', 'rock', 'spock', 'scissors'];
    let lizardArray = ['paper', 'spock', 'rock', 'scissors', 'lizard'];
    let spockArray = ['rock', 'scissors', 'paper', 'lizard', 'spock'];

    // Create matrix (nested array) of all possible cases
    let cases = [rockArray, paperArray, scissorsArray, lizardArray, spockArray];

    // Determine the winner
    // Match user selection to index of options
    let options = ['rock', 'paper', 'scissors', 'lizard', 'spock'];
    for (let i = 0; i < options.length; i++) {
        if (userSelection !== options[i]) {
            continue;
        } else {

            // Outcome Logic - Determine the case (win, lose, draw)
            let winner;
            let result = document.getElementById('current-result').innerHTML;

            if (cpuSelection === cases[i][0] || cpuSelection === cases[i][1]) {
                document.getElementById('current-result').innerHTML = `
                You win!
                ${userSelection} beats ${cpuSelection}.`;
                
                console.log(`You win! ${userSelection} beats ${cpuSelection}.`);
                alert(`You win! ${userSelection} beats ${cpuSelection}.`);
                winner = 'user';
                incrementScore(winner);

            } else if (cpuSelection === cases[i][2] || cpuSelection === cases[i][3]) {
                document.getElementById('current-result').innerHTML = `
                You lose!
                ${cpuSelection} beats ${userSelection}.`;

                console.log(`You lose! ${cpuSelection} beats ${userSelection}.`);
                alert(`You lose! ${cpuSelection} beats ${userSelection}.`);
                winner = 'cpu';
                incrementScore(winner);

            } else if (cpuSelection === cases[i][4]) {
                console.log("It's a draw!");
                alert("It's a draw!");
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
    let userScore = document.getElementById('user-score').innerHTML;
    let cpuScore = document.getElementById('cpu-score').innerHTML;

    if (winner === 'user') {
        console.log(`${winner} wins.`);
        document.getElementById('user-score').innerHTML = ++userScore;
    } else if (winner === 'cpu') {
        console.log(`${winner} wins.`);
        document.getElementById('cpu-score').innerHTML = ++cpuScore;
    } else if (winner === 'nobody') {
        console.log(`${winner} wins.`);
    } else {
        console.log("Error! No winner was determined.");
        alert("Error! No winner was determined.");
    }

    if (userScore === 10) {
        console.log("Congratulations! You've won the match!");
        alert("Congratulations! You've won the match!");
        document.getElementById('user-score').innerHTML = 0;
        document.getElementById('cpu-score').innerHTML = 0;
    } else if (cpuScore === 10) {
        console.log("Unlucky! You've lost the match!");
        alert("Unlucky! You've lost the match!");
        document.getElementById('user-score').innerHTML = 0;
        document.getElementById('cpu-score').innerHTML = 0;
    }
}





