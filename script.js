const quotes = [
    {
        quote: "Success is not final, failure is not fatal.",
        author: "Winston Churchill"
    },
    {
        quote: "Dream big and dare to fail.",
        author: "Norman Vaughan"
    },
    {
        quote: "Believe you can and you're halfway there.",
        author: "Theodore Roosevelt"
    },
    {
        quote: "Stay hungry, stay foolish.",
        author: "Steve Jobs"
    },
    {
        quote: "The best way to get started is to quit talking and begin doing.",
        author: "Walt Disney"
    }
];

function newQuote() {
    let random = Math.floor(Math.random() * quotes.length);

    document.getElementById("quote").innerText =
        quotes[random].quote;

    document.getElementById("author").innerText =
        "- " + quotes[random].author;
}

// Show quote when app opens
window.onload=newQuote();