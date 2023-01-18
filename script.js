let apiQuotes = [];

// Get Quotes from API

async function getQuotes() {
    const apiUrl = 'https://officeapi.dev/api/quotes/random';
    try {
        const response = await fetch(apiUrl);
        apiQuotes = await response.json();
        console.log(apiQuotes);
    } catch (error) {
        //Catch Error
    }
}

//on Load

getQuotes();