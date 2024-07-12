

function updateClock(){
    const clock = new Date();
    let hours = clock.getHours();
    const meridian = hours > 12 ? "PM" : "AM";  
    hours = hours % 12 || 12;
    hours = hours.toString().padStart(2,0);
    const minute = clock.getMinutes().toString().padStart(2,0);
    const sec = clock.getSeconds().toString().padStart(2,0);
    const time = `${hours}:${minute}:${sec} ${meridian}`;
    document.getElementById('clock').textContent = time;
    let colors = ["red","blue","green"];
    let j = Math.floor(Math.random()* colors.length + 1);
    // let i = Math.floor(Math.random()* colors.length + 1);
    document.getElementById('cont').style.backgroundColor = colors[j];
    // document.getElementById('cont').style.color = colors[i];
    
    
}

updateClock();
setInterval(updateClock,1000);