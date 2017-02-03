let answer = document.getElementById('answer');
let attempt = document.getElementById('attempt');

function guess() {
    let input = document.getElementById('user-guess');
    if(attempt.value == '' || answer.value == '') {
      setHiddenFields();
    }
    //add functionality to guess function here
}

//implement new functions here

function setHiddenFields() {
  answer.value = Math.floor(Math.random() * 9999).toString();
  while(answer.value.length < 4) {
    answer.value = "0" + answer.value.toString();
  }
  attempt.value = 0;
}

function setMessage (message) {
  document.getElementById('message').innerHTML = message;
}

function validateInput (input) {
  if(input.toString().length == 4) {
    return true;
  }
  setMessage("Guesses must be exactly 4 characters long.");
  return false;
}
