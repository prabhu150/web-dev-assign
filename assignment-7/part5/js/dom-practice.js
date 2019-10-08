/*eslint-env browser*/

//STEP 1

function button_click() {
  window.alert("I have been clicked!");
}

function fixAllButtons() {
  //STEP 2
  document.getElementById("question-2").onclick = this.button_click;

  //STEP 3
  document
    .getElementById("question-3")
    .addEventListener("click", this.button_click);

  //STEP 4
  document.getElementById("question-4").addEventListener("click", function() {
    window.alert("I have been clicked!");
  });

  document
    .getElementById("question-5")
    .addEventListener("click", this.button_click);
}

// window.onload = fixAllButtons; // STEP 5 this line can be included in index.html as well
