// function
let sliderIndex = 1;
showSlides(sliderIndex);

function incrementSlide () {
    showSlides(sliderIndex += 1);
}

function decrementSlide() {
    showSlides(sliderIndex -= 1);
}

function currentSlide(n) {
    showSlides(sliderIndex = n);
}

function showSlides(n) {
    let i;
    let slides = document.getElementsByClassName('slider__item');
    let dots = document.getElementsByClassName('slider-dots__item');
    console.log(dots);

    if (n > slides.length) {
        sliderIndex = 1;
    } else {
        sliderIndex = slides.length;
    }

    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = 'none';
    }

    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }

    slides[sliderIndex - 1].style.display = "block";
    dots[sliderIndex - 1].classList.add(" active");
}

// let btn = document.getElementById('btn');
let prev = document.getElementById('prev');
let next = document.getElementById('next');

let handler = () => { alert('Hello'); }

// btn.addEventListener('click', handler);
prev.addEventListener('click', incrementSlide());
next.addEventListener('click', decrementSlide())
