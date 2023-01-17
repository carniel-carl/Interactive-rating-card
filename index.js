let btn = document.getElementById("submit");
let mainCard = document.querySelector(".card");
let rates = document.querySelectorAll(".rate");
let rateNum = document.getElementById("rate-num");
const thankCard = document.querySelector(".thank-you-card");

btn.addEventListener("click", () => {
  thankCard.classList.remove("hidden");
  mainCard.style.display = "none";
});

rates.forEach((rate) => {
  rate.addEventListener("click", () => {
    rateNum.innerText = rate.innerHTML
  })
})