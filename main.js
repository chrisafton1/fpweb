const response = await fetch("./settings.json");
const settings = await response.json();

console.log(settings);

const tagline = document.getElementById("tagline");
const link = document.getElementById("button");

link.setAttribute("href", settings.button);

setInterval(() => {
    let randomNumber = Math.floor(Math.random() * settings.quotes.length);
    tagline.innerHTML = settings.quotes[randomNumber];
}, 2000);
