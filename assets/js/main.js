$(function () {
    $('.header .menu-btn').click(function (e) {
        e.preventDefault();
        $('.header .side-nav').toggleClass('on');
        // $('.header .header-inner .group-sub').slideToggle();

        if ($('.header .side-nav').hasClass('on')) {
            $('.header .menu-btn').addClass('menu-close')
        } else {
            $('.header .menu-btn').removeClass('menu-close')
        }
    });

    $('.header .nav-item .link-nav').click(function (e) {
        e.preventDefault();
        $(this).toggleClass('active');

        if ($(this).hasClass('active')) {
            $(this).next().addClass('on')
        } else {
            $(this).next().removeClass('on')
        }
    });

    // pc header - 다국어
    $('.header .util-area .lang-box').click(function (e) {
        e.preventDefault();
        $('.header .util-area .lang-wrap').toggleClass('active');
    })

    // 모바일 header - 다국어
    const items = document.querySelectorAll('.header .side-nav .lang-item');

    items.forEach((item) => { //배열로 저장되기 때문에 forEach로 하나씩 이벤트를 등록해준다.
        item.addEventListener('click', () => {
            items.forEach((e) => {
                e.classList.remove('active'); //하나만 선택되도록 기존의 효과를 지워준다.
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
        if ($(this).find('.submenu').length > 0) {
            $('.header').addClass('on');
            $(this).find('.submenu').addClass('on');
        }
    }, function () {
        $('.header').removeClass('on');
        $(this).find('.submenu').removeClass('on');
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


    $('.sc-teams .group-search select').change(function () {
        $(this).css('color', '#000')
    });


    peopleSlide = new Swiper('.sc-people .people-slide', {
        slidesPerView: 'auto',
        spaceBetween: 30,
        navigation: {
            nextEl: '.next',
            prevEl: '.prev'
        },
    });
    // peopleSlide = new Swiper('.sc-people .people-slide', {
    //     slidesPerView: 1.1,
    //     spaceBetween: 30,
    //     navigation: {
    //         nextEl: '.next',
    //         prevEl: '.prev'
    //     },
    //     breakpoints: {
    //         768: {
    //             slidesPerView: 1,
    //         },
    //     }
    // });

    benefitsSlide = new Swiper('.sc-benefits .benefits-slide', {
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
        // breakpoints: {
        //     768: {
        //         slidesPerView: 2,
        //     },
        //     1025: {
        //         slidesPerView: 1,
        //         // slidesPerView: 3,
        //     }
        // }
    });


    // 모바일 - search jobs 히든메뉴 open
    $('.m-searchbox button').click(function (e) {
        e.preventDefault();
        $('.hidden-lnb').addClass('on');
    })

    $('.footer .related-area .btn-related').click(function () {
        $('.related-area').toggleClass('on')
    });

    $('.hidden-lnb .btn-close').click(function () {
        $('.hidden-lnb').removeClass('on');
        // $('header').css('z-index', '11')
        $('body').removeClass('hidden')
    })


    // 전체label  누르면 한번에 선택하기
    $('.hidden-lnb .cate-all label').each(function (idx, el) {
        $(el).click(function () {
            box = $(this).data('box');
            if ($(this).siblings().prop('checked')) {
                $(box).find('input').prop('checked', false)
            } else {
                $(box).find('input').prop('checked', true)
            }
        })

        //필터 해제
        $('.hidden-lnb .btn-clear').click(function () {
            box = $(el).data('box');
            $(box).find('input').prop('checked', false)
            $('.filter-list input').prop('checked', false)
        })
    })

    $('.hidden-lnb .menu-item .tit').each((idx, el) => {
        $(el).click(function () {
            $(el).siblings('.cate-list').toggleClass('on');
            $(el).siblings('.ico-arrow').toggleClass('on')
        });
    })

    $('.hidden-lnb .cate-item .tit').each(function (idx, el) {
        $(el).click(function () {
            $(el).siblings('.job-list').toggleClass('on')
            $(el).siblings('.ico-arrow').toggleClass('on')
        })
    })

}); //end