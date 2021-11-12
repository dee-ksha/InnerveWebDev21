setInterval(function(){
  var text = ["A Better Learning Future Starts Here", "A Sucess Oriented Learning Environment", "Developing The Creative Innovators of Tomorrow"];
  var counter = 0;
  var elem = document.getElementById("changeText");
  var inst = setInterval(change, 3000);
  
  function change() {
    elem.innerHTML = text[counter];
    counter++;
    if (counter >= text.length) {
      counter = 0;
      // clearInterval(inst); 
    }
  }}, 3000);
  

window.onscroll = function() {myFunction()};

var navbar = document.getElementById("navbar");
var sticky = navbar.offsetTop;
function myFunction() {
  if (window.pageYOffset >= sticky) {
    navbar.classList.add("sticky");
  } else {
    navbar.classList.remove("sticky");
  }
}
logo = document.getElementById("hidlogo");

var myScrollFunc = function() {
  var y = window.scrollY;
  if (y >= sticky) {
    logo.className = "showlogo"
  } else {
    logo.className = "hidlogo"
  }

};
window.addEventListener("scroll", myScrollFunc);

    $('.owl-carousel').owlCarousel({
        loop:true,
        margin:10,
        autoplay:true,
        responsiveClass:true,
        autoplayTimeout:3000,
        responsive:{
            0:{
                items:1,
                nav:true
            },
            600:{
                items:2,
                nav:false
            },
            1000:{
                items:3,
                nav:false,
                loop:true
            }
        }
      })
      function myreadFunction() {
        var dots = document.getElementById("dots");
        var moreText = document.getElementById("more");
        var btnText = document.getElementById("myBtn");
      
        if (dots.style.display === "none") {
          dots.style.display = "inline";
          btnText.innerHTML = "Read more"; 
          moreText.style.display = "none";
        } else {
          dots.style.display = "none";
          btnText.innerHTML = "Read less"; 
          moreText.style.display = "inline";
        }
      }
      

      function navfun() {
        var x = document.getElementById("navbar");
        if (x.className === "navbar") {
          x.className += " responsive";
        } else {
          x.className = "navbar";
        }
      }