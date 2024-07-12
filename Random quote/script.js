var quotes = {
    author1 : "this is the begining ",
    author2 : "this is the end"
};


function fetchRandomQuote() {
    return new Promise((resolve, reject) => {
        const data = null;

        const xhr = new XMLHttpRequest();
        xhr.withCredentials = true;

        xhr.addEventListener('readystatechange', function () {
            if (this.readyState === this.DONE) {
                try {
                    const jsonResponse = JSON.parse(this.responseText);
                    resolve(jsonResponse);
                } catch (error) {
                    reject('Error parsing JSON: ' + error);
                }
            }
        });

        xhr.open('GET', 'https://quotes15.p.rapidapi.com/quotes/random/?language_code=en');
        xhr.setRequestHeader('x-rapidapi-key', '9d7802fc88mshabfad24cc782966p1a948cjsn8689fe066b6c');
        xhr.setRequestHeader('x-rapidapi-host', 'quotes15.p.rapidapi.com');

        xhr.send(data);
    });
}

function datasetting (){
    // Usage example:
// fetchRandomQuote()
//     .then(quote => console.log(quote))
//     .catch(error => console.error(error));

    fetchRandomQuote()
    .then(quote => quote => document.getElementById("quote-text").innerHTML = quote["content"])
    .catch(error => console.error(error));
    fetchRandomQuote()
    .then(quote => quote => document.getElementById("quote-author").innerHTML = quote["originator"]["name"])
    .catch(error => console.error(error));
}
function satha(){
let i = getRndInteger(0,2);
    document.getElementById("quote-text").innerHTML = Object.values(quotes)[i];
    document.getElementById("quote-author").innerHTML = Object.keys(quotes)[i];
}



function nextQuote(){

    // apii method
    // datasetting();

    // sattha mehtod

    satha();


}


function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min) ) + min;
  }

