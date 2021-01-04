const button = document.querySelectorAll('.ripple')

button.forEach(button => {
    button.addEventListener('click', function(event) {
        const x = event.clientX
        const y = event.clientY

        const buttonTop = event.target.offsetTop
        const buttonLeft = event.target.offsetLeft

        const insideX = x - buttonLeft
        const insideY = y - buttonTop

        const circle = document.createElement('span')
        circle.classList.add('circle')
        circle.style.top = insideY + 'px'
        circle.style.left = insideX + 'px'

        this.appendChild(circle)

        setTimeout(() => circle.remove(), 500)
    })
})