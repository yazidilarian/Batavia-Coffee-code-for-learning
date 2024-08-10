const navbarnav = document.querySelector(".navbar-nav");
const span1 = document.querySelector(".hamburger-menu span:nth-child(1)");
const span2 = document.querySelector(".hamburger-menu span:nth-child(2)");
const span3 = document.querySelector(".hamburger-menu span:nth-child(3)");
// ketika hambuger menu di click
document.querySelector(".hamburger-menu").onclick = () => {
  navbarnav.classList.toggle("active");
  span1.classList.toggle("hamburger-satu");
  span2.classList.toggle("hamburger-dua");
  span3.classList.toggle("hamburger-tiga");
};

// klick di luar side bar untuk menghilangkan java script
const hambugermenu = document.querySelector(".hamburger-menu");

document.addEventListener("click", function (e) {
  if (!hambugermenu.contains(e.target) && !navbarnav.contains(e.target)) {
    navbarnav.classList.remove("active");
    span1.classList.remove("hamburger-satu");
    span2.classList.remove("hamburger-dua");
    span3.classList.remove("hamburger-tiga");
  }
});
