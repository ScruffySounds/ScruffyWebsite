$(document).ready(mainCode)

function mainCode(){
    $(".image-3D").click(openLightbox)
    $(".overlay").click(closeLightbox)
    $(".lightbox-image").click(closeLightbox)

    var coolDex
    var text = document.getElementById("lightbox-text")

    function openLightbox() {
        $(".lightbox").removeClass("hidden")

        coolDex = $(this)[0].classList[1]
        console.log(coolDex)
        $(".lightbox-image").addClass(coolDex)
        switch(coolDex) {
            case "home":
              text.innerHTML="A study of translucent geometric forms."
              break;
            case "sword":
              text.innerHTML="A physically-based render of the Dungeons & Dragons weapon."
              break;
            case "shiva":
              text.innerHTML="A physically-based render of a flying fantasy dreadnought."
              break;
            case "flame":
              text.innerHTML="A cinematic poster for an imaginary short film."
              break;
            case "saucer":
              text.innerHTML="A retro spaceship made of breakfast dishware."
              break;
            case "clocktower":
              text.innerHTML="A study of nonphysical lighting, using minimal colors to imitate UPA illustrations."
              break;
            case "kart":
              text.innerHTML="A 3D model of a toy kart made of lathed wood, which I made for a video about Mario Kart's sound design. Featuring an Arduino-style microchip!"
              break;
            case "bubble":
              text.innerHTML="An exaggerated random color/transparency shader to mimic the thin-film iridescence of soap bubbles."
              break;
            case "melon":
              text.innerHTML="Two shaders on display. For the watermelon rind: a highly distorted tangential wave texture with splotches of green and yellow. For the watermelon flesh: a volumetric shader that uses vertex paint to shift between red and white. It contains a small random chance of black splotches for seeds."
              break;
            case "peach":
              text.innerHTML="A highly distorted tangential gradient between red and yellow to emulate peach skin."
              break;
            case "grape":
              text.innerHTML="My most complex procedural shader, handling the color gradient, splotchy details, waxy skin, reflections, and subsurface scattering present in red grapes."
              break;
            case "potato":
              text.innerHTML="A group of noise clouds overlaid on a very diffuse surface shader to emulate potato skin."
              break;
            case "crab":
              text.innerHTML="A Peckish Aristocrab from Pikmin 3, blowing bubbles and ensnaring a red Pikmin."
              break;
            case "drive":
              text.innerHTML="A rough digital painting I drew during a cross-country road trip in the summer of 2019."
              break;
            case "lady":
              text.innerHTML="A digital pencil drawing of a lady."
              break;
            case "tac":
              text.innerHTML="A vibrant digital illustration of Tac, an enemy in the Kirby game series, for Ryan Yoshikami's (a.k.a. quarkimo's) TAC series of transcriptions, arrangements, and compositions."
              break;
            case "hitbox":
              text.innerHTML="A promotional poster for a radio show my suitemate and I did at KCIA."
              break;
            case "grant":
              text.innerHTML="A portrait of Grant Sanderson from the YouTube channel 3Blue1Brown, drawn during the time he made math lesson livestreams to watch during the covid-19 pandemic."
              break;
            case "lhr":
              text.innerHTML="The vocal jazz trio Lambert, Hendricks, and Ross."
              break;
            case "pikango":
              text.innerHTML="Pikango from The Legend of Zelda: Breath of the Wild."
              break;
            case "kass":
              text.innerHTML="Kass from The Legend of Zelda: Breath of the Wild."
              break;
            case "mountain":
              text.innerHTML="My interpretation of Death Mountain from The Legend of Zelda series. I like it being daunting even just by towering over everything in its vicinity."
              break;
            case "tektite":
              text.innerHTML="A scene from the game Outer Wilds: Tektite the Hearthian comes across a huge anomalous seed that crash-landed from another planet."
              break;
            case "mario-symphony-1":
              text.innerHTML="Beatburg Fortress, a futuristic neon metropolis of electronic beats."
              break;
            case "mario-symphony-2":
              text.innerHTML="Mount Salsatoa, a volcano brewing with vibrant Latin American rhythms."
              break;
            case "mario-symphony-3":
              text.innerHTML="Drum Summit, an enormous mountain of percussion from around the globe."
              break;
            case "mario-symphony-4":
              text.innerHTML="Droning Desert, a sprawling haunted desert of minimalist textures and vaporwave colors."
              break;
            default:
              text.innerHTML="Oops. Forgive me."
          }
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