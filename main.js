//---- Professor Data Generator [Incomplete]
import { calculateAge, professors } from './professors.js';

const professorImageSubmit = document.getElementById("professorImage-submit");
const professorImageResults = document.getElementById("professorImage-results");
const professorImageGameWin = document.getElementById("professorImage-gamewin");
const professorImageGameLose = document.getElementById("professorImage-gamelose");

const professorNameSubmit = document.getElementById("professorName-submit");
const professorNameResults = document.getElementById("professorName-results");
const professorNameGameWin = document.getElementById("professorName-gamewin");
const professorNameGameLose = document.getElementById("professorName-gamelose");

const ageRevealWin = document.getElementById("ageReveal-win")
const ageRevealLose = document.getElementById("ageReveal-lose")
const nameResultWin = document.getElementById("nameResult-win")
const nameResultLose = document.getElementById("nameResult-lose")

const professorDepartmentSubmit = document.getElementById("professorDepartment-submit");
const professorDepartmentResults = document.getElementById("professorDepartment-results");
const professorDepartmentGameWin = document.getElementById("professorDepartment-gamewin");
const professorDepartmentGameLose = document.getElementById("professorDepartment-gamelose");

const professorTitleSubmit = document.getElementById("professorTitle-submit");
const professorTitleResults = document.getElementById("professorTitle-results");
const professorTitleGameWin = document.getElementById("professorTitle-gamewin");
const professorTitleGameLose = document.getElementById("professorTitle-gamelose");

let randomIndex = Math.floor(Math.random() * professors.length);
let currentProfessor = professors[randomIndex];

updateProfessor(currentProfessor);

function updateProfessor(professor) {
    const imageBasePath = "./images/professors/";
    professorNameSubmit.innerText = professor.name;
    professorNameResults.innerText = professor.name;
    professorNameGameWin.innerText = professor.name;
    professorNameGameLose.innerText = professor.name;

    professorImageSubmit.src = imageBasePath + professor.imageUrl;
    professorImageResults.src = imageBasePath + professor.imageUrl;
    professorImageGameWin.src = imageBasePath + professor.imageUrl;
    professorImageGameLose.src = imageBasePath + professor.imageUrl;

    ageRevealWin.innerText = professor.age;
    ageRevealLose.innerText = professor.age;
    nameResultWin.innerText = professor.name;
    nameResultLose.innerText = professor.name;

    professorDepartmentSubmit.innerText = professor.department;
    professorDepartmentResults.innerText = professor.department;
    professorDepartmentGameWin.innerText = professor.department;
    professorDepartmentGameLose.innerText = professor.department;

    professorTitleSubmit.innerText = professor.title;
    professorTitleResults.innerText = professor.title;
    professorTitleGameWin.innerText = professor.title;
    professorTitleGameLose.innerText = professor.title;
}

//---- Age Slider, Submit, and Reset [Complete]
const ageSlider = document.getElementById('ageSlider');
const ageInput = document.getElementById('ageInput');
const resetButton = document.getElementById('reset');
const submitButton = document.getElementById('submit');


document.addEventListener('DOMContentLoaded', function() {
    // Sync age input with slider value
    ageSlider.addEventListener('input', function() {
        ageInput.value = ageSlider.value;
    });

    // Handle the submit button click
    submitButton.addEventListener('click', function() {
        checkAgeGuess();
    });

    // Handle the reset button click
    resetButton.addEventListener('click', function() {
        resetSlider();
    });

    // Add event listener for "Enter" key on the input field
    ageInput.addEventListener('keydown', function(event) {
        if (event.key === 'Enter') {
            checkAgeGuess();
        }
    });
});

// Function to check the guessed age
function checkAgeGuess() {
    const guessedAge = ageInput.value;

    if (parseInt(guessedAge) === parseInt(currentProfessor.age)) {
        // Age guessed correctly
        navigateToView('gamewin');
    } else {
        // Age guessed incorrectly
        handleWrongGuess(); // Update fail X icons
        if (wrongGuesses < maxWrongGuesses) {
            navigateToView('retry-cont'); // Show retry view if wrong guess limit not reached
        } else {
            navigateToView('gamelose'); // Navigate to lose view if max wrong guesses reached
        }
    }
}

// Function to reset the slider and input value
function resetSlider() {
    ageSlider.value = 60; // Reset slider to default value (60)
    ageInput.value = 60;  // Reset input to default value (60)
}

document.addEventListener('DOMContentLoaded', () => {
    const ageInput = document.getElementById('ageInput');
    const ageSlider = document.getElementById('ageSlider');

    // Event listener for when the input field loses focus
    ageInput.addEventListener('blur', () => {
        let value = parseInt(ageInput.value);

        // Check if the value is out of bounds
        if (value < 20) {
            ageInput.value = 20;  // Reset to 20
        } else if (value > 100) {
            ageInput.value = 100;  // Reset to 100
        }

        // Update the slider to match the input value
        ageSlider.value = ageInput.value;
    });

    // Event listener for the slider
    ageSlider.addEventListener('input', () => {
        ageInput.value = ageSlider.value; // Update input field when slider is changed
    });
});



//---- Transition Between Views
const submitView = document.querySelector('.submit-view');
const retryView = document.querySelector('.results-view');
const gameWinView = document.querySelector('.gamewin-view');
const gameLoseView = document.querySelector('.gamelose-view');
const resultsView = document.querySelector('.results-view');
const tryAgainButton = document.getElementById('tryAgain');
const resultsPrompt = document.getElementById('resultsPrompt');
const resultsPromptSub = document.getElementById('resultsPromptSub');
const failXImages = document.querySelectorAll('.fail-x');
const playAgainButtonWin = document.getElementById('playAgain-win');
const playAgainButtonLose = document.getElementById('playAgain-lose')

