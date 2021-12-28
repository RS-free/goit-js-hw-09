const btnStart = document.querySelector('button[data-start]');
const btnStop = document.querySelector('button[data-stop]');
const body = document.querySelector('body');

let bodyTimerBg = null;

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

btnStart.addEventListener('click', onBtnStart);

function onBtnStart() {
  btnStart.disabled = true;
  btnStop.disabled = false;
  bodyTimerBg = setInterval(() => {
    body.style.backgroundColor = getRandomHexColor();
  }, 1000);
}

btnStop.addEventListener('click', onBtnStop);

function onBtnStop() {
  btnStart.disabled = false;
  btnStop.disabled = true;
  clearInterval(bodyTimerBg);
}
