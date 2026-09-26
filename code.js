// JavaScript code for Sally's Bakery website
// Add a fake counter for the sacrifices and have it increase the percentage chance of summer rain
// We will save the state of the fake counter in localStorage so it persists across page reloads
// This simulates the effect of sacrifices on the likelihood of summer rain.
// The more sacrifices performed, the higher the chance of summer rain.
// Initial number of sacrifices is set to 246 just as a random number to start with some progress already made

//init variables
let sacrifices = 0;
let summerRainChance = 0;
let gods = [];

let dayOfTheWeek = new Date().getDay();
const daysOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

// Update the sacrifices count and summer rain chance in the HTML
function updateSacrificesDisplay() {
    document.getElementById('sacrifices-count').textContent = sacrifices;
    document.getElementById('summer-rain-chance').textContent = summerRainChance;
    document.getElementById('day-of-the-week').textContent = daysOfWeek[dayOfTheWeek];
}

// Add a god to the list of gods array
function addGod(name) {
    
    for (god in gods){
        if (gods[god].toLowerCase() === name.toLowerCase()) {
            alert("This god has already been added.");
            return;
        }
    }
    gods.push(name);
    localStorage.setItem('gods', JSON.stringify(gods));
    document.getElementById('gods-list').textContent = gods.join(', ');
}

// Remove a god from the list of gods array
function removeGod(name) {
    gods = gods.filter(god => god.toLowerCase() !== name.toLowerCase());
    localStorage.setItem('gods', JSON.stringify(gods));
    document.getElementById('gods-list').textContent = gods.join(', ');
}

// Perform a sacrifice and update the sacrifices count and summer rain chance
function performSacrifice() {
    if (gods.length === 0) {
        alert("You must add at least one god before performing a sacrifice.");
        return;
    }
    sacrifices++;
    summerRainChance = Math.min(100, summerRainChance + 1);
    // Check if the day has changed to reset the summer rain chance
    const currentDay = new Date().getDay();
    if (currentDay !== dayOfTheWeek) {
        dayOfTheWeek = currentDay;
        summerRainChance = 0;
    }
    //commit the updated values to localStorage
    localStorage.setItem('dayOfTheWeek', dayOfTheWeek);
    localStorage.setItem('sacrifices', sacrifices);
    localStorage.setItem('summerRainChance', summerRainChance);
    updateSacrificesDisplay();
}

// Load the state from localStorage when the page loads
window.addEventListener('load', () => {
    sacrifices = localStorage.getItem('sacrifices') || 246;
    summerRainChance = localStorage.getItem('summerRainChance') || 0;
    dayOfTheWeek = localStorage.getItem('dayOfTheWeek') || new Date().getDay();   
    gods = JSON.parse(localStorage.getItem('gods')) || [];
    document.getElementById('gods-list').textContent = gods.join(', ');
});


// Call this function whenever the page loads and after performing a sacrifice
window.addEventListener('load', updateSacrificesDisplay);
