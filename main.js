const ratingForm = document.querySelector(".rating-form");
const thanksContainer = document.querySelector(".thanks-container");
const ratingResult = document.getElementById("rating-result");

ratingForm.addEventListener("submit", function (event) {
  event.preventDefault();
  const result = this.elements["rating"].value;
  if (result) {
    this.style.display = "none";
    thanksContainer.style.display = "flex";
    ratingResult.textContent = result;
  }
});
