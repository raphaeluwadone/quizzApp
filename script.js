const quizData = [
    {
        Question: "What is the rarest M&M color?",
        a:"Red",
        b:"Blue",
        c:"Brown",
        d:"Yellow",
        Answer: "c"
    },
    {
        Question: "In a website browser address bar, what does “www” stand for?",
        a:"win win win",
        b:"world wide window",
        c:"wide wild west",
        d:"World Wide Web",
        Answer: "d"
    },
    {
        Question: "In what year were the first Air Jordan sneakers released?",
        a:"1984",
        b:"1980",
        c:"1999",
        d:"1990",
        Answer: "a"
    },
    {
        Question: "In a game of bingo, which number is represented by the phrase 'two little ducks'?",
        a:"9",
        b:"10",
        c:"22",
        d:"20",
        Answer: "c"
    },
    {
        Question: "According to Greek mythology who was the first woman on earth?",
        a:"Pandora",
        b:"Euphrates",
        c:"Venus",
        d:"Nefatiti",
        Answer: "a"
    },
    {
        Question: "Samuel Tilden, Grover Cleveland, Al Gore and Hillary Clinton share what distinction among U.S. presidential candidates?",
        a:"They Were all from North-carolina",
        b:"They Were all Republicans",
        c:"They won the popular vote, but lost the electoral-college vote",
        d:"They Were all Democrats",
        Answer: "c"
    },
    {
        Question: "Which African country was formerly known as Abyssinia?",
        a:"Rwanda",
        b:"Seychelles",
        c:"Ethiopia",
        d:"Burundi",
        Answer: "c"
    },
    {
        Question: "Tennis star Serena Williams won which major tournament while pregnant with her first child?",
        a:"The olympics",
        b:"The Australian Open",
        c:"US Open",
        d:"French open",
        Answer: "b"
    }
]

const quiz = document.getElementById("quiz")
const questionEl = document.getElementById("question")
const a_text = document.getElementById("a_text")
const b_text = document.getElementById("b_text")
const c_text = document.getElementById("c_text")
const d_text = document.getElementById("d_text")
const submitBtn = document.getElementById("sub")
const answerEls = document.querySelectorAll(".answer")

let score = 0;
let currentQuiz = 0;
const loadData = () => {
    currentQuizData = quizData[currentQuiz]
    questionEl.innerHTML = currentQuizData.Question
    a_text.innerHTML = currentQuizData.a
    b_text.innerHTML = currentQuizData.b
    c_text.innerHTML = currentQuizData.c
    d_text.innerHTML = currentQuizData.d
    answerEls.checked == false;
}
const getValue = () => {
    answerEls.forEach(answerEl => {
        if (answerEl.checked) {
            let answer = answerEl.value
            if (answer == quizData[currentQuiz].Answer) {
                score++    
            }
            currentQuiz++
            if(currentQuiz < quizData.length){
                loadData()
                answerEl.checked = false
                
            }
            else{
                quiz.innerHTML = `<h3>You've come to the end of the assesment,<br/> with a score of ${score} out of ${quizData.length} questions <button onclick="location.reload()" class="reload">Reload</button></h3>`
                
            }
        }  
        else{
            return
        }
    });
}

loadData()
submitBtn.addEventListener("click", () => {
    getValue()
})