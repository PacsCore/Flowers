function showTodayDate() {
    const today = new Date();

    const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    const formattedDate = today.toLocaleDateString('en-US', options);

    document.getElementById('date-display').textContent = formattedDate;
}

showTodayDate();

const messages = [
    "You look beautiful today.",
    "You are a great person.",
    "I miss you.",
    "You are the bst thing that has happened to me.",
    "I'm thinking about you.",
    "Thank you for being you.",
    "I love you, exactly as you are.",
    "You make me smile, every day.",    
    "You are my everything.",
    "I'm so lucky to have you.",
    "You are my best friend.",
    "I'm so proud of you.",
    "You are my soulmate.",
    "I'm so lucky to have you.",
];

function showRandomMessage() {
    const randomIndex = Math.floor(Math.random() * messages.length);
    const randomMessage = messages[randomIndex];
    document.getElementById('message-text').textContent = randomMessage;
}

showRandomMessage();

const flowerPalettes = [
    { dark: '#6a3093', light: '#e0c3ff' }, // purple
    { dark: '#8a8a9e', light: '#ffffff' }, // white
    { dark: '#c2185b', light: '#ffd6e8' }, // pink
    { dark: '#d99a00', light: '#fff3b0' }  // yellow
];

function setRandomFlowerColor() {
    const randomIndex = Math.floor(Math.random() * flowerPalettes.length);
    const chosenPalette = flowerPalettes[randomIndex];

    document.documentElement.style.setProperty('--petal-color', chosenPalette.dark);
    document.documentElement.style.setProperty('--petal-light', chosenPalette.light);
}

setRandomFlowerColor();
