const yes = document.querySelector('.yes');
const no = document.querySelector('.no');
const start = document.querySelector('.start');
const left = document.querySelector('.left');
const right = document.querySelector('.right');
const down = document.querySelector('.down');
const number = document.querySelector('.number');
const sentence = document.querySelector('.sentence');
const sentences = [
  'I am incredibly cool and intelligent 😋',
  'I am extremely awesome and clever 😏',
  'Am i god!?! 🤠 ',
  'One more time or what 😉',
  'So easy 😗',
];
const finalGuess = function () {
  left.classList.add('hidden');
  right.classList.add('hidden');
  number.textContent = guessNumber;
  sentence.classList.remove('hidden');
  sentence.textContent = sentences[Math.trunc(Math.random() * 5)];
  document.querySelector('.number').style.width = '30rem';
  document.querySelector('body').style.backgroundColor = '#60b347';
};

let guessNumber = 0;
let i = 5;
const num2binary = function (digit) {
  let str = '';
  for (let i = 1; i < 64; i++) {
    let number = i.toString(2);
    for (let i = 6 - String(number).length; i > 0; i--) {
      number = '0' + number;
    }
    if (number[digit] == 1) {
      str = str + String(i) + ', ';
    }
  }
  document.querySelector('.numbers').textContent = str;
};
yes.addEventListener('click', function () {
  if (i === 0) {
    i--;
    guessNumber = guessNumber + 2 ** (4 - i);
    finalGuess();
  } else {
    i--;
    num2binary(i);
    guessNumber = guessNumber + 2 ** (4 - i);
  }
});
no.addEventListener('click', function () {
  if (i === 0) {
    finalGuess();
  } else {
    i--;
    num2binary(i);
  }
});

start.addEventListener('click', function () {
  left.classList.remove('hidden');
  right.classList.remove('hidden');
  down.classList.add('hidden');
  num2binary(i);
});

document.querySelector('.again').addEventListener('click', function () {
  left.classList.add('hidden');
  right.classList.add('hidden');
  document.querySelector('body').style.backgroundColor = '#222222';
  document.querySelector('.number').style.width = '15rem';
  document.querySelector('.number').textContent = '?';
  sentence.classList.add('hidden');
  down.classList.remove('hidden');
  guessNumber = 0;
  i = 5;
});

document.querySelector('.back').addEventListener('click', function () {
  window.location = '../index.html';
});
