'use strict';

const btnPlayerNumber1 = document.querySelector('.readyP1');
const btnPlayerNumber2 = document.querySelector('.readyP2');
const btnPlayer1Check = document.querySelector('.checkP1');
const btnPlayer2Check = document.querySelector('.checkP2');
const inputPlayer1 = document.querySelector('.input-player1');
const inputPlayer2 = document.querySelector('.input-player2');
const btnPlayerCheck1 = document.querySelector('checkP1');
const btnPlayerCheck2 = document.querySelector('checkP2');
const btnAgain = document.querySelector('.again');

let readyPlayer = [false, false],
  secretNumberPlayer = [,],
  activePlayer = 1,
  secretNumber;

btnPlayerNumber1.addEventListener('click', function () {
  if (checkReady(1, document.querySelector('.input-player1').value)) {
    inputPlayer1.classList.add('hidden');
    btnPlayerNumber1.classList.add('hidden');
  }
});

btnPlayerNumber2.addEventListener('click', function () {
  if (checkReady(2, document.querySelector('.input-player2').value)) {
    inputPlayer2.classList.add('hidden');
    btnPlayerNumber2.classList.add('hidden');
  }
});

const checkReady = function (num, secretNum) {
  if (checkRangeNumber(secretNum)) {
    readyPlayer[num] = true;
    secretNumberPlayer[num] = secretNum;
    if ((readyPlayer[1] == readyPlayer[2]) == true) {
      document
        .querySelector(`.message-Player${num === 1 ? 2 : 1}`)
        .classList.add('hidden');
      initialSettings();

      return false;
    } else {
      document
        .querySelector(`.message-Player${num}`)
        .classList.remove('hidden');
      document.querySelector(
        `.message-Player${num}`
      ).textContent = `Player ${num} Is READY`;
      return true;
    }
  } else {
    return false;
  }
};

const initialSettings = function () {
  btnPlayerNumber1.classList.add('hidden');
  btnPlayerNumber2.classList.add('hidden');
  inputPlayer2.classList.add('hidden');
  btnPlayer1Check.classList.remove('hidden');
  inputPlayer1.classList.remove('hidden');
  inputPlayer2.value = '';
  inputPlayer1.value = '';
  message(2, `Waiting...`);
};

const message = function (num, textMessage) {
  document.querySelector(`.message-Player${num}`).classList.remove('hidden');
  document.querySelector(`.message-Player${num}`).textContent = textMessage;
};

const checkSecretNumber = function () {
  if (secretNumber == secretNumberPlayer[activePlayer == 1 ? 2 : 1]) {
    showWinner();
  } else {
    message(activePlayer, displayMessage());
    changePlayer();
  }
};

btnPlayer1Check.addEventListener('click', function () {
  secretNumber = inputPlayer1.value;
  if (checkRangeNumber(inputPlayer1.value)) {
    checkSecretNumber();
  }
});

btnPlayer2Check.addEventListener('click', function () {
  secretNumber = inputPlayer2.value;
  if (checkRangeNumber(inputPlayer2.value)) {
    checkSecretNumber();
  }
});

const checkRangeNumber = function (num) {
  return 0 < num && num <= 64 ? true : false;
};

const displayMessage = function () {
  if (
    Number(secretNumber) > Number(secretNumberPlayer[activePlayer == 1 ? 2 : 1])
  ) {
    return `Too High 😧`;
  } else {
    return `Too Low 😢`;
  }
};

const changePlayer = function () {
  document
    .querySelector(`.input-player${activePlayer}`)
    .classList.add('hidden');
  document.querySelector(`.checkP${activePlayer}`).classList.add('hidden');
  activePlayer = activePlayer == 1 ? 2 : 1;
  document
    .querySelector(`.input-player${activePlayer}`)
    .classList.remove('hidden');
  document.querySelector(`.checkP${activePlayer}`).classList.remove('hidden');
  document
    .querySelector(`.message-Player${activePlayer}`)
    .classList.add('hidden');
  document.querySelector(`.input-player${activePlayer}`).value = '';
};

const showWinner = function () {
  document.querySelector(`.input-player1`).classList.add('hidden');
  document.querySelector(`.input-player2`).classList.add('hidden');
  document.querySelector(`.checkP1`).classList.add('hidden');
  document.querySelector(`.checkP2`).classList.add('hidden');
  document.querySelector(`.message-Player1`).classList.add('hidden');
  document.querySelector(`.message-Player2`).classList.add('hidden');
  document.querySelector(`.middleLine`).classList.add('hidden');
  document.querySelector('.show-winner').classList.remove('hidden');
  document.querySelector(
    '.show-winner'
  ).textContent = `Player ${activePlayer} Wins`;
  document.querySelector('.player1').textContent = secretNumberPlayer[1];
  document.querySelector('.player2').textContent = secretNumberPlayer[2];
  document.querySelector('body').style.backgroundColor = '#60b347';
};

document.querySelector('.back').addEventListener('click', function () {
  window.location = '../index.html';
});

btnAgain.addEventListener('click', function () {
  document.querySelector(`.input-player1`).classList.remove('hidden');
  document.querySelector(`.input-player2`).classList.remove('hidden');
  document.querySelector(`.checkP1`).classList.add('hidden');
  document.querySelector(`.checkP2`).classList.add('hidden');
  document.querySelector(`.message-Player1`).classList.add('hidden');
  document.querySelector(`.message-Player2`).classList.add('hidden');
  btnPlayerNumber1.classList.remove('hidden');
  btnPlayerNumber2.classList.remove('hidden');
  document.querySelector(`.middleLine`).classList.remove('hidden');
  document.querySelector('.show-winner').classList.add('hidden');
  document.querySelector('body').style.backgroundColor = '#222222';
  document.querySelector(`.input-player1`).value = '';
  document.querySelector(`.input-player2`).value = '';
  document.querySelector('.player1').textContent = 'P1';
  document.querySelector('.player2').textContent = 'P2';
  readyPlayer = [false, false];
  secretNumberPlayer = [,];
  activePlayer = 1;
});
