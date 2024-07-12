
function fullclear(){
    document.getElementById('display').innerText = "0";
}

function back(){
    let display = document.getElementById("display");
    display.innerText = display.innerText.slice(0,-1) || "0";
}
function input(value){
    let display = document.getElementById("display");
    if(display.innerText === "0" && value !== "."){
        display.innerText = value;
    }else {
        display.innerText += value;
    }
}

function calculate(){
    let display = document.getElementById("display");
    try{
    display.innerText = eval(display.innerText);
    }
    catch{
        display.innerText = "error";
    }
    
}

