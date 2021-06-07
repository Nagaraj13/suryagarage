

const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");
const introheader =document.querySelector(".image-content");
hamburger.addEventListener("click", mobileMenu);

function mobileMenu() {
    
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
}

const navLink = document.querySelectorAll(".nav-link");

navLink.forEach(n => n.addEventListener("click", closeMenu));

function closeMenu() {
   
    hamburger.classList.remove("active");
    navMenu.classList.remove("active");
}



//image slide
const slideshowImages = document.querySelectorAll(".intro-slideshow img");

const nextImageDelay = 3000;
let currentImageCounter = 0; // setting a variable to keep track of the current image (slide)

// slideshowImages[currentImageCounter].style.display = "block";
slideshowImages[currentImageCounter].style.opacity = 1;

setInterval(nextImage, nextImageDelay);

function nextImage() {
  // slideshowImages[currentImageCounter].style.display = "none";
  slideshowImages[currentImageCounter].style.opacity = 0;

  currentImageCounter = (currentImageCounter+1) % slideshowImages.length;

  // slideshowImages[currentImageCounter].style.display = "block";
  slideshowImages[currentImageCounter].style.opacity = 1;
}

//link the html page

let homebtn=document.querySelector(".Home");

homebtn.addEventListener('click',()=>{

window.location="home.html";

});


//below servic

let servicebtn=document.querySelector(".Service");

servicebtn.addEventListener('click',()=>{

window.location="service.html";

});

//below product
 let productbtn=document.querySelector(".producat");

 productbtn.addEventListener('click',()=>{

window.location="products.html";

 });


 let contactsbtn=document.querySelector(".contact");

 contactsbtn.addEventListener('click',()=>{

window.location="contact.html";

 });


//btn-pruducat

//below product
let probtn=document.querySelector(".producat-btn");

probtn.addEventListener('click',()=>{

window.location="products.html";

});