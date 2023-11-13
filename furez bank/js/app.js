var menulist =document.getElementById("menulist")
    menulist.style.maxHeight ="0px";
    function togglemenu(){
      if(menulist.style.maxHeight =="0px")
      {
        menulist.style.maxHeight ="130px";
      }
      else{
        menulist.style.maxHeight ="0px";
      }
    }
// Get all the slides and convert it to an array
const slides = Array.from(document.querySelectorAll('.slide'));

let currentSlide = 0;

// Function to show the current slide
function showSlide(index) {
  // Remove 'active' class from all slides
  slides.forEach((slide) => slide.classList.remove('active'));
  
  // Add 'active' class to the current slide
  slides[index].classList.add('active');
}

// Function to show the next slide
function showNextSlide() {
  currentSlide = (currentSlide + 1) % slides.length;
  showSlide(currentSlide);
}

// Automatically show the next slide every 3 seconds
setInterval(showNextSlide, 3000);

// Show the first slide initially
showSlide(currentSlide);

