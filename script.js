/* HERO SLIDER */

let slides = document.querySelectorAll(".slide");
let dots = document.querySelectorAll(".dot");
let current = 0;

function showSlide(index){

slides.forEach(slide => slide.classList.remove("active"));
dots.forEach(dot => dot.classList.remove("active"));

slides[index].classList.add("active");
dots[index].classList.add("active");

}

document.querySelector(".next").onclick = function(){

current++;
if(current >= slides.length){
current = 0;
}

showSlide(current);

};

document.querySelector(".prev").onclick = function(){

current--;
if(current < 0){
current = slides.length - 1;
}

showSlide(current);

};

dots.forEach((dot,i)=>{

dot.addEventListener("click",()=>{

current = i;
showSlide(current);

});

});

/* AUTO SLIDE */

setInterval(()=>{

current++;
if(current >= slides.length){
current = 0;
}

showSlide(current);

},5000);


/* MOBILE MENU */

const menuIcon = document.getElementById("menuIcon");
const navMenu = document.getElementById("navMenu");

menuIcon.onclick = () => {

navMenu.classList.toggle("active");

};