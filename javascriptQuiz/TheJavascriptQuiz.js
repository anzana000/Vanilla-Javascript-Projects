const correctAnswers = ['A','B','A','B'];
const form = document.querySelector('.quiz-form');
const result = document.querySelector('.result');
form.addEventListener('submit', e => {
    e.preventDefault();
    let score = 0;
    const usersAnswers = [form.q1.value,form.q2.value,form.q3.value,form.q4.value];

    usersAnswers.forEach((answers,index) => {
        if(answers === correctAnswers[index]){
            score += 25;
        }
        
    });

    let output = 0;
    const timer = setInterval(() => {
        result.querySelector('span').textContent = `${output}%`;
        if(output === score){
            clearInterval(timer);
        }
        else{
            output++;
        }

    },10)
    
    
    
    scrollTo(0,0);
   result.classList.remove('d-none');
});



