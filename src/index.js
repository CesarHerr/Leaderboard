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

const gameId = "teDaNoamOeQKbWVsOgKb";
const API_URL =
  "https://us-central1-js-capstone-backend.cloudfunctions.net/api";

//Add user and score to the Game
const addScore = async (user, score) => {
  try {
    const response = await fetch(`${API_URL}/games/${gameId}/scores`, {
      method: "POST",
      body: JSON.stringify({
        user: user,
        score: score,
      }),
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

scoreBtn.addEventListener("click", (event) => {
  event.preventDefault();
  const takeUser = document.querySelector(".user").value;
  const takeScore = document.querySelector(".score").value;

  if (takeScore !== "" && takeUser !== "") {
    addScore(takeUser, takeScore);
    document.querySelector(".user").value = "";
    document.querySelector(".score").value = "";
  }
});

const userList = async () => {
  try {
    const response = await fetch(`${API_URL}/games/${gameId}/scores`);
    const data = await response.json();
    return data;
  } catch (error) {
    throw new Error("Game not found!!!.");
  }
};

const displayScores = () => {
  userList().then((data) => {
    const list = document.querySelector("ul");
    const { result } = data;
    list.innerHTML = result
      .map(
        (data, index) => `
        <li>${result[index].user}: ${result[index].score}</li>                        
      `
      )
      .join("");
  });
};

refreshBtn.addEventListener('click', () => {
  displayScores();
})


