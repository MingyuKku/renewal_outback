// section3
// 동영상 갤러리 슬라이드
let videoGallery_slide_wrap = document.querySelector(".videoGallery_slide_wrap"),
    videoGallery_slider  = document.querySelector(".videoGallery_slider"),
    videoGallery_slide = document.querySelectorAll(".videoGallery_slider>li"),
    videoGallery_slideIdx = 0,
    videoGallery_setSlide = "",
    videoGallery_setSlideControl = true,
    videoGallery_slide_control_span = document.querySelectorAll(".videoGallery_slide_control>span");

// 드래그 슬라이드 변수
let videoGallery_startX;
let videoGallery_endX;
let videoGallery_pressed = false;
let videoGallery_moved = false;

//슬라이드 복제    
makeCloneVideoGallerySlide();
function makeCloneVideoGallerySlide(){
  for(let i = 0; i < 3; ++i){
    let cloneSlide = videoGallery_slide[i].cloneNode(true);
    cloneSlide.classList.add("clone");
    videoGallery_slider.appendChild(cloneSlide);
  } 
  for(let i = videoGallery_slide.length-1; i > 5; --i){
    let cloneSlide = videoGallery_slide[i].cloneNode(true);
    cloneSlide.classList.add("clone");
    videoGallery_slider.prepend(cloneSlide);
  }
}
//슬라이드 복제  끝  

// ===================
// 슬라이드 크기 및 위치 조절
let new_videoGallery_slider = document.querySelector(".videoGallery_slider"),
    new_videoGallery_slide = document.querySelectorAll(".videoGallery_slider>li"),
    videoGallery_slide_width;

window.addEventListener('load', mediaResponse_videoGallery);
window.addEventListener('resize', mediaResponse_videoGallery);

function mediaResponse_videoGallery(){
  if(window.innerWidth > 850){
    videoGallery_slide_width = 70;
    new_videoGallery_slide.forEach(li=>{
      li.style.width = videoGallery_slide_width + '%';
      li.style.margin = '0 0.5%';
    })
    new_videoGallery_slider.style.width = videoGallery_slide_width * new_videoGallery_slide.length + '%';
    new_videoGallery_slider.style.transform = "translateX(" + -(100/new_videoGallery_slide.length)*2.79 + "%)";

  }else if(window.innerWidth <= 850){
    videoGallery_slide_width = 100;
    new_videoGallery_slide.forEach(li=>{
      li.style.width = videoGallery_slide_width + '%';
      li.style.margin = '0';
    })
    new_videoGallery_slider.style.width = videoGallery_slide_width * new_videoGallery_slide.length + '%';
    new_videoGallery_slider.style.transform = "translateX(" + -(100/new_videoGallery_slide.length)*3 + "%)";
  }
}

new_videoGallery_slider.classList.add("transition");
new_videoGallery_slider.style.left = "0";

// -----------------------------------------------
// 자동 슬라이드
// autoVideoGallerySlide();
function autoVideoGallerySlide(){
  if(videoGallery_setSlideControl){
    videoGallery_setSlide = setInterval(function(){
      videoGallerySlide(videoGallery_slideIdx + 1);
    }, 3500)
    videoGallery_setSlideControl = false;
  }
  
}


// =============================================
// 메뉴 드래그 슬라이드
let videoGallery_flag = true;

new_videoGallery_slider.addEventListener("mousedown", dragStart_videoGallery);
new_videoGallery_slider.addEventListener("mousemove", dragMove_videoGallery);
new_videoGallery_slider.addEventListener("mouseup", dragEnd_videoGallery);
new_videoGallery_slider.addEventListener("touchstart", dragStart_videoGallery);
new_videoGallery_slider.addEventListener("touchmove", dragMove_videoGallery);
new_videoGallery_slider.addEventListener("touchend", dragEnd_videoGallery);

function dragStart_videoGallery(e){
  videoGallery_startX = e.pageX - new_videoGallery_slider.offsetLeft;
  if(e.type == "touchstart"){
    videoGallery_startX = e.touches[0].pageX - new_videoGallery_slider.offsetLeft;
  }
  videoGallery_pressed = true;
  
  clearInterval(videoGallery_setSlide);
  videoGallery_setSlideControl = true;

  document.onmouseup = dragEnd;
  document.onmousemove = dragMove;
}

function dragMove_videoGallery(e){
  if(videoGallery_pressed){
    videoGallery_moved = true;
    e.preventDefault();  
    videoGallery_endX = e.pageX - new_videoGallery_slider.offsetLeft; 
    if(e.type == "touchmove"){
      videoGallery_endX = e.touches[0].pageX - new_videoGallery_slider.offsetLeft;
    }
  }   
}

let slideDragWidth_gallery;
function dragEnd_videoGallery(e){

   // 화면이 작아지면 약간만 드래그해도 슬라이드 가능하게
   if(window.innerWidth > 1024){
    slideDragWidth_gallery = new_videoGallery_slide[0].offsetWidth/3;
  }else if (window.innerWidth <= 1024 && window.innerWidth > 850){
    slideDragWidth_gallery = new_videoGallery_slide[0].offsetWidth/4;
  }else if (window.innerWidth <= 850){
    slideDragWidth_gallery = new_videoGallery_slide[0].offsetWidth/5;
  }

  if(videoGallery_moved){
    if(videoGallery_startX - videoGallery_endX > slideDragWidth_gallery && videoGallery_flag){
      videoGallerySlide(videoGallery_slideIdx + 1);  
      videoGallery_flag = false;
      setTimeout(function(){
        videoGallery_flag = true;
      }, 620)
    } else if (videoGallery_endX - videoGallery_startX > slideDragWidth_gallery && videoGallery_flag){
      videoGallerySlide(videoGallery_slideIdx - 1);   
      videoGallery_flag = false;
      setTimeout(function(){
        videoGallery_flag = true;
      }, 620)
    } 
    videoGallery_pressed = false;
    videoGallery_moved = false;

  }
  
  autoVideoGallerySlide();
  videoGallery_setSlideControl = false;

  videoGallery_pressed = false;
  videoGallery_moved = false;

  document.onmouseup = null;
  document.onmousemove = null; 
}
// 드래그 슬라이드 끝
// ================================================


