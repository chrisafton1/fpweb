const tagline = document.getElementById("tagline");

const options = [
    "Join the discord you silly goober :3",
    "Join the discord you silly goober :3",
    "Join the discord you silly goober :3",
    "JOIN IT",
    "Pwease join it :3",
    "Epic discord server for femboys :3",
    "Epic discord server for femboys :3",
    "Epic discord server for femboys :3",
    "Epic discord server for femboys :3",
    "Epic discord server for femboys :3",
    "Nya~~~~ joinnnn",
    "Join for free headpats",
    "Join for free headpats",
    "Join for free headpats",
    "UWU"
];

const randomNumber = Math.floor(Math.random() * options.length);
tagline.innerHTML = options[randomNumber];
