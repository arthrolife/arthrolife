window.onload = init;

var ask = null;
var askButton = null;

if (!document.querySelector)
  (function(d){d=document,a=d.styleSheets[0]||d.createStyleSheet();d.querySelector=function(e){a.addRule(e,'f:b');for(var l=d.all,b=0,c=[],f=l.length;b<f;b++)l[b].currentStyle.f&&c.push(l[b]);a.removeRule(0);return c}})()

function last(o) {
  if (o instanceof Array) return o[o.length - 1];
  return o;
}

function init() {
  body = last(document.querySelector('body'));
  askForm = last(document.querySelector('#ask-form'));
  askButton = last(document.querySelector('#ask-button'));
  askName = last(document.querySelector('#ask-name'));
  askPhone = last(document.querySelector('#ask-phone'));
  askEmail = last(document.querySelector('#ask-email'));
  askQuestion = last(document.querySelector('#ask-question'));
  askSubmit = last(document.querySelector('#ask-submit'));

  body.onclick = function(event) {
    event = (event) ? event : window.event;
    var target = (event.target) ? event.target : event.srcElement;
    if (target) {
      var parent = target.parentNode;
      if (parent && parent.id !== 'ask' && parent.className !== 'input-container' && parent.id !== 'ask-button' && parent.id !== 'ask-form')
        hideAsk();
    }
  };

  askButton.onclick = toggleAskShow;
  document.onkeydown = function(event) {
    event = (event) ? event : window.event;
    if (event.keyCode == 27) hideAsk();
  };

  askSubmit.onclick = function(event) {
    var url = '/help';
    var params = 'name=' + askName.value + '&phone=' + askPhone.value + '&email=' +
      askEmail.value + '&question=' + askQuestion.value;
    var http = new XMLHttpRequest();
    http.open('POST', url, true);
    http.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
    http.onreadystatechange = function() {
      if (http.readyState == 4 && http.status == 200)
        setTimeout(clearAskValues, 2500);
    }
    http.send(params);
    toggleAskShow();
  }
}

function clearAskValues() {
  askName.value = '';
  askPhone.value = '';
  askEmail.value = '';
  askQuestion.value = '';
}

function hideAsk() {
  if (askForm.classList)
    askForm.classList.remove('ask-form-show');
  else
    askForm.className = '';
}

function toggleAskShow() {
  if (askForm.classList)
    askForm.classList.toggle('ask-form-show');
  else {
    if (askForm.className === 'ask-form-show')
      askForm.className = '';
    else
      askForm.className = 'ask-form-show';
  }
}

