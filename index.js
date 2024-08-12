// Accesăm butonul de submit, elementul tasks și elementul message
const submitButton = document.getElementById("btnSubmit");
const tasks = document.getElementById("tasks");
const message = document.getElementById("message");
const clearButton = document.getElementById("btnClear");

// Definim un mesaj de salut
const greetingMessage = "Good, you have no tasks today!";

// Adăugăm un event listener pentru butonul de submit
submitButton.addEventListener('click', addTask);
tasks.addEventListener("click", handleTaskClick);
clearButton.addEventListener("click", clearList);

// Mesaj inițial
displayMessage(greetingMessage);

// Funcția care șterge lista de taskuri
function clearList() {
    tasks.innerHTML = ""; // Șterge toate taskurile
    displayMessage(greetingMessage); // Afișează mesajul de salut
}

// Funcția care marchează un task ca fiind complet/incomplet
function handleTaskClick(event) {
    const style = event.target.style;
    if (!style.textDecoration) {
        style.textDecoration = "line-through";
    } else {
        style.textDecoration = "";
    }
}

// Funcția care adaugă un task nou în listă
function addTask() {
    const newTask = document.getElementById("newTask");
    if (inputIsValid(newTask.value)) {
        tasks.innerHTML += '<li class="list-group-item">' + newTask.value + '</li>';
        newTask.value = "";
        message.style.visibility = "hidden"; // Ascunde mesajul
    } else {
        displayMessage("Please provide non-empty input!");
    }
}

// Funcția care validează inputul
function inputIsValid(input) {
    return input.trim() !== ""; // Returnează direct rezultatul validării
}

// Funcția care afișează mesajul
function displayMessage(msg) {
    message.innerText = msg; // Folosim variabila 'message' pentru a seta textul
    message.style.visibility = "visible"; // Afișează mesajul
}