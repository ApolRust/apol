function start () {
  // (PART A) GET SPLASH SCREEN
  let splash = document.getElementById("splash");
 
  // (PART B) PLAY BGM & REMOVE SPLASH SCREEN AFTER FADE IN
  splash.addEventListener("transitionend", () => {
    document.getElementById("bgm").play();
    splash.remove();
  });
 
  // (PART C) GO!
  splash.classList.add("hide");
}
document.querySelector('.heart-button').addEventListener('click', function(event) {
  if (!confirm("Hey! U found a secret. Do you want to continue?")) {
    event.preventDefault();  // Cancel navigation
  }
});

onload = () => {
  const c = setTimeout(() => {
    document.body.classList.remove("not-loaded");
    clearTimeout(c);
  }, 1000);
};
let incrementValue = 0;
let countdownInterval;
let countdownValue = null;

const countdownDisplay = document.getElementById("countdown");
const incrementerDisplay = document.getElementById("incrementer");
const startButton = document.getElementById("button start-button");
const resetButton = document.getElementById("button reset-button");

function startCountdown() {
  if (!countdownInterval) {
    incrementValue--;
    incrementerDisplay.innerText = incrementValue;
    of();
  } else {
    incrementValue--;
    incrementerDisplay.innerText = incrementValue;
    on();
  }
}

function of() {
  document.getElementById("baslaButton").innerHTML = "Durdur";
}

function on() {
  document.getElementById("baslaButton").innerHTML = "Başlat";
}

if (countdownValue === 0) {
  clearInterval(countdownInterval);
} else {
  countdownValue--;
}

function resetCountdown() {
  clearInterval(countdownInterval);
  incrementValue = -1;
  incrementerDisplay.innerText = incrementValue;
}

document.addEventListener("contextmenu", function (event) {
  event.preventDefault(); // Sağ tıkla menüyü önle
  if (incrementValue > 0) {
    incrementValue--;
    incrementerDisplay.innerText = incrementValue;
  }
});

document.addEventListener("click", function (event) {
  incrementValue++;
  incrementerDisplay.innerText = incrementValue;
});
