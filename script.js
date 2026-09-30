const intro = document.getElementById("intro");
const message = document.getElementById("message");
const forgiven = document.getElementById("forgiven");
const thinking = document.getElementById("thinking");

document.getElementById("sorryBtn").addEventListener("click", () => {
  intro.classList.add("hidden");
  message.classList.remove("hidden");
});

document.getElementById("forgiveBtn").addEventListener("click", () => {
  message.classList.add("hidden");
  forgiven.classList.remove("hidden");
  thankYouSpam();
  makeConfetti();
});

document.getElementById("notYetBtn").addEventListener("click", () => {
  message.classList.add("hidden");
  thinking.classList.remove("hidden");
});

document.getElementById("tryAgainBtn").addEventListener("click", () => {
  thinking.classList.add("hidden");
  message.classList.remove("hidden");
});

function makeFloatingHearts() {
  const box = document.querySelector(".hearts");
  const symbols = ["♡", "♥", "🐭", "🐈‍⬛"];
  setInterval(() => {
    const el = document.createElement("span");
    el.textContent = symbols[Math.floor(Math.random() * symbols.length)];
    el.style.left = Math.random() * 100 + "vw";
    el.style.fontSize = (14 + Math.random() * 16) + "px";
    el.style.animationDuration = (5 + Math.random() * 5) + "s";
    box.appendChild(el);
    setTimeout(() => el.remove(), 10000);
  }, 650);
}

function thankYouSpam() {
  const box = document.getElementById("thanksSpam");
  const messages = [
    "THANK YOUUUU 😭❤️",
    "THANK YOU THANK YOU 🥹",
    "THANK YOU KALLI BILLI 🐈‍⬛",
    "THANK YOUUUU x100000 🐭",
    "OKAY THANK YOU I GOT MY LIFE BACK 😂",
    "THANK YOU THANK YOU THANK YOU ❤️"
  ];

  let i = 0;
  const interval = setInterval(() => {
    if (i >= 18) {
      clearInterval(interval);
      return;
    }
    const line = document.createElement("div");
    line.textContent = messages[i % messages.length];
    line.style.opacity = "0";
    line.style.transform = "translateY(6px)";
    line.style.transition = "all .2s ease";
    box.appendChild(line);

    requestAnimationFrame(() => {
      line.style.opacity = "1";
      line.style.transform = "translateY(0)";
    });

    i++;
  }, 120);
}

function makeConfetti() {
  const box = document.querySelector(".confetti");
  for (let i = 0; i < 65; i++) {
    const el = document.createElement("span");
    el.textContent = ["♥", "♡", "✦", "🐭"][Math.floor(Math.random() * 4)];
    el.style.left = Math.random() * 100 + "vw";
    el.style.animationDelay = Math.random() * .7 + "s";
    el.style.fontSize = (10 + Math.random() * 14) + "px";
    box.appendChild(el);
    setTimeout(() => el.remove(), 3500);
  }
}

makeFloatingHearts();
