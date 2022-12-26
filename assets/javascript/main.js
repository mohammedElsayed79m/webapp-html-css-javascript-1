$(function(){
  $( "#check-in" ).datepicker();
    $( "#check-out" ).datepicker();

    $('.slider').slick({
      dots:true,
      arrows:true,
      slidesToShow:1,
      slidesToScroll:1
    });
})



  let playIcon = document.querySelector('.fa-play-circle')
  let pauseIcon = document.querySelector('.fa-pause-circle')
  let video = document.querySelector('.video video')
  let over = document.querySelector('.video-overlay')


  function play(){
    pauseIcon.style.display="block"
    playIcon.style.display="none"
    video.play()
  }


  function pause(){
    pauseIcon.style.display="none"
    playIcon.style.display="block"
    video.pause()
  }


  let up = document.querySelector(".scroll-up")

  up.addEventListener("click",()=>{
    window.scroll({
      top:0
    })
  })


  document.querySelectorAll(".nav-link").forEach(link=>{
    link.addEventListener("click",(e)=>{
      document.querySelectorAll(".nav-link").forEach((ele)=>{
        ele.classList.remove("active")
      })
      e.target.classList.add("active")
    })
  })