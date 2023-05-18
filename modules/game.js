const API_URL = 'https://us-central1-js-capstone-backend.cloudfunctions.net/api';

// Adding a new game ID
const addGame = async () => {
  try {
    const response = await fetch(`${API_URL}/games`, {
      method: 'POST',
      body: JSON.stringify({
        name: 'the Best game in the world',
      }),
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
    });

    const data = await response.json();

    if (data && data.result) {
      const gameId = data.result.match(/(\w+){10,}/gi);
      return gameId[0];
    }
    throw new Error('The Id can not be Created!');
  } catch (error) {
    throw new Error('Game not found!');
  }
};

addGame();