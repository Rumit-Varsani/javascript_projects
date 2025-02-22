const search = document.querySelector(".search");
const btn = document.querySelector(".btn");
const loder = document.querySelector(".loder");
const userContainer = document.querySelector(".user-card"); // Assuming you have a container for user details

btn.addEventListener("click", function() {
    getP();
});

async function getP() {
    try {
        let username = search.value.trim();

        if (username) {
            const response = await fetch(`https://api.github.com/users/${username}`);
            if (response.ok) {
                const data = await response.json();
                console.log(data);
                loder.innerHTML = ""; // Clear any previous messages
                updateUserDetails(data); // Update the user card with the fetched data
            } else {
                loder.innerHTML = "User not found";
                console.log("User not found");
            }
        } else {
            loder.innerHTML = "Please enter a GitHub username.";
            console.log("Please enter a GitHub username.");
        }
    } catch (error) {
        console.error('Error:', error);
        loder.innerHTML = "An error occurred while fetching data.";
    }
}

function updateUserDetails(data) {
    // Clear previous user details
    userContainer.innerHTML = "";

    // Create a new user card
    let usercard = document.createElement("div");
    usercard.classList.add("user-card");

    // Populate the user card with data
    usercard.innerHTML = `
        <div class="inuj">
            <img src="${data.avatar_url}" alt="${data.name}">
            <div class="nu">
                <div>
                    <h1>${data.name || 'No Name'}</h1>
                    <a href="${data.html_url}" target="_blank">@${data.login}</a>
                </div>
                <p>Joined ${new Date(data.created_at).toLocaleDateString()}</p>
            </div>
        </div>
        <div class="details">
            <p>${data.bio || 'No bio available'}</p>
            <div class="flow-details">
                <div class="repos">
                    <p>Repos</p>
                    <p>${data.public_repos}</p>
                </div>
                <div class="followers">
                    <p>Followers</p>
                    <p>${data.followers}</p>
                </div>
                <div class="following">
                    <p>Following</p>
                    <p>${data.following}</p>
                </div>
            </div>
        </div>`;

    // Append the user card to the container
    userContainer.appendChild(usercard);
}