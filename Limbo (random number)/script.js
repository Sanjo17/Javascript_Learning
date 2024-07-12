
document.addEventListener("DOMContentLoaded",()=>{
    const loadmore = document.getElementById('loadmore');
    const details = document.getElementById('details');
    loadmore.addEventListener("click",()=>{
        if(details.style.display== "none"|| details.style.display==""){
            details.style.display = "block";
            loadmore.textContent = "less details";
        }
        else{
            details.style.display = "none";
            loadmore.textContent = "load more";
        }
    });

});

let multiplier = 0;
let betamount = 0;
let balance = 1000;
document.getElementById('balance').textContent = 'balance: '+balance;
document.getElementById('multi-btn').onclick = function(){
    multiplier = document.getElementById('muli-value').value;
    console.log("multiplier = "+ multiplier);

}
document.getElementById('bet-btn').onclick = function(){
    betamount = document.getElementById('bet-amount').value;
    console.log("bet = "+ betamount);
    let prediction = predict();
    console.log(prediction);
    if (prediction >= multiplier){
        document.getElementById('re').style.color = 'green';
        betamount *= multiplier;
        balance += betamount;
        betamount = 0;
        document.getElementById('balance').textContent = 'balance: '+balance;
    
    }
    else{
        document.getElementById('re').style.color = 'red';
        balance -= betamount;
        betamount = 0;
        document.getElementById('balance').textContent = 'balance: '+balance;
    
    }
    document.getElementById('re').textContent  = prediction;


}


function predict(){
    let x = (Math.random()*10) + 1;
    console.log("rand = "+x);
    return Math.floor(x);
}


