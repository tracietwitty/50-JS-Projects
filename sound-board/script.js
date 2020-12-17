const sounds = ['applause', 'boo', 'level-up', 'gasp', 'fail']

sounds.forEach(sound => {
    const btn = document.createElement('button')
    btn.classList.add('btn')
    btn.innerText = sound

    btn.addEventListener('click', () => {
        stopPlayback()
        document.getElementById(sound).play()
    })

    document.getElementById('buttons').appendChild(btn)

})

function stopPlayback() {
    sounds.forEach(sound => {
        const playback = document.getElementById(sound)

        playback.pause()
        playback.currentTime = 0;
    })
}