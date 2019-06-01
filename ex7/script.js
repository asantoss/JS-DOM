// Make the section disappear and reappear whenever you click the section-header
// BONUS: Can you make the section slide up and down like this? :
// https://www.w3schools.com/bootstrap/bootstrap_collapse.asp




var section = document.getElementById("section");
var button = document.getElementById("section-header");
var isDisplayed = true;
button.addEventListener("click", function () {
    if (isDisplayed) {
        section.classList.add("hidden");
        isDisplayed = false;
    } else {
        section.classList.remove("hidden");
        isDisplayed = true;
    }
})