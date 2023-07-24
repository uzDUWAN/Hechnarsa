const navAnim = () => {
const burger = dacument.querySelector('.burger')
const nav = document.querySelector('.nav__links');
const navlinks = document.querySelectorAll(".nav__links li");


//   Toggle nav__list

burger.addEventListener("click",() => {
    nav.classList.toggle("nav-active");
})
}
navAnim();