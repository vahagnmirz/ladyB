AOS.init()

//START
//Lite dropdown

// Change option selected
const liteLabel = document.querySelector('#category')
const liteOptions = Array.from(document.querySelectorAll('.category-option'))

liteOptions.forEach((option) => {
    option.addEventListener('click', () => {
        liteLabel.textContent = option.textContent
    })
})

// Close dropdown onclick outside
document.addEventListener('click', (e) => {
    const toggle = document.getElementById('category-switch')
    const element = e.target

    if (element === toggle) return;

    const isDropdownChild = element.closest('#categoryFilter')

    if (!isDropdownChild) {
        toggle.checked = false
    }
})

//END
//Lite dropdown