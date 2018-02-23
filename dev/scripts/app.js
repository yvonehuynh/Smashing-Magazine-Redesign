


var elem = document.getElementsByClassName('main-carousel')[0];
var flkty = new Flickity(elem, {
  // options
  cellAlign: 'left',
  contain: true
});

var elem2 = document.getElementsByClassName('main-carousel')[1];
var flkty = new Flickity(elem2, {
  // options
  cellAlign: 'left',
  contain: true
});

// element argument can be a selector string
//   for an individual element
var flkty = new Flickity('.main-carousel', {
  // options
});

// on click of magnifying glass, expand text input
document.querySelector(".searchbar").addEventListener("click", function(){
  this.style.width = "180px"
});