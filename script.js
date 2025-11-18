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
    const mainRow = document.querySelector(".main-row");

    // Grab all the choice images
    const images = document.querySelectorAll(".choice-image");

    // Grab result elements
    const resultsContainer = document.getElementById("results");
    const humanImg = document.getElementById("human-result-img");
    const computerImg = document.getElementById("computer-result-img");
    const humanWinnerLabel = document.getElementById("human-winner-label");
    const computerWinnerLabel = document.getElementById("computer-winner-label");
    const humanCross = document.getElementById("human-cross");
    const computerCross = document.getElementById("computer-cross");
    const humanScoreEl = document.getElementById("human-score");
    const computerScoreEl = document.getElementById("computer-score");

    let humanWins = 0;
    let computerWins = 0;


    // Helper to map choice -> image path (adjust base path if needed)
    const imageBasePath = "/Users/charliescott/OdinPractice/repos/rockpaperscissors/images/";
    function getImageSrc(choice) {
        // choice is "Rock", "Paper", "Scissors"
        return imageBasePath + choice.toLowerCase() + ".png";
    }

    // Update the UI after each round
        function updateResults(humanChoice, computerChoice) {
        // Show the results row
        resultsContainer.classList.add("show");

        // Set the images
        humanImg.src = getImageSrc(humanChoice);
        computerImg.src = getImageSrc(computerChoice);

        // Reset labels and crosses
        humanWinnerLabel.textContent = "";
        computerWinnerLabel.textContent = "";
        humanCross.classList.remove("show");
        computerCross.classList.remove("show");

        // Work out who wins
        const result = whoisthewinner(computerChoice, humanChoice);

        if (result === "It's a tie!") {
            humanWinnerLabel.textContent = "TIE";
            computerWinnerLabel.textContent = "TIE";
            // no score change
        } else if (result === "Computer wins!") {
            computerWinnerLabel.textContent = "WINNER";
            humanCross.classList.add("show");
            computerWins += 1;
        } else {
            // Human wins
            humanWinnerLabel.textContent = "WINNER";
            computerCross.classList.add("show");
            humanWins += 1;
        }

        // Update the scoreboard display
        humanScoreEl.textContent = humanWins;
        computerScoreEl.textContent = computerWins;

        console.log("Computer choice:", computerChoice);
        console.log("Result:", result);
    }


    // Attach a click listener to each image
    images.forEach(function (img) {
        img.addEventListener("click", function () {
            // Human choice from data-choice (e.g. "Rock")
            const humanChoice = getHumanChoice(img.dataset.choice);

            // Computer choice (e.g. "Paper")
            const computerChoice = getComputerChoice();

            // Update the screen
            updateResults(humanChoice, computerChoice);
            // 🔽 On first click, switch layout to side-by-side
            mainRow.classList.add("started");
        });
    });
});

