const gift = () => {
    const fixedGift = document.querySelector('.fixed-gift'),
        gift = document.getElementById('gift'),
        body = document.querySelector('body');

    body.addEventListener('click', event => {
        const target = event.target;
        if (target.closest('.fixed-gift')) {
            console.log(1);
            gift.style.display = 'block';
            fixedGift.style.display = 'none';
        }   else if (target.closest('.close-form') || !target.closest('.form-content') || target.closest('.close-btn')) {
            gift.style.display = 'none';
        }
    });
};

export default gift;
