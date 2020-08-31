const myWrapper = document.querySelector('div.popupWrapper');
const myButton = document.querySelector('.myButton');
const closeMe = document.querySelector('.popupClose');


myButton.addEventListener('click',() => {
    myWrapper.style.display = 'block';
})

closeMe.addEventListener('click',() => {
    myWrapper.style.display = 'none';
})

// myWrapper.addEventListener('click',() => {
//     myWrapper.style.display = 'none';
// })

