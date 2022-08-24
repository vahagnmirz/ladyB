AOS.init();

//START
//Size dropdown

// Change option selected
const sizeLabel = document.querySelector('#size')
const sizeOptions = Array.from(document.querySelectorAll('.size-option'))

sizeOptions.forEach((option) => {
    option.addEventListener('click', () => {
        sizeLabel.textContent = option.textContent
    })
})

// Close dropdown onclick outside
document.addEventListener('click', (e) => {
    const toggle = document.getElementById('size-switch')
    const element = e.target

    if (element === toggle) return;

    const isDropdownChild = element.closest('#sizeFilter')

    if (!isDropdownChild) {
        toggle.checked = false
    }
})

//END
//Size dropdown



//START
//Counter

const increase = document.querySelector('.increase');
const decrease = document.querySelector('.decrease');
const count = document.querySelector('.count');
let countNumber = 0;

increase.addEventListener('click', () => {
    countNumber++;
    if(countNumber >= 0){
        count.innerHTML = countNumber.toString();
        decrease.style.opacity = '1';
    }
    if(countNumber.toString().length < 2){
        count.innerHTML = '0' + countNumber.toString();
    }
})

decrease.addEventListener('click', () => {
    countNumber--;
    if(countNumber >= 0){
        count.innerHTML = countNumber.toString();
        decrease.style.opacity = '1';
    }
    if(countNumber < 1){
        decrease.style.opacity = '0.4';
    }
    if(countNumber.toString().length < 2){
        count.innerHTML = '0' + countNumber.toString();
    }
})


//END
//counter


const modal = document.querySelector(".modal");
const modalContent = document.querySelector(".modal-content");

document.querySelector(".btn").addEventListener("click", function() {
    modal.style.display = "block";
    modalContent.classList.add("show");
});

document.querySelector(".close").addEventListener("click", function() {
    modal.style.display = "none";
    modalContent.classList.remove("show");
});

window.onclick = e => {
    if (e.target === modal) {
        modal.style.display = "none";
        modalContent.classList.remove("show");
    }
};


let swiper = new Swiper(".productDetailSwiper", {
    slidesPerView: 1,
    spaceBetween: 0,
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    loop: true,
    autoplay: {
        delay: 2500,
        disableOnInteraction: false,
    },
    breakpoints: {
        640: {
            slidesPerView: 2,
            spaceBetween: 20,
        },
        768: {
            slidesPerView: 3,
            spaceBetween: 24,
        },
        991: {
            slidesPerView: 4,
            spaceBetween: 24,
        },
        1600: {
            slidesPerView: 5,
            spaceBetween: 30,
        },
    },
});