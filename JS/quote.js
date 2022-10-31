let quotes = [
`I’m very font of you because you are just my type`,
`Roses are red.Violets are blue. Unexpected '{' on line 32`,
`while(true) {
    I.Love(You);
    }`,
`You are the HTML to my CSS`,
`You are the semi-colon to my code`,
`Roses are #ff0000, violets are #0000ff...`,
`const love = "You"
const valentine = "Me"
console.log("love", "+", "valentine”)`,
`my love for you has no bugs`,
`You must be a <meta> tag because I can't get you out of my <head>`
];

document.addEventListener("DOMContentLoaded", function(event) {
    const randomQuote = function() {
      document.querySelector('#the-quote').textContent = `"${quotes[Math.floor(Math.random() * quotes.length)]}"`;
    };
    randomQuote();
  
  document.querySelector('#main-title').textContent = `programmer valentine's day quotes`
  
  document.querySelector('#quote-btn').addEventListener('click', (evt) => {
    randomQuote()
  })
  });