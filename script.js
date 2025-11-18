
function getComputerChoice() {
    const x=Math.floor(Math.random()*3);
    console.log(x);

    let computerchoice ; 
    
    if (x===0) {
        computerchoice="Rock";
    } else if (x===1) {
        computerchoice="Paper";
    } else {
        computerchoice="Scissors";
    }
    return computerchoice;
   
}

// Logs the human choice
function getHumanChoice(choice) {
    console.log("Human choice:", choice);
    return choice;
}

// Run this after the HTML has loaded
document.addEventListener("DOMContentLoaded", function () {
    // Grab all the choice images
    const images = document.querySelectorAll(".choice-image");

    // Attach a click listener to each image
    images.forEach(function (img) {
        img.addEventListener("click", function () {
            // Read the data-choice value from the clicked image
            const humanChoice = img.dataset.choice;        // "Rock" / "Paper" / "Scissors"

            // Get a fresh computer choice
            const computerChoice = getComputerChoice();    // also logs the random 0/1/2

            // Log both in order: computer, then human
            console.log("Computer choice:", computerChoice);
            getHumanChoice(humanChoice);
        });
    });
});

