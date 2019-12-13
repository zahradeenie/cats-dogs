let catVote = 0;
let dogVote = 0;

// Cat love counter
const catButton = document.querySelector(".cats button");
let catCounter = document.querySelector(".cats h2");

catButton.addEventListener("click", () => {
    catVote += 1;
    catCounter.textContent = catVote;
});

// Dog love counter
const dogButton = document.querySelector(".dogs button");
let dogCounter = document.querySelector(".dogs h2");

dogButton.addEventListener("click", () => {
    dogVote++;
    dogCounter.textContent = dogVote;
});

// Functionality of modal popup for secret button
const hateButton = document.querySelector(".hate-button");
const modalBg = document.querySelector(".modal-bg");

hateButton.addEventListener("click", () => {
    modalBg.classList.add("is-visible");
});

modalBg.addEventListener("click", () => {
    modalBg.classList.remove("is-visible");
})
