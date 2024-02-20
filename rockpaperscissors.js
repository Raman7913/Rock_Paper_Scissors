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
console.log(getComputerChoice());