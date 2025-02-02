 const keys = document.querySelectorAll(".key")

function playNotes(event) {    
   let audioKeyCode = getKeyCode(event)
   const key = document.querySelector(`.key[data-key="${audioKeyCode}"]`)
   const cantFoundAnyKey = !key
   if(cantFoundAnyKey) {
    return;
   }

   addPlayingClass(key)
   playAudio(audioKeyCode)
}

function addPlayingClass(key){
    key.classList.add('playing')
}

function getKeyCode(event){
    let keyCode;
    const isKeyboard = event.type === "keydown" 
        if(isKeyboard) {
            keyCode = event.keyCode
        } else {
            keyCode = event.target.dataset.key
    }

    return keyCode       
}

function playAudio(audioKeyCode) {
   const audio = document.querySelector(`audio[data-key="${audioKeyCode}"]`)
   audio.currentTime = 0;
   audio.play()
}

function removePlayingClass(event){
    event.target.classList.remove("playing")
}

keys.forEach( function(key) {
    key.addEventListener("click", playNotes)
    key.addEventListener("transitionend", removePlayingClass)

})

window.addEventListener("keydown", playNotes)