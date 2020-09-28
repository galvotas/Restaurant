const menuModul = document.querySelector('.menu-abs')
const burgerBtn = document.querySelector('.hamburger')


window.addEventListener('click', (e) => {
if(e.target.classList.contains('hamburger') || e.target.classList.contains('line')) {
    menuModul.classList.toggle('active');
}
})