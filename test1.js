document.addEventListener('DOMContentLoaded', function(){
    const cont = document.querySelector('.container');
    const signupForm = document.querySelector('#signupForm');
    const emailInput = document.querySelector('#email');
    const emailError = document.getElementById("emailError");
    const successMessage = document.getElementById("successMessage");
    const button = document.querySelector('.btn')
    
    // formula to check validity of email
    function isValidEmail(email) {
        const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
        return emailRegex.test(email);
    }
    //When the form submits
    signupForm.addEventListener('submit', function(event){
        if(!isValidEmail(emailInput.value)){
            event.preventDefault();
            emailError.style.display='flex';
            emailError.textContent = 'Valid email address required';
            emailInput.style.color='#fe8376';
            emailInput.style.backgroundColor='#ffe8e6';
            emailInput.classList.add('invalid-input'); 
        } else {
            emailError.textContent = '';
            emailInput.classList.remove('invalid-input');
            showSuccessMessage();
            event.preventDefault();
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
