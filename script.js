const startEl = document.querySelector('#start');
const gameEl = document.querySelector('#game');
const endEl = document.querySelector('#end');
const questionsEl = document.querySelector('#questions');
const titleEl = document.querySelector('#title');
const scoreEl = document.querySelector('#score');

const beginBtn = document.querySelector('#begin');
const initialsInput = document.querySelector('#initials');

var cursor = 0;
var score = 100;
var seconds = 90;

const questions = [
  {
    question: "What pets do I have",
    options: [
      "Woof",
      "Meow Meow",
      "Chirp Chirp",
      "Oink Oink",
    ],
    correctAnswer: 1
  },
  {
    question: "Do I make the best creme brulee?",
    options: [
      "no",
      "no",
      "no",
      "yes",
    ],
    correctAnswer: 3
  },
  {
    question: "Is a hot dog a sandwich",
    options: [
      "yes",
      "no",
      "no",
      "no",
    ],
    correctAnswer: 0
  }
];

// Question answering
// function showQuestions(questions, gameEl){
//   var output = [];
//   var options;

//   for(var i = 0; i < options.length; i++){
//     answers[];

//   }

// }

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

  // TODO Display timer
  scoreEl.textContent = seconds;
  var timer = setInterval(function () {
    seconds--;
    scoreEl.textContent = seconds;
    titleEl.textContent = questions.text;
    console.log("seconds", seconds);
    if (seconds < 0) {
      clearInterval(timer)
    }
  }, 1000);
};

function renderQuestion() {
  const question = questions[cursor];
  questionsEl.innerHTML = '';
  question.options.forEach((item, i) => {
    var answerBtn = document.createElement('button');
    answerBtn.textContent = i + 1 + ". " + item;
    questionsEl.appendChild(answerBtn);
  })
}

function endScreen() {
  startEl.style.display = "none";
  gameEl.style.display = "none";
  endEl.style.display = "block";
}


function init() {
  startScreen();
}

beginBtn.addEventListener('click', gameScreen);
gameEl.addEventListener('click', function (event) {
  if (event.target.matches('button')) {
    console.log(event.target);
    cursor++;
    if (cursor < questions.length) {
      renderQuestion();
    } else {
      endScreen();
    }
  }
});

// TODO: handleInitialSubmit
//endEl.addEventListener('submit', handleInitialSubmit);

init();