const loveMe = document.querySelector('.loveMe')
const times = document.querySelector('#times')

let clickTime = 0
let timesClicked = 0

loveMe.addEventListener('click', (event)=> {
    if(clickTime === 0) {
        clickTime = new Date().getTime()
    } else {
        if((new Date().getTime() - clickTime < 800)) {
            createHeart(event)
            clickTime = 0
        } else {
            clickTime = new Date().getTime()
        }
    }
})

const createHeart = (event) => {

    const heart = document.createElement('i')
    heart.classList.add('far')
    heart.classList.add('fa-heart')

    const xAxis = event.clientX
    const yAxis = event.clientY

    const leftOffset = event.target.offsetLeft
    const topOffset = event.target.offsetTop

    const xInside = xAxis - leftOffset
    const yInside = yAxis - topOffset

    heart.style.top = `${yInside}px`
    heart.style.left = `${xInside}px`

    loveMe.appendChild(heart)

    times.innerHTML = ++timesClicked

    setTimeout(() => heart.remove(), 5000)
}