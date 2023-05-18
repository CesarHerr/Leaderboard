const gameId = "Ig4ETGpwJuR6naqbH0we";
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
    throw new Error("Game not found!");
  }
};

//Get users scores
const userList = async () => {
  try {
    const response = await fetch(`${API_URL}/games/${gameId}/scores`);
    const data = await response.json();
    return data;
  } catch (error) {
    throw new Error("User not Found!!!.");
  }
};

//print user scores
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

export { addScore, displayScores };
