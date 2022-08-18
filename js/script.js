//START
//Navbar toggler
let triggerButton = document.querySelector('.nav-btn');

triggerButton.addEventListener('click', () => {
    if (document.querySelector('.nav-links').classList.contains('opened')) {
        document.querySelector('.nav-links').classList.remove('opened');
        document.querySelector('.nav-links').removeChild(document.querySelector('.sign-in'))
        document.querySelector('.menu-icon').classList.remove('opened')
    } else {
        document.querySelector('.nav-links').classList.add('opened');
        let newTag = document.createElement("a");
        newTag.href = '/'
        newTag.innerHTML = 'Sign in';
        newTag.className = 'sign-in'
        document.querySelector('.nav-links').appendChild(newTag);
        document.querySelector('.menu-icon').classList.add('opened')
    }
})

//END
//Navbar toggler


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


//START
//Language dropdown

// Change option selected
const label = document.querySelector('.dropdown--filter-selected')
const options = Array.from(document.querySelectorAll('.dropdown-select-option'))

options.forEach((option) => {
    option.addEventListener('click', () => {
        label.textContent = option.textContent
    })
})

// Close dropdown onclick outside
document.addEventListener('click', (e) => {
    const toggle = document.querySelector('.dropdown--switch')
    const element = e.target

    if (element === toggle) return;

    const isDropdownChild = element.closest('.dropdown--filter')

    if (!isDropdownChild) {
        toggle.checked = false
    }
})

//END
//Language dropdown

