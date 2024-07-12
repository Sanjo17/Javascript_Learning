let counter = 0;

document.getElementById("increase").onclick = function(){
    counter++;
    document.getElementById("count").textContent = counter;
    color(counter);
}


document.getElementById("clear").onclick = function(){
    counter = 0;
    document.getElementById("count").textContent = counter;
    color(counter);

}


document.getElementById("decrease").onclick = function(){
    counter--;
    document.getElementById("count").textContent = counter;
    color(counter);

}

function color(counter){
    if(counter == 0){
        document.getElementById("count").style.color = 'aqua';
    }
    else if(counter>0){
        document.getElementById("count").style.color = 'green';

    }
    else{
        document.getElementById("count").style.color = 'red';

    }
}