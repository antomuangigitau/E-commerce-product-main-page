const imgArr = [
  './images/image-product-1.jpg',
  './images/image-product-2.jpg',
  './images/image-product-3.jpg',
  './images/image-product-4.jpg',
];

window.addEventListener('DOMContentLoaded', () => {
  const haveBorder = document.querySelector('.thumbnails').firstElementChild;
  haveBorder.classList.add('active');
});

// click on the image to show lightbox
const changeImg = document.querySelector('.sneaker__product');
// add a lightbox
const modal = document.querySelector('.modal');
const close = document.querySelector('.close');
const modalImg = document.querySelector('.modal__product__img');
let current = 0;
//add modal class
changeImg.addEventListener('click', () => {
  modal.classList.add('show');
  const firstChild =
    document.querySelector('.slides__container').firstElementChild;
  firstChild.classList.add('active');
});
// remove modal class
close.addEventListener('click', () => {
  modal.classList.remove('show');
});

// click on thumbnail to change image
const thumbnail = document.querySelectorAll('.thumbnail');

thumbnail.forEach((thumb) => {
  const img = thumb.querySelector('img');
  img.addEventListener('click', (s) => {
    changePic();
    clickSum(s);
  });
  const changePic = () => {
    thumbnail.forEach((thumbImg) => {
      if (thumbImg !== thumb) {
        thumbImg.classList.remove('active');
      }
    });
    thumb.classList.add('active');
  };
});

function clickSum(e) {
  const clickedImg = e.currentTarget.dataset.id;

  if (clickedImg === 'product-1') {
    changeImg.src = imgArr[0];
    modalImg.src = changeImg.src;
  } else if (clickedImg === 'product-2') {
    changeImg.src = imgArr[1];
    modalImg.src = changeImg.src;
  } else if (clickedImg === 'product-3') {
    changeImg.src = imgArr[2];
    modalImg.src = changeImg.src;
  } else {
    changeImg.src = imgArr[3];
    modalImg.src = changeImg.src;
  }
}

// change slide

const previous = document.querySelector('.previous');
const next = document.querySelector('.next');
previous.addEventListener('click', () => {
  current--;
  if (current < 0) {
    current = imgArr.length - 1;
  }
  changeImg.src = imgArr[current];
  modalImg.src = imgArr[current];
});
next.addEventListener('click', () => {
  current++;
  if (current > imgArr.length - 1) {
    current = 0;
  }
  changeImg.src = imgArr[current];
  modalImg.src = imgArr[current];
});

// mobile slides
const mobileImage = document.querySelectorAll('.mobile__image__slide');
// console.log(mobileImage);
const mobilePrevious = document.querySelector('.mobile__previous');
const mobileNext = document.querySelector('.mobile__next');

mobileNext.addEventListener('click', () => {
  current++;
  if (window.innerWidth > 500) {
    if (current > imgArr.length - 2) {
      current = 0;
    }
    mobileImage[0].src = imgArr[current];
    mobileImage[1].src = imgArr[current + 1];
  }

  if (current > imgArr.length - 1) {
    current = 0;
  }
  mobileImage[0].src = imgArr[current];
});

mobilePrevious.addEventListener('click', () => {
  current--;
  if (current < 0) {
    current = imgArr.length - 1;
  }
  mobileImage[0].src = imgArr[current];

  if (window.innerWidth > 500) {
    if (current < 1) {
      current = imgArr.length - 1;
    }
    mobileImage[0].src = imgArr[current - 1];
    mobileImage[1].src = imgArr[current];
  }
});

// set initial count
let count = 0;
const value = document.querySelector('.value');
const btns = document.querySelectorAll('.btn');

btns.forEach((btn) => {
  btn.addEventListener('click', (e) => {
    const styles = e.currentTarget.classList;
    if (styles.contains('increase')) {
      count++;
    } else if (styles.contains('decrease')) {
      count--;
    }
    if (count < 0) {
      count = 0;
    }
    value.textContent = count;
  });
});

//add to cart
const addCart = document.querySelector('.add__to__cart');
const cartCount = document.querySelector('.cart__icon__count');
const cartEmpty = document.querySelector('.cart__empty');
const collectiveItems = document.querySelector('.collective__items');
const numChange = document.querySelector('.num__change');
const numNumber = document.querySelector('.num__number');
const numMultiply = document.querySelector('.num__multiply');
addCart.addEventListener('click', () => {
  if (value.textContent === '0') {
    cartCount.style.display = 'none';
  }
  if (value.textContent > '0') {
    cartCount.style.display = 'block';
    cartEmpty.style.display = 'none';
    collectiveItems.style.display = 'block';
  }
  cartCount.textContent = value.textContent;
  numChange.textContent = cartCount.textContent;
  numMultiply.textContent =
    '$' +
    '' +
    (
      parseFloat(numNumber.textContent.replace(/\$/g, '')) *
      parseInt(numChange.textContent)
    ).toFixed(2);
});
// delete button
const deleteBtn = document.querySelector('.delete');
deleteBtn.addEventListener('click', () => {
  cartEmpty.style.display = 'block';
  cartCount.style.display = 'none';
  collectiveItems.style.display = 'none';
});
const cartIcon = document.querySelector('.cart__icon');
const cartContainer = document.querySelector('.cart__container');
cartIcon.addEventListener('click', () => {
  if (cartContainer.classList.contains('show__container')) {
    cartContainer.classList.remove('show__container');
  } else {
    cartContainer.classList.add('show__container');
  }
});

// hamburger menu
const mobileMenu = document.querySelector('.mobile__menu');
const navCollection = document.querySelector('.nav__collections');
mobileMenu.addEventListener('click', () => {
  modal.classList.add('show');
  navCollection.classList.add('push__right');
  const menuCloseIcon = document.querySelector('.menu__close__icon');
  menuCloseIcon.addEventListener('click', () => {
    modal.classList.remove('show');
    navCollection.classList.remove('push__right');
  });
});
