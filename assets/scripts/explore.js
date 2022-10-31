// explore.js

window.addEventListener('DOMContentLoaded', init);

function init() {
  // TODO
  const x = window.speechSynthesis;
  const selectElement = document.getElementById('voice-select');
  const utterance = new SpeechSynthesisUtterance();
  const faceElement = document.querySelector('img');

  x.onvoiceschanged = function() {
    const voices = x.getVoices();
    
    for (let i = 0; i < voices.length; i++) {
      let option = document.createElement("option");
      option.textContent = `${voices[i].name} (${voices[i].lang})`;
      option.value = i;

      selectElement.appendChild(option);
    }
  }
}


function speak(event){
  const textElement = document.getElementById('voice-select');
  const utterance = new SpeechSynthesisUtterance(textElement.value);
  utterance.voice = currvoice;
  window.speechSynthesis.speak(utterThis);
  //startsmiling
  utterThis.addEventListener('start', changeSmile);
  function changeSmile(event){
    const curr_smile = document.querySelector('img');
    curr_smile.src = "assets/images/smiling-open.png";
  }
  //stopsmiling
  utterThis.addEventListener('end', stopSmile);
  function stopSmile(event){
    const curr_smile = document.querySelector('img');
    curr_smile.src = "assets/images/smiling.png";
  }
}