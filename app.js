const menuModul = document.querySelector('.menu-abs')
const burgerBtn = document.querySelector('.hamburger')
const removeBtn = document.querySelector('.fa-times')
const reservationModul = document.querySelector('.contact-form-wrapper')
const reservationBtn = document.querySelector('.reservation')
const header = document.querySelector('.header')
window.addEventListener('click', (e) => {
if(e.target.classList.contains('hamburger') || e.target.classList.contains('line')) {
    menuModul.classList.toggle('active');
}
})
reservationModul.classList.remove('close-animation')

window.addEventListener('click', (e) => {
if(e.target.classList.contains('reservation')) {
    reservationModul.classList.add('form-active')
    reservationModul.classList.remove('close-animation')
if(menuModul.classList.contains('active')) {
    menuModul.classList.remove('active')
}
} 
if(e.target === removeBtn) {
    reservationModul.classList.remove('form-active')
    reservationModul.classList.add('close-animation')

}

})


window.addEventListener('scroll', () => {
    const navBar = document.querySelector('.navigation')
const height = navBar.clientHeight
    if(window.scrollY >= 40) {
        header.style.paddingTop = height + 'px';
        navBar.classList.add('fixed')
    } else {
        header.style.paddingTop = 0;

    navBar.classList.remove('fixed')

    }
    if(menuModul.classList.contains('active')) {
        menuModul.classList.remove('active')
    }
})
