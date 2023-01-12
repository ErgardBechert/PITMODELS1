document.querySelector('.header__burger').addEventListener('click', ()=> {
    document.querySelector('.header__burger').classList.toggle('active');
    document.querySelector('.header-body__menu').classList.toggle('active');
})