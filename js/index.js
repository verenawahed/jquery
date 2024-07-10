///<reference types="../@types/jquery" />



$(".openNav").on('click',function(){
    $("#leftMenu").animate({ width:'250px'},50)
   $(".caption").animate({marginLeft :'250px'},50)
})

$('.closebtn').on('click',function(){
    $('#leftMenu').animate({ width:'0px'},50)
   $('.caption').animate({marginLeft :'0px'},50)
});
$("#leftMenu a").on('click',function(e){
    
    let aHref = e.target.getAttribute('href')
        let sectionOffest =$(aHref).offset().top;
        $('body,html').animate({scrollTop:sectionOffest},1000)
    
});
$('#sliderDown .toggle').on('click',function(){
    $('.inner').not($(this).next()).slideUp(500);
    $(this).next().slideToggle(500);
});
window.onload = function() {
   
    countDownToTime("11 july 2024 9:56:00");
  }

  function countDownToTime(countTo) {
  
        let futureDate = new Date(countTo);
    futureDate = (futureDate.getTime()/1000);

    let now = new Date();
    now = (now.getTime()/1000);

    timeDifference = (futureDate- now);
        
   let days = Math.floor( timeDifference / (24*60*60));
   let hours = Math.floor((timeDifference - (days * (24*60*60))) / 3600);
   let mins = Math.floor((timeDifference - (days * (24*60*60)) - (hours * 3600 )) / 60);
   let secs = Math.floor((timeDifference - (days * (24*60*60)) - (hours * 3600) - (mins * 60)))


    $(".days").html(`${days} D`);
    $(".hours").html(`${hours} h`);
    $(".minutes").html(`${ mins } m`);
    $('.seconds').html(`${ secs} s`)

  
    setInterval(function() {  countDownToTime(countTo); }, 1000);
  }
  const messageInput = document.getElementById('message');
    const charCountDisplay = document.getElementById('charCount');

    messageInput.addEventListener('input', () => {
      const remaining = 100 - messageInput.value.length;
      charCountDisplay.textContent = `${remaining} characters remaining`;
    });
    $(function(){
        $('.loader').fadeOut(1000,function() {
            $('.loading').slideUp(1000,function () {
                $('body').css('overfloW','auto');
                $('.loading').remove()
            })
        })
    });
