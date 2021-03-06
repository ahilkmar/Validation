var nameError = document.getElementById('name-error');
var phoneError = document.getElementById('phone-error');
var emailError = document.getElementById('email-error');
var messageError = document.getElementById('message-error');
var submitError = document.getElementById('submit-error');

function validateName()
{
    var name = document.getElementById('contact-name').value;
    if(name.length ==0)
    {
        nameError.innerHTML = 'Name is required';
        return false;
    }
    if(!name.match(/^[a-zA-Z]+ [a-zA-Z]+$/))
    {
        nameError.innerHTML = 'Write full name';
        return false;
    }
    nameError.innerHTML ='<i class="fas fa-check-circle"></i>';
    return true
}

function validatePhone()
{
    var phone = document.getElementById('contact-phone').value;

    if(phone.length == 0)
    {
        phoneError.innerHTML = 'phone no is require';
         return false;
    }
    if(phone.length !== 10)
    {
        phoneError.innerHTML = '10 digit require';
        return false;
    }
    if(!phone.match(/^[0-9]{10}$/))
    {
        phoneError.innerHTML = 'Valid phone number needed';
        return false
    }
    phoneError.innerHTML = '<i class="fas fa-check-circle"></i>';
    return true

}

function validateEmail()
{
    var email = document.getElementById('contact-email').value;
    if(email.length == 0)
    {
        emailError.innerHTML = 'Email is require';
         return false;
    }
    if(!email.match(/^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/))
    {
        emailError.innerHTML = 'enter valid enail';
        return false;
    }
    emailError.innerHTML = '<i class="fas fa-check-circle"></i>';
    return true
}

function validateMessage()
{
    var message = document.getElementById('contact-message').value;
    var require=30;
    var left = require - message.length;
    if(left>0)
    {
        messageError.innerHTML = left + 'more characters require';
        return false;
    }

   messageError.innerHTML = '<i class="fas fa-check-circle"></i>';
    return true
}

function validateForm()
{
    if(!validateName() ||!validatePhone() || !validateEmail() || !validateMessage )
    {
        submitError.style.display = 'block';
        submitError.innerHTML = ' Fix errors for submit';
        setTimeout(function(){submitError.style.display =' none'}, 3000);
        return false;
    }
}
