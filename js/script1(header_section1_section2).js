// =======================================================
// 로딩 애니메이션
let loading_txt_p = document.querySelector('.loading_txt>p');
let loading_bg_ul_li = document.querySelectorAll('.loading_bg>ul>li')
let loading_logo_area = document.querySelector('.loading_logo_area');
let loading_wrap = document.querySelector('.loading_wrap');
let main_video = document.querySelector('.main_video>video')

// ======================
// 오디오 재생 및 정지 변수
let audio = document.querySelector(".audio");
let audio2 = document.querySelector('.audio2')
let audio_visual = document.querySelector(".audio_visual");
let audio_visual_span = document.querySelectorAll(".audio_visual>span")
let audio_control = false;
let audio2_control = false;


loading_txt_p.addEventListener('click', function(){
  loading_bg_ul_li.forEach(li=>{
    loading_logo_area.style.zIndex = '-1';
    li.style.transform = 'rotateY(0)';
    li.style.background = '#c30606';
    setTimeout(function(){
      loading_wrap.style.opacity = '0';
    }, 1400)
    setTimeout(function(){
      loading_wrap.style.display = 'none';
      main_video.play();
      document.querySelector('#header').style.opacity = '1';
      document.querySelector('#section1').style.opacity = '1';
      document.getElementsByTagName('body')[0].classList.remove('stick');

      if(window.innerWidth > 1400){
        audio.volume = 0.2;
        audio.play();
        audio_control = true;
      }
    }, 2000)
  })

})





// header

let highLight = document.querySelector(".highLight")
let burger_menu = document.querySelector(".burger_menu");
let gnb_menu_li = document.querySelectorAll(".gnb_menu>ul>li");

// 하이라이트
highLight.style.width = "0";
highLight.style.left = gnb_menu_li[0].offsetLeft + "px";
gnb_menu_li.forEach(li=>{
  li.addEventListener("mouseover", function(){
    highLight.style.width = li.offsetWidth + "px";
    highLight.style.left = li.offsetLeft + "px";
    highLight.children[0].style.opacity = "1";
  })
  li.addEventListener("mouseout", function(){
    highLight.style.width = "0";
    highLight.children[0].style.opacity = "0";
  })
})
gnb_menu_li[gnb_menu_li.length-1].addEventListener("mouseover", function(){
  highLight.children[0].style.opacity = "0";
})


// 햄버거메뉴 및 전체메뉴를 반응형으로 오픈 클로즈 하기
let all_menu = document.querySelector(".all_menu");
let all_menu_li_bg = document.querySelectorAll(".all_menu_li_bg");
let gnb_menu = document.querySelector(".gnb_menu");
let nav = document.querySelector("#nav");

burger_menu.addEventListener("click", function(){
  if(window.matchMedia("screen and (min-width: 1024px)").matches){
    this.classList.toggle("active");
    // 데스트탑모드로 전체메뉴 오픈
    if(this.classList.contains("active")){
      all_menu.style.left = '0';
      all_menu.style.display = 'block';
      gnb_menu.style.opacity = '0';
      gnb_menu.style.pointerEvents = 'none';
      nav.style.borderColor = 'transparent';
  
      setTimeout(function(){
        all_menu.style.opacity = '1';
      },100)

      setTimeout(function(){
        all_menu_li_bg.forEach(bg=>{
          bg.style.width = '0';
        })
      }, 300)
      
    } else {
      gnb_menu.style.opacity = '1';
      gnb_menu.style.pointerEvents = 'auto';
      nav.style.borderColor = '';
      all_menu_li_bg.forEach(bg=>{
        bg.style.width = '100%';
      })
      setTimeout(function(){
        all_menu.style.opacity = '0';
      }, 300)
      
      setTimeout(function(){
        all_menu.style.display = 'none';
        all_menu.style.left = '100%';
      },700)
    }

  // 1024 이하일 때 (테블릿 & 모바일 모드) 
  } else if(window.matchMedia("screen and (max-width: 1024px)").matches){
    this.classList.toggle("active");
    // 테블릿& 모바일 모드로 전체메뉴 오픈
    if(this.classList.contains("active")){
      all_menu.style.display = 'block';
      gnb_menu.style.opacity = '0';
      gnb_menu.style.pointerEvents = 'none';
      nav.style.borderColor = '#BEBCBC';
  
      setTimeout(function(){
        all_menu.style.opacity = '1';
        all_menu.style.left = '0';
      },100)
      
    } else {
      gnb_menu.style.opacity = '1';
      gnb_menu.style.pointerEvents = 'auto';
      nav.style.borderColor = "";
      all_menu.style.opacity = '0';
      all_menu.style.left = '100%';
      
      setTimeout(function(){
        all_menu.style.display = 'none';
      },400)
    }
  }
})
    

