var swiper = new Swiper(".mySwiper", {
  effect: "coverflow",
  grabCursor: true,
  centeredSlides: true,
  initialSlide:	1,
  slidesPerView: "auto",
   keyboard: {
        enabled: true,
      },
  coverflowEffect: {
    rotate: 0,
    stretch: 0,
    depth: 100,
    modifier: 2,
    slideShadows: true,
  }
});

$('input[type="checkbox"]').click(function(){
  if($(this).is(":checked")){
      $(".basic").text("19.99");
      $(".professional").text("24.99");
      $(".master").text("39.99");
  }
  else{
    $(".basic").text("199.99");
    $(".professional").text("249.99");
    $(".master").text("399.99");
  }
});

$("body").keydown(function(e){
  if(e.keyCode == 13){// user has pressed space or enter
    if($('input[type="checkbox"]').prop("checked")==true){
      $('input[type="checkbox"]').prop("checked", false);
      $(".basic").text("199.99");
      $(".professional").text("249.99");
      $(".master").text("399.99");
    }
   else{
    $('input[type="checkbox"]').prop("checked", true);
    $(".basic").text("19.99");
    $(".professional").text("24.99");
    $(".master").text("39.99");
   }
  }
});
