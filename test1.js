document.addEventListener('DOMContentLoaded', function(){
    const cont = document.querySelector('.container');
    const signupForm = document.querySelector('#signupForm');
    const emailInput = document.querySelector('#email');
    const emailError = document.getElementById("emailError");
    const successMessage = document.getElementById("successMessage");
    const button = document.getElementById('submit');
    
    // formula to check validity of email
    function isValidEmail(email) {
        const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
        return emailRegex.test(email);
    }
    //When the form submits
    button.addEventListener('click', function(event){
        if(isValidEmail(emailInput.value)){
            emailInput.classList.remove('invalid-input');
        } else {
            emailInput.classList.add('invalid-input');
            emailError.textContent = 'Valid email address required'; 
        }
    });
    signupForm.addEventListener('submit', function(event){
        if(isValidEmail(emailInput.value)){
            emailError.textContent = '';
            showSuccessMessage();
            event.preventDefault();
        } else {
            event.preventDefault();
            emailError.style.display='flex';
            emailError.textContent = 'Valid email address required';
        }
    });
    
    // function to display success message
    function showSuccessMessage(){
        document.getElementById('half').innerText += emailInput.value;
        emailInput.style.fontWeight='bold';
        cont.style.display='none'
        successMessage.style.display = 'flex';
    }
    
});
