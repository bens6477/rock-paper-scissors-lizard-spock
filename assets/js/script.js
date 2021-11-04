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
    if (userSelection === "rock") {
        userImage.src = "assets/images/rock.png";
    } else if (userSelection === "paper") {
        userImage.src = "assets/images/paper.png";
    } else if (userSelection === "scissors") {
        userImage.src = "assets/images/scissors.png";
    } else if (userSelection === "lizard") {
        userImage.src = "assets/images/lizard.png";
    } else if (userSelection === "spock") {
        userImage.src = "assets/images/spock.png";
    }
    console.log(userSelection);

    // Randomise cpu selection
    let options = ['rock', 'paper', 'scissors', 'lizard', 'spock'];
    let cpuIndex = Math.floor(Math.random() * 5);
    let cpuSelection = options[cpuIndex]

    return [userSelection, cpuSelection]
};



// Listen for click on user selection
let userImage = document.getElementById('user-selection');
userImage.addEventListener('click', changeImage)
function changeImage(userSelection) {
    userImage.src = "assets/images/rock.png";
};





