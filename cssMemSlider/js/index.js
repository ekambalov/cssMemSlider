const carousel = document.querySelector('.slider__carousel')
const navBtns = document.querySelectorAll('.slider__btn')

let activePage = 0;

const activateBtn = (number) => {
    navBtns[activePage].classList.remove('slider__btn--active');
    navBtns[number].classList.add('slider__btn--active');
    activePage = number;
}

activateBtn(activePage)

for (let i = 0; i < 7; i += 1) {
    navBtns[i].addEventListener('click',()=>{
        carousel.style.left = `-${i*620}px`;
        activateBtn(i);

    })
}