import "./style.css";
// import scoreList from '../modules/scores.js';

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

// scoreList();

const form = document.createElement("form");
const nameInput = document.createElement("input");
nameInput.classList.add("name");
nameInput.type = "text";
nameInput.placeholder = "Your name";

const scoreInput = document.createElement("input");
scoreInput.classList.add("score");
scoreInput.type = "text";
scoreInput.placeholder = "Your Score";

const scoreBtn = document.createElement("button");
scoreBtn.innerText = "Submit";
scoreBtn.classList.add("submit-btn");

main.appendChild(form);
form.appendChild(nameInput);
form.appendChild(scoreInput);
form.appendChild(scoreBtn);

const gameId = "teDaNoamOeQKbWVsOgKb";
const API_URL =
  "https://us-central1-js-capstone-backend.cloudfunctions.net/api";

//Add user and score to the Game
const addGame = async (userScore) => {
  try {
    const response = await fetch(`${API_URL}/games/${gameId}/scores`, {
      method: "POST",
      body: JSON.stringify(userScore),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    });

    const data = await response.json();

    return data;
  } catch (error) {
    throw new Error("Error al obtener el ID del juego.");
  }
};

const userScore = {
  user: "jhon who",
  score: 100,
};

const userList = async () => {
  try {
    const response = await fetch(`${API_URL}/games/${gameId}/scores`);
    const data = await response.json();    
    return data;
  } catch (error) {
    throw new Error("Error al obtener el ID del juego.");
  }
};

userList();

userList().then((data) => {
  const list = document.querySelector("ul");
  const {result} = data;
  list.innerHTML = result
    .map(
      (data, index) => `
        <li>${result[index].user}: ${result[index].score}</li>                        
      `
    )
    .join("");
});


