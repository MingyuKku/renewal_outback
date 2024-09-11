// section6
let pressCenter_right_ul = document.querySelector(".pressCenter_right>ul");
let pressCenter_right_ul_li = document.querySelectorAll(".pressCenter_right>ul>li")

pressCenter_right_ul_li.forEach((li,idx)=>{
  li.addEventListener('mouseover', function(){
    pressCenter_right_ul_li.forEach(li=>{
      li.style.opacity = '0.15';
    })
    li.style.opacity = '1';
  })
})

pressCenter_right_ul.addEventListener('mouseout', function(){
  pressCenter_right_ul_li.forEach(li=>{
    li.style.opacity = '';
  })
})


// section7
	new daum.roughmap.Lander({
		"timestamp" : "1632811730838",
		"key" : "27he3",
		// "mapWidth" : "640",
		"mapHeight" : "400",
	}).render();



// 패럴렉스
// section2
let main_visual_tit = document.querySelector(".main_visual_tit");
let main_visual_t_bone_area = document.querySelector('.main_visual_t_bone_area');
let main_visual_t_bone_txt_wrap = document.querySelector('.main_visual_t_bone_txt_wrap');
let main_visual_tomahawk_area = document.querySelector('.main_visual_tomahawk_area');
let main_visual_tomahawk_txt_wrap = document.querySelector('.main_visual_tomahawk_txt_wrap');
let main_visual_black_area = document.querySelector('.main_visual_black_area');
let main_visual_black_txt_wrap = document.querySelector('.main_visual_black_txt_wrap');
let menu_slide_area = document.querySelector('.menu_slide_area');
let menu_slide_viewMore = document.querySelector('.menu_slide_viewMore');

// section3
let videoGallery_tit = document.querySelector(".videoGallery_tit");
// section4
let side_menu_tit = document.querySelector(".side_menu_tit");
let side_menu1 = document.querySelector('.side_menu1');
let side_menu2 = document.querySelector('.side_menu2');
let side_menu3 = document.querySelector('.side_menu3');
let side_menu4 = document.querySelector('.side_menu4');
// section5
let benefit_wrap = document.querySelector(".benefit_wrap");
let benefit_coupon_ul = document.querySelector('.benefit_coupon>ul');
let boomerang_coupon_area = document.querySelector('.boomerang_coupon_area');
// section6
let pressCenter_wrap = document.querySelector('.pressCenter_wrap');
let pressCenter_right = document.querySelector('.pressCenter_right');


