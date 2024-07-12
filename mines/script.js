const startbtn = document.getElementById("start-btn");
document.getElementById("refresh").onclick = ()=> refresh();

var mines = [];
var running = false;
function mineIndex(number){
    console.log(number);
    let s = [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24];
    let max = 24;
    let h = [];
    for(let i=0;i<number;i++){
        
        let f = Math.floor(Math.random()*max);
        console.log(f); 
        max--;
        h.push(s[f]);
        s.pop(f);

    }
    console.log(h);
    return h;

}

startbtn.onclick = function(){
   let number = document.getElementById('mines').value;
    running = true;
    let mines = mineIndex(number);
    console.log(mines);
    for (let i=0;i<24;i++){
        for (let j=0;j<mines.length;j++){

        
        if (mines[j] == i){
            console.log(i);
            document.getElementById(String(i)).textContent = 1;

        }
    }
    
    }
}


document.addEventListener("DOMContentLoaded", function() {
    

    // Get all elements with the class "my-class"

    var elements = document.getElementsByClassName("child");
   
    // Iterate over the elements and attach a click event listener to each
    for (var i = 0; i < elements.length; i++) {
        elements[i].addEventListener("click", function(event) {

            if (!running){
                refresh();
            }
            
            // Get the text content of the clicked element
            var text = event.target.textContent;
            // Log the text content to the console
            if (text == 1){
                console.log("mine");
                event.target.style.backgroundColor = 'red';
                running=false;
                
                
                
            }
            else if(text == 0){
                console.log("not mine");
                event.target.style.backgroundColor = 'green';
                

                
            }
        });
    }
});

function refresh(){
    location.reload();
}

