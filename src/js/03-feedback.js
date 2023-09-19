import throttle  from 'lodash.throttle';

let formData = {};
const LS = localStorage;

const form = document.querySelector('.feedback-form');


form.addEventListener('input', throttle(onInputForm, 500));
form.addEventListener('submit', onSubmitForm);

const FORM_KEY = "feedback-form-state";

checkForm();

function onInputForm(evt) {
    formData[evt.target.name] = evt.target.value;
    LS.setItem(FORM_KEY, JSON.stringify(formData));
 
}
 
function checkForm() {
    if (LS.getItem(FORM_KEY)) {
    formData = JSON.parse(LS.getItem(FORM_KEY))
    
    for (let key in formData) {
        form.elements[key].value = formData[key];
    }

  
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
    formData = {};
}

