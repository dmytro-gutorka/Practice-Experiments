'use strict';


const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.btn--close-modal');
const btnsOpenModal = document.querySelectorAll('.btn--show-modal');

const openModal = function (e) {
  e.preventDefault()
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

const closeModal = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};

btnsOpenModal.forEach(btn => btn.addEventListener('click', openModal))

btnCloseModal.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);

document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
    closeModal();
  }
});


const btnScrollTo = document.querySelector('.btn--scroll-to');
const section1 = document.querySelector('#section--1');


btnScrollTo.addEventListener('click', (e) =>{
  const s1coords = section1.getBoundingClientRect()
  section1.scrollIntoView({behavior: 'smooth'})

  // window.scrollTo({
  //   left: s1coords.left + window.scrollX,
  //   top: s1coords.top + window.scrollY,
  //   behavior: 'smooth'
  // }) old way of scrolling
});




const randomInt = (min, max) => Math.floor(Math.random() * (max - min + 1) + min);
const randomColor = () => `rgb(${randomInt(0, 255)}, ${randomInt(0, 255)}, ${randomInt(0, 255)})`



document.querySelector('.nav__link').addEventListener('click', function(e) {
  this.style.backgroundColor = randomColor()
  e.stopPropagation()
})

document.querySelector('.nav__links').addEventListener('click', function(e)  {
  this.style.backgroundColor = randomColor();

})

document.querySelector('.nav').addEventListener('click', function(e) {
  this.style.backgroundColor = randomColor();
})