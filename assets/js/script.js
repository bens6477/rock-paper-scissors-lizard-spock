// Run game after DOM has finished loading

document.addEventListener("DOMContentLoaded", function() {
    // Add event listeners to buttons 
    let buttons = document.getElementsByTagName('button');

    for (let button of buttons) {
        let userSelection = button.getAttribute("data-type");
        button.addEventListener('click', () => runGame(userSelection));
    }
})


// Change image to new user selection
function runGame(userSelection) {

    selection = userSelection;
    changeImage(userSelection)
    console.log(userSelection);

    // Assign random cpu selection
    let options = ['rock', 'paper', 'scissors', 'lizard', 'spock'];
    let cpuIndex = Math.floor(Math.random() * 5);
    let cpuSelection = options[cpuIndex]

    return [userSelection, cpuSelection]
};

function changeImage(selection) {
    if (selection === "rock") {
        userImage.src = "assets/images/rock.png";
    } else if (selection === "paper") {
        userImage.src = "assets/images/paper.png";
    } else if (selection === "scissors") {
        userImage.src = "assets/images/scissors.png";
    } else if (selection === "lizard") {
        userImage.src = "assets/images/lizard.png";
    } else if (selection === "spock") {
        userImage.src = "assets/images/spock.png";
    }
}

// Listen for click on user selection
let userImage = document.getElementById('user-selection');






