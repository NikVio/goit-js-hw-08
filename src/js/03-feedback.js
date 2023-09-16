import throttle  from 'lodash.throttle';

const form = document.querySelector('.feedback-form');


form.addEventListener('input', throttle(onFormInput, 500));

form.addEventListener('submit', onBtnSubmit)



let FORM_KEY = "feedback-form-state";
const parse = JSON.parse(localStorage.getItem(FORM_KEY)) || [];


checkForm();



function onFormInput(evt) {
   
    // const { email, message } = form.elements;
    
    //     const data = {
    //      mail: email.value,
    //      message: message.value,
    //     };
    
    parse[evt.target.name] = evt.target.value;
       localStorage.setItem(FORM_KEY, JSON.stringify(parse));   
}



function onBtnSubmit(evt) {
    evt.preventDefault();
    
    
    
  if (!(form.email.value) || !(form.message.value)) {
      alert('All fields must be filled out');
      return
  }
     
//   const { email, message } = form.elements;
    
//         const data = {
//          mail: email.value,
//          message: message.value,
//         };
    
    
//   console.log(data);
    
    localStorage.removeItem(FORM_KEY);
    evt.target.reset();

    
}

function checkForm() {
    const { email, message } = form.elements;
    if (parse) {
        email.value = parse.email;
        message.value = parse.message;
    }

}








