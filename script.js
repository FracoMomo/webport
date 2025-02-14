//hide nav bar on scroll
document.addEventListener("DOMContentLoaded", function() {
  var prevScrollpos = window.scrollY;
  window.onscroll = function() {  
    var currentScrollPos = window.scrollY;
    if (prevScrollpos > currentScrollPos) {
      document.querySelector(".navbar").style.top = "0";
    } else {
      document.querySelector(".navbar").style.top = "-60px";
    }
    prevScrollpos = currentScrollPos;
  }
});

function displayImage(imageUrl){
  const imageElement = document.getElementById("image");

  fetch(imageUrl)
  .then(repsonse => {
    if (repsonse.ok){
      imageElement.src = imageUrl;
    } else {
      imageElement.src = "local image";
    }
  })

  .catch(error => {
    imageElement.src = "https://via.placeholder.com/150";
  });
}
