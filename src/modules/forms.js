const forms = forms => {
    const form = document.getElementById(`${forms}`),
        thanks = document.getElementById('thanks'),
        mozaika = document.getElementById('footer_leto_mozaika'),
        schelkovo = document.getElementById('footer_leto_schelkovo'),
        Body = document.querySelector('body'),
        btnOk = thanks.querySelector('.close-btn'),
        btnClose = thanks.querySelector('.close_icon'),
        freeVisitForm = document.getElementById('free_visit_form'),
        callBackForm = document.getElementById('callback_form');

    Body.addEventListener('click', event => {
        const target = event.target;
        if (target === btnOk || target === btnClose || !target.closest('.form-wrappper')) {
            thanks.style.display = 'none';
        }
    });

    const message = (content, color = 'red') => {
        const successMessage = document.createElement('div');
        successMessage.style.cssText = `font-size: 1.7rem; color: ${color}; text-align: center`;
        successMessage.textContent = content;
        return successMessage;
    };

    const inputMessage = message('Пожалуйста, заполните все поля'),
        loadMessage = message('Пожалуйста, подождите!', '#3afa20'),
        errorMessage = message('Что-то пошло не так, пожалуйста попробуйте снова');

    const removeElem = el => {
        setTimeout(() => {
            el.remove();
        }, 1500);
    };

    const body = {};



    form.addEventListener('submit', formSend);

    async function formSend(e) {
        e.preventDefault();
        const error = formValid(form);

        if (!formValid(form)) {
            form.append(loadMessage);
            removeElem(loadMessage);
        }

        const formData = new FormData(form);

        formData.forEach((val, key) => {
            body[key] = val;
        });

        if (error === 0) {
            const response =  await fetch('./server.php', {
                method: 'POST',
                body: JSON.stringify(body)
            });
            if (response.ok) {
                thanks.style.display = 'block';
                freeVisitForm.style.display = 'none';
                callBackForm.style.display = 'none';
                form.reset();
            }   else {
                form.append(errorMessage);
                removeElem(errorMessage);
            }
        }   else {
            return;
        }

        function  formValid() {
            let error = 0,
                formReq;

            if (form.querySelector('input[type="checkbox"]')) {
                formReq = form.querySelector('input[type="checkbox"]');
                if (formReq.checked === false) {
                    error++;
                    form.append(inputMessage);
                    removeElem(inputMessage);
                }
            }   else if (form.querySelector('input[name="phone"]')) {
                formReq = form.querySelector('input[name="phone"]');
                if (form.querySelector('input[name="phone"]').value === '') {
                    error++;
                    form.append(inputMessage);
                    removeElem(inputMessage);
                }
            }   else if (form.querySelector('input[name="name"]')) {
                formReq = form.querySelector('input[name="name"]');
                if (form.querySelector('input[name="name"]').value === '') {
                    error++;
                    form.append(inputMessage);
                    removeElem(inputMessage);
                }
            }
            if (mozaika && schelkovo) {
                if (!mozaika.checked && !schelkovo.checked) {
                    error++;
                }
            }
            return error;
        }

    }


};

export default forms;

