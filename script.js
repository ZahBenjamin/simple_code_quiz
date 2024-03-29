const startEl = document.querySelector('#start');
const gameEl = document.querySelector('#game');
const endEl = document.querySelector('#end');
const questionsEl = document.querySelector('#questions');
const titleEl = document.querySelector('#title');
const scoreEl = document.querySelector('#score');
const endScoreEl = document.querySelector('#endScore');


const beginBtn = document.querySelector('#begin');
const initialsInput = document.querySelector('#initials');

var cursor = 0;
var seconds = 90;
var timer;

const questions = [
  {
    questionText: "What pets do I have?",
    options: [
      "Woof",
      "Meow Meow",
      "Chirp Chirp",
      "Oink Oink",
    ],
    correctAnswer: "Meow Meow"
  },
  {
    questionText: "Do I make the best creme brulee?",
    options: [
      "no",
      "no",
      "no",
      "yes",
    ],
    correctAnswer: "yes"
  },
  {
    questionText: "Is a hot dog a sandwich?",
    options: [
      "yes",
      "no",
      "no",
      "no",
    ],
    correctAnswer: "yes"
  }
];


// Screen displays || Render
function startScreen() {
  startEl.style.display = "block";
  gameEl.style.display = "none";
  endEl.style.display = "none";
}

function gameScreen() {
  startEl.style.display = "none";
  gameEl.style.display = "block";
  endEl.style.display = "none";
  renderQuestion();

  scoreEl.textContent = seconds;

  timer = setInterval(function () {
    seconds--;
    scoreEl.textContent = seconds;
    console.log("seconds", seconds);
    if (seconds < 0) {
      clearInterval(timer)
    }
  }, 1000);
};


function renderQuestion() {
  questionsEl.innerHTML = '';
  const question = questions[cursor];
  titleEl.textContent = question.questionText;
  question.options.forEach((item, i) => {
    var answerBtn = document.createElement('button');
    answerBtn.textContent = i + 1 + ". " + item;
    answerBtn.value = item;
    questionsEl.appendChild(answerBtn);
  })
}

function endScreen() {
  startEl.style.display = "none";
  gameEl.style.display = "none";
  endEl.style.display = "block";

  clearInterval(timer);
  endScoreEl.textContent = seconds;
}

// localStorage submission
function handleSubmit(event){
  event.preventDefault();

  let finalScore = endScoreEl.textContent;
  let initialsEl = document.querySelector('#initials');

  localStorage.setItem("finalScore", JSON.stringify(finalScore));
  localStorage.setItem("initials", JSON.stringify(initialsEl.value));
  seconds = 90;
  initialsEl.value = '';
};

function init() {
  startScreen();
}

// Event listener
beginBtn.addEventListener('click', gameScreen);
gameEl.addEventListener('click', function (event) {
  if (event.target.matches('button')) {
    var btnValue = event.target.value;
    var correctAnswer = questions[cursor].correctAnswer;
    if(btnValue !== correctAnswer){
      seconds -= 10;
    };
    if(seconds <= 0){
      endScreen();
    };
    cursor++;
    if (cursor < questions.length) {
      renderQuestion();
    } else {
      endScreen();
    };
  }
});

init();