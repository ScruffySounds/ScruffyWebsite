$(document).ready(mainCode)

function mainCode(){
    $(".image-3D").click(openLightbox)
    $(".overlay").click(closeLightbox)
    $(".lightbox-image").click(closeLightbox)

    var coolDex

    function openLightbox() {
        $(".lightbox").removeClass("hidden")

        coolDex = $(this)[0].classList[1]
        console.log(coolDex)
        $(".lightbox-image").addClass(coolDex)
    }

    function closeLightbox() {
        $(".lightbox").addClass("hidden")
        $(".lightbox-image").removeClass(coolDex)
    }
}

//anime({
//  targets: '.main-text',
//    scale: 2,
//    rotate: '1turn'
//  });