// Run game after DOM has finished loading

document.addEventListener("DOMContentLoaded", function() {
    // Add event listeners to buttons 
    let buttons = document.getElementsByTagName('button');

    for (let button of buttons) {
        let userSelection = button.getAttribute("data-type");
        button.addEventListener('click', () => checkAnswer(userSelection));
    }
})


// Change image to new user selection
function checkAnswer(userSelection) {
    userImage.src = "assets/images/rock.png";
    console.log(userSelection);
    return userSelection
};



// Listen for click on user selection
let userImage = document.getElementById('user-selection');
userImage.addEventListener('click', changeImage)
function changeImage(userSelection) {
    userImage.src = "assets/images/rock.png";
};





