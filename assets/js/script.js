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
    let rock = ['scissors', 'lizard', 'paper', 'spock', 'rock'];


    // Determine the winner
    if (userSelection === 'rock') {
        if (cpuSelection === rock[0] || cpuSelection === rock[1]) {
            console.log(`You win! ${userSelection} beats ${cpuSelection}.`);
            alert(`You win! ${userSelection} beats ${cpuSelection}.`);
        } else if (cpuSelection === rock[2] || cpuSelection === rock[3]) {
            console.log(`You lose! ${cpuSelection} beats ${userSelection}.`);
            alert(`You lose! ${cpuSelection} beats ${userSelection}.`);
        } else {
            console.log("It's a draw!");
            alert("It's a draw!");
        }
    }
}





