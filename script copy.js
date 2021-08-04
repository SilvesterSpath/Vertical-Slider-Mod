const sliderContainer = document.querySelector('.slider-container');
const sliderRight = document.querySelector('.right-slider');
const sliderLeft = document.querySelector('.left-slider');
const upButton = document.querySelector('.up-button');
const downButton = document.querySelector('.down-button');
let slidesLength = sliderRight.querySelectorAll('div').length;

let activeSlideIndex = 0;

function changeSlide(string) {
  if (string === 'up') {
    slidesLength++;
    activeSlideIndex--;
    console.log(
      'slidesLength: ',
      slidesLength,
      'activeSlideIndex: ',
      activeSlideIndex
    );
    slidesTop(slidesLength, activeSlideIndex);
    resetSlidesUp();
  } else if (string === 'down') {
    slidesLength--;
    activeSlideIndex++;
    console.log(
      'slidesLength: ',
      slidesLength,
      'activeSlideIndex: ',
      activeSlideIndex
    );
    slidesTop(slidesLength, activeSlideIndex);
    resetSlidesDown();
  }
}

function slidesTop(idx_1, idx_2) {
  sliderLeft.style.top = `-${(idx_1 - 1) * 100}vh`;
  sliderRight.style.top = `-${idx_2 * 100}vh`;
}

function resetSlidesUp(length, active) {
  if (slidesLength >= 4 && activeSlideIndex >= 0) {
    slidesLength = 0;
    activeSlideIndex = 4;
  }
}
function resetSlidesDown(length, active) {
  if (slidesLength <= 1 && activeSlideIndex >= 3) {
    console.log('down');
    slidesLength = 5;
    activeSlideIndex = -1;
  }
}

// Event listeners
upButton.addEventListener('click', () => changeSlide('up'));
downButton.addEventListener('click', () => changeSlide('down'));

slidesTop(slidesLength, activeSlideIndex);
