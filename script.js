const sliderContainer = document.querySelector('.slider-container');
const sliderRight = document.querySelector('.right-slider');
const sliderLeft = document.querySelector('.left-slider');
const upButton = document.querySelector('.up-button');
const downButton = document.querySelector('.down-button');
const slidesLength = sliderRight.querySelectorAll('div').length;

let activeSlideIndex = 0;

// This is the starting position
sliderLeft.style.top = `-${(slidesLength - 1) * 100}vh`;
sliderRight.style.top = `-${activeSlideIndex * 100}vh`;
downButton.style.opacity = 0;
downButton.style.visibility = 'hidden';
upButton.style.borderTopRightRadius = '5px';

console.log(
  'slidesLength: ',
  slidesLength,
  'activeSlideIndex: ',
  activeSlideIndex
);

function changeSlide(string) {
  const sliderHeight = sliderContainer.clientHeight;

  if (string === 'up') {
    activeSlideIndex++;
    if (activeSlideIndex > slidesLength - 1) {
      activeSlideIndex = 0;
    }
  } else {
    activeSlideIndex--;
    if (activeSlideIndex < 0) {
      activeSlideIndex = slidesLength - 1;
    }
  }

  sliderLeft.style.transform = `translateY(${
    activeSlideIndex * sliderHeight
  }px)`;
  sliderRight.style.transform = `translateY(-${
    activeSlideIndex * sliderHeight
  }px)`;

  console.log(
    'slidesLength: ',
    slidesLength,
    'activeSlideIndex: ',
    activeSlideIndex
  );
  if (activeSlideIndex === 3) {
    upButton.style.visibility = 'hidden';
    upButton.style.opacity = 0;
    downButton.style.borderBottomRightRadius = '5px';
  } else {
    upButton.style.opacity = 1;
    upButton.style.visibility = 'visible';
    downButton.style.borderBottomRightRadius = '0px';
  }
  if (activeSlideIndex === 0) {
    downButton.style.visibility = 'hidden';
    downButton.style.opacity = 0;
    upButton.style.borderTopRightRadius = '5px';
  } else {
    downButton.style.opacity = 1;
    downButton.style.visibility = 'visible';
    upButton.style.borderTopRightRadius = '0px';
  }
}

// Event listeners
upButton.addEventListener('click', () => changeSlide('up'));
downButton.addEventListener('click', () => changeSlide('down'));
