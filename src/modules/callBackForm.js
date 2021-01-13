const callBackForm = () => {
    const callBackForm = document.getElementById('callback_form'),
        callbackBtn = document.querySelector('.callback-btn'),
        body = document.querySelector('body'),
        closeIcon = callBackForm.querySelector('.close_icon');

    body.addEventListener('click', event => {
        const target = event.target;
        if (target === callbackBtn) {
            callBackForm.style.display = 'block';
        }   else if (target === closeIcon || !target.closest('.form-wrapper')) {
            callBackForm.style.display = 'none';
        }
    });


};

export default callBackForm;
