//a 클릭했을때 위로 튕기는 이벤트제거 (프리벤트디폴트는 석성을 제거한다)
$(document).on('click', 'a[href="#"]', function(e){
    e.preventDefault();
});

//scrolla.js
$(function() {
	$('.animate').scrolla({
		mobile: true,
		once: false
	});    
}); 

//splitting
$(function(){
    Splitting('');
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
    if (scrollNum > 900) { 
        $('header').addClass('on');
    } else {
        $('header').removeClass('on');
    }
}

// 햄버거 메뉴
$(function() {
	$('.menuOpen button.open').on('click', function() {
        $('.menuOpen .menuWrap').addClass('on');
    });
    $('.menuOpen .menuWrap .close').on('click', function() {
        $('.menuOpen .menuWrap').removeClass('on');
    });
});