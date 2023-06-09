import './style.css';
import { addScore, displayScores } from '../modules/scores.js';

const main = document.querySelector('.container');
const recentScore = document.createElement('section');
recentScore.classList.add('scores');
const subTitle = document.createElement('h2');
subTitle.innerText = 'Recent Scores';
const refreshBtn = document.createElement('button');
refreshBtn.innerText = 'Refresh';
const list = document.createElement('ul');

main.appendChild(recentScore);
recentScore.appendChild(subTitle);
recentScore.appendChild(refreshBtn);
recentScore.appendChild(list);

const addTitle = document.createElement('h2');
addTitle.innerHTML = 'Add New Score';
const form = document.createElement('form');

const userInput = document.createElement('input');
userInput.classList.add('user');
userInput.type = 'text';
userInput.placeholder = 'Your name';

const scoreInput = document.createElement('input');
scoreInput.classList.add('score');
scoreInput.type = 'number';
scoreInput.placeholder = 'Your Score';

const scoreBtn = document.createElement('button');
scoreBtn.innerText = 'Submit';
scoreBtn.classList.add('submit-btn');

const info = document.createElement('p');

main.appendChild(form);
form.appendChild(addTitle);
form.appendChild(userInput);
form.appendChild(scoreInput);
form.appendChild(scoreBtn);
form.appendChild(info);

scoreBtn.addEventListener('click', (event) => {
  event.preventDefault();
  const takeUser = document.querySelector('.user').value.trim();
  const takeScore = document.querySelector('.score').value.trim();

  if (takeScore !== '' && takeUser !== '' && takeScore > 0 && takeScore <= 999999) {
    addScore(takeUser, takeScore);
    document.querySelector('.user').value = '';
    document.querySelector('.score').value = '';
    info.innerText = ' Your Score was Saved !! ';
  } else {
    info.innerText = '"Add your name and Score, Max score 999999."';
  }
});

refreshBtn.addEventListener('click', () => {
  displayScores();
});

userInput.addEventListener('click', () => {
  info.innerText = '';
});

displayScores();