window.addEventListener('scroll', function() {
    if (window.scrollY > 100) { // Scroll threshold
      document.querySelector('header').style.backgroundColor = '#000'; //Change Background color when scrolled
    } else {
      document.querySelector('header').style.backgroundColor = '#1d2749'; // Original Background Do not change
    }
});