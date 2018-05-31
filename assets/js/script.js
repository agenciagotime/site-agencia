let btnMenu = document.getElementById('btn-menu');
let menu = document.getElementById('menu');
let body = document.getElementById('page-top');
let modal = document.getElementById('modal');
let closeBtn = document.getElementById('btn-close');
let menuItems = document.querySelectorAll('.menu-item');
let menuSocial = document.querySelector('.menu-social');
let loader = document.getElementById('loader');


window.onload = function () {
  setTimeout(function(){
    loader.classList.add('hide');
},1200); 
  
}

btnMenu.addEventListener('click', function() {
  if (btnMenu.classList.contains('open')) {
    btnMenu.classList.remove('open');
    menu.classList.remove('active');
    body.classList.remove('no-scroll');
    menuSocial.classList.remove('show');
    for (let i = 0; i < menuItems.length; i++) {
      menuItems[i].classList.remove('show');
    }
  }
  else {
    btnMenu.classList.add("open");
    menu.classList.add('active');
    body.classList.add('no-scroll');
    menuSocial.classList.add('show');
    for (let i = 0; i < menuItems.length; i++) {
      menuItems[i].classList.add('show');
    }
  }  
});

function checkMail(form) {
  let mail = document.getElementById('email');
  let error = document.getElementById('error');
  if (!mail.validity.valid) {
    error.classList.add('alert');
    form.focus();
  } else {
    error.classList.remove('alert');
  }  
  form.preventDefault();
}

function openModal(e) {
  modal.classList.add('active');
}

closeBtn.addEventListener('click', function() {
  modal.classList.remove('active');
});

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    document.querySelector(this.getAttribute('href')).scrollIntoView ({
      behavior: 'smooth',
      block: 'start'
    });
    btnMenu.classList.remove('open');
    menu.classList.remove('active');
    body.classList.remove('no-scroll');
  });
});