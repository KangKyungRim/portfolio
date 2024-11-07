'use strict';

// a 클릭했을때 위로 튕기는 이벤트제거
$(document).on('click', 'a[href="#"]', function(e){
    e.preventDefault();
});

//gnb 
$(function(){
    $('.gnb > li > a ').on('mouseenter focus', function(){
        var indexNum = $('.gnb > li > a').index($(this));
        $('.gnb .inner').removeClass('on');
        $('.gnb .inner:eq('+ indexNum +')').addClass('on');   
    });
    $('header').on('mouseleave', function(){
        $('.gnb .inner').removeClass('on');
    });
});

//fixHeader
var scrollNum = 0;
scrollNum = $(document).scrollTop();
fixHeader();
//윈도우창 조절시 이벤트
$(window).on('scroll resize', function() {
    scrollNum = $(document).scrollTop();
    fixHeader();
});

//고정헤더 함수
function fixHeader() {
    if (scrollNum > 150) { 
        $('header').addClass('on');
    } else {
        $('header').removeClass('on');
    }
}

//splitting
$(function(){
    Splitting();
})

//slick.js(이미지 슬라이드)
$(function(){
    $('.visual .slide').slick({
        arrow:true,
        dots:true,
        autoplay:true,
        fade:true,
        autoplaySpeed:7000,
        pauseOnHover:false,
        pauseOnFocus:false
    });
    $('.slick-prev').text("prev");

    //두 번째 슬라이드
    $('.slide2').slick({
        arrows: false,
        dots: true,
        autoplay:true,
        infinite: true,
        slidesToShow: 2,
        autoplaySpeed : 6000,
        pauseOnHover : true,
        pauseOnFocus : true
    });
    $('.slide2 #slick-slide-control10').text("서울 마곡지구 업무용지");
    $('.slide2 #slick-slide-control11').text("서울 마곡지구 대방디엠시티2차");
    $('.slide2 #slick-slide-control12').text("화성 동탄 1차 대방디엠시티 더 센텀");
    $('.slide2 #slick-slide-control13').text("광주 수완 대방노블랜드6차");
});

//scroll.js 애니메이션
$(function(){
    $('.animate').scrolla({
        mobile:true,
        once:false
    });
});