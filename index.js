const colors = [
  "#FFFFFF",
  "#2196F3",
  "#4CAF50",
  "#FF9800",
  "#009688",
  "#795548",
];

const refs = {
  startBtn: document.querySelector('button[data-action="start"]'),
  stopBtn: document.querySelector('button[data-action="stop"]'),
};

let setIntervalId = null;
let colorsIndex = 0;

const colorChangeInterval = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

const setBodyColor = () => {
  document.body.style.backgroundColor = colors[0];
};

const clearBodyColor = () => {
  document.body.style.backgroundColor = "";
};

const runColor = () => {
  const colorSelection = [...colors];
  colorSelection.splice(colorsIndex, 1);
  const indexOfColors = colorChangeInterval(0, colorSelection.length - 1);
  const switchColor = colorSelection[indexOfColors];
  document.body.style.backgroundColor = switchColor;
  colorsIndex = colors.indexOf(switchColor);
};

const toggleDisabled = () => {
  refs.startBtn.disabled = refs.startBtn.disabled ? false : true;
  refs.stopBtn.disabled = refs.startBtn.disabled ? false : true;
};

const colorStartChange = () => {
  if (!colors.length) {
    refs.startBtn.disabled = true;
    return;
  }
  if (colors.length === 1) {
    setBodyColor();
    toggleDisabled();
    return;
  }
  if (!setIntervalId) {
    runColor();
    setIntervalId = setInterval(() => {
      runColor();
    }, 1000);
    toggleDisabled();
  }
};

const colorStopChange = () => {
  if (colors.length === 1) {
    clearBodyColor();
    toggleDisabled();
    return;
  }
  if (setIntervalId) {
    clearInterval(setIntervalId);
    setIntervalId = null;
    toggleDisabled();
  }
};

refs.stopBtn.disabled = true;
refs.startBtn.addEventListener("click", colorStartChange);
refs.stopBtn.addEventListener("click", colorStopChange);
