async function fetchUnsplashImages() {
    const url = "https://api.unsplash.com/photos/random?count=10"; // Get 5 random images
    const accessKey = "GuNjgTneCedrI2ZDOcI5CQID9ckLUPBN7cos_oKJ3gA"; // Replace with your Unsplash API key

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
        return images;
    } catch (error)
    {
        console.error("Error fetching Unsplash images:", error);
    }
}

async function getImages() {
    try {
        let images = await fetchUnsplashImages();
        console.log(images); // Log images when successful
    } catch (error) {
        console.error(error); // Log error if something goes wrong
    }
}

getImages();
