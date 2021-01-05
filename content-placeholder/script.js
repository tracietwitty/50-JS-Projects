const header = document.getElementById('header')
const title = document.getElementById('title')
const excerpt = document.getElementById('excerpt')
const profile_img = document.getElementById('profile_img')
const name = document.getElementById('name')
const date = document.getElementById('date')
const animated_backgrounds = document.querySelectorAll('.animated-bg')
const animated_background_texts = document.querySelectorAll('.animated-bg-text')

setTimeout(getData, 2000)

function getData() {
    header.innerHTML = '<img src="./placeholder.jpg" alt="placeholder">'
    title.innerHTML = 'Imprint expensive ready-made.'
    excerpt.innerHTML = 'Influence halter casual easy swim-wear hanger label purchase stock contemporary shawl. Pumps model imprint collection one-of-a-kind sewing sportswear trend stitching inexpensive apparel impeccable breathable. Embroidery taste sewing old-fashioned jumper quantity affection craftmanship effect artistry artificial shape.'
    profile_img.innerHTML = '<img src="https://randomuser.me/api/portraits/women/25.jpg" alt="">'
    name.innerHTML = 'Ariel Alger'
    date.innerHTML = 'Today, The Month, 2021'

    animated_backgrounds.forEach(background => background.classList.remove('animated-bg'))
    animated_background_texts.forEach(background => background.classList.remove('animated-bg-text'))

}