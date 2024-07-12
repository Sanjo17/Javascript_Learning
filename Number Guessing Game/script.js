const guess_btn = document.getElementById('guess-btn');
const guess = document.getElementById('guess');
var attempt = 0;
var max = 10;
var min = 5;
guess_btn.onclick = function(){

    let randomm = Number(Math.floor(Math.random()*(max-min)+min));
    document.getElementById('rand').textContent = "rand = "+randomm;
    
    if(guess.value == 0){
        document.getElementById('result').textContent = "Plz type any number" ;

    }
    else if(guess.value < min || guess.value > max){
        document.getElementById('result').textContent = "plz guess between " + min + " and "+ max ;

    }
    else if( Number(guess.value)===randomm){
        document.getElementById('result').textContent = "Correct" ;

        document.getElementById('attempt').textContent = "total attempt = "+attempt;

    }
    else{
        document.getElementById('result').textContent = "inCorrect try again" ;

        attempt++;
        document.getElementById('attempt').textContent = "total attempt = "+attempt;


    }
}
// let guessednumber;
// let max = 10;
// let min = 8;
// let randomnumber = Math.floor(Math.random()*(max-min+1)+min);
// console.log(randomnumber);

// var running = true;

// while (running) {
//     guessednumber = Number(window.prompt("enther the number"));
//     if(randomnumber === guessednumber){
//         alert("coorect");
//         running = false;

//     }
//     else{
//         alert("incorect");
//         running = false;
//     }
// }