const calculator = () => {
    const oneMonth = document.getElementById('m1'),
        sixMonth = document.getElementById('m2'),
        nineMonth = document.getElementById('m3'),
        twelveMonth = document.getElementById('m4'),
        promoInput = document.querySelector('[placeholder = "Промокод"]'),
        priceTotal = document.getElementById('price-total'),
        cardLetoMozaika = document.getElementById('card_leto_mozaika'),
        cardLetoSchelkovo = document.getElementById('card_leto_schelkovo'),
        truePromo = "ТЕЛО2021",
        body = document.querySelector('body');

    body.addEventListener('click', () => {
        if (cardLetoMozaika.checked && promoInput.value !== truePromo) {
            if (oneMonth.checked) priceTotal.innerHTML = 1999;
            else if (sixMonth.checked) priceTotal.innerHTML = 9900;
            else if (nineMonth.checked) priceTotal.innerHTML = 13900;
            else if (twelveMonth.checked) priceTotal.innerHTML = 19900;
        }   else if (cardLetoSchelkovo.checked && promoInput.value !== truePromo) {
            if (oneMonth.checked) priceTotal.innerHTML = 2999;
            else if (sixMonth.checked) priceTotal.innerHTML = 14990;
            else if (nineMonth.checked) priceTotal.innerHTML = 21990;
            else if (twelveMonth.checked) priceTotal.innerHTML = 24990;
        }   else if (cardLetoMozaika.checked && promoInput.value === truePromo) {
            if (oneMonth.checked) priceTotal.innerHTML = Math.floor(1999 * 0.7);
            else if (sixMonth.checked) priceTotal.innerHTML = Math.floor(9900 * 0.7);
            else if (nineMonth.checked) priceTotal.innerHTML = Math.floor(13900 * 0.7);
            else if (twelveMonth.checked) priceTotal.innerHTML = Math.floor(19900 * 0.7);
        }   else if (cardLetoSchelkovo.checked && promoInput.value === truePromo) {
            if (oneMonth.checked) priceTotal.innerHTML = Math.floor(2999 * 0.7);
            else if (sixMonth.checked) priceTotal.innerHTML = Math.floor(14990 * 0.7);
            else if (nineMonth.checked) priceTotal.innerHTML = Math.floor(21990 * 0.7);
            else if (twelveMonth.checked) priceTotal.innerHTML = Math.floor(24990 * 0.7);
        }
    });

    promoInput.addEventListener('input', () => {
        if (promoInput === truePromo) {
            if (cardLetoSchelkovo.checked) {
                if (oneMonth.checked) priceTotal.innerHTML = Math.floor(2999 * 0.7);
                else if (sixMonth.checked) priceTotal.innerHTML = Math.floor(14990 * 0.7);
                else if (nineMonth.checked) priceTotal.innerHTML = Math.floor(21990 * 0.7);
                else if (twelveMonth.checked) priceTotal.innerHTML = Math.floor(24990 * 0.7);
            }   else if (cardLetoMozaika.checked) {
                if (oneMonth.checked) priceTotal.innerHTML = Math.floor(1999 * 0.7);
                else if (sixMonth.checked) priceTotal.innerHTML = Math.floor(9900 * 0.7);
                else if (nineMonth.checked) priceTotal.innerHTML = Math.floor(13900 * 0.7);
                else if (twelveMonth.checked) priceTotal.innerHTML = Math.floor(19900 * 0.7);
            }
        }   else if (promoInput !== truePromo) {
            if (cardLetoMozaika.checked) {
                if (oneMonth.checked) priceTotal.innerHTML = 1999;
                else if (sixMonth.checked) priceTotal.innerHTML = 9900;
                else if (nineMonth.checked) priceTotal.innerHTML = 13900;
                else if (twelveMonth.checked) priceTotal.innerHTML = 19900;
            }   else if (cardLetoSchelkovo.checked) {
                if (oneMonth.checked) priceTotal.innerHTML = 2999;
                else if (sixMonth.checked) priceTotal.innerHTML = 14990;
                else if (nineMonth.checked) priceTotal.innerHTML = 21990;
                else if (twelveMonth.checked) priceTotal.innerHTML = 24990;
            }
        }
    });

};

export default calculator;
