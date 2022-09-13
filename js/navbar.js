//START
//Navbar toggler
let triggerButton = document.querySelector('.nav-btn');

triggerButton.addEventListener('click', () => {
    if (document.querySelector('.nav-links').classList.contains('opened')) {
        document.querySelector('.nav-links').classList.remove('opened');
        document.querySelector('.nav-links').removeChild(document.querySelector('.sign-in'))
        document.querySelector('.nav-links').removeChild(document.querySelector('.profile'))
        document.querySelector('.menu-icon').classList.remove('opened')
        document.querySelector('.shop-dropdown-background').classList.remove('opened')
    } else {
        document.querySelector('.nav-links').classList.add('opened');
        if(!!localStorage.getItem('token')){
            let newTag = document.createElement("div");
            newTag.className = 'profile'
            newTag.innerHTML = '<a href="../pages/profilePage.html">\n' +
                '                    <p>Profile</p>\n' +
                '                </a>'
            document.querySelector('.nav-links').appendChild(newTag);
        }else {
            let newTag = document.createElement("div");
            // newTag.href = '#open-modal'
            // newTag.innerHTML = 'Sign in';
            newTag.className = 'sign-in'
            newTag.innerHTML = '<a href="#open-modal">\n' +
                '                    <p>Sign In</p>\n' +
                '                </a>\n' +
                '                <div id="open-modal" class="modal-window">\n' +
                '                    <div>\n' +
                '                        <a href="#" title="Close" class="modal-close">\n' +
                '                            &#215;\n' +
                '                        </a>\n' +
                '                        <h1>Welcome Back</h1>\n' +
                '                        <p class="desc">Making a luxurious lifestyle accessible for a generous group of women is our\n' +
                '                            daily drive.</p>\n' +
                '                        <form action="">\n' +
                '                            <input type="text" placeholder="Username">\n' +
                '                            <input type="password" placeholder="Password">\n' +
                '                            <button type="submit" class="sign-in-btn">SIGN IN</button>\n' +
                '                        </form>\n' +
                '                        <div class="donthaveaccount"><p>Don’t have account? </p> <a href="./pages/authorization.html">\n' +
                '                            Register</a></div>\n' +
                '                    </div>\n' +
                '                </div>'
            document.querySelector('.nav-links').appendChild(newTag);
        }

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



window.addEventListener('resize', (event) => {
    if(event.target.innerWidth <= 991){
        document.getElementById('shop-dd-close-btn').innerHTML = "Menu"
    }else{
        document.getElementById('shop-dd-close-btn').innerHTML = "<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"11\" height=\"9\" viewBox=\"0 0 11 9\"\n" +
            "             fill=\"none\">\n" +
            "            <line y1=\"-0.5\" x2=\"11.5333\" y2=\"-0.5\"\n" +
            "                  transform=\"matrix(-0.72032 -0.693642 0.72032 -0.693642 10.0001 8)\"\n" +
            "                  stroke=\"#1F1F1F\"/>\n" +
            "            <line y1=\"-0.5\" x2=\"11.5333\" y2=\"-0.5\"\n" +
            "                  transform=\"matrix(0.72032 -0.693642 -0.72032 -0.693642 1 8)\"\n" +
            "                  stroke=\"#1F1F1F\"/>\n" +
            "        </svg>"

    }
})
if(window.innerWidth <= 991){
    document.getElementById('shop-dd-close-btn').innerHTML = "Menu"
}
