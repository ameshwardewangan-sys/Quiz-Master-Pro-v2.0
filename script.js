/* ==========================================================
   Quiz Master Pro v2.0
   script.js
   Part 1
========================================================== */

"use strict";

/* -----------------------------
   Elements
------------------------------ */

const screens = document.querySelectorAll(".screen");

const splashScreen = document.getElementById("splashScreen");
const homeScreen = document.getElementById("homeScreen");
const quizScreen = document.getElementById("quizScreen");
const resultScreen = document.getElementById("resultScreen");
const leaderboardScreen = document.getElementById("leaderboardScreen");

const loaderFill = document.getElementById("loaderFill");

const playNowBtn = document.getElementById("playNowBtn");
const leaderboardBtn = document.getElementById("leaderboardBtn");

const backHomeBtn = document.getElementById("backHomeBtn");
const leaderboardBackBtn = document.getElementById("leaderboardBackBtn");

const playAgainBtn = document.getElementById("playAgainBtn");
const goHomeBtn = document.getElementById("goHomeBtn");

const themeBtn = document.getElementById("themeBtn");

const questionText = document.getElementById("questionText");
const questionCategory = document.getElementById("questionCategory");

const answerContainer = document.getElementById("answerContainer");

const nextQuestionBtn = document.getElementById("nextQuestionBtn");

const timer = document.getElementById("timer");

const progressFill = document.getElementById("progressFill");
const questionNumber = document.getElementById("questionNumber");
const totalQuestions = document.getElementById("totalQuestions");

const finalScore = document.getElementById("finalScore");
const correctAnswers = document.getElementById("correctAnswers");
const wrongAnswers = document.getElementById("wrongAnswers");
const earnedCoins = document.getElementById("earnedCoins");
const resultMessage = document.getElementById("resultMessage");
const resultEmoji = document.getElementById("resultEmoji");

const bestScore = document.getElementById("bestScore");
const totalCoins = document.getElementById("totalCoins");
const playedCount = document.getElementById("playedCount");
const winRate = document.getElementById("winRate");

const toast = document.getElementById("toast");

/* -----------------------------
   Variables
------------------------------ */

let currentCategory = "general";

let currentQuestion = 0;

let score = 0;

let wrong = 0;

let coins = Number(localStorage.getItem("coins")) || 0;

let best = Number(localStorage.getItem("best")) || 0;

let played = Number(localStorage.getItem("played")) || 0;

let timerValue = 30;

let timerInterval = null;

let selectedQuestions = [];

let answered = false;

/* -----------------------------
   Utilities
------------------------------ */

function showScreen(screen){

    screens.forEach(s=>{

        s.classList.remove("active");

    });

    screen.classList.add("active");

}

function saveData(){

    localStorage.setItem("coins",coins);
    localStorage.setItem("best",best);
    localStorage.setItem("played",played);

}

function updateHomeStats(){

    bestScore.textContent=best;
    totalCoins.textContent=coins;
    playedCount.textContent=played;

    let rate=0;

    if(played>0){

        rate=Math.round((best/10)*10);

    }

    winRate.textContent=rate+"%";

      }
/* ==========================================================
   Quiz Master Pro v2.0
   script.js
   Part 2
========================================================== */

/* -----------------------------
   Splash Screen
------------------------------ */

window.addEventListener("load",()=>{

    let progress = 0;

    const loader = setInterval(()=>{

        progress += 2;

        loaderFill.style.width = progress + "%";

        if(progress >= 100){

            clearInterval(loader);

            updateHomeStats();

            showScreen(homeScreen);

        }

    },40);

});


/* -----------------------------
   Category Selection
------------------------------ */

document.querySelectorAll(".category-card").forEach(card=>{

    card.addEventListener("click",()=>{

        currentCategory = card.dataset.category;

        startQuiz(currentCategory);

    });

});


playNowBtn.addEventListener("click",()=>{

    startQuiz(currentCategory);

});


/* -----------------------------
   Quiz Start
------------------------------ */

function startQuiz(category){

    score = 0;

    wrong = 0;

    currentQuestion = 0;

    answered = false;

    timerValue = 30;

    if(typeof QUESTIONS !== "undefined"){

        if(category==="mixed"){

            selectedQuestions = [...QUESTIONS]
            .sort(()=>Math.random()-0.5)
            .slice(0,10);

        }else{

            selectedQuestions = QUESTIONS
            .filter(q=>q.category===category)
            .sort(()=>Math.random()-0.5)
            .slice(0,10);

        }

    }else{

        selectedQuestions=[];

    }

    totalQuestions.textContent = selectedQuestions.length;

    showScreen(quizScreen);

    loadQuestion();

}


/* -----------------------------
   Load Question
------------------------------ */

