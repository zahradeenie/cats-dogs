let catVote = 0;
let dogVote = 0;

function scale() {
    const dogScale = 1 + (dogVote / catVote);
    dogCounter.style.transform = `scale(${dogScale.toFixed(3)})`;

    const catScale = 1 + (catVote / dogVote);
    catCounter.style.transform = `scale(${catScale.toFixed(3)})`;
}

// Cat love counter
const catButton = document.querySelector("[data-sound='cat']");
let catCounter = document.querySelector(".cats h2");

function playCatSound() {
    let audio = document.querySelectorAll("audio[data-sound='cat']");
    for (let sound of audio) {
        sound.play();
    };
}

catButton.addEventListener("click", () => {
    catVote += 1;
    catCounter.textContent = catVote;
    playCatSound();
    scale();
});

// Dog love counter
const dogButton = document.querySelector(".dogs button");
let dogCounter = document.querySelector(".dogs h2");

function playDogSound() {
    let audio = document.querySelectorAll("audio[data-sound='dog']");
    for (let sound of audio) {
        sound.play();
    }
};

dogButton.addEventListener("click", () => {
    dogVote++;
    dogCounter.textContent = dogVote;
    playDogSound();
    scale();
});

// Modal popup for secret button
const hateButton = document.querySelector(".hate-button");
const modalBg = document.querySelector(".modal-bg");

hateButton.addEventListener("click", () => {
    modalBg.classList.add("is-visible");
    let audio = document.querySelector("audio[data-sound='what']");
    audio.play();
});

modalBg.addEventListener("click", () => {
    modalBg.classList.remove("is-visible");
})

// Add animations when milestones reached

if (catVote || dogVote === 10) {

}