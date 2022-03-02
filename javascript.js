var startEl = document.querySelector('#start');
var gameEl = document.querySelector('#game');
var endEl = document.querySelector('#end');
var questionsEl = document.querySelector('#questions');


var beginBtn = document.querySelector('#begin');
var initialsInput = document.querySelector('#initials');

var cursor = 0;
var score = 100;

var questions = [
  {
    text: "How much wood could a woodchuck chuck?",
    possible: [
      "Answer 1",
      "Answer 2",
      "Answer 3",
      "Answer 4",
    ],
    correct: 2
  },
  {
    text: "How's your day going?",
    possible: [
      "Answer 5",
      "Answer 6",
      "Answer 7",
      "Answer 8",
    ],
    correct: 3
  },
  {
    text: "Do you like to draw pictures?",
    possible: [
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
  var question = questions[cursor];
  questionsEl

  for (var i = 0; i < question.possible.length; i++) {
    var item = question.possible[i];
    var answerBtn = document.createElement('button');
    answerBtn.textContent = i + 1 + ". " + item;
    gameEl.appendChild(answerBtn);
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