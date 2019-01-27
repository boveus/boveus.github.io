var slideIndex = 1;
showDivs(slideIndex);

function plusDivs(n) {
  showDivs(slideIndex += n);
}

function showDivs(div) {
  var images = document.getElementsByClassName("mySlides")
  if (div > images.length) {slideIndex = 1} 
  if (div < 1) { slideIndex = images.length }
  for(var image of images) {
    image.style.display = "none"; 
  };
  images[slideIndex - 1].style.display = "block"; 
}