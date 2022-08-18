let triggerButton = document.querySelector('.nav-btn');

triggerButton.addEventListener('click', () => {
    if(document.querySelector('.nav-links').classList.contains('opened')){
        document.querySelector('.nav-links').classList.remove('opened');
        document.querySelector('.nav-links').removeChild(document.querySelector('.sign-in'))
        document.querySelector('.menu-icon').classList.remove('opened')
    }else{
        document.querySelector('.nav-links').classList.add('opened');
        let newTag = document.createElement("a");
        newTag.href='/'
        newTag.innerHTML = 'Sign in';
        newTag.className = 'sign-in'
        document.querySelector('.nav-links').appendChild(newTag);
        document.querySelector('.menu-icon').classList.add('opened')
    }
})

