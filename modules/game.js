//Adding a new game

const addGame = async () => {
  try {
    const response = await fetch(`${API_URL}/games`, {
      method: "POST",
      body: JSON.stringify({
        name: "the Best game in the world",
      }),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    });

    const data = await response.json();

    if (data && data.result) {
      const gameId = data.result.match(/(\w+){10,}/gi);
      return gameId[0];
    } else {
      throw new Error("Error al obtener el ID del juego.");
    }
  } catch (error) {
    console.error("Error:", error);
  }
};

addGame()
  .then((gameId) => {
    console.log(gameId);
  })
  .catch((error) => {
    console.error("Error:", error);
  });
