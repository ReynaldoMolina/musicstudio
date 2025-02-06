/*
    1. Iniciar slideShow
    2. Si se presiona un botón, detener.
    3. Si se deja sin presionar por un tiempo, ejecutar slideShow
*/

let slideIndex = 0;
let slideIndexPrevious = 0;
let lastPressed = 1;
let slideInterval;
let slideTimeOut;
let fadeType;
const slides = document.getElementsByClassName("slides");

function moveDivs(n) {
    clearTimeout(slideTimeOut);
    clearInterval(slideInterval);
    lastPressed = n;
    slideIndex += n;
    fadeType = "fade-in-img-fast";
    slideShow(slideIndex);
    slideTimeOut = setTimeout(checkInterval, 6000, 1);
}

function autoMoveDivs(n) {
    lastPressed = n;
    slideIndex += n;
    fadeType = "fade-in-img";
    slideShow(slideIndex);
}

function checkInterval(n) {
    slideInterval = setInterval(autoMoveDivs, 4000, n);
}

function slideShow(index) {
    // hide all images
    for (let i = 0; i < slides.length; i++) {
        slides[i].classList.remove("fade-in-img");
        slides[i].classList.remove("fade-in-img-fast");
        slides[i].style.display = "none";
    }

    // if we get to last element, go to first
    if (index > slides.length - 1) {
        slideIndex = 0;
    }
    // if we get to first element, go to last
    if (index < 0) {
        slideIndex = slides.length - 1;
    }

    // set previous slide
    if (lastPressed > 0) { //if right button pressed
        slideIndexPrevious = slideIndex - 1;
        if (slideIndexPrevious < 0) {
            slideIndexPrevious = slides.length - 1;
        }
    }
    if (lastPressed < 0) { //if left button pressed
        slideIndexPrevious = slideIndex + 1;
        if (slideIndexPrevious > (slides.length - 1)) {
            slideIndexPrevious = 0;
        }
    }

    // make images visible
    slides[slideIndex].style.display = "block";
    slides[slideIndex].classList.add(fadeType);
    slides[slideIndexPrevious].style.display = "block";
}

slides[slideIndex].style.display = "block";
slides[slideIndex].classList.add("fade-in-img");
checkInterval(1);