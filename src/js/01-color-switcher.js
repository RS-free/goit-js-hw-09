const btnStart = document.querySelector('button[data-start]');
const btnStop = document.querySelector('button[data-stop]');
const body = document.querySelector('body');

let bodyTimerBg = null;
const intervalDuration = 1000;
btnStart.disabled = false;
btnStop.disabled = true;

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

function updBgColor() {
  body.style.backgroundColor = getRandomHexColor();
}

btnStart.addEventListener('click', onBtnStart);

function onBtnStart() {
  bodyTimerBg = setInterval(updBgColor, intervalDuration);
  btnStart.disabled = true;
  btnStop.disabled = false;
}

btnStop.addEventListener('click', onBtnStop);

function onBtnStop() {
  btnStart.disabled = false;
  btnStop.disabled = true;
  clearInterval(bodyTimerBg);
}
