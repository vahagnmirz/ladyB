// var swiper = new Swiper(".mySwiper", {
//     speed: 500,
//     // simulateTouch: false,
//     spaceBetween: 0,
//     slidesPerView: 4,
//     loop: true
// });
var swiper = new Swiper(".shopSwiper", {
    slidesPerView: 3,
    slidesPerGroup: 3,
    grid: {
        rows: 3,
    },
    spaceBetween: 30,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
});