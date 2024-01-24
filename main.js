const response = await fetch("./quotes.json");
const quotes = await response.json();

console.log(quotes);

const tagline = document.getElementById("tagline");

setInterval(() => {
    let randomNumber = Math.floor(Math.random() * quotes.length);
    tagline.innerHTML = quotes[randomNumber];
}, 2000);
