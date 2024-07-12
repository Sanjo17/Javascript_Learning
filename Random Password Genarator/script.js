const lowF = true;
const highF = true;
const numF = true;
const symbolF = true;




document.getElementById('btn').onclick = function(){
    let all = "";
    let pass = "";
    const low = 'abcdefghijklmnopqrstuvwxyz';
    const high = low.toUpperCase();
    const num = '0123456789';
    const symbol = '/*-_!';
    const len = 8;

    all += lowF ? low : "";
    all += highF ? high : "";
    all += numF ? num : "";
    all += symbolF ? symbol : "";

    for (let i = 0; i<len; i++){
        let y = Math.floor(Math.random()*all.length);
        pass += all[y];
    }

    document.getElementById('password').textContent = pass;





    
}

