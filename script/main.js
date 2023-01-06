const email = document.getElementById("email");
const invalidWarning = document.getElementById('invalidEmail')
email.addEventListener('invalid', (event)=>{
    invalidWarning.className = "emailError";
    email.className = "emailNameError";

})


// function submitForm(e){
//     formMessage.submit();
//     sendOff.className="sendOff";
//     return false;
// }