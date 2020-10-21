const intro = document.querySelector('.intro');
const translate = intro.querySelectorAll('.translate');

const section = document.querySelector('section');
const content = document.querySelector('.content');
const img = document.querySelector('.img-container');
const opacity = section.querySelectorAll('.opacity');
const border = document.querySelector('.border');

const outro = document.querySelector('.outro');
const inspired = outro.querySelector('h2');
const outroOpacity = outro.querySelector('.opacity');

let introHeight = intro.offsetHeight;
let sectionHeight = section.offsetHeight;
let outroHeight = outro.offsetHeight;

window.addEventListener('scroll', () => {
    let scroll = window.pageYOffset;
    let sectionY = section.getBoundingClientRect();
    let outroY = outro.getBoundingClientRect();

    intro.style.opacity = - scroll / (introHeight / 2) + 1;

    translate.forEach(element => {
        let rate = element.dataset.rate;
        element.style.transform = `translateX(${scroll * rate}px)`;
    });

    // Fade-in and stop parallax for about me section
    if (sectionY.top > 0) {
        opacity.forEach(element => {
            element.style.opacity = scroll / (sectionY.top + sectionHeight);
        });

        content.style.transform = `translateY(${scroll / (sectionHeight + sectionY.top) * 50 - 50}px)`;
        img.style.transform = `translateY(-${scroll / (sectionHeight + sectionY.top) * 50 - 50}px)`;

        border.style.width = `${scroll / (sectionY.top + sectionHeight) * 5}em`;

    // Fade-out
    } else if (sectionY.top < 0) {
        opacity.forEach(element => {
            element.style.opacity = -1 * (scroll - sectionHeight) / (sectionHeight / 2) + 1;
        });
    }

    // Outro section
    let rate = inspired.dataset.rate;
    let transform = (scroll * rate) / (outroHeight + outroY.top) * 50 - 75;
    inspired.style.transform = `translateX(${transform}px)`;

    let test = scroll / (outroY.top + outroHeight) - 1;
    outroOpacity.style.opacity = test;

});
