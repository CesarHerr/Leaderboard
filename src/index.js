import './style.css';
import scoreList from '../modules/scores.js';

const main = document.querySelector('.container');
const recentScore = document.createElement('section');
recentScore.classList.add('scores');
const subTitle = document.createElement('h2');
subTitle.innerText = "Recent scores";
const refreshBtn = document.createElement('button');
refreshBtn.innerText = "Refresh";
const list = document.createElement('ul');

main.appendChild(recentScore);
recentScore.appendChild(subTitle);
recentScore.appendChild(refreshBtn);
recentScore.appendChild(list);

scoreList();

const form = document.createElement('form');
const nameInput = document.createElement('input');
nameInput.classList.add('name');
nameInput.type = "text";
nameInput.placeholder = "Your name";

const scoreInput = document.createElement('input');
scoreInput.classList.add('score');
scoreInput.type = "text";
scoreInput.placeholder = "Your Score";

const scoreBtn = document.createElement('button');
scoreBtn.innerText = "Submit"
scoreBtn.classList.add('submit-btn');

main.appendChild(form);
form.appendChild(nameInput);
form.appendChild(scoreInput);
form.appendChild(scoreBtn);