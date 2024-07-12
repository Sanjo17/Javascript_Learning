
const immg = document.getElementById('imm');
const inputt = document.getElementById('in').value.toLowerCase();


async function fetchApi(){
    try{
        const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${inputt}`);
        if (!response.ok){
            throw new Error("404 error occcured plz try again");
        }
        const data = await response.json();
        console.log(data);
        const poki = data.sprites.front_default;
        immg.src = poki;
        immg.style.display = 'block';

        
    }
    catch(e){
        console.log(e);
    }
}