const sentence = "404 | Page Not found";
const typingEffectElement = document.querySelector("#typing-effect h2");

let charIndex = 0;

function typeLetter() {
  typingEffectElement.textContent += sentence[charIndex];
  charIndex++;

  if (charIndex === sentence.length) {
    clearInterval(typingInterval);
  }
}

const typingInterval = setInterval(typeLetter, 100);
