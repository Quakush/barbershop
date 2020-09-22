'use strict';

var link = document.querySelector('.user-navigation__link');
var popup = document.querySelector('.modal__login');
var closeLogin = document.querySelector('.modal__close--login');
var login = popup.querySelector('[name=login]');
var password = popup.querySelector('[name=passord]');
var form = popup.querySelector('.form-login');
var mapLink = document.querySelector('.contacts__btn');
var mapPopup = document.querySelector('.modal__map');
var mapClose = mapPopup.querySelector('.modal__close--map');

var isStorageSupport = true;
var storage = '';

try {
  storage = localStorage.getItem('login');
} catch (err) {
  isStorageSupport = false;
}

link.addEventListener('click', function (evt) {
  evt.preventDefault();
  popup.classList.add('modal__show');

  if (storage) {
    login.value = storage;
    password.focus();
  } else {
    login.focus();
  }
});

closeLogin.addEventListener('click', function (evt) {
  evt.preventDefault();
  popup.classList.remove('modal__show');
  popup.classList.remove('modal__error');
});

form.addEventListener('submit', function (evt) {
  if (!login.value || !password.value) {
    evt.preventDefault();
    popup.classList.remove('modal__error');
    popup.classList.add('modal__error');
  } else {
    if (isStorageSupport) {
      localStorage.setItem('login', login.value);
    }
  }
});

window.addEventListener('keydown', function (evt) {
  if (evt.keyCode === 27) {
    evt.preventDefault();
    if (popup.classList.contains('modal__show')) {
      popup.classList.remove('modal__show');
      popup.classList.remove('modal__error');
    }
  }
});

mapLink.addEventListener('click', function (evt) {
  evt.preventDefault();
  mapPopup.classList.add('modal__show');
});

mapClose.addEventListener('click', function (evt) {
  evt.preventDefault();
  mapPopup.classList.remove('modal__show');
});

window.addEventListener('keydown', function (evt) {
  evt.preventDefault();
  if (evt.keyCode === 27) {
    if (mapPopup.classList.contains('modal__show')) {
      mapPopup.classList.remove('modal__show');
    }
  }
});

