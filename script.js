let yesSize = 22;

function runAway() {
  const noBtn = document.getElementById("noBtn");
  noBtn.style.position = "absolute";
  noBtn.style.top = Math.random() * 80 + "vh";
  noBtn.style.left = Math.random() * 80 + "vw";

  yesSize += 8;
  document.getElementById("yesBtn").style.fontSize = yesSize + "px";
}

function yesClicked() {
  // Teddy happy reaction
  const teddy = document.getElementById("teddy");
  if (teddy) {
    teddy.classList.add("happy");
  }

  // Confetti burst
  confetti({
    particleCount: 250,
    spread: 140,
    origin: { y: 0.6 }
  });

  // Go to letters page
  setTimeout(() => {
    window.location.href = "letters.html";
  }, 1800);
}

function openLetter(page, element) {
  element.classList.add("open");
  setTimeout(() => {
    window.location.href = page;
  }, 700);
}
