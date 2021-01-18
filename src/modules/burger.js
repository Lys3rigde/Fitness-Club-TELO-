const burger = () => {
    const popupMenu = document.querySelector('.popup-menu'),
        body = document.querySelector('body'),
        stickBurger = () => {
            const topMenu = document.querySelector('.top-menu');

            if (window.pageYOffset > 330 && window.innerWidth <= 768) {
                topMenu.style.position = 'fixed';
            }   else {
                topMenu.style.position = '';
            }
        };

    window.addEventListener('scroll', stickBurger);
    window.addEventListener('resize', stickBurger);

    body.addEventListener('click', event => {
        const target = event.target;
        if (target.closest('.hidden-large > img')) popupMenu.style.display = 'flex';
        else if (target.closest('.close-menu-btn > img')) popupMenu.style.display = 'none';
        else if (target.closest('.scroll > a')) popupMenu.style.display = 'none';
    });
};

export default burger;
