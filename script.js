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

function init() {
  document.getElementById("question-length").innerHTML = questions.length; // Die länge vom JSON anzeigen.
  showQuestion(); // showQuestion() beim start aufrufen.
}

function showQuestion() {
  let question = questions[currentQuestion]; // Erste JSON holen.
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

  let idOfrightAnswer = `answer_${question["right_answer"]}`

  if (selectedChoice == question["right_answer"]) { // selectedChoice und question vergleichen
    console.log("richtige antwort");
    document.getElementById(selection).parentNode.classList.add('bg-success')
  } else {
    console.log("falsche antwort");
    document.getElementById(selection).parentNode.classList.add('bg-danger')
    document.getElementById(idOfrightAnswer).parentNode.classList.add('bg-success')

  }
}
