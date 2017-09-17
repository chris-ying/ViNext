$(document).ready(function() {
    
    var alerted = localStorage.getItem('alerted') || '';
    
    if (alerted != 'yes') {
        setTimeout(function(){ 
            alert("This site is for demo purpose only. For latest infomation, please visit www.vinextcareer.com");
        }, 1000);
        localStorage.setItem('alerted','yes');
    };
    
    new WOW().init(); 

    
    $(window).scroll(function () {
        if ($(this).scrollTop() > 450) {
            $('nav').addClass('nav-white')
        }
        if ($(this).scrollTop() < 450) {
            $('nav').removeClass('nav-white')
        }
    });
    
    $('.counter').counterUp({
        delay: 10,
        time: 2500
    });
    
});