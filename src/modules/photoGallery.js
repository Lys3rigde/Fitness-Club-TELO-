const photoGallery = () => {

    const style = document.createElement('style');
    style.id = 'photo-gallery-style';
    style.textContent = `
        .photo-gallery-image {
            display: none;
        }

        .photo-gallery-slider {
            height: 400px;
        }

        .photo-gallery-image-active {
            display: flex;
            width: 700px !important;
            position: absolute;
            left: 0;
            right: 0;
            margin-left: auto;
            margin-right: auto;
        }

        .photo-gallery-wrapper {
            position: relative;
            display: flex;
        }

        .photo-gallery-wrapper > span {
            z-index: 322 !important;
            position: absolute;
            width: 36px;
            height: 37px;
            background-color: #f4c71b !important;
            border-radius: 40%;
            text-align: center;
            padding-top:11px;
        }

        .photo-gallery-left {
            display: block;
            top: 40%;
            left: 15%;
            cursor: pointer;
        }
        .photo-gallery-right {
            display: block;
            top: 40%;
            left: 82%;
            cursor: pointer;
        }
        .photo-gallery-dots-block {
            position: absolute;
            top: 90%;
            left: 0;
            right: 0;
            margin-left: auto;
            margin-right: auto;
            display: flex;
            allign-items: center;
            justify-content: center;
        }
        .photo-gallery-dots {
            height:  3px;
            width: 30px;
            margin: 1px;
            background: #ffffff;
            border-radius: 10%;
        }
        .photo-gallery-dots-active {
            height:  3px;
            width: 30px;
            background: #f4c71b;
            border: 1px solid #f4c71b;
        }
    `;
    document.head.append(style);

    const galleryBg = document.querySelector('.gallery-bg > .wrapper'),
        gallerySlider = document.querySelector('.gallery-slider'),
        images = document.querySelectorAll('.gallery-slider > .slide > img'),
        leftArrow = document.createElement('span'),
        rightArrow = document.createElement('span'),
        dotsBlock = document.createElement('div');

    galleryBg.classList.add('photo-gallery-wrapper');
    gallerySlider.classList.add('photo-gallery-slider');
    dotsBlock.classList.add('photo-gallery-dots-block');

    leftArrow.className = 'photo-gallery-left';
    leftArrow.innerHTML = '<i class="fa fa-angle-left"></i>';
    rightArrow.className = 'photo-gallery-right';
    rightArrow.innerHTML = '<i class="fa fa-angle-right"></i>';

    galleryBg.append(leftArrow);
    galleryBg.append(dotsBlock);
    galleryBg.append(rightArrow);

    images.forEach(i => {
        if (i === images[0]) {
            i.classList.add('photo-gallery-image-active');
        }
        i.classList.add('photo-gallery-image');
    });
    for (let i = 0; i < images.length; i++) {
        const dot = document.createElement('button');
        dot.classList.add('photo-gallery-dots');
        if (i === 0) {
            dot.classList.add('photo-gallery-dots-active');
        }
        dotsBlock.append(dot);
    }

    const dots = document.querySelectorAll('.photo-gallery-dots');

    const prevSlide = () => {
        for (let i = 0; i < images.length; i++) {
            if (images[0].classList.contains('photo-gallery-image-active')) {
                images[0].classList.remove('photo-gallery-image-active');
                images[0].classList.add('photo-gallery-image');
                images[images.length - 1].classList.add('photo-gallery-image-active');
                dots[0].classList.remove('photo-gallery-dots-active');
                dots[dots.length - 1].classList.add('photo-gallery-dots-active');
                return;
            } else if (images[i].classList.contains('photo-gallery-image-active')) {
                images[i].classList.remove('photo-gallery-image-active');
                images[i].classList.add('photo-gallery-image');
                images[i - 1].classList.add('photo-gallery-image-active');
                dots[i].classList.remove('photo-gallery-dots-active');
                dots[i - 1].classList.add('photo-gallery-dots-active');
                return;
            }
        }
    };

    const nextSlide = () => {
        for (let i = 0; i < images.length; i++) {
            if (images[images.length - 1].classList.contains('photo-gallery-image-active')) {
                images[images.length - 1].classList.remove('photo-gallery-image-active');
                images[images.length - 1].classList.add('photo-gallery-image');
                images[0].classList.add('photo-gallery-image-active');
                dots[dots.length - 1].classList.remove('photo-gallery-dots-active');
                dots[0].classList.add('photo-gallery-dots-active');
                return;
            } else if (images[i].classList.contains('photo-gallery-image-active')) {
                images[i].classList.remove('photo-gallery-image-active');
                images[i].classList.add('photo-gallery-image');
                images[i + 1].classList.add('photo-gallery-image-active');
                dots[i].classList.remove('photo-gallery-dots-active');
                dots[i + 1].classList.add('photo-gallery-dots-active');
                return;
            }
        }
    };

    galleryBg.addEventListener('click', event => {
        const target = event.target;

        if (target.closest('.photo-gallery-left')) {
            prevSlide();
        }   else if (target.closest('.photo-gallery-right')) {
            nextSlide();
        }   else if (target.closest('.photo-gallery-dots')) {
            for (let i = 0; i < images.length; i++) {
                if (dots[i] === target) {
                    images.forEach(elem => elem.classList.remove('photo-gallery-image-active'));
                    dots.forEach(elem => elem.classList.remove('photo-gallery-dots-active'));
                    images[i].classList.add('photo-gallery-image-active');
                    dots[i].classList.add('photo-gallery-dots-active');
                }
            }
        }
    });

    let interval;
    interval = setInterval(nextSlide, 3000);

    galleryBg.addEventListener('mouseover', event => {
        if (
            event.target.matches('.photo-gallery-left') ||
            event.target.matches('.photo-gallery-right') ||
            event.target.matches('.photo-gallery-dots')) {
            clearInterval(interval);
        }
    });

    galleryBg.addEventListener('mouseout', event => {
        if (
            event.target.matches('.photo-gallery-left') ||
            event.target.matches('.photo-gallery-right') ||
            event.target.matches('.photo-gallery-dots')) {
            interval = setInterval(nextSlide, 3000);
        }
    });
};

export default photoGallery;
