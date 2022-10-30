// expose.js

window.addEventListener('DOMContentLoaded', init);

function init() {
  const hornElement = document.getElementById('horn-select');
  hornElement.addEventListener('change', hornSelection);

  const volumeElement = document.getElementById('volume');
  volumeElement.addEventListener('input', volumeChange);
  
  const buttonElement = document.querySelector('button');
  buttonElement.addEventListener('click', buttonSelection);
}

function buttonSelection(event) {
  document.querySelector('audio').play();
  if(document.getElementById('horn-select').value == 'party-horn') {
    const jsConfetti = new JSConfetti();
    jsConfetti.addConfetti();
  }
}

function hornSelection(event) {
  document.images[0].src = "assets/images/" + event.target.value + ".svg";
  document.querySelector('audio').src = "assets/audio/" + event.target.value + ".mp3";
}

function volumeChange(event) {
  var curr = event.target.value;
  document.querySelector('audio').volume = curr / 100;

  if(curr == 0) {
    document.images[1].src = "assets/icons/volume-level-0.svg";
  }
  else if(curr >= 1 && curr <= 33) {
    document.images[1].src = "assets/icons/volume-level-1.svg";
  }
  else if(curr >= 34 && curr <=67) {
    document.images[1].src = "assets/icons/volume-level-2.svg";
  }
  else {
    document.images[1].src = "assets/icons/volume-level-3.svg";
  }
}
