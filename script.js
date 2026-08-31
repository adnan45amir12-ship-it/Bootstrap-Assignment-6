const filterBtn = document.getElementById("filterBtn");
const closeBtn = document.getElementById("closeBtn");
const applyBtn = document.getElementById("filterForm");
const offcanvas = document.getElementById("offcanvas");
const overlay = document.getElementById("overlay");

const age = document.getElementById("age");
const ageValue = document.getElementById("ageValue");


// Open Offcanvas
filterBtn.addEventListener("click", function () {
    offcanvas.classList.add("active");
    overlay.classList.add("active");
});


// Close Offcanvas
closeBtn.addEventListener("click", function () {
    offcanvas.classList.remove("active");
    overlay.classList.remove("active");
});


// Close when clicking overlay
overlay.addEventListener("click", function () {
    offcanvas.classList.remove("active");
    overlay.classList.remove("active");
});


// Age Range Output
age.addEventListener("input", function () {
    ageValue.textContent = age.value;
});


// Apply Button
applyBtn.addEventListener("submit", function (event) {

    event.preventDefault();

    offcanvas.classList.remove("active");
    overlay.classList.remove("active");

});