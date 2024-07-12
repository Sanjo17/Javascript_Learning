const f = document.getElementById('toFarenhit');
const c = document.getElementById('toCeleuis');
const m = document.getElementById('messege');
var num = document.getElementById('temp').textContent;
let temp;

function convert(){
    if(f.checked){
        temp = Number(num);
        temp = temp*9/5 + 32;
        m.textContent = temp.toFixed(1)+" F";

    }
    else if(c.checked){
        temp = Number(num);
        temp = (temp-32)*(5/9);
        m.textContent = temp.toFixed(1)+" C";


    }
    else{
        m.textContent = "click an option"
    }
}