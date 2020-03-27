function playSound( event ) {
  const keyCode = event.keyCode
  const audio = document.querySelector( `audio[data-key="${keyCode}"]` )
  if ( audio === null ) return
  addPlayingClass( keyCode )
  audio.currentTime = 0
  audio.play()
}

function addPlayingClass( keyCode ) {
  const audioButton = document.querySelector( `div[data-key="${keyCode}"]` )
  audioButton.classList.add( 'pulse' )
  setTimeout( function () {
    removePlayingClass( audioButton )
  }, 60 )
}

function removePlayingClass( button ) {
    button.classList.remove( 'pulse' )
}

window.addEventListener( 'keydown', playSound )
