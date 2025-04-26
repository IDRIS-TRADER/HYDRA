// Бургер-кнопка

const menuHeader = document.querySelector('.header__menu--list--is-active')
const elementFirst = document.querySelector('.header--burger--button--element-first')
const elementSecond = document.querySelector('.header--burger--button--element-second')
const elementThird = document.querySelector('.header--burger--button--element-third')
const body = document.querySelector('body')

document.addEventListener('click', (event) => {
    if(event.target.closest('.header--burger--button')) {
        menuHeader.classList.toggle('menu-active')
        elementFirst.classList.toggle('element-first')
        elementSecond.classList.toggle('element-second')
        elementThird.classList.toggle('element-third')
        body.classList.toggle('body-hidden')
    }
})



// Слайдер

const slider = document.querySelectorAll('[data-slider]')
const elements = document.querySelectorAll('.content-first__floor-second__elements--item')
const arrows = document.querySelectorAll('[data-arrow-slider]')

let sliderActive = 0;

function show(index) {
    slider[sliderActive].classList.remove('slider-active')
    slider[index].classList.add('slider-active')
    elements[sliderActive].classList.remove('element-active')
    elements[index].classList.add('element-active')
    sliderActive = index
}

arrows.forEach((e) => {
    e.addEventListener('click', () => {
        if (event.target.classList.contains('content-first__floor-second--arrow-left')) {
            let index = sliderActive - 1

            if (index < 0) {
                index = slider.length -1
            }

            show(index)
        }else if (event.target.classList.contains('content-first__floor-second--arrow-right')) {
            let index = sliderActive + 1

            if (index >= slider.length) {
                index = 0
            }

            show(index)
        }
    })
})

show(sliderActive)

// Слайдер box

const sliderBox = document.querySelectorAll('[data-slider-box]')
const elementsBox = document.querySelectorAll('.content-third__floor-second--elements--item')
const arrowsBox = document.querySelectorAll('[data-arrow-slider-box]')

function showBox(index) {
    sliderBox[sliderActive].classList.remove('box-active')
    sliderBox[index].classList.add('box-active')
    elementsBox[sliderActive].classList.remove('element-active')
    elementsBox[index].classList.add('element-active')
    sliderActive = index
}

arrowsBox.forEach((e) => {
    e.addEventListener('click', () => {
        if (event.target.classList.contains('content-third__floor-second--arrows--left')) {
            let index = sliderActive - 1

            if (index < 0) {
                index = sliderBox.length -1
            }

            showBox(index)
        }else if (event.target.classList.contains('content-third__floor-second--arrows--right')) {
            let index = sliderActive + 1

            if (index >= sliderBox.length) {
                index = 0
            }

            showBox(index)
        }
    })
})

showBox(sliderActive)

// Слайдер boll

const sliderBoll = document.querySelectorAll('[data-slider-boll]')
const elementsBoll = document.querySelectorAll('.content-fourth__floor-third--elements--item')
const arrowsBoll = document.querySelectorAll('[data-arrow-slider-boll]')

function showBoll(index) {
    sliderBoll[sliderActive].classList.remove('boll-active')
    sliderBoll[index].classList.add('boll-active')
    elementsBoll[sliderActive].classList.remove('element-active')
    elementsBoll[index].classList.add('element-active')
    sliderActive = index
}

arrowsBoll.forEach((e) => {
    e.addEventListener('click', () => {
        if (event.target.classList.contains('content-fourth__floor-third__arrows--left')) {
            let index = sliderActive - 1

            if (index < 0) {
                index = sliderBox.length -1
            }

            showBoll(index)
        }else if (event.target.classList.contains('content-fourth__floor-third__arrows--right')) {
            let index = sliderActive + 1

            if (index >= sliderBox.length) {
                index = 0
            }

            showBoll(index)
        }
    })
})

showBoll(sliderActive)