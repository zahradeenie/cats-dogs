let catVote = 0;
let dogVote = 0;

function scale() {
    const dogScale = 1 + (dogVote / catVote);
    dogCounter.style.transform = `scale(${dogScale.toFixed(3)})`;

    const catScale = 1 + (catVote / dogVote);
    catCounter.style.transform = `scale(${catScale.toFixed(3)})`;
}


// Cat love counter
const catButton = document.querySelector(".cats button");
let catCounter = document.querySelector(".cats h2");

catButton.addEventListener("click", () => {
    catVote += 1;
    catCounter.textContent = catVote;
    scale();
});

// Dog love counter
const dogButton = document.querySelector(".dogs button");
let dogCounter = document.querySelector(".dogs h2");

dogButton.addEventListener("click", () => {
    dogVote++;
    dogCounter.textContent = dogVote;
    scale();

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
