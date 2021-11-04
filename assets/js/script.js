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
 * Main game loop
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
 * Changes the player's image depending on selection
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
 * Takes the user and cpu selections and outputs result
 */
function checkAnswer(userSelection, cpuSelection) {

    // array = [win, win, lose, lose, draw]
    let rockArray = ['scissors', 'lizard', 'paper', 'spock', 'rock'];
    let paperArray = ['rock', 'spock', 'scissors', 'lizard', 'paper'];
    let scissorsArray = ['paper', 'lizard', 'rock', 'spock', 'scissors'];
    let lizardArray = ['paper', 'spock', 'rock', 'scissors', 'lizard'];
    let spockArray = ['rock', 'scissors', 'paper', 'lizard', 'spock'];

    let cases = [rockArray, paperArray, scissorsArray, lizardArray, spockArray];

    console.log(cases);
    console.log(cases[0]);


    // Determine the winner
    if (userSelection === 'rock') {
        if (cpuSelection === cases[0][0] || cpuSelection === cases[0][1]) {
            console.log(`You win! ${userSelection} beats ${cpuSelection}.`);
            alert(`You win! ${userSelection} beats ${cpuSelection}.`);
        } else if (cpuSelection === cases[0][2] || cpuSelection === cases[0][3]) {
            console.log(`You lose! ${cpuSelection} beats ${userSelection}.`);
            alert(`You lose! ${cpuSelection} beats ${userSelection}.`);
        } else if (cpuSelection === cases[0][4]) {
            console.log("It's a draw!");
            alert("It's a draw!");
        } else {
            console.log("Error! Unknown inputs.");
            alert("Error! Unknown inputs.");
        }
    }
}





