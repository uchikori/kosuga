
let mySwiper = new Swiper('.main-visual__swiper',{
    // autoplay:{
    //     delay:8000,
    //     stopOnLastSlide: false,
    //     disableOnInteraction: false,
    // 	reverseDirection: false
    // },
    slidesPerView: 1,
    speed:1000,
    loop:true,
    shortSwipes: false,
    longSwipes: false,
    navigation: {
        nextEl: '.main-next',
        prevEl: '.main-prev'
    },
    pagination:{
        el:'.swiper-pagination',
        type:'bullets',
        clickable: true
    }
});
// let mySwiper02 = new Swiper('.student__swiper01',{
//     spaceBetween: 26,
//     initialSlide: 1,
//     slidesPerView: 'auto',
//     speed:500,
//     loop:true,
//     // shortSwipes: false,
//     // longSwipes: false,
//     navigation: {
//         nextEl: '.next02',
//         prevEl: '.prev02'
//     },
// });
// let mySwiper03 = new Swiper('.student__swiper02',{
//     spaceBetween: 26,
//     initialSlide: 1,
//     slidesPerView: 'auto',
//     speed:500,
//     loop:true,
//     // shortSwipes: false,
//     // longSwipes: false,
//     navigation: {
//         nextEl: '.next03',
//         prevEl: '.prev03'
//     },
// });
// let mySwiper04 = new Swiper('.student__swiper03',{
//     spaceBetween: 26,
//     initialSlide: 1,
//     slidesPerView: 'auto',
//     speed:500,
//     loop:true,
//     // shortSwipes: false,
//     // longSwipes: false,
//     navigation: {
//         nextEl: '.next04',
//         prevEl: '.prev04'
//     },
// });
let elmSwiper = document.querySelectorAll('.student__swiper');
let elmPrev = document.querySelectorAll('.prev');
let elmNext = document.querySelectorAll('.next');
if(elmSwiper.length > 0){
    for (let i = 0; i < elmSwiper.length; i++){
        elmSwiper[i].className += i;
        elmPrev[i].className += i;
        elmNext[i].className += i;
        let studentSwiper = new Swiper('.student__swiper' + i, {
            spaceBetween: 26,
            initialSlide: 1,
            slidesPerView: 'auto',
            speed: 500,
            loop:true,
            navigation:{
                prevEl: '.prev' + i,
                nextEl: '.next' + i,
            }

        });
    }
} 



/**
 * 
 * menu-open
 * 
 */
const humberger = document.querySelector('.humberger');
const menuToggle = document.querySelector('.global-navi');
humberger.addEventListener('click', function(){
    humberger.classList.toggle('menu-active');
    if(humberger.classList.contains('menu-active')){
        menuToggle.classList.add('menu-open');
    } else {
        menuToggle.classList.remove('menu-open');
    }
});


/**
 * 
 * ソート部分反転
 * 
 */
jQuery('.js-sort').click(function(){
    jQuery(this).find('.js-sort-icon').toggleClass('sort-reverse');
})

/**
 * 
 * Infinite-scroll
 * 
 */
const scrollElm = document.querySelector('.student-movie__media-items');
if(scrollElm){
    let infiniteScroll = new InfiniteScroll(scrollElm,{
        path: '.pagination__next',
        append: '.student-movie__movie-media',
        status: '.page-load-status',
        hideNav: '.pagination',
        button: '.view-more-button',
        scrollThreshold: false,
    });
}
