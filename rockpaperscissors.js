playGame();

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
function playRound(userSelection,computerSelection){
    console.log("user selected: " + userSelection + "\ncomputer selected: " + computerSelection);
    if(userSelection=="rock"){
        if(computerSelection=="rock"){
            console.log("draw");
            return("draw");
        }
        else if(computerSelection=="paper"){
            console.log("computer wins");
            return("computer wins");
        }
        else if(computerSelection=="scissor"){
            console.log("user wins");
            return("user wins");
        }
    }
    else if(userSelection=="paper"){
        if(computerSelection=="rock"){
            console.log("user wins");
            return("user wins");
        }
        else if(computerSelection=="paper"){
            console.log("draw");
            return("draw");
        }
        else if(computerSelection=="scissor"){
            console.log("computer wins");
            return("computer wins");
        }
    }
    else if(userSelection=="scissor"){
        if(computerSelection=="rock"){
            console.log("computer wins");
            return("computer wins");
        }
        else if(computerSelection=="scissor"){
            console.log("draw");
            return("draw");
        }
        else if(computerSelection=="paper"){
            console.log("user wins");
            return("user wins");
        }
    }
}
function playGame(){
    let userwins=0;
    let computerwins=0;
    for(let i=1;i<=5;i++){
        let userSelection=prompt("enter rock paper or scissor:").toLowerCase();
        let computerSelection=getComputerChoice();
        let a = playRound(userSelection,computerSelection);
        if(a=="computer wins")
            computerwins++;
        if(a=="user wins")
            userwins++;
    }
    if(computerwins>userwins){
        console.log("computer wins with" + computerwins + " wins");
    }
    else if(userwins>computerwins){
        console.log("user wins with" + userwins + " userwins");
    }
    else{
        console.log("draw with" + userwins + " each");
    }
}