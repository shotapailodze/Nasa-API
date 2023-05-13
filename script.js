

// NASA API
const count = 10;
const apiKey = 'DEMO_KEY';
const apiUrl = `https://api.nasa.gov/planetary/apod?api_key=${apiKey}&count=${count}`;

let resultsArray = [];

// Get 10 Images from NASA API
async function getNasaPictures() {
    try {
        const responce = await fetch(apiUrl);
        resultsArray = await responce.json();
        console.log(resultsArray);
    } catch(e) {
        // Catch Error
        console.log(e);
    }
}

// On Load
getNasaPictures();