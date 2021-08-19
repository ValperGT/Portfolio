const navToggle = document.querySelector(".nav-toggle");
const logo = document.querySelector(".logo");
const navMenu = document.querySelector(".nav-menu");
const menuElements = document.querySelectorAll(".nav-menu-link");
const header = document.querySelector(".header");
const section1 = document.querySelector(".content1");

const section1Options = {
  rootMargin: "-120px 0px 0px 0px"
};

const section1Observer = new IntersectionObserver(function(entries, section1Observer){
  entries.forEach(entry =>{
    if(!entry.isIntersecting){
      header.classList.add("nav-scrolled","shadow");
      menuElements.forEach(element =>{
        element.classList.add("nav-scrolled");
      });
      logo.classList.add("nav-scrolled");
      navToggle.classList.add("nav-scrolled");
    } else{
      header.classList.remove("nav-scrolled","shadow");
      menuElements.forEach(element =>{
        element.classList.remove("nav-scrolled");
      });
      logo.classList.remove("nav-scrolled");
      navToggle.classList.remove("nav-scrolled");
    }
  })
}, section1Options);

section1Observer.observe(section1);

menuElements.forEach(element => {
  element.addEventListener("click", () =>{
    navMenu.classList.toggle("nav-menu_visible");
  })
});

navToggle.addEventListener("click", () => {
  navMenu.classList.toggle("nav-menu_visible");
});