// 전체메뉴 테블릿버전
let all_menu_more_icon = document.querySelectorAll(".all_menu_more_icon");
let all_menu_ul_li_ul_li = document.querySelectorAll(".all_menu>ul>li>ul>li");
let all_menu_ul_li = document.querySelectorAll(".all_menu>ul>li");
let all_menu_ul_li_ul_li_ul = document.querySelectorAll(".all_menu>ul>li>ul>li>ul")

all_menu_ul_li_ul_li.forEach((li,idx,parent)=>{
  li.addEventListener("click", function(){
    if(all_menu_ul_li_ul_li_ul[idx].offsetHeight == 0){
      all_menu_ul_li_ul_li_ul.forEach(ul=>{
        ul.style.height = '0';
      })
      all_menu_ul_li_ul_li_ul[idx].style.height = all_menu_ul_li_ul_li_ul[idx].scrollHeight + 'px';
      all_menu_more_icon.forEach(icon=>{
        icon.classList.remove("active");
      })
      all_menu_more_icon[idx].classList.add("active");
    } else if(all_menu_ul_li_ul_li_ul[idx].offsetHeight > 0){
      all_menu_ul_li_ul_li_ul[idx].style.height = '0';
      all_menu_more_icon[idx].classList.remove("active");
    }
  })
})


// ======================
// 해더 고정
let window_Height = window.innerHeight; //현재 브라우저 창의 높이
let docum_Height = document.documentElement.scrollHeight; //현재 문서(스크롤 포함)의 높이
let header_Height = document.querySelector("#header").offsetHeight; //#header의 높이값
let nav_wrap = document.querySelector(".nav_wrap");
let lastScrollTop = 0;
let moveScroll;
let main_logo = document.querySelector(".main_logo");
let scroll_logo = document.querySelector(".scroll_logo");

// 사용자가 스크롤을 했는지 감지하는 역할
window.addEventListener("scroll", function(){
  moveScroll = true;
});
// 0.1초마다 스크롤을 감지해 스크롤이 일어났을 시 hasScroll 함수를 실행시킨다
setInterval(function(){
  if(moveScroll){
    hasScroll();
    moveScroll = false;
  }
}, 100)

function hasScroll(){
  let window_Scroll = window.pageYOffset; //브라우저의 스크롤 값을 구하는 방법2
  if(window_Scroll > lastScrollTop && window_Scroll > header_Height && !burger_menu.classList.contains("active")){
    document.querySelector("#header").style.top = "-80px"
  } else {
    document.querySelector("#header").style.top = "0";
  }
  lastScrollTop = window_Scroll;

  // 해더에 그림자 생기기
  if(window_Scroll > header_Height){
    nav_wrap.style.padding = '0';
    nav.style.padding = '0 5%';
    // nav_wrap.style.borderBottom = "1px solid #BEBCBC";
    // nav_wrap.style.backgroundColor = "#C30606";
    nav_wrap.style.backgroundImage = "linear-gradient(to bottom, rgba(0,0,0,0.9), rgba(0,0,0,0.7), rgba(0,0,0,0.5))"
    nav.style.borderColor = "#555";
    // main_logo.style.opacity = "0";
    // scroll_logo.style.opacity = "1";
  } else {
    nav_wrap.style.padding = '';
    nav.style.padding = '';
    // nav_wrap.style.borderBottom = "none";
    // nav_wrap.style.backgroundColor = "";
    nav_wrap.style.backgroundImage = "";
    nav.style.borderColor = "";
    // main_logo.style.opacity = "";
    // scroll_logo.style.opacity = "";
  }
}


