const loadQuote = () => {
    fetch('https://api.kanye.rest')
        .then(res => res.json())
        .then(data => getQuote(data))
};

const getQuote = (quote) => {
    const blockQuote = document.getElementById('quote');
    blockQuote.innerText = quote.quote;
}