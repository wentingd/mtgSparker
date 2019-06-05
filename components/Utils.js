const colors = [
  'powderblue',
  'darkmagenta',
  'gold',
  'pink',
  'orange',
  'cadetblue',  
  'steelblue',
  'skyblue',
  '',
  '',
];

function getRandomNumber(min, max) {
  Math.floor(x + (y - x) * Math.random());
};

function getRandomArbitrary(min, max) {
  return Math.random() * (max - min) + min;
}

function generatePlayers(playerNumber) {
  let players = [];
  for (i = 0; i < playerNumber; i++) {
    players.push({ color: colors[i], index: i });
  }
  return players;
}

export default {
  generatePlayers,
}
