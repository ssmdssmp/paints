
const swiper = new Swiper('.swiper', {
    // Optional parameters
    direction: 'horizontal',
    loop: true,
  speed:1500,
  allowTouchMove: true,
  breakpoints: {
    768: {
      allowTouchMove: false,
    }
  },
    // If we need pagination
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },

    // And if we need scrollbar


  });

 function chooseCurrentSlide(slide){
    swiper.slideTo(slide)
  }

 
  // And if we need scrollbar