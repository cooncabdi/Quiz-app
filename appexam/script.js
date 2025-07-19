const questions =[
    {
        question: "what is callback function?",
        answers:[
        
        { Text: "used iniside an async function", correct: false},
        { Text: "is a function passed as an aegument to another function", correct: true},
        { Text: "improved readability", correct: false},
        { Text: "it,s all right", correct: false},

        ]
    },
    {
         question: "what is oop?",
        answers:[
        
        { Text: "is defined as programing paradigm", correct: true},
        { Text: "defined class", correct: false},
        { Text: "defined object", correct: false},
        { Text: "programing is used troubleshooting ", correct: false},

        ]
    },
    {
         question: "what is javascript?",
        answers:[
        
        { Text: "function that remembers and has access to its lexical", correct: false},
        { Text: "block of code depending on different cases", correct: false},
        { Text: "lightweight progamming language used to to make web page", correct: true},
        { Text: "intaba", correct: false},

        ]
    },
    {
         question: "what is constructor?",
        answers:[
        
        { Text: "progaramin language", correct: false},
        { Text: "provide a more structured and object", correct: false},
        { Text: "is a special function or method used to create and initialize an object", correct: true},
        { Text: "it,s all wrong", correct: false},

        ]
    }
    
];

const questionElememt = document.getElementById("question");
const answerButton = document.getElementById("answer-buttons");
const nextButton = document.getElementById("next-btn");

let currentQuestionindex = 0;
let score = 0;

function startQuiz(){
    currentQuestionindex = 0;
    score = 0;
    nextButton.innerHTML = "Next";
    showQuestion();
}

function showQuestion(){
    resetState();
    let currentQuestion = questions[currentQuestionindex];
    let questionNo = currentQuestionindex + 1;
    questionElememt.innerHTML = questionNo + "." + currentQuestion.question;

    currentQuestion.answers.forEach(answer => {
        const button = document.createElement("button");
        button.innerHTML =answer.Text;
        button.classList.add("btn");
        answerButton.appendChild(button);
        if(answer.correct){
            button.dataset.correct = answer.correct;
        }
        button.addEventListener("click", selectAnswer);
    });
}

function resetState(){
    nextButton.style.display = "none";
    while(answerButton.firstChild){
        answerButton.removeChild(answerButton.firstChild);
    }
}

function selectAnswer(e){
    const selectedBtn = e.target;
    const isCorrect = selectedBtn.dataset.correct === "true";
    if(isCorrect){
        selectedBtn.classList.add("correct");
        score++;
    }else{
        selectedBtn.classList.add("incorrect");
    }
    Array.from(answerButton.children).forEach(button => {
        if(button.dataset.correct === "true"){
            button.classList.add("correct");
        }
        button.disabled = true;
    });
    nextButton.style.display = "block";
}

function showScore(){
    resetState();
    questionElement.innerHTML = 'you scored ${score} out of ${questions.length}';
    nextButton.innerHTML = "play Again";
    nextButton.style.display = "block";
}

function  handleNextButton(){
    currentQuestionindex++;
    if(currentQuestionindex <questions.length){
        showQuestion();
    }else{
        showScore();
    }
}

nextButton.addEventListener("click", ()=>{
    if(currentQuestionindex < questions.length){
        handleNextButton();
    }else{
        startQuiz();
    }
});

startQuiz();