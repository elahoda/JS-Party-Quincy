var fans = document.querySelector(".fans");
var fish = document.querySelector(".fish");
var pets = document.querySelector(".pets");
console.log(fans);

fans.addEventListener("mouseover", function () {
  fans.innerText = "123k";
});
fish.addEventListener("mouseover", function () {
  fish.innerText = "123k";
});
pets.addEventListener("mouseover", function () {
  pets.innerText = "123k";
});

var toggle = document.querySelector("#toggle");
var ball = document.querySelector(".ball");
var title = document.querySelector("h1");
var mood = document.querySelector("body");

toggle.addEventListener("click", function () {
  if (mood.classList.contains("light")) {
    mood.classList.remove("light");
    ball.classList.remove("move-right");
    title.innerText = "Stealth Quincy";
  } else {
    mood.classList.add("light");
    ball.classList.add("move-right");
    title.innerText = "Party Quincy";
  }
});
