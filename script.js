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
  confetti({
    particleCount: 200,
    spread: 120,
    origin: { y: 0.6 }
  });

  setTimeout(() => {
    window.location.href = "letters.html";
  }, 1500);
}

function openLetter(page, element) {
  element.classList.add("open");
  setTimeout(() => {
    window.location.href = page;
  }, 700);
}