// Function to toggle between views
function navigateToView(view) {
    // Hide all views first
    gameLoseView.classList.add('hidden')
    gameWinView.classList.add('hidden');
    retryView.classList.add('hidden');
    submitView.classList.add('hidden');

    // Show the appropriate view based on the result
    if (view === 'gamewin') {
        gameWinView.classList.remove('hidden');
    } else if (view === 'retry-cont') {
        retryView.classList.remove('hidden');
    } else if (view === 'gamelose') {
        gameLoseView.classList.remove('hidden');
    }
}

let wrongGuesses = 0;
const maxWrongGuesses = 5;

// Reset fail X icons when Try Again is clicked
tryAgainButton.addEventListener('click', function() {
    // Hide the results view and show the submit view
    resultsView.classList.add('hidden');
    submitView.classList.remove('hidden');
});

// Function to handle wrong guesses and update fail X icons
function handleWrongGuess() {
    if (wrongGuesses < maxWrongGuesses) {
        const guessedAge = parseInt(ageInput.value);
        const actualAge = currentProfessor.age;
        const ageDifference = guessedAge - actualAge;

        // Update the prompt depending on how close the guess is
        if (ageDifference > 15) {
            resultsPrompt.innerText = "TOO old!";
            resultsPromptSub.innerText = "You're way off!";
        } else if (ageDifference > 5) {
            resultsPrompt.innerText = "Too old!";
            resultsPromptSub.innerText = "But you're getting there!";
        } else if (ageDifference === 1 || ageDifference === 2) {
            resultsPrompt.innerText = "Too old...";
            resultsPromptSub.innerText = "but you're SO close!";
        } else if (ageDifference === -1 || ageDifference === -2) {
            resultsPrompt.innerText = "Too young...";
            resultsPromptSub.innerText = "but you're SO close!";
        } else if (ageDifference < -15) {
            resultsPrompt.innerText = "TOO young!";
            resultsPromptSub.innerText = "You're way off!";
        } else if (ageDifference < -5) {
            resultsPrompt.innerText = "Too young!";
            resultsPromptSub.innerText = "But you're getting there!";
        }

        // Change the next X icon to red
        failXImages[wrongGuesses].src = 'images/x-maroon.svg';
        wrongGuesses++;
    }
}

document.addEventListener('DOMContentLoaded', () => {
    // Function to fade in each X with a delay
    function displayXs() {
        failXImages.forEach((x, index) => {
            // Apply staggered delay for each X
            x.style.animationDelay = `${index * 0.2}s`; // Delay each X by 0.2 seconds
            x.classList.add('fade-in-x'); // Add the fade-in animation class
        });
    }

    // Example: Call this function when you want to display the Xs
    displayXs();
});



document.addEventListener('DOMContentLoaded', () => {

    // Function to show the results with fade-in effects
    function displayResults() {
        // Add fade-in class to the main prompt
        resultsPrompt.classList.add('fade-in');

        // Add a delayed fade-in class to the sub-prompt
        setTimeout(() => {
            resultsPromptSub.classList.add('fade-in-delay');
        }, 500); // Adjust the delay as needed (500ms here)
    }

    // Example: Call this function when you want to display the results
    // This should be triggered after the user submits a guess
    displayResults();
});


function resetGame() {
    // Reset wrong guesses
    wrongGuesses = 0;

    // Reset fail X icons
    failXImages.forEach((failX) => {
        failX.src = 'images/x.svg'; // Reset all fail X icons to their original state
    });

    // Reset slider and input values to default
    resetSlider();

    // Generate a new professor (ensure it’s not the same as the current one)
    let newProfessorIndex;
    do {
        newProfessorIndex = Math.floor(Math.random() * professors.length);
    } while (newProfessorIndex === randomIndex);

    // Update the current professor
    randomIndex = newProfessorIndex;
    currentProfessor = professors[randomIndex];

    // Update professor information
    updateProfessor(currentProfessor);

    // Hide game lose and game win views, show the submit view
    gameLoseView.classList.add('hidden');
    gameWinView.classList.add('hidden');
    submitView.classList.remove('hidden');
}

playAgainButtonWin.addEventListener('click', function() {
    resetGame();
});

playAgainButtonLose.addEventListener('click', function() {
    resetGame();
});

// ----- Tutorial

const tutorialBtn = document.getElementById("tutorialBtn");
const tutorialOverlay = document.querySelector(".tutorial-overlay");
const closeTutorialBtn = document.getElementById("closeTutorial");
const tutorialContent = document.querySelector('.tutorial-content');

// Hide tutorial overlay when close button is clicked
closeTutorialBtn.addEventListener("click", () => {
  tutorialOverlay.classList.add("hidden");
});

// Show tutorial overlay when button is clicked
tutorialBtn.addEventListener("click", () => {
  tutorialOverlay.classList.remove("hidden");
});

document.addEventListener('DOMContentLoaded', () => {
    // Function to open the tutorial screen
    function openTutorial() {
        tutorialOverlay.classList.remove('hidden');
        tutorialOverlay.classList.add('fade-in');
        tutorialContent.classList.add('slide-up');
    }

    // Function to close the tutorial screen
    function closeTutorial() {
        setTimeout(() => {
            tutorialOverlay.classList.add('hidden');
            tutorialOverlay.classList.remove('fade-in');
            tutorialContent.classList.remove('slide-up');
        }, 500);
    }

    // Event listeners to open and close the tutorial
    tutorialBtn.addEventListener('click', openTutorial);
});
