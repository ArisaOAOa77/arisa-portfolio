$(".menu").on("click",function(){$(".menu__line")
.toggleClass(".menu-active"),
$(".gnav").fadeToggle()}),
$('a[href^="#"]')
.on("click",function(){var e=$(this).attr("href"),
t=$("#"==e||""==e?"html":e).offset()
.top;return $("html, body").animate({scrollTop:t},500,"swing"),!1}),
$(function(){$(window).scroll(function(){$(".fadein_bottom")
.each(function(){var e=$(this).offset().top;$(window)
    .scrollTop()>e-$(window).height()+200&&$(this)
    .addClass("fadein-active")})})});

    var Modal=($(".button")
    .click(function(){var e=$(this)
        .data("title"),t=$(this)
        .data("img");$(".modal-title")
        .text(e),$(".modal-img")
        .text(t),$(".modal")
        .addClass("in")}),
        void $(".-close")
        .click(function(){$(".modal").removeClass("in")}));
        let slideBox=document.querySelector(".slide-area"),
        slideArray=slideBox
        .children;
        
        const slide=setInterval(slideshow,5e3);
        function slideshow(){let e=slideBox
            .firstElementChild;e.classList
            .remove("show"),slideBox
            .appendChild(e),slideArray[0].classList.add("show")}
            