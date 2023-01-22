const quoteContainer = document.getElementById('quote-container');
const quoteText = document.getElementById('quote');
const characterText = document.getElementById('author');
const twitterBtn = document.getElementById('twitter');
const newQuoteBtn = document.getElementById('new-quote');

//Show New Quote 
function newQuote() {
    //Pick a random quote from office quotes array
    const quote = officeQuotes[Math.floor(Math.random() * officeQuotes.length)];
    characterText.textContent = quote.character;
    quoteText.textContent = quote.quote;
}

//Tweet Quote
function tweetQuote() {
    const tweetUrl = `https://twitter.com/intent/tweet?text=${quoteText.textContent} - ${characterText.textContent}`;
    window.open(tweetUrl, '_blank')
}

//Event Listeners
newQuoteBtn.addEventListener('click', newQuote);
twitterBtn.addEventListener('click', tweetQuote);

newQuote();
