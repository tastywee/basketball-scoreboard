let homeScore = document.getElementById("home-score");
let guestScore = document.getElementById("guest-score");
let homeTotal = 0;
let guestTotal = 0;

console.log(homeTotal);


function home1Point() {
    homeTotal += 1;
    homeScore.textContent = homeTotal;
}

function home2Point() {
    homeTotal += 2;
    homeScore.textContent = homeTotal;
}

function home3Point() {
    homeTotal += 3;
    homeScore.textContent = homeTotal;
}

function guest1Point() {
    guestTotal += 1;
    guestScore.textContent = guestTotal;
}

function guest2Point() {
    guestTotal += 2;
    guestScore.textContent = guestTotal;
}

function guest3Point() {
    guestTotal += 3;
    guestScore.textContent = guestTotal;
}

function newGame() {
    homeScore.textContent = 0;
    guestScore.textContent = 0;
}