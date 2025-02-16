// Select the button
const button = document.querySelector("button");

// Function to generate a random color
function getRandomHexColor() {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

// Add an event listener to the button
button.addEventListener("click", () => {
    // Change the button's background color to a random color
    document.body.style.backgroundColor = getRandomHexColor();
});
