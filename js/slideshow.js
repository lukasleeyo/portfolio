//shoostress section
var slideIndex = 1;
showDivs(slideIndex);

function plusDivs(n) {
  showDivs(slideIndex += n);
}

function showDivs(n) {
  var i;
  var x = document.getElementsByClassName("mySlides");
  if (n > x.length) {slideIndex = 1}    
  if (n < 1) {slideIndex = x.length}
  for (i = 0; i < x.length; i++) {
     x[i].style.display = "none";  
  }
  x[slideIndex-1].style.display = "block";  
}

//competition portion
var slideCompIndex = 1;
showCompDivs(slideCompIndex);

function plusCompDivs(n) {
  showCompDivs(slideCompIndex += n);
}

function showCompDivs(n) {
  var i;
  var x = document.getElementsByClassName("myCompSlides");
  if (n > x.length) {slideCompIndex = 1}    
  if (n < 1) {slideCompIndex = x.length}
  for (i = 0; i < x.length; i++) {
     x[i].style.display = "none";  
  }
  x[slideCompIndex-1].style.display = "block";  
}

//FoodComn portion
var slidefoodIndex = 1;
showFoodDivs(slidefoodIndex);

function plusFoodDivs(n) {
  showFoodDivs(slidefoodIndex += n);
}

function showFoodDivs(n) {
  var i;
  var x = document.getElementsByClassName("myFoodSlides");
  if (n > x.length) {slidefoodIndex = 1}    
  if (n < 1) {slidefoodIndex = x.length}
  for (i = 0; i < x.length; i++) {
     x[i].style.display = "none";  
  }
  x[slidefoodIndex-1].style.display = "block";  
}