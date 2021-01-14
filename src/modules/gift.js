const gift = () => {
    const fixedGift = document.querySelector('.fixed-gift'),
        gift = document.getElementById('gift'),
        body = document.querySelector('body');

    body.addEventListener('click', event => {
        const target = event.target;
        if (target.closest('.fixed-gift')) {
            gift.style.display = 'block';
            fixedGift.style.display = 'none';
        // eslint-disable-next-line max-len
        }   else if (target.closest('.close-form') || !target.closest('.form-content') || target.closest('.close-btn')) {
            gift.style.display = 'none';
        }
    });
};

export default gift;
