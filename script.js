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
    answer_1: "Nile",
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
// let questionAmount = 0;
let rightQuestions = 0;

function init() {
  // Die Gesmate frage anzeigen
  document.getElementById("progress-bar").style.width = "0%";
  document.getElementById("question-length").innerHTML = questions.length;
  // showQuestion nach dem body geladen hat aufrufen.
  showQuestion();
}

function showQuestion() {
  let question = questions[currentQuestion]; // Erste JSON holen.

  if (currentQuestion >= questions.length) {
    document.getElementById("end-screen").style = "";
    document.getElementById("question-body").style = "display:none";

    // Fragenanzahl und richtige antworten anzahl und endscreen Bild anzeigen.
    document.getElementById("amountOfQuestions").innerHTML = questions.length;
    document.getElementById("amount-of-right-question").innerHTML =
      rightQuestions;
    document.getElementById("header-image").src = "img/trophy.jpg";
    document.getElementById("header-image").style = "height: 60vh";
    setpercentageBar(currentQuestion);
  } else {
    setpercentageBar(currentQuestion)
  }
}


function setpercentageBar(currentQuestion) {
  let question = questions[currentQuestion];
    let percent = (currentQuestion) / questions.length;
     percent = Math.round(percent * 100);
    console.log(percent);
    document.getElementById("progress-bar").innerHTML = `${percent}%`;
    document.getElementById("progress-bar").style = `width:${percent}%`;

    document.getElementById("question-amount").innerHTML = currentQuestion + 1;
    document.getElementById("questiontext").innerHTML = question["question"]; // Die frage anzeigen.
    document.getElementById("answer_1").innerHTML = question["answer_1"]; // Die Antworten anzeigen.
    document.getElementById("answer_2").innerHTML = question["answer_2"];
    document.getElementById("answer_3").innerHTML = question["answer_3"];
    document.getElementById("answer_4").innerHTML = question["answer_4"];
}


function answer(selection) {
  // selection param beinhaltet ('answer_1','answer_2','answer_3',..)
  let question = questions[currentQuestion]; // Erste JSON holen.
  console.log("selected answer is", selection); // je nachdem auf welcher antwort man clickt ausloggen lassen.
  let selectedChoice = selection.slice(-1); // von answer_1... der letzte string holen(bsp. 1,2,3..)
  console.log("selectedChoice", selectedChoice); // der letzte string ausgeben lassen.
  console.log("currentAnswer is", question["right_answer"]); // Auf der erste JSON zugreifen und auf right_answer.

  let idOfrightAnswer = `answer_${question["right_answer"]}`; // Id von jeweiligen answer holen.

  // Wenn selectedChoice und question anderstelle right_answer gleich sind den paren div die
  // klasse big success hinzufügen.
  if (selectedChoice == question["right_answer"]) {
    console.log("richtige antwort");
    document.getElementById(selection).parentNode.classList.add("bg-success");
    rightQuestions++;
  } else {
    // Wenn selectedChoice und question anderstelle right_answer nicht gleich sind den paren div die
    // klasse big danger hinzufügen und die richtige antwort anzeigen.
    console.log("falsche antwort");
    document.getElementById(selection).parentNode.classList.add("bg-danger");
    document
      .getElementById(idOfrightAnswer)
      .parentNode.classList.add("bg-success");
  }
  // Btn disable feature zurücksetzen.
  document.getElementById("next-button").disabled = false;
}

// Weitere JSON anzeigen.
function nextQuestion() {
  currentQuestion++; // currentQuestion um eins erhöhen.
  document.getElementById("next-button").disabled = true; // sobald die nächste frage erscheint der btn disablen.
  resetButtons(); // resetButtons() aufrufen.
  showQuestion(); // showQuestion() aufrufen.
}

function resetButtons() {
  // Die bg-danger und bg-success von der jeweiligen antworten entfernen entfernen.
  document.getElementById("answer_1").parentNode.classList.remove("bg-danger");
  document.getElementById("answer_1").parentNode.classList.remove("bg-success");
  document.getElementById("answer_2").parentNode.classList.remove("bg-danger");
  document.getElementById("answer_2").parentNode.classList.remove("bg-success");
  document.getElementById("answer_3").parentNode.classList.remove("bg-danger");
  document.getElementById("answer_3").parentNode.classList.remove("bg-success");
  document.getElementById("answer_4").parentNode.classList.remove("bg-danger");
  document.getElementById("answer_4").parentNode.classList.remove("bg-success");
}
