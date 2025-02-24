// Select the search input, button, image data container, and show more button
const search = document.querySelector(".search");
const btn = document.querySelector(".btn");
const imgdata = document.querySelector(".img-data");
const showMoreBtn = document.querySelector(".show-more");

let currentPage = 1; // Track the current page number
let currentKeyword = ''; // Track the current search keyword

// Function to fetch images from Unsplash
async function fetchUnsplashImages(keyword, page) 
{
    const url = `https://api.unsplash.com/search/photos?query=${keyword}&page=${page}&per_page=10`;
    const accessKey = "GuNjgTneCedrI2ZDOcI5CQID9ckLUPBN7cos_oKJ3gA";

    try {
        let response = await fetch(url, {
            headers: {
                "Authorization": `Client-ID ${accessKey}`
            }
        });

        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }

        let images = await response.json();
        return images.results; // Return the array of image results
    } catch (error) {
        console.error("Error fetching Unsplash images:", error);
        alert("Failed to fetch images. Please try again later.");
    }
}

// Function to handle the search button click
async function handleSearch() {
    currentKeyword = search.value.trim();
    currentPage = 1; // Reset to the first page for a new search

    if (!currentKeyword) {
        alert("Please enter a search term.");
        return;
    }

    try {
        let images = await fetchUnsplashImages(currentKeyword, currentPage);
        displayImages(images);

        // Show the "Show More" button if there are images
        if (images.length > 0) {
            showMoreBtn.style.display = 'block';
        } else {
            showMoreBtn.style.display = 'none';
        }
    } catch (error) {
        console.error(error);
    }
}

// Function to display images and descriptions
function displayImages(images) {
    if (currentPage === 1) {
        imgdata.innerHTML = ''; // Clear previous images only for the first page
    }

    images.forEach(image => {
        const imgContainer = document.createElement('div');
        imgContainer.classList.add('bg');

        const imgElement = document.createElement('img');
        imgElement.src = image.urls.small;
        imgElement.alt = image.alt_description || 'Unsplash Image';

        const descElement = document.createElement('p');
        descElement.textContent = image.alt_description || 'No description available';

        imgContainer.appendChild(imgElement);
        imgContainer.appendChild(descElement);
        imgdata.appendChild(imgContainer);
    });
}

// Function to handle the "Show More" button click
async function handleShowMore() {
    currentPage++; // Increment the page number

    try {
        let images = await fetchUnsplashImages(currentKeyword, currentPage);
        displayImages(images);

        // Hide the "Show More" button if no more images are returned
        if (images.length < 10) {
            showMoreBtn.style.display = 'none';
        }
    } catch (error) {
        console.error(error);
    }
}

// Add event listeners
btn.addEventListener("click", handleSearch);
showMoreBtn.addEventListener("click", handleShowMore);