// prev, next 버튼으로 슬라이드 조정
let videoGallery_slide_prev = document.querySelector(".videoGallery_slide_prev");
let videoGallery_slide_next = document.querySelector(".videoGallery_slide_next");


videoGallery_slide_prev.addEventListener("click", function(e){
  if(videoGallery_flag){
    videoGallerySlide(videoGallery_slideIdx - 1);
    videoGallery_flag = false;
    setTimeout(function(){
      videoGallery_flag = true;
    },620)
  }
})

videoGallery_slide_next.addEventListener("click", function(e){
  if(videoGallery_flag){
    videoGallerySlide(videoGallery_slideIdx + 1);
    videoGallery_flag = false;
    setTimeout(function(){
      videoGallery_flag = true;
    },620)
  }
})

// prev, next버튼 클릭시 자동슬라이드 잠시 멈춤
videoGallery_slide_prev.addEventListener("mousedown", function(){
  clearInterval(videoGallery_setSlide);
  videoGallery_setSlideControl = true;
});
videoGallery_slide_next.addEventListener("mousedown", function(){
  clearInterval(videoGallery_setSlide);
  videoGallery_setSlideControl = true;
});

videoGallery_slide_prev.addEventListener("mouseup", function(){
  autoVideoGallerySlide();
  videoGallery_setSlideControl = false;
});
videoGallery_slide_next.addEventListener("mouseup", function(){
  autoVideoGallerySlide();
  videoGallery_setSlideControl = false;
});


// 컨트롤버튼으로 슬라이드 조정
videoGallery_slide_control_span.forEach((span,idx,parent)=>{
  span.addEventListener('click', function(){
    videoGallerySlide(idx);
  })
});

// 컨트롤버튼 클릭시 자동슬라이드 멈춤
videoGallery_slide_control_span.forEach(span=>{
  span.addEventListener('mousedown', function(){
    clearInterval(videoGallery_setSlide);
    videoGallery_setSlideControl = true;
  })
  span.addEventListener('mouseup', function(){
    autoVideoGallerySlide();
    videoGallery_setSlideControl = false;
  });
})

// -----------------------------------------------
// 수동슬라이드
let videoGallery_opacity_slideIdx = 0;
let videoGallery_control_idx = 0;

function videoGallerySlide(n){
  videoGallery_slideIdx = n;
  videoGallery_opacity_slideIdx = videoGallery_slideIdx+3;
  videoGallery_control_idx = videoGallery_slideIdx;

  if(videoGallery_slideIdx == 9){
    setTimeout(function(){
      new_videoGallery_slider.classList.remove("transition");
      videoGallery_slideIdx = 0;
      new_videoGallery_slider.style.left = "0";
    }, 500)
    setTimeout(function(){
      new_videoGallery_slider.classList.add("transition")
    }, 520)
  }

  if(videoGallery_slideIdx == -1){
    setTimeout(function(){
      new_videoGallery_slider.classList.remove("transition");
      videoGallery_slideIdx = 8;
      new_videoGallery_slider.style.left =  -(8 * videoGallery_slide_width) + "%";
    }, 500)
    setTimeout(function(){
      new_videoGallery_slider.classList.add("transition")
    }, 520)
  }

  // 좀더 다이나믹한 특수효과
  new_videoGallery_slide.forEach(li=>{
    li.style.background = '#111';
    li.style.opacity = '0.3';
    li.style.transform = 'scale(0.9)';
    li.style.pointerEvents = 'none';
  })

  if(videoGallery_opacity_slideIdx == 12){
    new_videoGallery_slide[12].style.background = '';
    new_videoGallery_slide[12].style.opacity = '1';
    new_videoGallery_slide[12].style.transform = 'scale(1)';
    new_videoGallery_slide[12].style.pointerEvents = 'auto';
    videoGallery_opacity_slideIdx = 3;
  }
  if(videoGallery_opacity_slideIdx == 2){
    new_videoGallery_slide[2].style.background = '';
    new_videoGallery_slide[2].style.opacity = '1';
    new_videoGallery_slide[2].style.transform = 'scale(1)';
    new_videoGallery_slide[2].style.pointerEvents = 'auto';
    videoGallery_opacity_slideIdx = 11;
  }

  // 컨트롤버튼 효과
  videoGallery_slide_control_span.forEach(span=>{
    span.classList.remove('active')
  })

  if(videoGallery_control_idx == 9){
    videoGallery_slide_control_span[0].classList.add('active');
    videoGallery_control_idx = 0;
  }
  if(videoGallery_control_idx == -1){
    videoGallery_slide_control_span[8].classList.add('active');
    videoGallery_control_idx = 8;
  }

  new_videoGallery_slide[videoGallery_opacity_slideIdx].style.background = '';
  new_videoGallery_slide[videoGallery_opacity_slideIdx].style.opacity = '1';
  new_videoGallery_slide[videoGallery_opacity_slideIdx].style.transform = 'scale(1)';
  new_videoGallery_slide[videoGallery_opacity_slideIdx].style.pointerEvents = 'auto';
  videoGallery_slide_control_span[videoGallery_control_idx].classList.add('active');
  new_videoGallery_slider.style.left = -(videoGallery_slideIdx * videoGallery_slide_width) + "%";
  
}