document.querySelector('.place-order').addEventListener('click', (e) => {
    e.preventDefault();
    location.href = 'thankyou.html';
})


//START
//City 1 dropdown

// Change option selected
const city1Label = document.querySelector('#city1')
const city1Options = Array.from(document.querySelectorAll('.city1-option'))

city1Options.forEach((option) => {
    option.addEventListener('click', () => {
        city1Label.textContent = option.textContent
    })
})

// Close dropdown onclick outside
document.addEventListener('click', (e) => {
    const toggle = document.getElementById('city1-switch')
    const element = e.target

    if (element === toggle) return;

    const isDropdownChild = element.closest('#city1Filter')

    if (!isDropdownChild) {
        toggle.checked = false
    }
})

//END
//City 1 dropdown



//START
//City 2 dropdown

// Change option selected
const city2Label = document.querySelector('#city2')
const city2Options = Array.from(document.querySelectorAll('.city2-option'))

city2Options.forEach((option) => {
    option.addEventListener('click', () => {
        city2Label.textContent = option.textContent
    })
})

// Close dropdown onclick outside
document.addEventListener('click', (e) => {
    const toggle = document.getElementById('city2-switch')
    const element = e.target

    if (element === toggle) return;

    const isDropdownChild = element.closest('#city2Filter')

    if (!isDropdownChild) {
        toggle.checked = false
    }
})

//END
//City 2 dropdown