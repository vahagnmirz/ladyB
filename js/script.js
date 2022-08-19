


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






