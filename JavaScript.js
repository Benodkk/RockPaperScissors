let playerScore = 0;
let computerScore = 0;

let x = Math.random()*3;
function computerPlay(){
    if (x<1) {return ('paper');
}   else if (x<2) {return ('rock');
}   else {return ('scissors');
}
}
computerPlay()
console.log (x);


function playRound(playerSelection, computerSelection){
    if ((playerSelection=='paper')&&computerSelection=='rock') {
        playerScore++;
        return ('Computer chose rock, you won');
}   else if ((playerSelection=='paper')&&computerSelection=='scissors') {
        computerScore++;
        return ('Computer chose scissors, you lose');
}   else if ((playerSelection=='rock')&&computerSelection=='scissors') {
        playerScore++;
        return ('Computer chose scissors, you won');
}   else if ((playerSelection=='rock')&&computerSelection=='paper') {
        computerScore++;
        return ('Computer chose paper, you lose');
}   else if ((playerSelection=='scissors')&&computerSelection=='paper') {
        playerScore++;
        return ('Computer chose paper, you won');
}   else if ((playerSelection=='scissors')&&computerSelection=='rock') {
        computerScore++;
        return ('Computer chose rock,you lose');
}   else {return ('tie');
}
}



for (let i = 0; i < 5; i++) {
        let playerSelection = (prompt("Choose:Rock, Paper or Scissors").toLowerCase());
        let computerSelection = computerPlay();
        console.log(playRound(playerSelection, computerSelection));
}

console.log ("You got "+playerScore+" points");
console.log ("Computer got "+computerScore+" points");

function game(){
        if (playerScore>computerScore) {
                console.log('You won the match')
        }
        else if (computerScore>playerScore) {
                console.log('You lose the match')
        }
        else {console.log('Its a tie')}
}
game()
     

