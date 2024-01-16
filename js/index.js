$(function(){
    const news_slide = new Swiper('.news_slide', {
      slidesPerView: 3,
      spaceBetween: 30,
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      }
    });
    const product_slide = new Swiper('.product_slide', {
      slidesPerView: 1,
      loop: true,
    });
})





// $("#header #gnb").hover(function(){
//   $("#header").toggleClass("on");
// })

const pop_gnb_li = document.querySelectorAll(".pop_gnb>ul>li");

$("#menuicon").on("click",function(){
  $(".util").toggleClass("on");
  $(".pop_gnb").toggleClass("active");
})


pop_gnb_li.forEach((el,index)=>{
  el.addEventListener("click",()=>{
    pop_gnb_li.forEach((el)=>{
      el.classList.remove("on");
    });
    el.classList.add("on");
  });
});


window.addEventListener("load",()=>{
  document.querySelector("#menuicon").checked = false;
});