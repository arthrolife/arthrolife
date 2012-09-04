window.onload = init;

var ask = null;
var askButton = null;

function init() {
  ask = document.querySelector('#ask');
  askButton = document.querySelector('#ask-button');

  askButton.onclick = function(event) {
    if (ask.classList)
      ask.classList.toggle('ask-show');
    else {
      if (ask.className === 'ask-show')
        ask.className = '';
      else
        ask.className += 'ask-show'
    }
  };
}


