const tabContent1 = document.getElementById('tab-item-1');
const tabContent2 = document.getElementById('tab-item-2');
const tab1 = document.getElementById('tab-1');
const tab2 = document.getElementById('tab-2');

tab1.checked = true;
tab2.checked = false;
tabContent1.style.display = 'block';
tabContent2.style.display = 'none';

tab1.addEventListener('click', () => {
    tab1.checked = true;
    tab2.checked = false;
    tabContent1.style.display = 'block';
    tabContent2.style.display = 'none';
})
tab2.addEventListener('click', () => {
    tab2.checked = true;
    tab1.checked = false;
    tabContent2.style.display = 'block';
    tabContent1.style.display = 'none';
})

document.querySelector('.logout-btn').addEventListener('click', () => {
    localStorage.removeItem('token')
    location.reload();
})
document.querySelector('.toggleInput').addEventListener('click', () => {
    if(document.querySelector('#name').disabled){
        document.querySelector('#name').disabled = false;
        document.querySelector('.toggleInput').innerHTML = 'Save';
    }else{
        document.querySelector('#name').disabled = true;
        document.querySelector('.toggleInput').innerHTML = 'Change';
    }
})