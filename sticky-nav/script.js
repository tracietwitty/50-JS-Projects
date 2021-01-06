const nav = document.querySelector('.nav')
window.addEventListener('scroll', fixNav)

function fixNav() {
    if(scrollY > nav.offsetHeight + 190) {
        nav.classList.add('active')
    } else {
        nav.classList.remove('active')
    }
}