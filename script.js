document.addEventListener("DOMContentLoaded", function() {
  var prevScrollpos = window.scrollY;
  window.onscroll = function() {  
    var currentScrollPos = window.scrollY;
    if (prevScrollpos > currentScrollPos) {
      document.querySelector(".navlist").style.top = "0";
    } else {
      document.querySelector(".navlist").style.top = "-60px";
    }
    prevScrollpos = currentScrollPos;
  }
});