window.addEventListener('scroll', function(){
  let wScroll = document.documentElement.scrollTop;

// section2
if(wScroll >= main_visual_tit.offsetTop - window.innerHeight / 1.2){
  main_visual_tit.classList.add("scroll");
} else {
  main_visual_tit.classList.remove("scroll");
}

// 티본스테이크
if(wScroll >= main_visual_t_bone_area.offsetTop - window.innerHeight / 1.5){
  main_visual_t_bone_area.classList.add("scroll");
} else {
  main_visual_t_bone_area.classList.remove("scroll");
}
if(wScroll >= main_visual_t_bone_txt_wrap.offsetTop - window.innerHeight / 1.5){
  main_visual_t_bone_txt_wrap.classList.add("scroll");
} else {
  main_visual_t_bone_txt_wrap.classList.remove("scroll");
}

// 토마호크스테이크
if(wScroll >= main_visual_tomahawk_area.offsetTop - window.innerHeight / 1.5){
  main_visual_tomahawk_area.classList.add("scroll");
} else {
  main_visual_tomahawk_area.classList.remove("scroll");
}
if(wScroll >= main_visual_tomahawk_txt_wrap.offsetTop - window.innerHeight / 1.5){
  main_visual_tomahawk_txt_wrap.classList.add("scroll");
} else {
  main_visual_tomahawk_txt_wrap.classList.remove("scroll");
}

// 블랙라벨스테이크
if(wScroll >= main_visual_black_area.offsetTop - window.innerHeight / 1.5){
  main_visual_black_area.classList.add("scroll");
} else {
  main_visual_black_area.classList.remove("scroll");
}
if(wScroll >= main_visual_black_txt_wrap.offsetTop - window.innerHeight / 1.5){
  main_visual_black_txt_wrap.classList.add("scroll");
} else {
  main_visual_black_txt_wrap.classList.remove("scroll");
}

// 메뉴 슬라이드
if(wScroll >= (document.documentElement.scrollTop + menu_slide_wrap.getBoundingClientRect().top) - window.innerHeight / 1.5){
  menu_slide_wrap.classList.add("scroll");
  autoMenuSlide();
} else {
  menu_slide_wrap.classList.remove("scroll");
  clearInterval(menu_setSlide);
  menu_setSlideControl = true;
}
if(wScroll >= (document.documentElement.scrollTop + menu_slide_viewMore.getBoundingClientRect().top) - window.innerHeight / 1.2){
  menu_slide_viewMore.classList.add("scroll");
} else {
  menu_slide_viewMore.classList.remove("scroll");
}


// section3
if(wScroll >= videoGallery_tit.offsetTop - window.innerHeight / 1.2){
  videoGallery_tit.classList.add("scroll");
} else {
  videoGallery_tit.classList.remove("scroll");
}

if(wScroll >= videoGallery_slide_wrap.offsetTop - window.innerHeight / 1.5){
  videoGallery_slide_wrap.classList.add("scroll");
  autoVideoGallerySlide();
} else {
  videoGallery_slide_wrap.classList.remove("scroll");
  clearInterval(videoGallery_setSlide);
  videoGallery_setSlideControl = true;
}


// section4
if(wScroll >= side_menu_tit.offsetTop - window.innerHeight / 1.2){
  side_menu_tit.classList.add("scroll");
} else {
  side_menu_tit.classList.remove("scroll");
}

if(wScroll >= side_menu1.offsetTop - window.innerHeight / 1.4){
  side_menu1.classList.add("scroll");
  setTimeout(function(){
    side_menu1.style.pointerEvents = 'auto';
  }, 1000)
}
if(wScroll >= side_menu2.offsetTop - window.innerHeight / 1.4){
  side_menu2.classList.add("scroll");
  setTimeout(function(){
    side_menu2.style.pointerEvents = 'auto';
  }, 1000)
}
if(wScroll >= side_menu3.offsetTop - window.innerHeight / 1.4){
  side_menu3.classList.add("scroll");
  setTimeout(function(){
    side_menu3.style.pointerEvents = 'auto';
  }, 1000)
}
if(wScroll >= side_menu4.offsetTop - window.innerHeight / 1.4){
  side_menu4.classList.add("scroll");
  setTimeout(function(){
    side_menu4.style.pointerEvents = 'auto';
  }, 1000)
}


// section5
if(wScroll >= (document.documentElement.scrollTop + benefit_wrap.getBoundingClientRect().top) - window.innerHeight / 1.2){
  benefit_wrap.classList.add("scroll");
} else {
  benefit_wrap.classList.remove("scroll");
}

if(wScroll >= (document.documentElement.scrollTop + benefit_coupon_ul.getBoundingClientRect().top) - window.innerHeight / 1.2){
  benefit_coupon_ul.classList.add("scroll");
} else {
  benefit_coupon_ul.classList.remove("scroll");
}

if(wScroll >= (document.documentElement.scrollTop + boomerang_coupon_area.getBoundingClientRect().top) - window.innerHeight / 1.2){
  boomerang_coupon_area.classList.add("scroll");
}

// section6
if(wScroll >= pressCenter_wrap.offsetTop - window.innerHeight / 1.2){
  pressCenter_wrap.classList.add("scroll");
} else {
  pressCenter_wrap.classList.remove("scroll");
}

if(wScroll >= pressCenter_right.offsetTop - window.innerHeight / 1.2){
  pressCenter_right.classList.add("scroll");
  setTimeout(function(){
    pressCenter_right_ul_li.forEach(li=>{
      li.style.pointerEvents = 'auto';
    });
  }, 1000)
} else {
  pressCenter_right.classList.remove("scroll");
  pressCenter_right_ul_li.forEach(li=>{
    li.style.pointerEvents = '';
  });
}


})  //window 스크롤 이벤트



// ============================
// 스크롤 탑
let dHeight = document.documentElement.scrollHeight; 
let scroll_top = document.querySelector('.scroll_top');
// let wScroll; 

window.addEventListener("scroll", function(){
  let wScroll = document.documentElement.scrollTop;
  if(wScroll > dHeight / 8){
    scroll_top.style.bottom = '10px';
  } else {
    scroll_top.style.bottom = '';
  }
}); 


var scroll_top_j = $(".scroll_top");
var video_scroll = $('.video_scroll');
var main_visual_wrap_j = $('.main_visual_wrap');

video_scroll.click(function(){
  $("html, body").animate({scrollTop: main_visual_wrap_j.offset().top + 100}, 600, "easeInCirc"); 
});


scroll_top_j.click(function(){
// var target = $(this);
// var index = target.index(); 
// var section = cont.eq(index); 
// var offset = section.offset().top;

$("html, body").animate({scrollTop: 0}, 600, "easeOutCirc"); 
});

