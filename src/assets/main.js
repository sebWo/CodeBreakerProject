let answer = document.getElementById('answer');
let attempt = document.getElementById('attempt');

function guess() {
    let input = document.getElementById('user-guess');
    if(attempt.value == "" || answer.value == "") {
      setHiddenFields();
    }
    //add functionality to guess function here
}

//implement new functions here

function setHiddenFields() {
  answer.value = Math.floor(Math.random() * 9999);
  attempt.value = 0;
  while(answer.value.toString.length < 4) {
    answer.value = "0" + answer.value.toString();
  }
};
