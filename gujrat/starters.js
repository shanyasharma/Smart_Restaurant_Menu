
document.addEventListener('DOMContentLoaded', function() {
    const minusBtns = document.querySelectorAll('.minus-btn');
    const plusBtns = document.querySelectorAll('.plus-btn');
    const qtyInputs = document.querySelectorAll('.qty-input');

    minusBtns.forEach((btn, index) => {
        btn.addEventListener('click', function() {
            const currentValue = parseInt(qtyInputs[index].value);
            if (currentValue > 0) {
                qtyInputs[index].value = currentValue - 1;
            }
        });
    });

    plusBtns.forEach((btn, index) => {
        btn.addEventListener('click', function() {
            const currentValue = parseInt(qtyInputs[index].value);
            qtyInputs[index].value = currentValue + 1;
        });
    });
});
document.addEventListener('DOMContentLoaded', function() {
    const heartBtns = document.querySelectorAll('.heart-btn');

    heartBtns.forEach(btn => {
        btn.addEventListener('click', function() {
            this.classList.toggle('active');
        });
    });
});
