const current = document.querySelector('#currentImg img');
const images = document.querySelectorAll('.images img');
const opacity = 0.4;

images.forEach(img => {
    
    img.addEventListener('click', e => {
        images.forEach(img => {img.style.opacity = 1; });
        current.src = e.target.src;
        current.classList.add('fade');

        setTimeout(() => {
            current.classList.remove('fade')
        },500);
        e.target.style.opacity = opacity;


    });
});