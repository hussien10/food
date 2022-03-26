// home slider

var swiper = new Swiper(".home-slider .mySwiper", {
  loop: true,
  pagination: {
    el: ".home-slider .swiper-pagination",
    clickable: true
  },
});

// meals slider
var swiper = new Swiper(".meals .mySwiper", {
  slidesPerView: 1,
  spaceBetween: 10,
  loop: true,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  breakpoints: {
    556: {
      slidesPerView: 2,
      spaceBetween: 20,
    },

    991: {
      slidesPerView: 3,
      spaceBetween: 30,
    },
  }
});

// testmonial slider

var swiper = new Swiper(".test-slider .mySwiper", {
  loop: true,
  effect:'fade',
  pagination: {
    el: ".test-slider .swiper-pagination",
    clickable: true
  },
});


// supscriptions slider
var swiper = new Swiper(".sups-slider .mySwiper", {
  slidesPerView: 1,
  spaceBetween: 10,
  freeMode: true,
  breakpoints: {
    

    991: {
      slidesPerView: 2,
      spaceBetween: 20,
    },
  }
});

$('a[href*="#"]').on('click', function (e) {
  e.preventDefault();
//   $('nav a[href*="#"').removeClass('active')
//  $(this).addClass('active')
  $('html, body').animate({
    scrollTop: $($(this).attr('href')).offset().top
  }, 500, 'linear');
});