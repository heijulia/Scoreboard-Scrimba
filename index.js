let homeEl = document.getElementById("home-el")
let homePoints = 0


function add1Point() {
    homePoints += 1
    homeEl.textContent = homePoints
}

function add2Point() {
    homePoints += 2
    homeEl.textContent = homePoints
}
function add3Point() {
    homePoints += 3
    homeEl.textContent = homePoints
}

let guestEl = document.getElementById("guest-el")
let guestPoints = 0

function add1GuestPoint() {
    guestPoints += 1
    guestEl.textContent = guestPoints
}

function add2GuestPoint() {
    guestPoints += 2
    guestEl.textContent = guestPoints
}
function add3GuestPoint() {
    guestPoints += 3
    guestEl.textContent = guestPoints
}

function reset() {
    guestPoints = 0
    homePoints = 0
    guestEl.textContent = guestPoints
    homeEl.textContent = homePoints
}