function toggleContent() {
    var extraContent = document.getElementById("extraContent");
    var readMoreBtn = document.getElementById("readMoreBtn");
    
    if (extraContent.classList.contains("hide")) {
      extraContent.classList.remove("hide");
      readMoreBtn.innerHTML = "Read Less";
    } else {
      extraContent.classList.add("hide");
      readMoreBtn.innerHTML = "Read More";
    }
  }
  