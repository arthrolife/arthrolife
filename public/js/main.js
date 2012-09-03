window.onload = init;

var ask = null;
var askButton = null;

function init() {
  ask = document.querySelector('#ask');
  askButton = document.querySelector('#ask-button');

  askButton.onclick = function(event) {
    ask.classList.toggle('ask-show');
  };
}


