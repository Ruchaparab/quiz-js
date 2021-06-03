const correctAnswers = ['B', 'A', 'B', 'A'];
const form = document.querySelector('.quiz-form');
const result = document.querySelector('.result');

form.addEventListener('submit', (e) => {
    e.preventDefault();

    let score = 0;
    let userAnswers = [form.q1.value, form.q2.value, form.q3.value, form.q4.value];

    userAnswers.forEach((answer,index) => {
        if(answer === correctAnswers[index]){
            score += 25
        }
    });

    if(score > 0){
        scrollTo(0,0);
        result.classList.remove('d-none');

        let output = 0;
        const timer = setInterval(() => {
            result.querySelector('span.score').textContent = `${output}%`;
            if(output === score){
                clearInterval(timer);
                switch(true){
                    case (score == 100): 
                        result.querySelector('span.grade').textContent = "Congratulations!!"; 
                        break;
                    case (score >= 50): 
                        result.querySelector('span.grade').textContent = "Good job.";
                        break;
                    default: 
                        result.querySelector('span.grade').textContent = "Please try again";
                };
            } else {
                output++;
            }
        });
    }
});