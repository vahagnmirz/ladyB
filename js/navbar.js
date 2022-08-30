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
//Language dropdown

// Change option selected
const label = document.querySelector('#language')
const options = Array.from(document.querySelectorAll('.lang-option'))

options.forEach((option) => {
    option.addEventListener('click', () => {
        label.textContent = option.textContent
    })
})

// Close dropdown onclick outside
document.addEventListener('click', (e) => {
    const toggle = document.getElementById('filter-switch')
    const element = e.target

    if (element === toggle) return;

    const isDropdownChild = element.closest('.dropdown--filter')

    if (!isDropdownChild) {
        toggle.checked = false
    }
})

//END
//Language dropdown

document.querySelector('.header-shop').addEventListener('click', () => {
    document.querySelector('.shop-dropdown-background').classList.add('opened')
})
document.getElementById('shop-dd-close-btn').addEventListener('click', () => {
    document.querySelector('.shop-dropdown-background').classList.remove('opened')
})







document.querySelector('.sign-in-btn').addEventListener('click', () => {
    localStorage.setItem('token', '12345');
    document.location.reload(true)
    document.querySelector('.sign-in').style.display = 'none';
    document.querySelector('.profile').style.display = 'block';
})

if(!!localStorage.getItem('token')){
    document.querySelector('.sign-in').style.display = 'none';
    document.querySelector('.profile').style.display = 'block';
}

