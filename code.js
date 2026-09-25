// JavaScript code for Sally's Bakery website
// Add a fake counter for the sacrifices and have it increase the percentage chance of summer rain
// We will save the state of the fake counter in localStorage so it persists across page reloads
// This simulates the effect of sacrifices on the likelihood of summer rain.
// The more sacrifices performed, the higher the chance of summer rain.
// Initial number of sacrifices is set to 246 just as a random number to start with some progress already made


let sacrifices = 246;
let summerRainChance = 0;

// Load the state from localStorage when the page loads
window.addEventListener('load', () => {
    sacrifices = parseInt(localStorage.getItem('sacrifices')) || 0;
    summerRainChance = parseInt(localStorage.getItem('summerRainChance')) || 0;
});


// Update the sacrifices count and summer rain chance in the HTML
function updateSacrificesDisplay() {
    document.getElementById('sacrifices-count').textContent = sacrifices;
    document.getElementById('summer-rain-chance').textContent = summerRainChance;
}

// Call this function whenever the page loads and after performing a sacrifice
window.addEventListener('load', updateSacrificesDisplay);
function performSacrifice() {
    sacrifices++;
    summerRainChance = Math.min(100, summerRainChance + 1);
    console.log(`Sacrifices: ${sacrifices}`);
    console.log(`Summer Rain Chance: ${summerRainChance}%`);
    localStorage.setItem('sacrifices', sacrifices);
    localStorage.setItem('summerRainChance', summerRainChance);
    updateSacrificesDisplay();
}
