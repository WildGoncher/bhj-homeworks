const menuSubs = document.querySelectorAll('.menu_sub');
const menuItem = document.querySelectorAll('.menu__item');
const menuLinks = document.querySelectorAll('.menu__link');

menuItem.forEach(elem => {
    elem.addEventListener('click', (el) => {
        if (el.target.nextSibling.nextSibling.classList.value === 'menu menu_sub') {
            el.preventDefault()
            menuSubs.forEach(elem => elem.classList.remove('menu_active'));
            el.target.nextSibling.nextSibling.classList.add('menu_active')
        } 
    })
})