AOS.init();
const activeSlide = document.querySelector('.active-slide');
const slidItem = document.querySelector('.slide-item');
const prevSlide = document.querySelector('.prev-slide');
const nextSlide = document.querySelector('.next-slide');

const sliderItems = [
    {id: 1, imageUrl: '../assets/images/detailslide4.png'},
    {id: 2, imageUrl: '../assets/images/detailslide3.png'},
    {id: 2, imageUrl: '../assets/images/detailslide2.png'},
    {id: 2, imageUrl: '../assets/images/detailslide1.png'},
]
let i = 0;
activeSlide.style.backgroundImage = `url(${sliderItems[i].imageUrl})`;
slidItem.style.backgroundImage = `url(${sliderItems[i+1].imageUrl})`;

nextSlide.addEventListener('click', () => {
    if(i === sliderItems.length - 1){
        i = 0;
    }else {
        i++;
    }
    activeSlide.style.backgroundImage = `url(${sliderItems[i].imageUrl})`;
    if(i+1 >= sliderItems.length){
        slidItem.style.backgroundImage = `url(${sliderItems[0].imageUrl})`;
    }else {
        slidItem.style.backgroundImage = `url(${sliderItems[i+1].imageUrl})`;
    }

})
prevSlide.addEventListener('click', () => {
    if(i <= 0){
        i = sliderItems.length - 1;
    }else {
        i--;
    }
    activeSlide.style.backgroundImage =`url(${sliderItems[i].imageUrl})`
    if(i-1 < 0){
        slidItem.style.backgroundImage = `url(${sliderItems[sliderItems.length - 1].imageUrl})`
    }else {
        slidItem.style.backgroundImage = `url(${sliderItems[i - 1].imageUrl})`;
    }
    console.log('prev', i)
})

let swiperSliderItem = new Swiper(".sliderItem", {
    slidesPerView: 1,
    pagination: {
        el: ".swiper-pagination-small",
        clickable: true,
    },
    navigation: {
        nextEl: ".swiper-button-next-small",
        prevEl: ".swiper-button-prev-small",
    },
});

let bigSwiper = new Swiper(".bigSwiper", {
    slidesPerView: 1,
    spaceBetween: 20,
    pagination: {
        el: ".swiper-pagination-big",
        type: "fraction",
    },
    navigation: {
        nextEl: ".swiper-button-next-big",
        prevEl: ".swiper-button-prev-big",
    },
    breakpoints: {
        320: {
            slidesPerView: 2,
            spaceBetween: 20,
        },
        1100: {
            slidesPerView: 3,
            spaceBetween: 24,
        },
        1400: {
            slidesPerView: 4,
            spaceBetween: 24,
        },
        1800: {
            slidesPerView: 5,
            spaceBetween: 30,
        },
    },

});
