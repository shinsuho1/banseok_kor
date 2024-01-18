const header = document.querySelector("#header");
// $("#header #gnb").hover(function(){
//   if(window.scrollY == 0){
//     $("#header").addClass("on");
//   }else{
//     $("#header").addClass("on");
//   }

//   })
  
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
  
  window.addEventListener("scroll",()=>{
    if(window.scrollY > header.offsetTop){
      header.classList.add("on");
    }else{
      header.classList.remove("on");
    }
  });

  $(".tab-menu div span").on("click", function() {
    $(this).toggleClass("active");
    $(this).next("ul").stop().slideToggle("active");
  });
  
  const sub_menu = document.querySelectorAll("#gnb ul li .sub-menu");
  const header_bg = document.querySelector(".header_bg");
  const header_gnb = document.querySelector("#gnb");

  const menu_height = [];

  window.addEventListener("load",()=>{
  
    sub_menu.forEach((el,index)=>{
      menu_height.push(el.offsetHeight);
    });
  });

  window.addEventListener("resize",()=>{
    sub_menu.forEach((el,index)=>{
      menu_height.push(el.offsetHeight);
    });
  });

header_gnb.addEventListener("mouseover",()=>{
  header_bg.style.height = header.offsetHeight + Math.max(...menu_height) + "px";
  header.classList.add("on");
});

header_gnb.addEventListener("mouseleave",()=>{
  header_bg.style.height = 0;
  if(window.scrollY > 0){
    return
  }else{
    header.classList.remove("on");
  }
});

