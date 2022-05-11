const carousel = document.querySelector('.slider__carousel')
const navBtns = document.querySelectorAll('.slider__btn')
const navBtnsContainer = document.querySelectorAll('.slider__btnContainer')
const memeText = document.querySelector('.slider__meme-text')

const memesText = [
    'жыццёва',
    'заганяюся і заганяюся',
    'магу сабе дазволіць',
    'толькі не крыўдуй',
    'няма чаго дадаць',
    'яшчэ скажыце што вам не падабаецца',
    'такое ўжо жыццё'
]

let activePage = 0;

const changeText = () => {
    memeText.textContent = memesText[activePage];
    memeText.removeEventListener('animationend',changeText);
    memeText.classList.remove('slider__meme-text--move'); 

}




const activateBtn = (number) => {
    carousel.style.left = `-${number*620}px`;
    navBtns[activePage].classList.remove('slider__btn--active');
    navBtns[number].classList.add('slider__btn--active');
    memeText.classList.add('slider__meme-text--move'); 
    memeText.addEventListener('transitionend',changeText);   
    activePage = number;
}

navBtns[activePage].classList.add('slider__btn--active');


for (let i = 0; i < 7; i += 1) {
    navBtnsContainer[i].addEventListener('click',()=>{        
        activateBtn(i);
    })
}

