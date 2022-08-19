//START
//SortBy dropdown

// Change option selected
const sortLabel = document.querySelector('#sortBy')
const sortOptions = Array.from(document.querySelectorAll('.sortBy-option'))

sortOptions.forEach((option) => {
    option.addEventListener('click', () => {
        sortLabel.textContent = option.textContent
    })
})

// Close dropdown onclick outside
document.addEventListener('click', (e) => {
    const toggle = document.getElementById('sortBy-switch')
    const element = e.target

    if (element === toggle) return;

    const isDropdownChild = element.closest('#sortByFilter')

    if (!isDropdownChild) {
        toggle.checked = false
    }
})

//END
//SortBy dropdown


//START
//Lite dropdown

// Change option selected
const liteLabel = document.querySelector('#lite')
const liteOptions = Array.from(document.querySelectorAll('.lite-option'))

liteOptions.forEach((option) => {
    option.addEventListener('click', () => {
        liteLabel.textContent = option.textContent
    })
})

// Close dropdown onclick outside
document.addEventListener('click', (e) => {
    const toggle = document.getElementById('lite-switch')
    const element = e.target

    if (element === toggle) return;

    const isDropdownChild = element.closest('#liteFilter')

    if (!isDropdownChild) {
        toggle.checked = false
    }
})

//END
//Lite dropdown


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
//Color dropdown

// Change option selected
const colorLabel = document.querySelector('#color')
const colorOptions = Array.from(document.querySelectorAll('.color-option'))

colorOptions.forEach((option) => {
    option.addEventListener('click', () => {
        colorLabel.textContent = option.textContent
    })
})

// Close dropdown onclick outside
document.addEventListener('click', (e) => {
    const toggle = document.getElementById('color-switch')
    const element = e.target

    if (element === toggle) return;

    const isDropdownChild = element.closest('#colorFilter')

    if (!isDropdownChild) {
        toggle.checked = false
    }
})

//END
//Color dropdown