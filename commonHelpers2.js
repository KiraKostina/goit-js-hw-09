import"./assets/modulepreload-polyfill-3cfb730f.js";const e=document.querySelector(".feedback-form");e.addEventListener("input",n);function n(t){const a=e.elements.email.value.trim(),s=e.elements.message.value.trim(),l=JSON.stringify({email:a,message:s});localStorage.setItem("feedback-form-state",l)}const m=localStorage.getItem("feedback-form-state");if(m){const t=JSON.parse(m);e.elements.email.value=t.email,e.elements.message.value=t.message}e.addEventListener("submit",o);function o(t){t.preventDefault();const a=e.elements.email.value.trim(),s=e.elements.message.value.trim();if(a===""||s==="")return alert("All form fields must be filled in");localStorage.removeItem("feedback-form-state"),console.log({email:a,message:s}),e.reset()}
//# sourceMappingURL=commonHelpers2.js.map
