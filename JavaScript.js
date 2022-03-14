let x = Math.random()*3;

function computerPlay(){
    if (x<1) {console.log('Paper');
}   else if (x<2) {console.log('Rock');
}   else {console.log('Scissors');
}
}
computerPlay()
console.log (x);