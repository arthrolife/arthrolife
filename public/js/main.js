window.onload = init;

var ask = null;
var askButton = null;

function init() {
  ask = document.querySelector('#ask');
  askButton = document.querySelector('#ask-button');
  askName = document.querySelector('#ask-name');
  askPhone = document.querySelector('#ask-phone');
  askEmail = document.querySelector('#ask-email');
  askQuestion = document.querySelector('#ask-question');
  askSubmit = document.querySelector('#ask-submit');

  askButton.onclick = toggleAskShow;

  askSubmit.onclick = function(event) {
    var url = '/help';
    var params = 'name=' + askName.value + '&phone=' + askPhone.value + '&email=' +
      askEmail.value + '&question=' + askQuestion.value;
    var http = new XMLHttpRequest();
    http.open('POST', url, true);
    http.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
    http.onreadystatechange = function() {
      if (http.readyState == 4 && http.status == 200) alert(http.responseText);
    }
    http.send(params);
    toggleAskShow();
  }
}

function toggleAskShow() {
  if (ask.classList)
    ask.classList.toggle('ask-show');
  else {
    if (ask.className === 'ask-show')
      ask.className = '';
    else
      ask.className += 'ask-show'
  }
}

