function Form(){

    const arrows = document.querySelectorAll('div i.arr');
    arrows.forEach(arrow => {
        arrow.addEventListener('click', () => {
            const input = arrow.previousElementSibling;
            const parent = arrow.parentElement;
            const next = parent.nextElementSibling;
            if(input.type === 'text' && validateFormUser(input)){
              nextSlide(parent,next);
            }
            else if(input.type === 'email' && validateEmail(input)){
                nextSlide(parent,next);
            }

            else if(input.type === 'password' && validateFormPassword(input)){
                nextSlide(parent,next);
            }
            else{
                parent.style.animation = 'shake 0.5s ease';
            }

            //remove animation
            parent.addEventListener('animationend', () => {
                parent.style.animation = '';
            })
            
        });
    });

}

Form();

function validateFormUser(user){
    if(user.value.length<6){
         document.body.style.backgroundColor = '#c0392b';
         document.getElementById('user-message').innerHTML = 'Username should be 6 characters long';
         }
    else{
        document.body.style.backgroundColor = '#05c46b';
        return true;
    }
}
function validateFormPassword(password){
    if(password.value.length<6){
         document.body.style.backgroundColor = '#c0392b';
         document.getElementById('password-message').innerHTML = 'Password should be 6 characters long';
         }
    else{
        document.body.style.backgroundColor = '#05c46b';
        return true;
    }
}
function validateEmail(userEmail){
    const validFormat = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if(validFormat.test(userEmail.value)){
        document.body.style.backgroundColor = '#05c46b';
        return true;
    }
    else{
        document.body.style.backgroundColor = '#c0392b';
        document.getElementById('email-message').innerHTML = 'Please enter valid email format';

    }
}

function nextSlide(parent,next){
    parent.classList.add('inactive');
    parent.remove('active');
    next.classList.add('active')
}





