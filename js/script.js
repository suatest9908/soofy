// ScrollReveal //
const sr = ScrollReveal({
    origin: 'top',
    distance: '60px',   // 움직일 거리
    duration: 1500,     // 속도 (1초)
    delay: 300,         // 시작 대기 시간
    easing: 'ease-out', // 부드러운 정도
    reset: true
});

// about //
sr.reveal('.about_title', {origin:'bottom'})
sr.reveal('.about_text p', { origin: 'left', delay: 900 })
sr.reveal('.about_logo', { origin: 'right', delay: 900 })

// char //
sr.reveal('.char_3d')
sr.reveal('.char_contents')
sr.reveal('.reveal_cloud_l', { origin: 'left', distance: '100px' })
sr.reveal('.reveal_cloud_r', { origin: 'right', distance: '100px' })
sr.reveal('.char_container h1')
sr.reveal('.char_cd li', {
    origin: 'bottom',
    interval: 200, distance: '70px'
})
sr.reveal('.char_pd li', { interval: 200, distance: '70px' })
sr.reveal('.char_btn-bubble');

// pd //
sr.reveal('.pd_title', {origin:'bottom'})
sr.reveal('.pd_cozy_title')
sr.reveal('.pd_cozy_top li', {origin:'bottom', interval: 200})
sr.reveal('.pd_cozy_btm li', {origin:'bottom', interval: 200})
sr.reveal('.pd_daily_title')
sr.reveal('.pd_daily li', {origin:'bottom', interval:200})
sr.reveal('.pd_cd_r, .pd_cd_l')

// event_banner //
sr.reveal('#event_banner', {origin: 'bottom'})

// sel //
sr.reveal('.sel_title', {origin:'bottom'})
sr.reveal('.sel_container', {delay: 900})

// store //
sr.reveal('#store_wrap', {origin:'bottom'})
sr.reveal('.store_reveal_box', {delay: 600})

// highlight //
sr.reveal('.hl_title', {origin:'bottom'})
sr.reveal('.hl_container', {delay:900})

// instagram //
sr.reveal('.insta_title', {origin:'bottom'})
sr.reveal('.insta_container')

// footer //
sr.reveal('#footer_wrap', {duration:1000, distance:'30px'})
sr.reveal('.footer_container', { distance:'30px'})

//  돋보기(Hotspot) 클릭 시 상품 정보 교체 //
    $('.hotspot').click(function() {
        const $slide = $(this).closest('.swiper-slide'); // 현재 슬라이드 찾기
        
        // 버튼 활성화 클래스 교체
        $(this).addClass('active').siblings('.hotspot').removeClass('active');
        
        // 클릭한 버튼의 타겟 ID 가져와서 해당 정보만 노출
        const targetId = $(this).attr('data-target');
        $slide.find('.product_view').removeClass('active');
        $('#' + targetId).addClass('active');
    });


// Swiper 셀렉션 슬라이드 //
    var swiper = new Swiper(".mySwiper", {
      slidesPerView: 1,
      spaceBetween: 30,
      loop: true,
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
    });


  // Swiper 인스타그램 슬라이드 //
var swiper = new Swiper(".instaSwiper", {
    slidesPerView: "auto",
    spaceBetween: 21,
    loop: true,
    autoplay: {
        delay: 3000,
        disableOnInteraction: false,
    },
    speed: 1500,           
    loopedSlides: 12, 
    roundLengths: true,
    grabCursor: true,
});

// gnb 메뉴 클릭하면 해당 섹션으로 이동
$(function () {
    $('a[href^="#"]').click(function (e) { // #으로 시작하는 a 태그 클릭 시
        e.preventDefault(); // 기본 이동 막기
        
        var target = $(this.hash); // 클릭한 메뉴의 해시값(#section1 등) 저장
        
        if (target.length) {
            $('html, body').animate({
                scrollTop: target.offset().top
            }, 500); // 0.5초 동안 부드럽게 이동
        }
    });
});

// top 버튼
$(window).scroll(function() {
    var height = $(window).scrollTop();
    if (height > 100) {//
        $('.top_btn').fadeIn();//
    } else {
        $('.top_btn').fadeOut();//
    }
});