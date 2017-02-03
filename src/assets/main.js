let answer = document.getElementById('answer');
let attempt = document.getElementById('attempt');

function guess() {
    let input = document.getElementById('user-guess');
    if(attempt.value == '' || answer.value == '') {
      setHiddenFields();
    }

    if(validateInput(input.value)) {
      attempt.value++;
    } else {
      return false;
    }

    if(getResults(input)) {
      setMessage("You Win! :)");
    } else if(attempt.value >= 10) {
      setMessage("You Lose! :(");
    } else {
      setMessage("Incorrect, try again.");
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

function getResults(input) {
  var html = '<div class="row"><span class="col-md-6">' + input + '</span><div class="col-md-6">';
  for ( i = 0 ; i < input.length; i++) {
    if (input.charAt(i) == answer.value.charAt(i)) {
      html += '<span class="glyphicon glyphicon-ok"></span>'
      numbersCorrect++;
    } else if (answer.value.indexOf(input.charAt(i))) {
      html += '<span class="glyphicon glyphicon-transfer"></span>'
    } else {
      html += '<span class="glyphicon glyphicon-remove"></span>'
    }
  }
  html += '</div></div>';
  document.getElementById('results').innerHTML += html;
  if(input == answer.value) {
    return true;
  }
  return false;
}

function showAnswer() {

}
