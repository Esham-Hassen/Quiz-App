let questions = [
  {
    question: "What is the second holiest city in Islam??",
    answer_1: "Mecca",
    answer_2: "Medina",
    answer_3: "Jurusalam",
    answer_4: "Bethelhem",
    right_answer: 2,
  },
  {
    question: "What is the name of the world’s longest river?",
    answer_1: "The Nile River",
    answer_2: "The Amazon River",
    answer_3: "The Mississippi River",
    answer_4: "The Yangtze River",
    right_answer: 1,
  },
  {
    question: "In which year World War I begin?",
    answer_1: "1918",
    answer_2: "1920",
    answer_3: "1919",
    answer_4: "1914",
    right_answer: 4,
  },
  {
    question: "What geometric shape is generally used for stop signs?",
    answer_1: "Octagon",
    answer_2: "Hexagon",
    answer_3: "Pentagon",
    answer_4: "Cube",
    right_answer: 1,
  },
  {
    question: "What is the largest mammal in the world?",
    answer_1: "Killer whale",
    answer_2: "White whale",
    answer_3: "Blue whale",
    answer_4: "White shark",
    right_answer: 3,
  },
  {
    question: "In what galaxy is our solar system located?",
    answer_1: "Andromeda Galaxy",
    answer_2: "Milky Way Galaxy",
    answer_3: "Virgo A",
    answer_4: "Magellanic Clouds",
    right_answer: 2,
  },
];

let currentQuestion = 0;
let rightQuestions = 0;
let Audio_success = new Audio("audio/success.mp3");
let Audio_fail = new Audio("audio/fail.mp3");

// QUIZ initializieren.
function init() {
  // Die länge der fragen festlegen.
  document.getElementById("question-length").innerHTML = questions.length;
  showQuestion();
}

function showQuestion() {
  let question = questions[currentQuestion]; // Erste JSON holen.

  // Wenn currentQuestion >= questions.length endscreen anzeigen.
  if (isGameOver()) {
    endscreen();

    updatePercentageBar(currentQuestion);
  } else {
    updatePercentageBar(currentQuestion);
    updateToNextQuestion(question);
  }
}

function isGameOver() {
  return currentQuestion >= questions.length;
}

function endscreen() {
  document.getElementById("end-screen").style = "";
  document.getElementById("question-body").style = "display:none";

  // Fragenanzahl und richtige antworten anzahl und endscreen Bild anzeigen.
  document.getElementById("amountOfQuestions").innerHTML = questions.length;
  document.getElementById("amount-of-right-question").innerHTML =
    rightQuestions++;
  document.getElementById("header-image").src = "img/trophy.jpg";
}

function updateToNextQuestion(question) {
  document.getElementById("question-amount").innerHTML = currentQuestion + 1;
  document.getElementById("questiontext").innerHTML = question["question"];
  document.getElementById("answer_1").innerHTML = question["answer_1"];
  document.getElementById("answer_2").innerHTML = question["answer_2"];
  document.getElementById("answer_3").innerHTML = question["answer_3"];
  document.getElementById("answer_4").innerHTML = question["answer_4"];
}

function updatePercentageBar(currentQuestion) {
  let percent = currentQuestion / questions.length;
  percent = Math.round(percent * 100);
  document.getElementById("progress-bar").innerHTML = `${percent}%`;
  document.getElementById("progress-bar").style = `width:${percent}%`;
}

// funktion um user antworten zu beobachten.
function answer(selection) {
  // Erste JSON holen.
  let question = questions[currentQuestion];
  // letzte index von selection hole.
  let selectedChoice = selection.slice(-1); // von answer_1... der letzte string holen(bsp. 1,2,3..)

  // Get the index of the correct answer
  console.log("currentAnswer is", question["right_answer"]);

  // Get the id of the correct answer element
  let idOfrightAnswer = `answer_${question["right_answer"]}`; // Id von jeweiligen answer holen.

  // Antworten vergleichen.
  if (rightAnswerSelected(selectedChoice)) {
    // Wenn richtig grün malen und richtige antwort erhöhen und success music spielen.
    document.getElementById(selection).parentNode.classList.add("bg-success");
    rightQuestions++;
    Audio_success.play();
  } else {
    // Wenn falsch rot malen, gleichzeitig richtige antwort anzeigen und fail music spielen.
    document.getElementById(selection).parentNode.classList.add("bg-danger");
    document
      .getElementById(idOfrightAnswer)
      .parentNode.classList.add("bg-success");
    Audio_fail.play();
  }
  // Btn disable feature zurücksetzen.
  document.getElementById("next-button").disabled = false;
}


function rightAnswerSelected(selectedChoice) {
  let question = questions[currentQuestion];
  return selectedChoice == question["right_answer"]
}

// Weitere JSON anzeigen.
function nextQuestion() {
  // currentQuestion um eins erhöhen.
  currentQuestion++;
  // sobald die nächste frage erscheint der btn disablen.
  document.getElementById("next-button").disabled = true;
  resetButtons();
  showQuestion();
};



function resetButtons() {
  // Die bg-danger und bg-success von der jeweiligen antworten entfernen.
  document.getElementById("answer_1").parentNode.classList.remove("bg-danger");
  document.getElementById("answer_1").parentNode.classList.remove("bg-success");
  document.getElementById("answer_2").parentNode.classList.remove("bg-danger");
  document.getElementById("answer_2").parentNode.classList.remove("bg-success");
  document.getElementById("answer_3").parentNode.classList.remove("bg-danger");
  document.getElementById("answer_3").parentNode.classList.remove("bg-success");
  document.getElementById("answer_4").parentNode.classList.remove("bg-danger");
  document.getElementById("answer_4").parentNode.classList.remove("bg-success");
}

// Game neue starten.
function restartGame() {
  // Endscreen verstcken und question body anzeigen.
  document.getElementById("header-image").src = "img/quiz.jpg";
  document.getElementById("end-screen").style = "display: none";
  document.getElementById("question-body").style = "";

  //  currentQuestion und rightQuestions auf null setzen und die function init() neu ausführen.
  currentQuestion = 0;
  rightQuestions = 0;
  init();
}