function loadQuestion(){

    clearInterval(timerInterval);

    answered = false;

    nextQuestionBtn.style.display="none";

    const q = selectedQuestions[currentQuestion];

    if(!q){

        finishQuiz();
        return;
    }

    questionNumber.textContent = currentQuestion + 1;

    progressFill.style.width =
    ((currentQuestion)/
    selectedQuestions.length)*100+"%";

    questionCategory.textContent=q.category;

    questionText.textContent=q.question;

    answerContainer.innerHTML="";

    q.options.forEach((option,index)=>{

        const btn=document.createElement("button");

        btn.className="answer-btn";

        btn.textContent=option;

        btn.onclick=()=>checkAnswer(index,btn);

        answerContainer.appendChild(btn);

    });

    startTimer();

}
/* ==========================================================
   Quiz Master Pro v2.0
   script.js
   Part 3
========================================================== */

/* -----------------------------
   Timer
------------------------------ */

function startTimer(){

    timerValue = 30;

    timer.textContent = timerValue;

    timerInterval = setInterval(()=>{

        timerValue--;

        timer.textContent = timerValue;

        if(timerValue <= 0){

            clearInterval(timerInterval);

            if(!answered){

                wrong++;

                revealAnswer(-1);

            }

        }

    },1000);

}


/* -----------------------------
   Check Answer
------------------------------ */

function checkAnswer(index,button){

    if(answered) return;

    answered = true;

    clearInterval(timerInterval);

    const q = selectedQuestions[currentQuestion];

    if(index === q.answer){

        score++;

        coins += 5;

        button.classList.add("correct");

    }else{

        wrong++;

        button.classList.add("wrong");

    }

    revealAnswer(index);

}


/* -----------------------------
   Reveal Correct Answer
------------------------------ */

function revealAnswer(selected){

    const q = selectedQuestions[currentQuestion];

    [...answerContainer.children].forEach((btn,i)=>{

        btn.disabled = true;

        if(i === q.answer){

            btn.classList.add("correct");

        }

    });

    nextQuestionBtn.style.display = "block";

}


/* -----------------------------
   Next Question
------------------------------ */

nextQuestionBtn.addEventListener("click",()=>{

    currentQuestion++;

    loadQuestion();

});
/* ==========================================================
   Quiz Master Pro v2.0
   script.js
   Part 4 (Final)
========================================================== */

/* -----------------------------
   Finish Quiz
------------------------------ */

function finishQuiz(){

    clearInterval(timerInterval);

    played++;

    if(score > best){

        best = score;

    }

    saveData();

    updateHomeStats();

    finalScore.textContent = `${score} / ${selectedQuestions.length}`;

    correctAnswers.textContent = score;

    wrongAnswers.textContent = wrong;

    earnedCoins.textContent = "+" + (score * 5);

    progressFill.style.width = "100%";

    if(score >= 9){

        resultEmoji.textContent = "🏆";
        resultMessage.textContent = "Outstanding Performance!";

    }else if(score >= 7){

        resultEmoji.textContent = "🎉";
        resultMessage.textContent = "Excellent Job!";

    }else if(score >= 5){

        resultEmoji.textContent = "👏";
        resultMessage.textContent = "Good Work!";

    }else{

        resultEmoji.textContent = "💪";
        resultMessage.textContent = "Keep Practicing!";

    }

    showScreen(resultScreen);

}


/* -----------------------------
   Navigation Buttons
------------------------------ */

playAgainBtn.addEventListener("click",()=>{

    startQuiz(currentCategory);

});

goHomeBtn.addEventListener("click",()=>{

    updateHomeStats();

    showScreen(homeScreen);

});

backHomeBtn.addEventListener("click",()=>{

    clearInterval(timerInterval);

    showScreen(homeScreen);

});

leaderboardBtn.addEventListener("click",()=>{

    showLeaderboard();

});

leaderboardBackBtn.addEventListener("click",()=>{

    showScreen(homeScreen);

});


/* -----------------------------
   Theme
------------------------------ */

themeBtn.addEventListener("click",()=>{

    document.body.classList.toggle("dark");

    themeBtn.textContent =
    document.body.classList.contains("dark")
    ? "☀️"
    : "🌙";

});


/* -----------------------------
   Leaderboard
------------------------------ */

function showLeaderboard(){

    const list = document.getElementById("leaderboardList");

    list.innerHTML = "";

    const data = [

        {name:"You",score:best},
        {name:"Player A",score:9},
        {name:"Player B",score:8},
        {name:"Player C",score:7},
        {name:"Player D",score:6}

    ];

    data.forEach((item,index)=>{

        const div = document.createElement("div");

        div.className = "leaderboard-item";

        div.innerHTML = `
            <strong>#${index+1} ${item.name}</strong>
            <span>${item.score}/10</span>
        `;

        list.appendChild(div);

    });

    showScreen(leaderboardScreen);

}


/* -----------------------------
   Toast
------------------------------ */

function showToast(message){

    toast.textContent = message;

    toast.classList.add("show");

    setTimeout(()=>{

        toast.classList.remove("show");

    },2000);

}


/* -----------------------------
   Initialize
------------------------------ */

updateHomeStats();
