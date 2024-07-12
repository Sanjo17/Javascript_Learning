

const playarea = document.getElementById('playarea');
const playerdiv = document.getElementById('img1');
const computerdiv = document.getElementById('img2');
const actions = ['paper','rock','scissor'];


function startgame(action){
    console.log(action);
    choose = Math.floor(Math.random()*3);
    guess = actions[choose];
    console.log(guess);
    action == guess ? console.log("same") : console.log("not same");
    
    let g = `<img src="/assets/${action}.jpeg"  height="80">`;
    let h = `<img src="/assets/${guess}.jpeg"  height="80">`;
    
  
    
    let y = rule(action,guess);
    playarea.textContent = y;
    
    

    
}
function rule(player,computer){
    if(player == computer){
        console.log("tie");
        return 'tie'
    }
    else {
        if (player=='paper' & computer == 'rock'){
            console.log("player won");
            return 'player won'
        }
        else  if(player == 'scissor' & computer == 'paper'){
            console.log('player won');
            return 'player won'
        }
        else if(player == 'rock' & computer=='scissor'){
            console.log('player won');
            return 'player won'
        }
        else{
            console.log('computer won');
            return 'computer won'
        }
    }

}

