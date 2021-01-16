
const carousel = () => {

    const style = document.createElement('style');
    style.id = 'carousel-style';
    style.textContent = `
    .services-slider {
        width: 100%;
        overflow: hidden;
        padding-left: 5px;
        position: relative;
      }
      .services-slider > .slide {   
        min-width: 226px;    
        margin-right: 0% !important; 
        margin-left: 0%!important;
        transition: transform 0.5s !important;
        will-change: transform !important;
      }
      .services-slider > span {
        position: absolute;
        width: 36px;
        height: 37px;
        background-color: #f4c71b !important;
        border-radius: 40%;
        text-align: center;
        padding-top: 11px;
      }
      .carousel-slider-left {
        top: 22%;
        left: 0;
        cursor: pointer;
      }
      .carousel-slider-right {
        top: 22%;
        left: 96.8%;
        cursor: pointer;
      }
    }
      `;
    document.head.append(style);

    const servicesSlider = document.querySelector('.services-slider'),
        slides = [...servicesSlider.children],
        leftArrow = document.createElement('span'),
        rightArrow = document.createElement('span');

    leftArrow.className = 'carousel-slider-left';
    leftArrow.innerHTML = `<i class="fa fa-angle-left"></i>`;
    rightArrow.className = "carousel-slider-right";
    rightArrow.innerHTML = `<i class="fa fa-angle-right"></i>`;

    servicesSlider.append(leftArrow);
    servicesSlider.append(rightArrow);

    const sliderMove = () => {
        let mover = 0,
            position = 0;
        servicesSlider.addEventListener('click', event => {
            const target = event.target;
            if (target.closest('.carousel-slider-right') && position !== slides.length - 5) {
                mover -= 226;
                position++;
                slides.forEach(i => {
                    i.style.transform = `translateX(${mover}px)`;
                });
                return;
            }   else if (target.closest('.carousel-slider-left') && position > 0) {
                mover += 226;
                position--;
                slides.forEach(i => {
                    i.style.transform = `translateX(${mover}px)`;
                });
                return;
            }   else if (!target.closest('.carousel-slider-left', '.carousel-slider-right')) {
                return;
            }
        });
    };
    sliderMove();
    window.addEventListener("resize", sliderMove);
};

export default carousel;
