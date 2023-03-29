// https://tobiasahlin.com/moving-letters/#7

// Wrap every letter in a span
//var textWrapper = document.querySelector('.ml7 .letters');
//textWrapper.innerHTML = textWrapper.textContent.replace(/\S/g, "<b class='letter'>$&</b>");

anime.timeline({loop: false})
    .add({
        targets: '.letter',
        translateY: ["1.1em", 0],
        translateX: ["0.55em", 0],
        translateZ: 0,
        rotateZ: [180, 0],
        duration: 1250,
        easing: "easeOutCubic",
        delay: (el, i) => 50 * i
    });