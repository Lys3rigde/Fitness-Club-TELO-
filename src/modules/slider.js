const slider = () => {
    const style = document.createElement("style");
    style.id = "main-slider-styles";
    style.textContent = `
    .main-slider-active {
    display: flex !important;
    }
    `;
    document.head.append(style);
    const slides = [...document.querySelectorAll('.main-slider > .slide')];

    slides.forEach(e => {
        e.style.display = 'none';
        if (e === slides[0]) {
            e.classList.add('main-slider-active');
        }
    });

    const autoPlaySlide = () => {
        if (slides[slides.length - 1].classList.contains('main-slider-active')) {
            slides[slides.length - 1].classList.remove('main-slider-active');
            slides[0].classList.add('main-slider-active');
            return;
        }

        for (let i = 0; i < slides.length; i++) {
            if (slides[i].classList.contains('main-slider-active')) {
                slides[i].classList.remove('main-slider-active');
                slides[i + 1].classList.add('main-slider-active');
                return;
            }
        }
    };

    const startSlide = (time = 3000) => {
        setInterval(autoPlaySlide, time);
    };
    startSlide(1500);
};

export default slider;
