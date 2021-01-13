const freeVisitForm = () => {
    const freeVisitForm = document.getElementById('free_visit_form'),
        openPopup = document.querySelector('.open-popup'),
        closeIcon = freeVisitForm.querySelector('.close_icon'),
        body = document.querySelector('body');

    body.addEventListener('click', event => {
        const target = event.target;
        if (target === openPopup) {
            freeVisitForm.style.display = 'block';
        }   else if (target === closeIcon || !target.closest('.form-wrapper')) {
            freeVisitForm.style.display = 'none';
        }
    });

};

export default freeVisitForm;
