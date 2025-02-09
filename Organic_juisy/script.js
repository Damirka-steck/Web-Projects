const menu = document.querySelector('.menu-icon'), header = document.querySelector('header'), body = document.querySelector('body');

menu.addEventListener('click', () => {
    menu.classList.toggle('menu-icon--active');

    header.classList.toggle('header-mobile')

    body.classList.toggle('no-scrol')
});
 
