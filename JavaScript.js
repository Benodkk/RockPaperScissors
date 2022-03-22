let playerScore = 0;
let computerScore = 0;

function computerPlay() {
        let computerRandomChoices = ['Rock', 'Paper', 'Scissors'];
        let getRandomChoices = Math.floor(Math.random() * computerRandomChoices.length)
        return computerRandomChoices[getRandomChoices];
    }

function playRound(playerSelection, computerSelection){
        document.querySelector('.player-selection').textContent=(`You selected ${playerSelection}`); // Tutaj musialem uzyc `` zeby to zadzialalo
        document.querySelector('.computer-selection').textContent=(`Computer selected ${computerSelection}`);
        document.querySelector('.player-score').textContent="Player points: "+playerScore;
        document.querySelector('.comp-score').textContent="Computer points: "+computerScore;   

        if ((playerSelection=='Paper') && (computerSelection=='Rock')){
                playerScore++
                document.querySelector('.round-result').textContent=('You won the round!')  
                document.querySelector('.player-score').textContent="Player points: "+playerScore;
        }
        else if ((playerSelection=='Paper') && (computerSelection=='Scissors')){
                computerScore++
                document.querySelector('.round-result').textContent=('You lose the round!')
                document.querySelector('.comp-score').textContent="Computer points: "+computerScore;       
        }
        else if((playerSelection=='Scissors') && (computerSelection=='Rock')){
                computerScore++
                document.querySelector('.round-result').textContent=('You lose the round!')
                document.querySelector('.comp-score').textContent="Computer points: "+computerScore;     
        }
        else if ((playerSelection=='Scissors')&&(computerSelection=='Paper')){
                playerScore++
                document.querySelector('.round-result').textContent=('You won the round!');
                document.querySelector('.player-score').textContent="Player points: "+playerScore;  
        }
        else if((playerSelection=='Rock') && (computerSelection=='Paper')){
                computerScore++
                document.querySelector('.round-result').textContent=('You lose the round!')
                document.querySelector('.comp-score').textContent="Computer points: "+computerScore;    
        }
        else if ((playerSelection=='Rock') && (computerSelection=='Scissors')){
                playerScore++
                document.querySelector('.round-result').textContent=('You won the round!');
                document.querySelector('.player-score').textContent="Player points: "+playerScore; 
        }
        else {
                document.querySelector('.round-result').textContent=('Tie!')
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
        if (playerScore==5){
                document.querySelector('.final-result').textContent='You won the Match'
        }
        else if (computerScore==5){
                document.querySelector('final-result').textContent='You lose the Match'
        }
}









Paper.addEventListener('click',chosePaper)

Rock.addEventListener('click',choseRock)

Scissors.addEventListener('click',choseScissors)