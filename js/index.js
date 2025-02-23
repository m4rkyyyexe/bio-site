var audio = new Audio('./song.mp3');
audio.volume = .4;
audio.loop = true;
document.getElementById('overlay').addEventListener('click', function () {
    this.classList.add('fade-out');

    audio.play();
});

// ------------------------------------------

jQuery(document).ready(function () {
    var mouseX = 0, mouseY = 0;
    var circleWidth = $('.circle').width();
    var circleHeight = $('.circle').height();
    var xp = 0, yp = 0;

    $(document).mousemove(function (e) {
        mouseX = e.pageX - (circleWidth / 2);
        mouseY = e.pageY - (circleHeight / 2);
    });

    setInterval(function () {
        xp += ((mouseX - xp) / 6);
        yp += ((mouseY - yp) / 6);
        $("#circle").css({ left: xp + 'px', top: yp + 'px' });
    }, 15);
});

// ------------------------------------------

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

animateTitle("@6thnight");

// ------------------------------------------

particlesJS("particles-js", {
    "particles": {
        "number": {
            "value": 28,
            "density": {
                "enable": true,
                "value_area": 800
            }
        },
        "color": {
            "value": "#ffffff"
        },
        "shape": {
            "type": "circle",
            "stroke": {
                "width": 0,
                "color": "#000000"
            },
            "polygon": {
                "nb_sides": 5
            },
            "image": {
                "src": "img/github.svg",
                "width": 100,
                "height": 100
            }
        },
        "opacity": {
            "value": 0.5,
            "random": false,
            "anim": {
                "enable": false,
                "speed": 1,
                "opacity_min": 0.1,
                "sync": false
            }
        },
        "size": {
            "value": 4,
            "random": true,
            "anim": {
                "enable": false,
                "speed": 40,
                "size_min": 0.1,
                "sync": false
            }
        },
        "line_linked": {
            "enable": false,
            "distance": 150,
            "color": "#ffffff",
            "opacity": 0.4,
            "width": 1
        },
        "move": {
            "enable": true,
            "speed": 6,
            "direction": "none",
            "random": false,
            "straight": false,
            "out_mode": "out",
            "bounce": false,
            "attract": {
                "enable": false,
                "rotateX": 600,
                "rotateY": 1200
            }
        }
    },
    "interactivity": {
        "detect_on": "canvas",
        "events": {
            "onhover": {
                "enable": false,
                "mode": "repulse"
            },
            "onclick": {
                "enable": false,
                "mode": "push"
            },
            "resize": true
        },
        "modes": {
            "grab": {
                "distance": 400,
                "line_linked": {
                    "opacity": 1
                }
            },
            "bubble": {
                "distance": 400,
                "size": 40,
                "duration": 2,
                "opacity": 8,
                "speed": 3
            },
            "repulse": {
                "distance": 200,
                "duration": 0.4
            },
            "push": {
                "particles_nb": 4
            },
            "remove": {
                "particles_nb": 2
            }
        }
    },
    "retina_detect": true
});