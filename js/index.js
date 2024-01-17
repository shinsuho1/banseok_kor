const news_slide = new Swiper('.news_slide', {
    slidesPerView: 3,
    spaceBetween: 30,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    breakpoints: {
      0:{
        slidesPerView: 1,
      },
      540:{
        slidesPerView: 2,
      },
      768: {
        slidesPerView: 2, 
      },
      1024: {
        slidesPerView: 3, 
      },
    },
  });

  const product_slide = new Swiper('.product_slide', {
    slidesPerView: 1,
    navigation:{
      prevEl: ".product_slide_number .now img",
      nextEl: ".product_slide_number .all img",
    }
  });
  const nowPage = document.querySelector(".product_slide_number .now span");
  const allPage = document.querySelector(".product_slide_number .all span");
  product_slide.on('transitionStart', function() {
    nowPage.textContent = "0"+(product_slide.realIndex + 1);
  });
  window.addEventListener("load",()=>{
    allPage.textContent = "0"+document.querySelectorAll(".product_slide .swiper-wrapper .swiper-slide").length;
  });