let score = 0;
const scoreEl = document.getElementById("score");
const btn = document.getElementById("chocoBtn");
const msg = document.getElementById("message");

btn.addEventListener("click", () => {
  score++;
  scoreEl.textContent = score;

  if (score === 5) {
    msg.classList.remove("hidden");
    msg.innerHTML = "🔥 ACE! Gobi unlocked SWEET MODE 🍫";
  }

  if (score === 10) {
    msg.innerHTML = "💖 Chocolate Rush! Zebitsu is proud of you 😌";
  }

  if (score === 15) {
    msg.innerHTML = `
      🏆 MISSION COMPLETE 🏆<br><br>
      Agent <b>Gobi</b>,  
      you have officially won my heart 💘<br><br>
      <b>Happy Chocolate Day 🍫</b><br>
      From your forever duo,<br>
      <b>Zebitsu</b> 💕
    `;
    btn.disabled = true;
    btn.textContent = "💝 Victory";
  }
});
