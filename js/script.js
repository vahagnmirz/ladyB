


//START
//Video play button

document.querySelector('.play-btn').addEventListener('click', () => {
    document.querySelector('.play-btn').style.opacity = "0"
    document.querySelector('.video').play()
})
document.querySelector('.video').addEventListener('click', () => {
    document.querySelector('.play-btn').style.opacity = "1"
    document.querySelector('.video').pause()
})

//END
//Video play button



gsap.registerPlugin(ScrollTrigger);

gsap.to('.image4', {
    scrollTrigger: {
        trigger: '.image4',
        toggleActions: 'restart none reverse none',
        start: "top 400px",
        end: 'bottom 100%',
        scrub: 1,
        // markers:true
    },
    maxWidth: '100vw',
    height: '813px',
    objectFit: 'contain',
    duration: 1
})


