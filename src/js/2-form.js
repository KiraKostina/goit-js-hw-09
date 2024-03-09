const form = document.querySelector('.feedback-form');
    
form.addEventListener("input", handlerInput);
function handlerInput(event) {
   const email = form.elements.email.value.trim();
const message = form.elements.message.value.trim();
    const data = JSON.stringify({ email, message});
    localStorage.setItem("feedback-form-state", data);
}
 
const savedData = localStorage.getItem("feedback-form-state");
if (savedData) {
    const info = JSON.parse(savedData);
form.elements.email.value = info.email;
form.elements.message.value = info.message;
}




form.addEventListener('submit', handlerSubmit);
function handlerSubmit(event) {
    event.preventDefault();

    const email = form.elements.email.value.trim();
    const message = form.elements.message.value.trim();

    if (email === "" || message === "") {
        return alert("All form fields must be filled in");
    }

    localStorage.removeItem("feedback-form-state");
    console.log({email, message});

form.reset();
 }