const translate = document.querySelectorAll('.translate');
const section = document.querySelector('section');
const content = document.querySelector('.content');
const img = document.querySelector('.img-container');
const opacity = document.querySelectorAll('.opacity');
const border = document.querySelector('.border');

let sectionHeight = section.offsetHeight;

window.addEventListener('scroll', () => {
    let scroll = window.pageYOffset;
    let sectionY = section.getBoundingClientRect();

    translate.forEach(element => {
        let rate = element.dataset.rate;

        if (element.dataset.direction === 'left') {
            element.style.transform = `translateX(-${scroll * rate}px)`;
        } else if (element.dataset.direction === 'right') {
            element.style.transform = `translateX(${scroll * rate}px)`;
        } else {
            element.style.transform = `translateY(-${scroll * rate}px)`;
        }
    });

    opacity.forEach(element => {
        element.style.opacity = scroll / (sectionY.top + sectionHeight);
    });

    content.style.transform = `translateY(${scroll / (sectionHeight + sectionY.top) * 50 - 50}px)`;
    img.style.transform = `translateY(-${scroll / (sectionHeight + sectionY.top) * 50 - 50}px)`;

    border.style.width = `${scroll / (sectionY.top + sectionHeight) * 5}em`;
});
