"use strict";

/**
 * 
 * Swiper設定
 * 
 */
var mySwiper = new Swiper('.main-visual__swiper', {
  autoplay: {
    delay: 5000,
    stopOnLastSlide: false,
    disableOnInteraction: false,
    reverseDirection: false
  },
  slidesPerView: 'auto',
  speed: 1000,
  loop: true,
  // shortSwipes: false,
  // longSwipes: false,
  navigation: {
    nextEl: '.main-next',
    prevEl: '.main-prev'
  },
  pagination: {
    el: '.swiper-pagination',
    type: 'bullets',
    clickable: true
  }
});
var elmSwiper = document.querySelectorAll('.student__swiper');
var elmPrev = document.querySelectorAll('.prev');
var elmNext = document.querySelectorAll('.next');

if (elmSwiper.length > 0) {
  for (var i = 0; i < elmSwiper.length; i++) {
    elmSwiper[i].className += i;
    elmPrev[i].className += i;
    elmNext[i].className += i;
    var studentSwiper = new Swiper('.student__swiper' + i, {
      spaceBetween: 26,
      initialSlide: 1,
      slidesPerView: 'auto',
      speed: 500,
      loop: true,
      navigation: {
        prevEl: '.prev' + i,
        nextEl: '.next' + i
      }
    });
  }
}
/**
 * 
 * menu-open
 * 
 */


var humberger = document.querySelector('.humberger');
var menuToggle = document.querySelector('.global-navi');
humberger.addEventListener('click', function () {
  humberger.classList.toggle('menu-active');

  if (humberger.classList.contains('menu-active')) {
    menuToggle.classList.add('menu-open');
  } else {
    menuToggle.classList.remove('menu-open');
  }
});