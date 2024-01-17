$("#header #gnb").hover(function(){
    if($("header").hasClass("on") === true) return;
    $("#header").toggleClass("on");
  })
  
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
  