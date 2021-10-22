const colors = [
  "#FFFFFF",
  "#2196F3",
  "#4CAF50",
  "#FF9800",
  "#009688",
  "#795548",
];

const start = document.querySelector('[data-action="start"]');
const stop = document.querySelector('[data-action="stop"]');

const bodyRef = document.body;
let intervalId = null;

start.addEventListener("click", onSwitchColor);
function onSwitchColor() {
  start.disabled = true;
  intervalId = setInterval(() => {
    bodyRef.style.background =
      colors[randomIntegerFromInterval(0, colors.length - 1)];
  }, 1000);
}
const randomIntegerFromInterval = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

stop.addEventListener("click", stopInterval);
function stopInterval() {
  start.disabled = false;
  clearInterval(intervalId);
}
