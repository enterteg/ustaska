$(function(){
  $("#slider").slidesjs({
    width: 640,
    height: 200,
    navigation: { active: false },
    pagination: { active: false },
    play: { active: true, auto: true, pauseOnHover: true },
    effect: { slide: { speed: 2000 } }
  });
});
