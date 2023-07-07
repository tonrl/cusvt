document.querySelector('.read-more').addEventListener('click', function() {
    var content = this.parentNode;
    content.classList.toggle('show-more');
    if (content.classList.contains('show-more')) {
      this.innerText = 'Read less';
    } else {
      this.innerText = 'Read more';
    }
  });