var audio = new Audio('assets/other/bgm.mp3');
audio.volume = 0.5;
audio.loop = true;

var typed;
function startTyped() {
    typed = new Typed("#typed", {
        strings: ["m4rkyyy", "aka. ℛage, darkknight", "christ is lord", "average tf2 and l4d2 cheater"],
        typeSpeed: 20,
        backSpeed: 2,
        backDelay: 2500,
        startDelay: 600,
    });
}

function removeoverlay() {
    var overlay = document.getElementById('overlay');
    overlay.classList.add('fade-out');
    document.body.classList.remove('no-scroll');
    audio.play();
    startTyped();

    setTimeout(() => {
        document.body.classList.add('show-content');
    }, 300); 
}

document.addEventListener('DOMContentLoaded', function() {
    var overlay = document.getElementById('overlay');
    window.addEventListener('load', function() {
        overlay.addEventListener('click', removeoverlay);
    });
});

function animateTitle(title) {
    let originalTitle = title;
    let baseTitle = "@";
    let textToAnimate = originalTitle.slice(1);
    let currentIndex = 0;
    let isRemoving = true;

    function updateTitle() {
        if (isRemoving) {
            document.title = baseTitle + textToAnimate.slice(0, -currentIndex);
            currentIndex++;
            if (currentIndex > textToAnimate.length) {
                isRemoving = false;
                currentIndex = 1;
            }
        } else {
            document.title = baseTitle + textToAnimate.slice(0, currentIndex);
            currentIndex++;
            if (currentIndex > textToAnimate.length) {
                isRemoving = true;
                currentIndex = 1;
            }
        }
    }

    setInterval(updateTitle, 200);
}

animateTitle("@darkknightl4d2");
