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
    if ((playerSelection=='paper')&&computerSelection=='rock') {return ('you won');
}   else if ((playerSelection=='paper')&&computerSelection=='scissors') {return ('you lose');
}   else if ((playerSelection=='rock')&&computerSelection=='scissors') {return ('you won');
}   else if ((playerSelection=='rock')&&computerSelection=='paper') {return ('you lose');
}   else if ((playerSelection=='scissors')&&computerSelection=='paper') {return ('you won');
}   else if ((playerSelection=='scissors')&&computerSelection=='rock') {return ('you lose');
}   else {return ('tie');
}
}

const playerSelection = ("PaPer".toLowerCase());
const computerSelection = computerPlay();
console.log(playRound(playerSelection, computerSelection));
console.log (playerSelection)