// ======================
// 오디오 재생 및 정지변수 맨위에서 정의함


// ======================
// 낯과 밤 모드 설정
let brightness_button_label = document.querySelector('.brightness_button>label');
let brightness_button_input = document.querySelector('.brightness_button>input');
let light_font = document.querySelector('.light_font');
let dark_font = document.querySelector('.dark_font');

// 오디오재생
audio_visual.addEventListener('click', function(){
  if(!audio_control && !brightness_button_input.checked){
    audio.volume = 0.2;
    audio.play();
    audio_control = true;

    audio_visual_span.forEach(span=>{
      span.style.animationPlayState = 'running';
    })

    console.log('오디오1재생됨 및 애니메이션작동')
  } else {
    audio.pause();
    audio_control = false;
    audio_visual_span.forEach(span=>{
      span.style.animationPlayState = 'paused';
    })
    console.log('오디오1중지 및 애니메이션 중지')
  }

  if(!audio2_control && brightness_button_input.checked){
    audio2.volume = 0.2;
    audio2.play();
    audio2_control = true;

    audio_visual_span.forEach(span=>{
      span.style.animationPlayState = 'running';
    })

    console.log('오디오2재생됨 및 애니메이션작동')
  } else {
    audio2.pause();
    audio2_control = false;
    // audio_visual_span.forEach(span=>{
    //   span.style.animationPlayState = 'paused';
    // })
    console.log('오디오2중지 및 애니메이션중지')
  }
  
});

// 낮과 밤 모드
brightness_button_label.addEventListener('click', function(){
  if(!brightness_button_input.checked){
    light_font.style.color = '#fff'
    light_font.style.opacity = '1';
    dark_font.style.color = '#BEBCBC';
    dark_font.style.opacity = '0.7';

    if(!audio2_control){
      audio.pause();
      audio_control = false;

      audio2.volume = 0.3;
      audio2.play();
      audio2_control = true;

      console.log('오디오2재생됨 및 오디오1중지')
    }
    
    // document.getElementsByTagName('body')[0].style.background = '#fff';
    // document.getElementsByTagName('body')[0].classList.add('light');

  } else {

    if(!audio_control){
      audio.volume = 0.3;
      audio.play();
      audio_control = true;

      audio2.pause();
      audio2_control = false;
      
      console.log('오디오1재생됨 및 오디오2중지')
    }
   

    light_font.style.color = ''
    light_font.style.opacity = '';
    dark_font.style.color = '';
    dark_font.style.opacity = '';
  }
});

// 윈도우너비 1200px보다 작으면 오디오 끔
window.addEventListener('resize', function(){
  if(window.innerWidth <= 1200){
    audio.pause();
    audio_control = false;
    audio2.pause();
    audio2_control = false;
  }
})



// ================================================================
// section2
// 메뉴 슬라이드
let menu_slide_wrap = document.querySelector(".menu_slide_wrap"),
    menu_slider  = document.querySelector(".menu_slider"),
    menu_slide = document.querySelectorAll(".menu_slider>li"),
    menu_slideIdx = 0,
    menu_setSlide = "",
    menu_setSlideControl = true;

// 드래그 슬라이드 변수
let menu_startX;
let menu_endX;
let menu_pressed = false;
let menu_moved = false;
let menu_slide_scrollLeft;

