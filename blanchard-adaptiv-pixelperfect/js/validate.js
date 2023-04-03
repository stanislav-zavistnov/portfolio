const phoneElement = document.querySelector(".input-tel");

const im = new Inputmask("+7(999) 999-99-99");
im.mask(phoneElement);

const validation = new window.JustValidate('.form', {
  errorFieldCssClass: 'is-invalid',
  errorFieldStyle: {
    border: '1px solid #D11616',
  },
  errorLabelCssClass: 'is-label-invalid',
  errorLabelStyle: {
    color: '#D11616',
  },
  focusInvalidField: true,
  lockForm: true,
});

validation
.addField('.input-name', [
  {
    rule: 'minLength',
    value: 2,
    errorMessage: 'Имя&nbspдолжно&nbspбыть&nbspдлинне&nbsp2-х&nbspбукв'
  },
  {
    rule: 'maxLength',
    value: 30,
    errorMessage: 'Сократите имя до 30 букв'
  },
  {
    rule: 'required',
    errorMessage: 'Как вас зовут?'
  }
])
.addField('.input-tel', [
  {
    validator: () => {
      const phone = phoneElement.inputmask.unmaskedvalue();
      const result = Number(phone) && phone.length === 10;
      return result === 0 ? false : result;
    },
    errorMessage: 'Укажите ваш телефон',
  }
]);
