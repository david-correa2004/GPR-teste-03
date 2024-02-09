window.onload = () => {
  var swiper = new Swiper(".mySwiper-img1", {
    spaceBetween: 30,
    effect: "fade",
    loop: true,
    autoplay: {
      delay: 2500,
      disableOnInteraction: false,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    pagination: {
      el: ".swiper-pagination1",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next-img",
      prevEl: ".swiper-button-prev-img",
    },
  });
  var swiper1 = new Swiper(".mySwiper-img2", {
    slidesPerView: 3,
    spaceBetween: 10,
    slidesPerGroup: 1,
    rewind:false,
    loop:true,
    loopFillGroupWithBlank: true,
    autoplay: {
      delay: 2500,
      disableOnInteraction: false,
    },
    pagination: {
      el: ".swiper-pagination-img2",
      clickable: true,
    },
    navigation: {
      prevEl: ".swiper-button-prev-img",
      nextEl: ".swiper-button-next-img",
    },
    breakpoints:{
      800:{
        slidesPerView: 3,
        spaceBetween: 10,
      }
    }
  });
  var swiper1 = new Swiper(".mySwiper1", {
    slidesPerView: 1,
    spaceBetween: 10,
    slidesPerGroup: 1,
    rewind:false,
    loop:true,
    loopFillGroupWithBlank: true,
    autoplay: {
      delay: 2500,
      disableOnInteraction: false,
    },
    pagination: {
      el: ".swiper-pagination1",
      clickable: true,
    },
    navigation: {
      prevEl: ".swiper-button-prev1",
      nextEl: ".swiper-button-next1",
    },
    breakpoints:{
      800:{
        slidesPerView: 1,
        spaceBetween: 10,
      }
    }
  });
  var swiper1 = new Swiper(".mySwiper2", {
    slidesPerView: 1,
    spaceBetween: 10,
    slidesPerGroup: 1,
    rewind:false,
    loop:true,
    loopFillGroupWithBlank: true,
    autoplay: {
      delay: 3500,
      disableOnInteraction: false,
    },
    pagination: {
      el: ".swiper-pagination2",
      clickable: true,
    },
    navigation: {
      prevEl: ".swiper-button-prev2",
      nextEl: ".swiper-button-next2",
    },
    breakpoints:{
      800:{
        slidesPerView: 1,
        spaceBetween: 10,
      }
    }
  });
  var swiper1 = new Swiper(".mySwiper3", {
    slidesPerView: 1,
    spaceBetween: 10,
    slidesPerGroup: 1,
    rewind:false,
    loop:true,
    loopFillGroupWithBlank: true,
    autoplay: {
      delay: 4500,
      disableOnInteraction: false,
    },
    pagination: {
      el: ".swiper-pagination3",
      clickable: true,
    },
    navigation: {
      prevEl: ".swiper-button-prev3",
      nextEl: ".swiper-button-next3",
    },
    breakpoints:{
      800:{
        slidesPerView: 1,
        spaceBetween: 10,
      }
    }
  });
  var swiper1 = new Swiper(".mySwiper4", {
    slidesPerView: 1,
    spaceBetween: 10,
    slidesPerGroup: 1,
    rewind:false,
    loop:true,
    loopFillGroupWithBlank: true,
    autoplay: {
      delay: 5500,
      disableOnInteraction: false,
    },
    pagination: {
      el: ".swiper-pagination4",
      clickable: true,
    },
    navigation: {
      prevEl: ".swiper-button-prev4",
      nextEl: ".swiper-button-next4",
    },
    breakpoints:{
      800:{
        slidesPerView: 1,
        spaceBetween: 10,
      }
    }
  });
}