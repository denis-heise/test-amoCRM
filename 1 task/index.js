const inputEl = document.querySelector('input');
const buttonEl = document.querySelector('button');
const timerEl = document.querySelector('span');
const NUMBER_REGEXP = /[^0-9:]/g;
const LIMIT_MINUTES = 59;
const LIMIT_HOURS = 3599;
const LIMIT_NUMBER_CONVERSION = 60;
const LIMIT_NUMBER_TRANSFER = 10;
// conversion limit number
let timeId;

// Напишите реализацию createTimerAnimator
// который будет анимировать timerEl
const createTimerAnimator = () => {
  return (seconds) => {
    timeId = setInterval(() => {
      seconds -= 1;
      const quantitySeconds = seconds % LIMIT_NUMBER_CONVERSION;
      const quantityMinutes = Math.trunc(seconds / LIMIT_NUMBER_CONVERSION % LIMIT_NUMBER_CONVERSION);
      const quantityHours = Math.trunc(seconds / LIMIT_NUMBER_CONVERSION / LIMIT_NUMBER_CONVERSION % LIMIT_NUMBER_CONVERSION);

      if (seconds === 0){
        clearInterval(timeId);
        timerEl.textContent = `00:00:00`
      } else {
        timerEl.textContent = `${quantityHours >= LIMIT_NUMBER_TRANSFER ? quantityHours : `0${quantityHours}`}:${quantityMinutes >= LIMIT_NUMBER_TRANSFER ? quantityMinutes : `0${quantityMinutes}`}:${quantitySeconds >= LIMIT_NUMBER_TRANSFER ? quantitySeconds : `0${quantitySeconds}`}`;
      }
    }, 1000);
  }; 
};

const animateTimer = createTimerAnimator();

inputEl.addEventListener('input', function () {
  // Очистите input так, чтобы в значении
  // оставались только числа
  this.value = this.value.replace(NUMBER_REGEXP, '');
  timerInputMask(this);
  validateInputTimer(this);
});

buttonEl.addEventListener('click', () => {
  const inputValue = inputEl.value;
  
  if (inputValue.length !== 0){
    const seconds = getSecondsTimer(inputValue);
    clearInterval(timeId);
    animateTimer(seconds);
    timerEl.textContent = inputEl.value;
    inputEl.value = '';
  }
});

function timerInputMask(element) {
  element.addEventListener('keypress', function() {
      const lengthInput = element.value.length;
      
      if(lengthInput === 2) {
          element.value += ':';
      };

      if(lengthInput === 5) {
          element.value += ':';
      };

      if(lengthInput === 8) {
          element.value = element.value.slice(0, -1)
      };
  });
};

function validateInputTimer (element) {
  if (Number(element.value[0]) > 2) element.value = element.value.replace(element.value[0], '');
  if (Number(element.value[1]) > 4) element.value = element.value.replace(element.value[1], '');
  if (Number(element.value[3]) > 5) element.value = element.value.replace(element.value[3], '');
  if (Number(element.value[6]) > 5) element.value = element.value.replace(element.value[6], '');
};

function getSecondsTimer (value){
  const timeArray = value.split(':');
  const secondsTimer = (Number(timeArray[0]) * LIMIT_NUMBER_CONVERSION * LIMIT_NUMBER_CONVERSION) + (Number(timeArray[1]) * LIMIT_NUMBER_CONVERSION) + Number(timeArray[2]);
  return secondsTimer;
};
