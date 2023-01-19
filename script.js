const quizData = [
    {
        question : 'Which is the capital of India?',
        a : 'Delhi',
        b : 'Bengaluru',
        c : 'Mumbai',
        d : 'Hyderabad',
        correct : 'a'
    },
    {
        question : 'Which is the IT capital of India?',
        a : 'Delhi',
        b : 'Hyderabad',
        c : 'Mumbai',
        d : 'Bengaluru',
        correct : 'd'
    },
    {
        question : 'Where is Stone Chariot located?',
        a : 'Chikmagluru',
        b : 'Hampi',
        c : 'Agra',
        d : 'Hyderabad',
        correct : 'b'
    },
    {
        question : 'Which is the financial capital of India?',
        a : 'Delhi',
        b : 'Bengaluru',
        c : 'Mumbai',
        d : 'Hyderabad',
        correct : 'c'
    },
    {
        question : 'Who is the PM of India?',
        a : 'Amit Shah',
        b : 'Arvind Kejriwal',
        c : 'Rajnath Singh',
        d : 'Narendra Modi',
        correct : 'd'
    }
];

const a_text = document.getElementById('a_text');
const b_text = document.getElementById('b_text');
const c_text = document.getElementById('c_text');
const d_text = document.getElementById('d_text');
const questionEl = document.getElementById('question');
const submitBtn = document.getElementById('submitBtn');
const answerEls = document.querySelectorAll('.answers');

let initialQuestion = 0;
let score = 0;
loadQuiz();

function loadQuiz(){
    deSelectAnswers();
    let currentQuestion = quizData[initialQuestion];
    questionEl.innerHTML = currentQuestion.question;
    a_text.innerText = currentQuestion.a; 
    b_text.innerText = currentQuestion.b;
    c_text.innerText = currentQuestion.c;
    d_text.innerText = currentQuestion.d;
    
}

function getSelected(){
    
    let answer = undefined;
    answerEls.forEach(answerEl=>{
        if(answerEl.checked){
            answer =  answerEl.id;
            
        }
    });
    return answer;
}

function deSelectAnswers(){
    answerEls.forEach(answerEl=>{
        answerEl.checked = false;
    });
}
submitBtn.addEventListener('click',()=>
{
    
    
    const answer = getSelected();
    if(answer)
{
    if(answer === quizData[initialQuestion].correct)
    {
        score++;
    }
    initialQuestion++;
    if(initialQuestion < quizData.length)
    {
        loadQuiz();
    }
    else{
        alert(`Quiz Finished ! You answered ${score} out of ${quizData.length} correctly`);
        initialQuestion = 0;
        loadQuiz();
    }
}
    
});
