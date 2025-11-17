
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

function getHumanChoice() {
    let humanchoice = prompt("Please enter either Rock, Paper or Scissors:");
    return humanchoice;
}




console.log(getComputerChoice());
console.log(getHumanChoice());