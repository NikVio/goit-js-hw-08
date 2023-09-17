import throttle  from 'lodash.throttle';

const form = document.querySelector('.feedback-form');


form.addEventListener('input', throttle(onInputForm, 500));
form.addEventListener('submit', onSubmitForm);

const FORM_KEY = "feedback-form-state";

const formData = JSON.parse(localStorage.getItem(FORM_KEY)) || {};

checkForm();

function onInputForm(evt) {
    formData[evt.target.name] = evt.target.value;
  
    
    localStorage.setItem(FORM_KEY, JSON.stringify(formData));
}

function checkForm() {
    const { email, message } = form.elements;
     if (formData) {
         email.value = formData.email || "";
         message.value = formData.message || "";
     }
}

function onSubmitForm(evt) {
    evt.preventDefault();
    if (!(form.email.value) || !(form.message.value)) {
         alert('All fields must be filled out');
         return;
     };
     console.log(formData);
     evt.target.reset();
     localStorage.removeItem(FORM_KEY);
}

