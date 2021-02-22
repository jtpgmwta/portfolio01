// slick
$(".slick-slider").slick({
    accessibility: true,
    autoplay: true,
    autoplaySpeed: 5000,
    pauseOnHover: false,
    dots: false,
    dotsClass: 'dots',
    draggable: true,
    arrows: false,
    infinite: true,
    swipe: false,
    vertical: false,
    centerPadding: 0
});

//iTyped
ityped.init(document.querySelector(".ityped"), {
    strings: ['Hello World.','Welcome to our site!'],
    typespeed: 100,
    backspeed: 70,
    startDelay: 1000,
    backDelay: 2000
})


//マウス追従
$(window).on("mousemove scroll",function(e){
    $(".mouseTrac").css({"top":e.clientY - 25 ,"left":e.clientX - 25});
})

//スムースなスクロール
$('a[href^="#"]').click(function(){
    var speed = 500;
    var href= $(this).attr("href");
    var target = $(href == "#" || href == "" ? 'html' : href);
    var position = target.offset().top - 100;
    $("html, body").animate({scrollTop:position}, speed, "swing");
    console.log(position);
    return false;
});

//スクロールバーカスタム
// $(window).on("load",function(){
//     $(".custom-scroll").mCustomScrollbar({
//         theme:"minimal-dark",
//         callbacks:{
//             whileScrolling:function(){
//                 $(".fadeIn").each(function(){
//                 var target = $(this);
//                     if(window.innerHeight*2/3 > target.offset().top){
//                         $(this).addClass("active");
//                     }else{
//                         $(this).removeClass("active");
//                     }
//                 })
//             }
//         }
//     });
// })

//フェードイン
$(window).scroll(function(){
    var scroll = $(this).scrollTop();
    var triggerLine = scroll + (window.innerHeight *2/3);
    console.log(scroll);

    $(".fadeIn").each(function(){
        var target = $(this);

        if(target.offset().top > triggerLine){
            target.removeClass("active");
        }else{
            target.addClass("active");
        }
    })
    //最上部ではヘッダーメニューを非表示
    if(scroll == 0){
        $("header").removeClass("show");
    }else{
        $("header").addClass("show");
    }
})

//ハンバーガーメニュー
$(".menu-btn").on("click",function(){
    if($("header").hasClass("active")){
        $(this).removeClass("open");
        $("header").removeClass("active");
    }else{
        $(this).addClass("open");
        $("header").addClass("active");
    }
})

$("header a").on("click",function(){
    $(".menu-btn").removeClass("open");
    $("header").removeClass("active");
})