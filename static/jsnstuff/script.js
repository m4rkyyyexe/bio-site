var audio = new Audio('./song.mp3');
    audio.volume = .2;
    audio.loop = true;
    document.getElementById('overlay').addEventListener('click', function () {
        this.classList.add('fade-out');

        audio.play();
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

animateTitle("@6thnight");

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
    }, 17);
});
