// ======================
// HOTEL MAGNAM INN
// ======================

// Navbar Background on Scroll
const header = document.querySelector("header");

window.addEventListener("scroll", () => {

if(window.scrollY > 80){

header.style.background="rgba(0,0,0,.95)";
header.style.boxShadow="0 10px 30px rgba(0,0,0,.4)";

}else{

header.style.background="rgba(0,0,0,.55)";
header.style.boxShadow="none";

}

});


// Scroll Reveal Animation

const reveal=document.querySelectorAll(".feature,.welcome,.hero-content");

function revealAnimation(){

let windowHeight=window.innerHeight;

reveal.forEach(item=>{

let top=item.getBoundingClientRect().top;

if(top<windowHeight-120){

item.style.opacity="1";

item.style.transform="translateY(0px)";

}

})

}

reveal.forEach(item=>{

item.style.opacity="0";

item.style.transform="translateY(80px)";
item.style.transition=".8s";

})

window.addEventListener("scroll",revealAnimation);

revealAnimation();


// Button Ripple Effect

const buttons=document.querySelectorAll(".gold-btn,.book-btn");

buttons.forEach(button=>{

button.addEventListener("mouseenter",()=>{

button.style.transform="translateY(-5px) scale(1.04)";

});

button.addEventListener("mouseleave",()=>{

button.style.transform="translateY(0px)";

});

});


// Welcome Message

console.log("Welcome to Hotel Magnam Inn");

// Booking Form Demo

const booking=document.getElementById("bookingForm");

booking.addEventListener("submit",function(e){

e.preventDefault();

alert("🎉 Booking Request Submitted Successfully!\n\nThank you for choosing Hotel Magnam Inn.");

booking.reset();

});

window.addEventListener("load",()=>{

const loader=document.getElementById("loader");

loader.style.opacity="0";

setTimeout(()=>{

loader.style.display="none";

},800);

});
window.addEventListener("scroll",()=>{

const winScroll=document.documentElement.scrollTop;

const height=document.documentElement.scrollHeight-document.documentElement.clientHeight;

const scrolled=(winScroll/height)*100;

document.getElementById("progressBar").style.width=scrolled+"%";

});

const topBtn=document.getElementById("topBtn");

window.addEventListener("scroll",()=>{

if(window.scrollY>400){

topBtn.style.display="block";

}else{

topBtn.style.display="none";

}

});

topBtn.onclick=()=>{

window.scrollTo({

top:0,

behavior:"smooth"

});

};