var questions = [
    'What\'s your name ?',
    'Where are you from ?',
    'What\'s your age ?',
    'What crime did you experienced ?',
    'Where did the crime happen ?',
    'Your contact no ?',
    'Don\'t worry! We\'ll look into it.'
];
var num = 0;

var inputBox = document.querySelector('#ans');
var output = document.querySelector('#result');
var reveal = document.querySelector('#submitButton');
output.innerHTML = questions[num];

function showResponse() {
  var input = inputBox.value;
  if(inputBox.value == "") {
    
  }else {
  if(num == 0) {
    output.innerHTML = questions[num];
    inputBox.value = "";
    inputBox.setAttribute("placeholder", "Please wait");
    ++num;
    setTimeout(changeQuestion,500);
  } else if(num == 1) {
    output.innerHTML = questions[num];
    inputBox.value = "";
    inputBox.setAttribute("placeholder", "Please wait");
    ++num;
    setTimeout(changeQuestion, 500);
  } else if(num == 2) {
    output.innerHTML = questions[num];
    inputBox.value = "";
    inputBox.setAttribute("placeholder", "Please wait");
    ++num;
    setTimeout(changeQuestion, 500);
  } else if(num == 3) {
    output.innerHTML = questions[num];
    inputBox.value = "";
    inputBox.setAttribute("placeholder", "Please wait");
    ++num;
    setTimeout(changeQuestion, 500);
  } else if(num == 4) {
    output.innerHTML = questions[num];
    inputBox.value = "";
    inputBox.setAttribute("placeholder", "Please wait");
    ++num;
    setTimeout(changeQuestion, 500);
  } else if(num == 5) {
    output.innerHTML = questions[num];
    inputBox.value = "";
    inputBox.setAttribute("placeholder", "Please wait");
    ++num;
    setTimeout(changeQuestion, 1000);
  }
   }
}

function changeQuestion() {
  inputBox.setAttribute("placeholder", "Enter your response");
  output.innerHTML = questions[num];
  if(num == 6) {
    inputBox.style.display = "none";
    reveal.style.display = "block";
  }
}

$(document).on('keypress', function(e) {
  if(e.which == 13) {
    showResponse();
  }
})
