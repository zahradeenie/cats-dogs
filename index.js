let catVote = 0;
let dogVote = 0;


const catButton = document.querySelector(".cats button");
let catCounter = document.querySelector(".cats h2");

catButton.addEventListener("click", () => {
    catVote += 1;
    catCounter.textContent = catVote;
});

const dogButton = document.querySelector(".dogs button");
let dogCounter = document.querySelector(".dogs h2");

dogButton.addEventListener("click", () => {
    dogVote++;
    dogCounter.textContent = dogVote;
});