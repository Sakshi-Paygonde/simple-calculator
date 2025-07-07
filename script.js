const display = document.getElementById("display");

function append(value) {
  if (display.innerText === "0") display.innerText = "";
  display.innerText += value;
}

function clearDisplay() {
  display.innerText = "0";
}

function toggleSign() {
  if (display.innerText === "0") return;
  if (display.innerText.startsWith("-")) {
    display.innerText = display.innerText.slice(1);
  } else {
    display.innerText = "-" + display.innerText;
  }
}

function calculate() {
  try {
    display.innerText = eval(display.innerText.replace('%', '/100'));
  } catch {
    display.innerText = "Error";
  }
}
