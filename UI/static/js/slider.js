  var slideIndeslides = 0;
  carousel();

  function carousel() {
      var i;
      var slides = document.getElementsByClassName("slide");
      for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
      }
      slideIndeslides++;
      if (slideIndeslides > slides.length) {
        slideIndeslides = 1
      } 
      slides[slideIndeslides-1].style.display = "block";
      setTimeout(carousel, 2000);
  }
