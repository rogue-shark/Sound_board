const sounds = ['applause', 'boo', 'gasp', 'tada', 'victory', 'wrong'];

sounds.forEach(sound => {
    const btn = document.createElement('button');
    btn.classList.add('btn')
    btn.innerText = sound;
    document.getElementById('buttons')
            .appendChild(btn)
    
    btn.addEventListener('click', () => {
        stopOverlap()

        // J.S api for audio elements and has methods like - "play()", "pause()"
        document.getElementById(sound).play() 
    })
})

//to stop sounds from overlapping
function stopOverlap(){
    sounds.forEach(sound => {
        const audio = document.getElementById(sound)

        audio.pause()
        audio.currentTime = 0
    })
}

