const toTop = () => {
    const toTop = document.getElementById('totop');
    toTop.style.cursor = 'pointer';

    toTop.style.display = 'none';
    window.addEventListener('scroll', () => {
        if (window.pageYOffset > 640) toTop.style.display = 'block';
        else toTop.style.display = 'none';
    });

    toTop.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
};

export default toTop;
