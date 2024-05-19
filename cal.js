var buttons = document.getElementsByClassName("values");
var dec = document.getElementById("dec");
dec.disabled = false;

for (var i = 0; i < buttons.length; i++) {
  buttons[i].onclick = click;
}

var operator = document.getElementsByClassName("operator");
for (var i = 0; i < operator.length; i++) {
  operator[i].onclick = clickOperator;
}

function click() {
  var value = this.value;
  var screen = document.getElementById("screen");
  screen.innerText += value;
  for (var i = 0; i < operator.length; i++) {
    operator[i].disabled = false;
  }
}

function clickOperator() {
  var value = this.value;
  var screen = document.getElementById("screen");
  screen.innerText += value;
  for (var i = 0; i < operator.length; i++) {
    operator[i].disabled = true;
  }
  dec.disabled = false;
}

var clear = document.getElementById("clear");
clear.addEventListener("click", () => {
  window.location.reload();
});

function result(){
  try {
    var screen = document.getElementById("screen");
    screen.innerText = eval(screen.innerText);
    dec.disabled = false;
  } catch {
    screen.innerText = "Error";
  }
}

var equal = document.getElementById("equal");
equal.addEventListener("click", result);

var del = document.getElementById("del");
del.addEventListener("click", () => {
  var display = document.getElementById("screen");
  if (display.innerText.charAt(display.innerText.length - 1) == ".") {
    dec.disabled = false;
  }
  display.innerText = display.innerText.slice(0, -1);
});

dec.addEventListener("click", () => {
  dec.disabled = true;
});

document.getElementById("screen").addEventListener('keydown', function(e) {
  const allowedKeys = [
      'Backspace', 'Delete', 'ArrowLeft', 'ArrowRight'
  ];
  if (
      !allowedKeys.includes(e.key) && // Allow control keys
      !e.key.match(/[0-9+\-*/%.]/) // Allow only number characters
  ) {
      e.preventDefault();
  }
  for (var i = 0; i < operator.length; i++) {
    operator[i].disabled = false;
  }
  dec.disabled = false;
});

document.addEventListener('keydown', (event) => {
  if (event.key === 'Enter') {
      result();
  }
});