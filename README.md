# Rock, Paper, Scissors, Lizard, Spock

## Site Overview
Challenge your luck against the computer in a contemporary variation of the traditional game of chance. The two additional variables - Lizard and Spock - add complextiy to both the rules and
However, the extra rules of the game are displayed intuitively, as players select their attack directly from the winner hierarchy figure, removing the need to be fluent in the combination outcomes. Suspense is built as a countdown sequence triggers every time a selection is made, before the winner of the point is revealed. The winner and loser are easily discerned through colour coding of the scores and the result message. Do you have what it takes to take on the computer?

![Am I Responsive website]()

## Contents
1. [Site Overview](#site-overview)
1. [Planning Stage](#planning-stage)
    * [Target Audience](#target-audience)
    * [User Stories](#user-stories)
    * [Colour Scheme](#colour-scheme)
1. [Features](#features)
    * [Navigation](#navigation)
1. [Future Enhancements](#future-enhancements)
1. [Technology Used](#technology-used)
1. [Testing](#testing)
    * [Developer Tools](#developer-tools)
    * [Validator Testing](#validator-testing)
    * [Bugs](#bugs)
    * [Unfixed Bugs](#unfixed-bugs)
1. [Deployment](#features)
1. [Credits](#features)
    * [Content](#features)
    * [Media](#features)

## Planning Stage
### Target Audience
* Users who wish to engage in a more complex version of Rock, Paper, Scissors.
* Users who are looking to design and code interactive games themselves.
* Younger users who are looking to play a simple, engaging game with a short duration.
* Users who are looking to interactively learn the rules of Rock, Paper, Scissors, Lizard, Spock to play externally with friends.

### User Stories
* As a user, I want a simple, clean layout, providing everything I need for smooth gameplay.
* As a user, I want to easily access instructions of how to play the game.
* As a user, I want to easily select my chosen attack in an intuitive manner.
* As a user, I want to easily view the winner of each point and receive an explanation of the result.
* As a user, I want to easily reset the game to play again as many times as desired.


### Colour Scheme


## Features

### Instruction Page

### Game Area


### Integrated Attack Selection
The user selects their attack by clicking directly on the relevant icon in the image. Circular buttons are embedded over the each attack option so the user can intuitively relate their selection to the other possible attacks.

### Countdown Sequence
After the user selects and attack, a countdown sequence is triggered. The words "Rock", "Paper", "Scissors", "Lizard", "Spock" flash in the center of the screen before returning the outcome of the point. This creates anticipation over the result after the user locks in their selection. All selector buttons are disabled for the duration of the countdown to prevent the result from being overridden or from sending unaccepted inputs through the code.
![Countdown Sequence]()

### Responsive Colouring
The winner and loser's scores are displayed in green and red respectively to provide and instant visual indicator of the victor. Additionally result text is coloured in accordance to the it user's outcome.
![Winner/Loser Colouring]()

### Declaring the Winner


## Future Enhancements
Various additional features would bring a greater user experience to the website: 
* The addition of a two-player game, where two users can play against each other.


## Technology Used
* HTML, CSS and JavaScript programming languages
* [Google Fonts](https://fonts.google.com/specimen/Russo+One/) - 'Russo One' style 
* [Font Awesome](https://fontawesome.com/v5.15/icons/github) - GitHub icon
* [GitPod](https://www.gitpod.io/) - IDE for local developement
* [GIT](https://git-scm.com/) - Version Control
* [GitHub](https://github.com/) - to host the repositories for this project and the live website preview


## Testing ***
* All links and images on the website work correctly and all elements are responsive to screen size.
* The website was tested across various browsers, including Google Chrome, Mozilla Firefox and Microsoft Edge.
### Developer Tools ***
* The Developer Tools function was used to test this across Google Chrome, Mozilla Firefox and Microsoft Edge to verify the site was fully responsive across the specificed screen witdhs and across different browsers.
* The website was responsive across screen sizes between 320px and 1600px in width. Content readablility was optimised by altering the size and positioning of elements. 
* ***The website was designed using a desktop-first approach, therefore the image resolutions were optimised to look better on larger screens. This resulted in a lower performance score on mobile devices as the image resolution was much larger than the maximum screen resolution.


#### Desktop Homepage Lighthouse Results
![Desktop Homepage Lightouse Results]()

#### Mobile Homepage Lighthouse Results
![Mobile Homepage Lighthouse Results]()


### Validator Testing
#### HTML
* No errors were found when running the HTML code through the [official W3C validator](https://validator.w3.org/).
#### CSS
* No errors were found when running the CSS code through the [official W3C Jigsaw validator](https://jigsaw.w3.org/css-validator/).
#### JavaScript
* No errors were found when running the JavaScript code through the [JSHint validator](https://jshint.com/).
#### Accessibility
* The website was tested using the Lighthouse function in Chrome DevTools, showing a accessibility level of 100%.
    

### Bugs
* **Issue** - Embedding selection buttons within the attack options in the image.
    * **Resolution** - Instead of using conventional buttons, absolute poisitioning was used to position the selector buttons accordingly within the encasing image container div. This meant the user could click on the icon of their attack, rather than from an external point outside of the image. Additionally, positioning using percentages ensured the button orientation was constant across different screen sizes. 
    https://stackoverflow.com/questions/24435397/click-particular-region-of-image

* **Issue** - Creating a countdown feature before revealing the result.
    * **Resolution** - The <code>setTimeout()</code> timing event was used to dynamically cycle through the countdown procedure. The <code>countdown()</code> function contained another <code>setTimeout()</code> that self-referenced the <code>countdown()</code> function, creating a loop of nested time events. The loop was broken using if-statment logic after the countdwon iterations were complete.
    https://carlanderson.xyz/creating-timed-sequences-in-javascript-using-settimeout/ 

* **Issue** - Capability for selector buttons to be pressed before countdown sequence was finished.
    * **Resolution** - The <code>buttonIncomplete</code> was initialised to false and was updated to true upon the user selecting an attack. While <code>buttonIncomplete</code> was true, no other attack options could be selected. Once the winner of the point had been declared, it was reassigned back to false and another option could be chosen. 

* **Issue** - Dynamically hiding elements from view during gameplay.
    * **Resolution** - Main games area were assigned and unassigned the .hide class using JavaScript depending on whether they were active or not. Applying <code>display:none</code> allowed for the element to be hidden from view and also occupy no space on the screen. A separate .hide-center class was applied to elements in the center area such as the result and countdown text. This instead applied <code>visibility:hidden</code> to hide the content from view while keeping the structural integrity of the html.
    https://careerkarma.com/blog/css-hide-element/

* **Issue** - Functions running immediately when assigning event listeners.
    * **Resolution** - The syntax of the listener was assigned to <code>() => functionName(variable))</code> instead of simply <code>functionName(variable)</code>. If no variables were passed into the function, passing only <code>functionName</code> prevented the immediate running of the function.
    https://stackoverflow.com/questions/16310423/addeventlistener-calls-the-function-without-me-even-asking-it-to

* **Issue** - Alerts disturbing the flow of events.
    * **Resolution** - Since the browser was forced to read <code>alert()</code> commands immediately, preceding code which had not been fully executed was stalled. For example the declaration of the winner stalled the rendering of images. The integration of sweetalert2 enabled alerts to be displayed dynamically without forcing all other code to stop.
    https://sweetalert2.github.io/

* **Issue** - Resetting the board after each outcome was declared.
    * **Resolution** - To keep a fast paced flow to the game, after declating the winner of each point the images of each player's attack were shown for two seconds before the returning to the selection image. The <code>setTimeout()</code>, meaning the user did not need to press a button to acknowledge the result. The result text, however, remained unchanged in the center, should the player have missed the combination from the images.

* **Issue** - Asynchronous flow
    * **Resolution** - 

* **Issue** - 
    * **Resolution** - 

* **Issue** - 
    * **Resolution** - 

### Unfixed Bugs
There are no known bugs left unfixed.


## Deployment
The site was deployed to GitHub pages. The steps to deploy are as follows:
1. In the GitHub repository, navigate to the repository for apprentice-brewing and then click on the Settings tab.
1. Click on the Pages tab from the list of options on the left hand side of the page.
1. Under Source click the drop-down menu labelled None and select main as the branch.
1. Once saved the link to the page will be provided above the ‘Source’ sub-section upon refreshing.
1. The live link can be found here - ***

## Credits
### Content


### Media


<a href='https://www.freepik.com/vectors/business'>Business vector created by rawpixel.com - www.freepik.com</a>