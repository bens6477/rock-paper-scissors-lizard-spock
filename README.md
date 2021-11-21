# Rock, Paper, Scissors, Lizard, Spock

## Site Overview
Challenge your luck against the computer in a contemporary variation of the traditional game of chance. This interactive front-end game introduces two additional variables - Lizard and Spock - adding complextiy to both the rules and gameplay.
However, the extra combinations of the game are displayed intuitively, as players select their attack directly from the winner hierarchy figure, removing the need to be fluent in the combination outcomes.
<br>
A countdown sequence triggers every time a selection is made, building anticipation before the winner of the point is revealed. The winner and loser are easily discerned through colour coding of the scores and the result message. Do you have what it takes to take on the computer?

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
1. [Deployment](#deployment)
1. [Credits](#credits)
    * [Content](#content)
    * [Media](#media)

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

### Wireframes


### Colour Scheme
* The site's main colours of black, white and navy blue and dark beige were chosen as a stonewashed pallet.
* A colour grid was created to evaluate appropriate colour pairings using the [Eight Shapes Color Grid](https://contrast-grid.eightshapes.com/?version=1.1.0&background-colors=&foreground-colors=%23ffffff%0D%0A%23000000%0D%0A%231b1d4e%0D%0A%2374522F%0D%0A%23A12B2B%0D%0A%23006100&es-color-form__tile-size=compact&es-color-form__show-contrast=aaa&es-color-form__show-contrast=aa&es-color-form__show-contrast=aa18&es-color-form__show-contrast=dnp). The left column shows that the all colours have an AAA contrast ratio of at least 7 over white backgrounds for excellent legibility.
* The dark beige colour was used to accentuate titles and key information, and to break away from the main navy blue theme colour.
* The shades of red and green were chosen with sufficient contrast on a white background, while providing enough intensity to quickly distinguish the winner and loser.
* From this it was decided that all fonts would be kept black upon either white or golden background colours in order to provide sufficient contrast for the users. The inversion was also used to highlight active classes or upon hovering over elements.
![Eight Shapes Color Grid](assets/images/readme/color-contrast.PNG)

## Features
### Instruction Page

### Game Area


### Integrated Attack Selection
The user selects their attack by clicking directly on the relevant icon in the image. Circular buttons are embedded over the each attack option so the user can intuitively relate their selection to the other possible attacks.

### Countdown Sequence
After the user selects and attack, a countdown sequence is triggered. The words "Rock", "Paper", "Scissors", "Lizard", "Spock" flash in the center of the screen before returning the outcome of the point. This creates anticipation over the result after the user locks in their selection. All selector buttons are disabled for the duration of the countdown to prevent the result from being overridden or from sending unaccepted inputs through the code.
![Countdown Sequence]()

### Responsive Layout
For wider screens, the user and computer game areas are side by side to optimally fill the window area. For thinner screens, such as mobiles and tablets, the player areas are stacked vertivally, giving the user the sense of playing directly in front of their opponent. CSS media queries were utilised to optimise the styling across the different screen sizes.

### Responsive Colouring
The winner and loser's scores are displayed in green and red respectively to provide and instant visual indicator of the victor. Additionally result text is coloured in accordance to the it user's outcome.
![Winner/Loser Colouring]()

^twin
### Outcome Feedback

### Declaring the Winner
Once either player reaches 10 point the winner is declared, returning a trophy image to the victor's game area and a red cross to the loserd's game area. All selector buttons are prevented from triggering from this point onwards, until the user selects to reset the game and play again. Should a selector be pressed, a Sweet Alert message will appear to reitterate this to the user.

### Error Catching


## Future Enhancements
Various additional features would bring a greater user experience to the website: 
* The addition of a two-player game, where two users can play against each other.


## Technology Used
* HTML, CSS and JavaScript programming languages
* [Google Fonts](https://fonts.google.com/specimen/Russo+One/) - 'Russo One' style 
* [Font Awesome](https://fontawesome.com/v5.15/icons/github) - GitHub and up-arrow icons
* [GitPod](https://www.gitpod.io/) - IDE for local developement
* [GIT](https://git-scm.com/) - Version Control
* [GitHub](https://github.com/) - to host the repositories for this project and the live website preview


## Testing ***
* **Functionality Testing**
    * Checked all links and images on the website were work correctly.
    * Checked all icons in the user image triggered the appropriate attack.
    * Checked all keyboard commands operated correctly, triggering the user selection (1-5), viewing instructions (I) and reseting the game (R).
    * Checked all elements were responsive to screen size.
    * 


* All links and images on the website work correctly and all elements are responsive to screen size.
* The website was tested across various browsers, including Google Chrome, Mozilla Firefox and Microsoft Edge.
### Developer Tools ***
* The Developer Tools function was used to test this across Google Chrome, Mozilla Firefox and Microsoft Edge to verify the site was fully responsive across the specificed screen witdhs and across different browsers.
* The website was responsive across screen sizes between 320px and 1600px in width. Content readablility was optimised by altering the size and positioning of elements. 
* The website was designed using a desktop-first approach, therefore the image resolutions were optimised to look better on larger screens. This resulted in a lower performance score on mobile devices as the image resolution was much larger than the maximum screen resolution.

*** Error Check Thiss!!!!
* **The performance of the website was significantly improved by importing the sweetalert2 JavaScript file script from the web URL <code>https://unpkg.com/sweetalert/dist/sweetalert.min.js</code> rather than from the JSDelivr CDN <code>//cdn.jsdelivr.net/npm/sweetalert2@11</code>. This halved the largest contenful paint time, which particularly improved the loading time on mobile devices.

* [Am I Responsive](http://ami.responsivedesign.is/#) was frequently used to check the responsiveness of the website accros different screen dimensions, ensuring that all content was dislpayed an the optimal manner.


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
* **Issue** - Generating the winner outcome.
    * **Resolution** - A standardised outcome array was set up for each selection option with the syntax <code>selectionArray = [win, win, lose, lose, draw]</code>, representing the user's outcome relative to the computer's selection. For example <code>rockArray = ['scissors', 'lizard', 'paper', 'spock', 'rock']</code>, where rock beats scissors, loses to paper and so forth. Subsequently, each selection array was nested within the larger <code>cases</code> array, creating one variable from which all combinations could be accessed. This meant that <code>cases[i][j]</code> could be used to create the outcome logic for any combination, where i represented the user's selection, j represented the computer's selection, and the j index determined the user's outcome (win, lose, draw). No tutorials were used when writing the code to detemine the winner.

* **Issue** - Embedding selection buttons within the attack options in the image.
    * **Resolution** - Instead of using conventional buttons, absolute poisitioning was used to position the selector buttons accordingly within the encasing image container div. This meant the user could click on the icon of their attack, rather than from an external point outside of the image. Additionally, positioning using percentages ensured the button orientation was constant across different screen sizes. [Adapted from Stack Overflow](https://stackoverflow.com/questions/24435397/click-particular-region-of-image)

* **Issue** - Creating a countdown feature before revealing the result.
    * **Resolution** - The <code>setTimeout()</code> timing event was used to dynamically cycle through the countdown procedure. The <code>countdown()</code> function contained another <code>setTimeout()</code> that self-referenced the <code>countdown()</code> function, creating a loop of nested time events. The loop was broken using if-statment logic after the countdwon iterations were complete. [Adapted from Carl Anderson](https://carlanderson.xyz/creating-timed-sequences-in-javascript-using-settimeout/)

* **Issue** - Capability for selector buttons to be pressed before countdown sequence was finished.
    * **Resolution** - The <code>buttonIncomplete</code> was initialised to false and was updated to true upon the user selecting an attack. While <code>buttonIncomplete</code> was true, no other attack options could be selected. Once the winner of the point had been declared, it was reassigned back to false and another option could be chosen. Similarly, once either player reached 10 points a Sweet Alert appears to inform the user to reset the game, and the selectors would not initiate the countdown sequence.

* **Issue** - Dynamically hiding elements from view during gameplay.
    * **Resolution** - Main games area were assigned and unassigned the .hide class using JavaScript depending on whether they were active or not. Applying <code>display:none</code> allowed for the element to be hidden from view and also occupy no space on the screen. A separate .hide-center class was applied to elements in the center area such as the result and countdown text. This instead applied <code>visibility:hidden</code> to hide the content from view while keeping the structural integrity of the html. [Adapted from Career Karma](https://careerkarma.com/blog/css-hide-element/)

* **Issue** - Functions running immediately when assigning event listeners.
    * **Resolution** - The syntax of the listener was assigned to <code>() => functionName(variable))</code> instead of simply <code>functionName(variable)</code>. If no variables were passed into the function, passing only <code>functionName</code> prevented the immediate running of the function. [Adapted from Stack Overflow](https://stackoverflow.com/questions/16310423/addeventlistener-calls-the-function-without-me-even-asking-it-to)
    
* **Issue** - Alerts disturbing the flow of events.
    * **Resolution** - Since the browser was forced to read <code>alert()</code> commands immediately, preceding code which had not been fully executed was stalled. For example the declaration of the winner stalled the rendering of images. The integration of sweetalert2 enabled alerts to be displayed dynamically without forcing all other code to stop. [Adapted from Sweet Alert](https://sweetalert2.github.io/)

* **Issue** - Resetting the board after each outcome was declared.
    * **Resolution** - To keep a fast paced flow to the game, after declating the winner of each point the images of each player's attack were shown for two seconds before the returning to the selection image. The <code>setTimeout()</code>, meaning the user did not need to press a button to acknowledge the result. The result text, however, remained unchanged in the center, should the player have missed the combination from the images.

### Unfixed Bugs
There are no known bugs left unfixed.


## Deployment
The site was deployed to GitHub pages. The steps to deploy are as follows:
1. In the GitHub repository, navigate to the repository for apprentice-brewing and then click on the Settings tab.
1. Click on the Pages tab from the list of options on the left hand side of the page.
1. Under Source click the drop-down menu labelled None and select main as the branch.
1. Once saved the link to the page will be provided above the ‘Source’ sub-section upon refreshing.
1. The live link can be found here - https://bens6477.github.io/rock-paper-scissors-lizard-spock/

## Credits
### Content
* Any code credits are provided in the [Bugs](#bugs) section.
* The icons in the footer and game area were taken from Font Awesome.
* All fonts were imported from Google Fonts.

### Media
* The main figure with attacks was taken from the images in this eBay [T-Shirt](https://www.ebay.co.uk/itm/273532646173). Each individual attack image was cropped from the parent image above.
* The trophy winner image was taken from [freepik](https://www.freepik.com/vectors/business).
* The red cross loser image was taken from [Wikimedia](https://upload.wikimedia.org/wikipedia/commons/thumb/5/5f/Red_X.svg/1024px-Red_X.svg.png).
The image displaying the website on different screens in this document was created using [Am I Responsive](http://ami.responsivedesign.is/#).