const sentences = [
    "Welcome to Cusvt",
    "Willkommen bei Cusvt",
    "Learn & Develop",
    "Hello World",
  ];
  
  const typingEffectElement = document.querySelector("#typing-effect h2");
  
  let sentenceIndex = 0;
  let charIndex = 0;
  
  function typeLetter() {
    const sentence = sentences[sentenceIndex];
  
    typingEffectElement.textContent += sentence[charIndex];
    charIndex++;
  
    if (charIndex === sentence.length) {
      clearInterval(typingInterval);
  
      // Clear the text content after a brief pause
      setTimeout(() => {
        typingEffectElement.textContent = "";
  
        // Move to the next sentence
        sentenceIndex++;
        if (sentenceIndex === sentences.length) {
          sentenceIndex = 0; // Restart from the beginning
        }
  
        charIndex = 0; // Reset the character index
        typingInterval = setInterval(typeLetter, 100); // Start typing the next sentence
      }, 1500); // Pause for 1.5 seconds before clearing the text content
    }
  }
  
  let typingInterval = setInterval(typeLetter, 100);
  