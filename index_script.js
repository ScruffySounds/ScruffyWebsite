$(document).ready(mainCode)


function mainCode() {

    anime({
        targets: '.bg-shape2',
        rotate: {
            value: 360,
            duration: 10000,
            easing: 'linear',
        },
        loop: true,
        autoplay: 'false',
    })
    
    anime({
        targets: '.bg-shape1',
        rotate: {
            value: -360,
            duration: 18000,
            easing: 'linear',
        },
        loop: true,
        autoplay: 'false',
    })

    $(document).on("mouseover", onMouseEnter)
    
    function onMouseEnter(event) {
        var mouseTarget = event.target

        var maxDistance = 500
        if ( 
            mouseTarget.className.includes('bg-shape')
            ) {
                var randomValue = Math.random()
            anime({
                targets: mouseTarget,
                width: randomValue * maxDistance + 25,
                height: randomValue * maxDistance + 25,
                easing: "easeInOutQuart",
                duration: 1000
            })
        }

    }
}