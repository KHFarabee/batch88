// DARK MODE
const darkModeSwitch = document.querySelector(".dark-mode-switch");
const darkMode = document.querySelector(".dark-mode");
const lightMode = document.querySelector(".light-mode");
const checkDark = document.documentElement.classList.contains("dark");

darkModeSwitch.addEventListener("click", function () {
  document.documentElement.classList.toggle("dark");
});

// MOBILE SIDE NAV
const mobileNavSwitch = document.querySelector(".mobile-nav-switch");
const mobileNav = document.querySelector(".mobile-nav");
const mobileNavOpenBtn = document.querySelector(".mobile-nav-open-btn");
const mobileNavCloseBtn = document.querySelector(".mobile-nav-close-btn");
// let mobileNavCheckTranslate = mobileNav.classList.contains("-translate-x-full");
mobileNavSwitch.addEventListener("click", function () {
  mobileNav.classList.toggle("-translate-x-full");
  if (mobileNav.classList.contains("-translate-x-full")) {
    mobileNavCloseBtn.classList.add("hidden");
    mobileNavOpenBtn.classList.remove("hidden");
  } else if (!mobileNav.classList.contains("-translate-x-full")) {
    mobileNavCloseBtn.classList.remove("hidden");
    mobileNavOpenBtn.classList.add("hidden");
  }
});
