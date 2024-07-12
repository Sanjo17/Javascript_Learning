const display = document.getElementById('display');
let running = false;
let start = 0;
let end = 0;
let timer = null;

function starting(){
    if(!running){
        start = Date.now() - end;
        timer = setInterval(update,10);
        running = true;
    }
}
function stop(){
    clearInterval(timer);
    end = Date.now() - start;
    running = false;

}
function reset(){
    clearInterval(timer);
    start =0;
    end = 0;
    running = false;


    display.textContent = "00:00:00:00";
}
function update(){
    let current = Date.now();
    end = current - start
    let hours = Math.floor(end/(1000*60*60));
    let min = Math.floor(end/(1000*60) % 60);
    let sec = Math.floor(end/ 1000 % 60);
    let mili = Math.floor(end % 1000 / 10);
    hours = String(hours).padStart(2,0);
    min = String(min).padStart(2,0);
    sec = String(sec).padStart(2,0);
    mili = String(mili).padStart(2,0);
    display.textContent = `${hours}:${min}:${sec}:${mili}`;
}