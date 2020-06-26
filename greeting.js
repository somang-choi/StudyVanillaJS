const form = document.querySelector(".js-form"),
input = form.querySelector("input"),
greeting = document.querySelector(".js-greetings");

const USER_LOCAL_STORAGE = "currentUser",
SHOWING_CLASS_NAME = "showing";

function saveName(text) {
  localStorage.setItem(USER_LOCAL_STORAGE, text);
}

function handleSubmit(event) {
  event.preventDefault();
  const currentValue = input.value;
  paintGreeting(currentValue);
  saveName(currentValue);
}

function showForm() {
  form.classList.add(SHOWING_CLASS_NAME);
}

function hideForm() {
  form.classList.remove(SHOWING_CLASS_NAME);
}

function askForName() {
  showForm();
  form.addEventListener("submit", handleSubmit);
}

function paintGreeting(text) {
  hideForm();
  greeting.classList.add(SHOWING_CLASS_NAME);
  greeting.innerText = `Hello ${text}`;
}

function loadName() {
  const currentUser = localStorage.getItem(USER_LOCAL_STORAGE);
  if (currentUser === null) askForName();
  else paintGreeting(currentUser);
}

function init() {
  loadName();
}

init();