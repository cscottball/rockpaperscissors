// Generates a random choice for the computer
function getComputerChoice() {
    const x=Math.floor(Math.random()*3);
    

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
    return choice;
}

// Determines the winner based on computer and human choices
function whoisthewinner(computer, human) {
    if (computer === human) {
        return "It's a tie!";
    }   else if ((computer === "Rock" && human === "Scissors") ||
               (computer === "Paper" && human === "Rock") ||
               (computer === "Scissors" && human === "Paper")) {
        return "Computer wins!";
    }   else {
        return "Human wins!";
    }    
}   

// Run this after the HTML has loaded
document.addEventListener("DOMContentLoaded", function () {
    // Grab all the choice images
    const images = document.querySelectorAll(".choice-image");

    // Attach a click listener to each image
    images.forEach(function (img) {
        img.addEventListener("click", function () {
            // 1) Human choice from the clicked image (e.g. "Rock")
            const humanChoice = getHumanChoice(img.dataset.choice);

            // 2) Get a fresh computer choice (e.g. "Paper")
            const computerChoice = getComputerChoice();

            // 3) Work out who wins
            const result = whoisthewinner(computerChoice, humanChoice);

            // 4) Log everything
            console.log("Human choice:", humanChoice);
            console.log("Computer choice:", computerChoice);
            console.log("Result:", result);
        });
    });
});

