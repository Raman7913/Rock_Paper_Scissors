function getComputerChoice(){
    let a = Math.random();
    if(a>0.33&&a<0.66){
        return "paper";
    }
    else if(a<0.33){
        return "rock";
    }
    else{
        return "scissor";
    }
}
let userSelection=prompt("enter rock paper or scissor:");
let computerSelection=getComputerChoice();
playRound(userSelection,computerSelection);
function playRound(userSelection,computerSelection){
    console.log("user selected: " + userSelection + "\ncomputer selected: " + computerSelection);
    if(userSelection=="rock"){
        if(computerSelection=="rock"){
            console.log("draw");
        }
        else if(computerSelection=="paper"){
            console.log("computer wins");
        }
        else if(computerSelection=="scissor"){
            console.log("user wins");
        }
    }
    else if(userSelection=="paper"){
        if(computerSelection=="rock"){
            console.log("user wins");
        }
        else if(computerSelection=="paper"){
            console.log("draw");
        }
        else if(computerSelection=="scissor"){
            console.log("computer wins");
        }
    }
    else if(userSelection=="scissor"){
        if(computerSelection=="rock"){
            console.log("computer wins");
        }
        else if(computerSelection=="scissor"){
            console.log("draw");
        }
        else if(computerSelection=="paper"){
            console.log("user wins");
        }
    }
}