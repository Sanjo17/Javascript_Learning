
const weatherform = document.querySelector('.whetherform');
const cityinput = document.querySelector('.cityinput');
const card = document.querySelector(".card");
const apikey = "API_KEY";

weatherform.addEventListener('submit',async event =>{

    event.preventDefault();
    const city = cityinput.value;
    if(city){
        try{
            const data = await whetherdata(city);
            displaywhetherdata(data);
        }
        catch(e){
            console.log(e);
            displayerror(e);
        }
    }
    else{
        displayerror("plz enter a city");
    }
});

async function whetherdata(city){
    const apiurl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apikey}`;
    const response = await fetch(apiurl);

    if(!response){
        throw new Error("could noit fetch");
    }
    return await response.json();

}
function displaywhetherdata(data){
    const {name: city,
        main:{temp,humidity},
        weather:[{description,id}]} = data;
        card.textContent ="";
        card.style.display = "flex";

    const citydisplay = document.createElement("h1");
    const tempDisplay = document.createElement("h2");
    const Humidity = document.createElement("h3");
    const errormes = document.createElement("p");
    const imgd = document.createElement("img");

    let y = getwhetherimg(id);
    let imgpath = `/assets/${y}.jpeg`    

    citydisplay.textContent  = city;
    citydisplay.classList.add("cityDisplay");
    card.appendChild(citydisplay);
    tempDisplay.textContent = `${(temp -273.15).toFixed(1) } C`;
    card.appendChild(tempDisplay);
    Humidity.textContent = `humidity ${humidity}`;
    card.appendChild(Humidity);
    imgd.src = imgpath;
    card.appendChild(imgd);

}
function getwhetherimg(whetherid){
    switch(true){
        case (whetherid>200 && whetherid<300):
            return 'rainy';
        case (whetherid>300 && whetherid<400):
            return 'normal';
        case (whetherid === 800):
            return 'sunny';
        default:
            return "normal";}
            

}
function displayerror(messege){
    const errordisplay = document.createElement("p");
    errordisplay.textContent = messege;
    errordisplay.classList.add("errordisplay");
    card.textContent = "";
    card.style.display = "flex";
    card.appendChild(errordisplay);
}   
