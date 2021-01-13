const clubSelect = () => {
    const body = document.querySelector(`body`);
    const clubList = document.querySelector(`.clubs-list > ul`);

    body.addEventListener('click', event => {
        const target = event.target;

        if (target.closest(`.club-select`)) {
            clubList.style.display = 'block';
        }   else {
            clubList.style.display = 'none';
        }

    });

};

export default clubSelect;
