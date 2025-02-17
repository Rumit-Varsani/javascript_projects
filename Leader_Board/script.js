const firstNameInput = document.querySelector('input[placeholder="First Name"]');
const lastNameInput = document.querySelector('input[placeholder="Last Name"]');
const countryInput = document.querySelector('input[placeholder="Country"]');
const scoreInput = document.querySelector('input[placeholder="Player Score"]');
const addButton = document.querySelector('.addplayer');
const leaderboardContainer = document.querySelector('.data');
const popup = document.querySelector(".pop");
let players = [];

addButton.addEventListener("click",function(){
    if (firstNameInput.value === "" || lastNameInput.value === "" || countryInput.value === "" || scoreInput.value === "") {
        popup.innerHTML = "All Fields Required";
    } else {

        popup.innerHTML = "";
        const newPlayer = {
            firstName: firstNameInput.value,
            lastName: lastNameInput.value,
            country: countryInput.value,
            score: parseInt(scoreInput.value)
        };
        players.push(newPlayer);
        displayPlayer(newPlayer);

    }
    
});
function displayPlayer(player) {
    // Create the player container
    const playerDiv = document.createElement('div');
    playerDiv.classList.add('data');

    // Get current date and time
    const now = new Date();
    const dateTime = `${now.toLocaleString()}`;

    // Set up the player data HTML
    playerDiv.innerHTML = `
    <div class="data">
        <div class="nd">
            <h3>${player.firstName} ${player.lastName}</h3>
            <p>${dateTime}</p>
        </div>
        <p>${player.country}</p>
        <p>${player.score}</p>
        <p><button class="dlt">Delete</button></p>
        <p><button class="plus">+5</button><button class="minus">-5</button></p>
    </div>
        `;

    // Append to leaderboard
    leaderboardContainer.appendChild(playerDiv);

    // Add event listeners to the buttons
    addEventListeners(playerDiv, player);
}

function addEventListeners(playerDiv, player) {
    const deleteBtn = playerDiv.querySelector('.dlt');
    const plusBtn = playerDiv.querySelector('.plus');
    const minusBtn = playerDiv.querySelector('.minus');

    deleteBtn.addEventListener('click', function() {
        deletePlayer(player);
    });

    plusBtn.addEventListener('click', function() {
        updateScore(player, 5);
    });

    minusBtn.addEventListener('click', function() {
        updateScore(player, -5);
    });
}
function deletePlayer(player) {
    // Find the index of the player in the array
    const index = players.findIndex(p => p.firstName === player.firstName && p.lastName === player.lastName);
    
    if (index !== -1) {
        // Remove player from the array
        players.splice(index, 1);
    }

    // Remove the player from the HTML
    const playerDivs = document.querySelectorAll('.data');
    playerDivs.forEach(div => {
        if (div.querySelector('h3').textContent === `${player.firstName} ${player.lastName}`) {
            div.remove();
        }
    });
}
function updateScore(player, change) {
    player.score += change;

    // Update the score on the page
    const playerDivs = document.querySelectorAll('.data');
    playerDivs.forEach(div => {
        if (div.querySelector('h3').textContent === `${player.firstName} ${player.lastName}`) {
            const scoreElement = div.querySelector('p:nth-of-type(3)');
            scoreElement.textContent = player.score;
        }
    });
}


