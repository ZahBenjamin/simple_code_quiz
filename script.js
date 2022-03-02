const startEl = document.querySelector('#start');
const gameEl = document.querySelector('#game');
const endEl = document.querySelector('#end');
const questionsEl = document.querySelector('#questions');

const beginBtn = document.querySelector('#begin');
const initialsInput = document.querySelector('#initials');

var cursor = 0;
var score = 100;

const questions = [
  {
    text: "How much wood could a woodchuck chuck?",
    options: [
      "Answer 1",
      "Answer 2",
      "Answer 3",
      "Answer 4",
    ],
    correct: 2
  },
  {
    text: "How's your day going?",
    options: [
      "Answer 5",
      "Answer 6",
      "Answer 7",
      "Answer 8",
    ],
    correct: 3
  },
  {
    text: "Do you like to draw pictures?",
    options: [
      "Answer 9",
      "Answer 10",
      "Answer 11",
      "Answer 12",
    ],
    correct: 0
  }
];



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
}

function renderQuestion() {
  const question = questions[cursor];
 

  for (var i = 0; i < question.options.length; i++) {
    var item = question.options[i];
    var answerBtn = document.createElement('button');
    answerBtn.textContent = i + 1 + ". " + item;
    questionsEl.appendChild(answerBtn);
  }
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
endEl.addEventListener('submit', handleInitialSubmit);

init();