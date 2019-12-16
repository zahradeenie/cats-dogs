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
    votingMilestonesCat();
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
    votingMilestonesDog();
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
});

function votingMilestonesCat() {
    let contentContainer = document.querySelector(".container");
    if (catVote == 10) {
        contentContainer.classList.add("catvotes10");
        setTimeout(function () { contentContainer.classList.remove("catvotes10"); }, 1500);
    } else if (catVote == 50) {
        contentContainer.classList.add("catvotes50");
        setTimeout(function () { contentContainer.classList.remove("catvotes50"); }, 1500);
    } else if (catVote == 100) {
        contentContainer.classList.add("catvotes100");
        setTimeout(function () { contentContainer.classList.remove("catvotes100"); }, 1500);
    } else if (catVote == 250) {
        contentContainer.classList.add("catvotes250");
        setTimeout(function () { contentContainer.classList.remove("catvotes250"); }, 1500);
    } else if (catVote == 500) {
        contentContainer.classList.add("catvotes500");
        setTimeout(function () { contentContainer.classList.remove("catvotes500"); }, 1500);
    } else if (catVote == 750) {
        contentContainer.classList.add("catvotes750");
        setTimeout(function () { contentContainer.classList.remove("catvotes750"); }, 1500);
    } else if (catVote == 1000) {
        contentContainer.classList.add("catvotes1000");
        setTimeout(function () { contentContainer.classList.remove("catvotes1000"); }, 1500);
    };
}

function votingMilestonesDog() {
    let contentContainer = document.querySelector(".container");
    if (dogVote == 10) {
        contentContainer.classList.add("dogvotes10");
        setTimeout(function () { contentContainer.classList.remove("dogvotes10"); }, 1500);
    } else if (dogVote == 50) {
        contentContainer.classList.add("dogvotes50");
        setTimeout(function () { contentContainer.classList.remove("dogvotes50"); }, 1500);
    } else if (dogVote == 100) {
        contentContainer.classList.add("dogvotes100");
        setTimeout(function () { contentContainer.classList.remove("dogvotes100"); }, 1500);
    } else if (dogVote == 250) {
        contentContainer.classList.add("dogvotes250");
        setTimeout(function () { contentContainer.classList.remove("dogvotes250"); }, 1500);
    } else if (dogVote == 500) {
        contentContainer.classList.add("dogvotes500");
        setTimeout(function () { contentContainer.classList.remove("dogvotes500"); }, 1500);
    } else if (dogVote == 750) {
        contentContainer.classList.add("dogvotes750");
        setTimeout(function () { contentContainer.classList.remove("dogvotes750"); }, 1500);
    } else if (dogVote == 1000) {
        contentContainer.classList.add("dogvotes1000");
        setTimeout(function () { contentContainer.classList.remove("dogvotes1000"); }, 1500);
    };
}