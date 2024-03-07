//  playGame();

let rock=document.querySelector('.rock');
rock.addEventListener('click',()=>{playRound("rock",getComputerChoice());});

let paper=document.querySelector('.paper');
paper.addEventListener('click',()=>{playRound("paper",getComputerChoice());});

let scissor=document.querySelector('.scissor');
scissor.addEventListener('click',()=>{playRound("scissor",getComputerChoice());});

function getComputerChoice(){
    let a = Math.floor(Math.random()*3);
    if(a==0){
        return "paper";
    }
    else if(a==1){
        return "rock";
    }
    else if(a==2){
        return "scissor";
    }
}
function playRound(userSelection,computerSelection){
    console.log("user selected: " + userSelection + "\ncomputer selected: " + computerSelection);
    if(userSelection=="rock"){
        if(computerSelection=="rock"){
            console.log("draw");
            // return("draw");
        }
        else if(computerSelection=="paper"){
            console.log("computer wins");
            // return("computer wins");
        }
        else if(computerSelection=="scissor"){
            console.log("user wins");
            // return("user wins");
        }
    }
    else if(userSelection=="paper"){
        if(computerSelection=="rock"){
            console.log("user wins");
            // return("user wins");
        }
        else if(computerSelection=="paper"){
            console.log("draw");
            // return("draw");
        }
        else if(computerSelection=="scissor"){
            console.log("computer wins");
            // return("computer wins");
        }
    }
    else if(userSelection=="scissor"){
        if(computerSelection=="rock"){
            console.log("computer wins");
            // return("computer wins");
        }
        else if(computerSelection=="scissor"){
            console.log("draw");
            // return("draw");
        }
        else if(computerSelection=="paper"){
            console.log("user wins");
            // return("user wins");
        }
    }
}
// function playGame(){
//     let userwins=0;
//     let computerwins=0;
//     for(let i=1;i<=5;i++){
//         let userSelection=prompt("enter rock paper or scissor:").toLowerCase();
//         let computerSelection=getComputerChoice();
//         let a = playRound(userSelection,computerSelection);
//         if(a=="computer wins")
//             computerwins++;
//         if(a=="user wins")
//             userwins++;
//     }
//     if(computerwins>userwins){
//         console.log("computer wins with" + computerwins + " wins");
//     }
//     else if(userwins>computerwins){
//         console.log("user wins with" + userwins + " userwins");
//     }
//     else{
//         console.log("draw with" + userwins + " each");
//     }
// }