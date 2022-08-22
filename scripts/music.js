function toggleAudio() {
    const audio = document.getElementById('audio')
    const music = document.querySelector('audio')

    audio.addEventListener('click', () => {
        audio.classList.toggle("play")

        music.volume = 0.3

        const containPlay = audio.classList.contains("play")

        if (containPlay) {
            music.play()
        } else {
            music.pause()
        }
    })
}

toggleAudio()