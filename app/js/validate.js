$(function () {
   $('#form-payment').on('submit', e => {
       e.preventDefault();

       let isValidate = true;
       const allInputs = $('.form__input');
       const inputCardholder = $('.form__input-cardholder');
       const inputCvc = $('.form__input-cvc');

       //при не правильно заполненом поле
       const warning = (el, flag) => {
           el.css('borderColor', '#e44845');
           isValidate = flag;
       };

       //проверка всех полей на заполненность
       allInputs.each(function () {
           let el = $(this);

           if (!el.val()) {
               warning(el, false)
           }
       });

       //проверка номера карты на цифры и 4 символа
       $('.form__input-number').each(function () {
           let el = $(this);

           if ( el.val().length !== 4 || !( /^\d+$/.test(el.val()) ) ) {
               warning(el, false)
           }
       });

       //проверка поля держателя карты на 4 символа и цифры
       if ( !(inputCardholder.val().length) > 4 || !( /^[a-zA-F]+$/.test(inputCardholder.val()) ) ) {
           warning(inputCardholder, false)
       }

       //проверка cvc поля на 3 символа и цифры
       if ( inputCvc.val().length !== 3 || !( /^\d+$/.test(inputCvc.val()) ) ) {
           warning(inputCvc, false)
       }

       //если все правильно, то отправляем ajax запрос и еще можно вывести окно об отправлении
       if (isValidate) {
           allInputs.removeAttr('style');
           console.log('message send');
       }
   })
});