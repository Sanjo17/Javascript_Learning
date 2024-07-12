

function onclickk(){
    const dice = document.getElementById('dice').value;
    let diceIndex = [];
    let img = [];
    if(dice>0){
        for(let i = 0; i < dice ; i++){
            let j = Math.floor(Math.random()*6+1);
            diceIndex.push(j);
            img.push(`<img src="assets/dice-${j}.svg" alt = ${j}>`);

        }
        console.log(img);

    }
    else{
        alert("enter the number greater than 0");
    }

    document.getElementById('rolling').innerHTML = img.join(" ");
}   