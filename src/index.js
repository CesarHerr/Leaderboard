import "./style.css";
import { addScore, displayScores } from "../modules/scores.js";

const main = document.querySelector(".container");
const recentScore = document.createElement("section");
recentScore.classList.add("scores");
const subTitle = document.createElement("h2");
subTitle.innerText = "Recent scores";
const refreshBtn = document.createElement("button");
refreshBtn.innerText = "Refresh";
const list = document.createElement("ul");

main.appendChild(recentScore);
recentScore.appendChild(subTitle);
recentScore.appendChild(refreshBtn);
recentScore.appendChild(list);

const form = document.createElement("form");
const userInput = document.createElement("input");
userInput.classList.add("user");
userInput.type = "text";
userInput.placeholder = "Your name";

const scoreInput = document.createElement("input");
scoreInput.classList.add("score");
scoreInput.type = "text";
scoreInput.placeholder = "Your Score";

const scoreBtn = document.createElement("button");
scoreBtn.innerText = "Submit";
scoreBtn.classList.add("submit-btn");

main.appendChild(form);
form.appendChild(userInput);
form.appendChild(scoreInput);
form.appendChild(scoreBtn);

scoreBtn.addEventListener("click", (event) => {
  event.preventDefault();
  const takeUser = document.querySelector(".user").value;
  const takeScore = document.querySelector(".score").value;

  if (takeScore !== "" && takeUser !== "" && /^[0-9]*$/.test(takeScore)) {
    addScore(takeUser, takeScore);
    document.querySelector(".user").value = "";
    document.querySelector(".score").value = "";
  }
});

refreshBtn.addEventListener("click", () => {
  displayScores();
});
