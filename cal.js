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
  dec.disabled = false;
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

var equal = document.getElementById("equal");
equal.addEventListener("click", () => {
  try {
    var screen = document.getElementById("screen");
    screen.innerText = eval(screen.innerText);
    dec.disabled = false;
  } catch {
    screen.innerText = "Error";
  }
});

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
