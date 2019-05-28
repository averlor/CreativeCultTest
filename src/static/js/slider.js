let slider = () => {
    let sliderIndex = 1;
    showSlides(sliderIndex);

    let incrementSlide = () => {
        showSlides(sliderIndex += 1);
    }

    let decrementSlide = () => {
        showSlides(sliderIndex -= 1);
    }

    let currentSlide = n => {
        showSlides(sliderIndex = n);
    }

    let showSlides = n => {
        let i;
        let slides = document.getElementsByClassName('slider__item');
        let dots = document.getElementsByClassName('slider-dots__item');

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

        slides[slideIndex - 1].style.display = "block";
        dots[slideIndex - 1].className += " active";
    }
}

module.exports = slider;