
var el = 'bg-shape',
    lastPos = null,
    timer = 0,
    newPos;

function clear() {
  lastPos = null
}

window.onscroll = checkScrollSpeed

function checkScrollSpeed() {
  newPos = window.scrollY
  if ( lastPos != null ){ // && newPos < maxScroll 
    var delta = newPos -  lastPos
    // min/max values
    if( delta > 45 ) delta = 45
    else if( delta < -45 ) delta = -45

    anime({
        targets: '.bg-shape1',
        rotate: {
            value: delta,
        }
    })

    anime({
        targets: '.bg-shape2',
        rotate: {
            value: delta * -1,
        }
    })
}
  lastPos = newPos
  timer && clearTimeout(timer)
  timer = setTimeout(clear, 30)
}