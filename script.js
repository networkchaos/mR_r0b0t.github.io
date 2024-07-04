const menuBtn =document.getElementById("menu-btn");
const navLinks =document.getElementById("nav-links");
const menuBtnIcon = menuBtn.querySelector("i");


menuBtn.addEventListener("click", (e) => {
    navLinks.classList.toggle("open")

    const isOpen = navLinks.classList.contains("open");
    menuBtnIcon.setAttribute("class", isOpen?"ri-close-line": "ri-menu-line");
});
navLinks.addEventListener("click", (e) => {
    navLinks.classList.remove("open");
    menuBtnIcon.setAttribute("class", "ri-menu-line");

});

const navSearch = document.getElementById("nav-search");
navSearch.addEventListener("click", (e)=>{
    navSearch.classList.toggle("open");

    
})

const scrollRevealOption ={
    distance: "50px",
    origin: "bottom",
    duration: 1000,

};
ScrollReveal().reveal(".header_image img",{
    ...scrollRevealOption,
    origin: "right",
});
ScrollReveal().reveal(".header_content div",{
    duration: 1000,
    delay: 500,
});
ScrollReveal().reveal(".header_content h1",{
    ...scrollRevealOption,
    delay: 1000,
});
ScrollReveal().reveal(".header_content p",{
    ...scrollRevealOption,
    delay: 500,
});

ScrollReveal().reveal(".projects_cards",{
    ...scrollRevealOption,
    delay: 500,
});

ScrollReveal().reveal(".about_image img",{
    ...scrollRevealOption,
    origin: "right",
});

ScrollReveal().reveal(".about_card",{
    duration: 1000,
    interval: 500,
    delay: 500,
});

const swiper = new Swiper(".swiper", {
    loop: true,
});

function contactme(){
const page ="contact.html";
window.open(page,'_blank');
}
function DownloadCV(){
    const link = "https://drive.google.com/file/d/13WCrt4MLfKfYBCfgNW1VTwJQTWVttdud/view?usp=sharing";
window.open(link, '_blank');
}

function Validatedetails(){
const form = document.getElementById("form");
const name = form["name"].value;
const email = form["email"].value;
while (name ==="" || email===""){
    alert("fill all fields you dumwit");
    return false;
}
form.submit()







}




















