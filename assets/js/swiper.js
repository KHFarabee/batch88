// HERO SECTION SLIDER

var swiper = new Swiper(".heroSwiper", {
  slidesPerView: 1,
  spaceBetween: 30,
  loop: true,
  autoplay: {
    delay: 5000,
    disableOnInteraction: false,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".hero-slider-next",
    prevEl: ".hero-slider-prev",
  },
});

// AWARDS

var swiperAwards = new Swiper(".awardsSwiper", {
  slidesPerView: 1,
  spaceBetween: 30,
  loop: true,
  autoplay: {
    delay: 5000,
    disableOnInteraction: false,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".awards-slider-next",
    prevEl: ".awards-slider-prev",
  },
});
///////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////
// ACTIVITIES
///////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////

// ACTIVITIES

var swiper = new Swiper(".activities", {
  slidesPerView: 1,
  spaceBetween: 30,
  loop: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".slider-next",
    prevEl: ".slider-prev",
  },
});

///////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////
// REUNIONS
///////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////
var swiper = new Swiper(".reunions", {
  slidesPerView: 1,
  spaceBetween: 30,
  loop: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    // nextEl: ".swiper-button-next",
    // prevEl: ".swiper-button-prev",
    nextEl: ".slider-next",
    prevEl: ".slider-prev",
  },
});
