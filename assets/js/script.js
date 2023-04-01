// Hide Navbar When Scroll Down
const navbar = document.querySelector(".navbar");

let prevScroll = window.pageYOffset;

window.addEventListener("scroll", () => {
  let currentScroll = window.pageYOffset;
  if (prevScroll < currentScroll) {
    navbar.style.top = "-85px";
  } else {
    navbar.style.top = "0";
  }

  prevScroll = currentScroll;
});

// Scroll to up

const logo = document.querySelector(".navbar__logo");

logo.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
});

// Scroll to section
