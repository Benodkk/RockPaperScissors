let playerScore = 0;
let computerScore = 0;

let x = Math.random()*3;
function computerPlay(){
    if (x<1) {return ('Paper');
}   else if (x<2) {return ('Rock');
}   else {return ('Scissors');
}
}

function playRound(playerSelection, computerSelection){
        console.log (`You selected ${playerSelection}`); // Tutaj musialem uzyc `` zeby to zadzialalo
        console.log (`Computer selected ${computerSelection}`);
        if ((playerSelection=='Paper') && (computerSelection=='Rock')){
                console.log ('You won!')   
        }
        else if ((playerSelection=='Paper') && (computerSelection=='Scissors')){
                console.log ('You lose.')   
        }
        else if((playerSelection=='Scissors') && (computerSelection=='Rock')){
                console.log ('You lose.')   
        }
        else if ((playerSelection=='Scissors')&&(computerSelection=='Paper')){
                console.log ('You won.')   
        }
        else if((playerSelection=='Rock') && (computerSelection=='Paper')){
                console.log ('You lose.')   
        }
        else if ((playerSelection=='Rock') && (computerSelection=='Scissors')){
                console.log ('You won.')   
        }
        else {
                console.log ('Tie!')
        }
}


const Paper= document.querySelector('.Paper')
const Rock= document.querySelector('.Rock')
const Scissors= document.querySelector('.Scissors')

function chosePaper(){
        game('Paper')
}
function choseRock(){
        game('Rock')
}
function choseScissors(){
        game('Scissors')
}

function game(playerChoice){
        playRound(playerChoice, computerPlay())
}

Paper.addEventListener('click',chosePaper)

Rock.addEventListener('click',choseRock)

Scissors.addEventListener('click',choseScissors)