//슬라이드 복제    
makeCloneMenuSlide();
function makeCloneMenuSlide(){
  for(let i = 0; i < 4; ++i){
    let cloneSlide = menu_slide[i].cloneNode(true);
    cloneSlide.classList.add("clone");
    menu_slider.appendChild(cloneSlide);
  } 
  for(let i = menu_slide.length-1; i > menu_slide.length-5; --i){
    let cloneSlide = menu_slide[i].cloneNode(true);
    cloneSlide.classList.add("clone");
    menu_slider.prepend(cloneSlide);
  }
}
//슬라이드 복제  끝  

// ===================
// 슬라이드 크기 및 위치 조절
let new_menu_slider = document.querySelector(".menu_slider"),
    new_menu_slide = document.querySelectorAll(".menu_slider>li"),
    menu_slide_width;

window.addEventListener('load', mediaResponse);
window.addEventListener('resize', mediaResponse);

function mediaResponse(){
  if(window.innerWidth > 1024){
    menu_slide_width = 25;
    new_menu_slide.forEach(li=>{
      li.style.width = menu_slide_width + '%';
    })
    new_menu_slider.style.width = menu_slide_width * new_menu_slide.length + '%';
    new_menu_slider.style.transform = "translateX(" + -(100/new_menu_slide.length)*4 + "%)";

  }else if(window.innerWidth <= 1024){
    menu_slide_width = 50;
    new_menu_slide.forEach(li=>{
      li.style.width = menu_slide_width + '%';
    })
    new_menu_slider.style.width = menu_slide_width * new_menu_slide.length + '%';
    new_menu_slider.style.transform = "translateX(" + -(100/new_menu_slide.length)*4 + "%)";
  }
} //mediaResponse

new_menu_slider.classList.add("transition");
new_menu_slider.style.left = "0";

// -----------------------------------------------
// 자동 슬라이드
autoMenuSlide();
function autoMenuSlide(){
  if(menu_setSlideControl){
    menu_setSlide = setInterval(function(){
      menuSlide(menu_slideIdx + 2);
    }, 4500)
    menu_setSlideControl = false;
  }
}


// =============================================
// 메뉴 드래그 슬라이드
let menu_flag = true;
new_menu_slider.addEventListener("mousedown", dragStart);
new_menu_slider.addEventListener("mousemove", dragMove);
new_menu_slider.addEventListener("mouseup", dragEnd);
new_menu_slider.addEventListener("touchstart", dragStart);
new_menu_slider.addEventListener("touchmove", dragMove);
new_menu_slider.addEventListener("touchend", dragEnd);

function dragStart(e){

  menu_pressed = true;
  menu_startX = e.pageX - new_menu_slider.offsetLeft;
  if(e.type == "touchstart"){
    menu_startX = e.touches[0].pageX - new_menu_slider.offsetLeft;
  }
  
  clearInterval(menu_setSlide);
  menu_setSlideControl = true;

  document.onmouseup = dragEnd;
  document.onmousemove = dragMove;
}

function dragMove(e){
  if(menu_pressed){
    menu_moved = true;
    e.preventDefault();  
    menu_endX = e.pageX - new_menu_slider.offsetLeft;
    if(e.type == "touchmove"){
      menu_endX = e.touches[0].pageX - new_menu_slider.offsetLeft;
    }
    
  }   
 
}


