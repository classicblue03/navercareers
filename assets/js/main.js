$(function () {
    $('.header .slide-btn').click(function (e) {
        e.preventDefault();
        $('.header .slide-nav').toggleClass('on');

        if ($('.header .slide-nav').hasClass('on')) {
            $('.header .slide-btn').addClass('menu-close')
        } else {
            $('.header .slide-btn').removeClass('menu-close')
        }
    });

    $('.header .slide-nav .link-nav').click(function (e) {
        e.preventDefault();
        $(this).toggleClass('active');

        if ($(this).hasClass('active')) {
            $(this).next().addClass('on')
        } else {
            $(this).next().removeClass('on')
        }
    });

    // pc header - 다국어
    $('.header .lang-box').click(function (e) {
        e.preventDefault();
        $('.header .lang-wrap').toggleClass('active');
    })

    // 모바일 header - 다국어
    const items = document.querySelectorAll('.header .slide-nav .lang-item'); // 선택지를 모두 가져온다

    items.forEach((item) => { // 배열로 저장되기 때문에 forEach로 하나씩 이벤트를 등록해준다.
        item.addEventListener('click', () => {
            items.forEach((e) => {
                e.classList.remove('active'); // 하나만 선택되도록 기존의 효과를 지워준다.
            })
            item.classList.add('active'); // 선택한 요소에만 효과를 추가해준다.
            document.getElementById('next').style.display = 'block'; // 선택을 하면 다음으로 넘어갈 수 있는 버튼이 활성화 되도록 한다.
        })
    });


    /* 
        선택한 .nav의 형제가(.submenu) 갯수가 0이면,
        갯수가 0보다 크면 있는것
        갯수가 0보다 작으면 없는것 
    */
    $('.gnb .nav-item').hover(function () {
        if ($(this).find('.sub-list').length > 0) {
            $('.header').addClass('on');
            $(this).find('.sub-list').addClass('on');
        }
    }, function () {
        $('.header').removeClass('on');
        $(this).find('.sub-list').removeClass('on');
    });


    // 메인슬라이드
    visualSlide = new Swiper('.visual-slide', {
        loop: true,
        autoplay: {
            delay: 5000,
            disableOnInteraction: false
        },
        touchRatio: 0 // 슬라이드 터치기능 막기
    });


    // $('.sc-teams .lnb-container .group-search select').change(function () {
    //     $(this).css('color', '#000')
    // });


    peopleSlide = new Swiper('.sc-people .people-slide', {
        slidesPerView: 'auto',
        spaceBetween: 30,
        navigation: {
            nextEl: '.next',
            prevEl: '.prev'
        },
    });

    benefitsSlide = new Swiper('.sc-benefits .swiper', {
        slidesPerView: 1,
        spaceBetween: 30,
        navigation: {
            nextEl: '.next',
            prevEl: '.prev'
        },
        breakpoints: {
            768: {
                slidesPerView: 1,
            },
            1025: {
                slidesPerView: 3
            },
        }
    });


    // 모바일 - search jobs 히든메뉴 open
    $('.sc-search .search-container .mobile-search').click(function (e) {
        e.preventDefault();
        $('.sc-search .lnb-container').addClass('on');
    })

    $('.footer .related-area .btn-related').click(function () {
        $('.related-area').toggleClass('on')
    });

    $('.sc-search .lnb-container .btn-close').click(function () {
        $('.sc-search .lnb-container').removeClass('on');
        // $('header').css('z-index', '11')
        $('body').removeClass('hidden')
    })


    // 전체label  누르면 한번에 선택하기
    $('.sc-search .lnb-container .cate-all label').each(function (idx, el) {
        $(el).click(function () {
            box = $(this).data('box'); // 클릭된 요소 $(this)에서 box라는 데이터 속성의 값을 가져와서 box 변수에 저장
            if ($(this).siblings().prop('checked')) { // 클릭된 요소의 형제 중에 <input> 요소가 선택되어 있는지 확인한다.
                $(box).find('input').prop('checked', false) // box로 식별된 요소에서, input 태그를 모두 선택 후, 해당 input 요소들의 checked 속성을 false로 설정해 체크해제한다.
            } else {
                $(box).find('input').prop('checked', true) // 선택된 input 요소가 없다면, input을 모두 선택, 해당 input 요소들의 checked 속성을 true로 설정한다.
            }
        })

        //필터 해제
        $('.sc-search .lnb-container .btn-clear').click(function () {
            box = $(el).data('box');
            $(box).find('input').prop('checked', false) // 변수 box 요소들 중에서 input을 찾고, 해당 input 요소들의 체크박스 속성을 false로 설정해서 체크를 해제합니다.
            $('.filter-list input').prop('checked', false)
        })
    })

    $('.sc-search .lnb-container .menu-item .tit').each((idx, el) => {
        $(el).click(function () {
            $(el).siblings('.cate-list').toggleClass('on');
            $(el).siblings('.ico-arrow').toggleClass('on')
        });
    })

    $('.sc-search .lnb-container .cate-item .tit').each(function (idx, el) {
        $(el).click(function () {
            $(el).siblings('.job-list').toggleClass('on')
            $(el).siblings('.ico-arrow').toggleClass('on')
        })
    })

}); //end