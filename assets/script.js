/*
    1. Iniciar slideShow
    2. Si se presiona un botón, detener.
    3. Si se deja sin presionar por un tiempo, ejecutar slideShow
*/

var slideIndex = 0;
var slideIndexPrevious = 0;
var lastPressed = 1;
var slideContinue = true;

// get elements
var slides = document.getElementsByClassName("slides");

function moveDivs(n) {
    lastPressed = n;
    slideIndex += n;
    console.log('move Div');
    slideShow(slideIndex);
}

function checkInterval(n) {
    //check if slideContinue
    if (slideContinue) {
        console.log('check interval');
        setInterval(moveDivs, 4000, n);
    }
}

function slideShow(index) {
    console.log('Slide show');
    // hide all images
    for (let i = 0; i < slides.length; i++) {
        slides[i].classList.remove('fade-in-img')
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

    //set previous slide
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
    slides[slideIndex].classList.add("fade-in-img");
    slides[slideIndexPrevious].style.display = "block";
}

checkInterval(1);