let slideDragWidth_menu;
function dragEnd(e){

  // 화면이 작아지면 약간만 드래그해도 슬라이드 가능하게
  if(window.innerWidth > 1024){
    slideDragWidth_menu = new_menu_slide[0].offsetWidth;
  }else if (window.innerWidth <= 1024 && window.innerWidth > 850){
    slideDragWidth_menu = new_menu_slide[0].offsetWidth / 2;
  }else if (window.innerWidth <= 850){
    slideDragWidth_menu = new_menu_slide[0].offsetWidth / 3;
  }

  if(menu_moved){

    if(menu_startX - menu_endX > slideDragWidth_menu && menu_flag){
      menuSlide(menu_slideIdx + 2);     
      menu_flag = false;
      setTimeout(function(){
        menu_flag = true;
      }, 1140)
      
    } else if (menu_endX - menu_startX > slideDragWidth_menu && menu_flag){
      menuSlide(menu_slideIdx - 2);    
      menu_flag = false;
      setTimeout(function(){
        menu_flag = true;
      }, 1140)
    }
    // else if (menu_startX - menu_endX < slideDragWidth){
    //   new_menu_slider.removeEventListener("touchmove", dragMove);
    // }
    
    menu_pressed = false;
    menu_moved = false;
   
  }

  autoMenuSlide();
  menu_setSlideControl = false;

  menu_pressed = false;
  menu_moved = false;

  document.onmouseup = null;
  document.onmousemove = null; 
}

// 드래그 슬라이드 끝
// ================================================


// prev, next 버튼으로 슬라이드 조정
let menu_slide_prev = document.querySelector(".menu_slide_prev");
let menu_slide_next = document.querySelector(".menu_slide_next");


menu_slide_prev.addEventListener("click", function(e){
  if(menu_flag){
    menuSlide(menu_slideIdx - 2);
    menu_flag = false;
    setTimeout(function(){
      menu_flag = true;
    },1140)
  }
})

menu_slide_next.addEventListener("click", function(e){
  if(menu_flag){
    menuSlide(menu_slideIdx + 2);
    menu_flag = false;
    setTimeout(function(){
      menu_flag = true;
    },1140)
  }
})

// prev, next버튼 클릭시 자동슬라이드 잠시 멈춤
menu_slide_prev.addEventListener("mousedown", function(){
    clearInterval(menu_setSlide);
    menu_setSlideControl = true;
});
menu_slide_next.addEventListener("mousedown", function(){
  clearInterval(menu_setSlide);
  menu_setSlideControl = true;
});

menu_slide_prev.addEventListener("mouseup", function(){
  autoMenuSlide();
  menu_setSlideControl = false;
});
menu_slide_next.addEventListener("mouseup", function(){
  autoMenuSlide();
  menu_setSlideControl = false;
});


// -----------------------------------------------
// 수동슬라이드
let odd_menu_li = document.querySelectorAll(".odd_menu_li")
let even_menu_li = document.querySelectorAll(".even_menu_li");

function menuSlide(n){
  menu_slideIdx = n;

  if(menu_slideIdx == 8){
    setTimeout(function(){
      new_menu_slider.classList.remove("transition");
      menu_slideIdx = 0;
      new_menu_slider.style.left = "0";
    }, 1120)
    setTimeout(function(){
      new_menu_slider.classList.add("transition")
    }, 1140)
  }

  if(menu_slideIdx == -2){
    setTimeout(function(){
      new_menu_slider.classList.remove("transition");
      menu_slideIdx = 6;
      new_menu_slider.style.left =  -(6 * menu_slide_width) + "%";
    }, 1120)
    setTimeout(function(){
      new_menu_slider.classList.add("transition")
    }, 1140)
  }

  odd_menu_li.forEach(li=>{
    li.style.transform = 'translateY(7%) scale(0.9)';
  })
  even_menu_li.forEach(li=>{
    li.style.transform = 'translateY(-7%) scale(0.9)';
  })
  setTimeout(function(){
    new_menu_slider.style.left = -(menu_slideIdx * menu_slide_width) + "%";
  }, 310)
  setTimeout(function(){
    odd_menu_li.forEach(li=>{
      li.style.transform = 'translateY(0) scale(1)';
    })
    even_menu_li.forEach(li=>{
      li.style.transform = 'translateY(0) scale(1)';
    })
  }, 810)

}

