const prevBtn = document.querySelector('.slider__arrow_prev')
const nextBtn = document.querySelector('.slider__arrow_next')
const slides = document.querySelectorAll('.slider__item')
let activeSlide = 0;

function changeSlide() {
  slides.forEach((el, idx) => {
      if(idx === activeSlide) {
          el.classList.add('slider__item_active');
      } else el.classList.remove('slider__item_active');
  });
}

function increaseSlide() {
  activeSlide += 1
  if(activeSlide > slides.length - 1) {
      activeSlide = 0
  }
  changeSlide()
}

function decreaseSlide() {
  activeSlide -= 1
  if(activeSlide < 0) {
      activeSlide = slides.length - 1;
  }
  changeSlide()
}

prevBtn.addEventListener("click", decreaseSlide);
nextBtn.addEventListener("click", increaseSlide);

changeSlide()