const carousel = document.querySelector('.carousel');
const carouselContent = document.querySelector('.carousel-content');
const prevBtn = document.querySelector('.carousel-prev');
const nextBtn = document.querySelector('.carousel-next');

let position = 0;
const width = carousel.offsetWidth;

function slide(direction) {
  if (direction === 'next') {
    position -= width;
    if (position < -width * (carouselContent.children.length - 1)) {
      position = 0;
    }
  } else if (direction === 'prev') {
    position += width;
    if (position > 0) {
      position = -width * (carouselContent.children.length - 1);
    }
  }
  carouselContent.style.transform = `translateX(${position}px)`;
}

prevBtn.addEventListener('click', () => slide('prev'));
nextBtn.addEventListener('click', () => slide('next'));