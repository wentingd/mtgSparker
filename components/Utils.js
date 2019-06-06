import { Dimensions, Platform, PixelRatio } from 'react-native';

const colors = [
  'powderblue',
  'gold',
  'pink',
  'orange',
  'cadetblue',
  'steelblue',
  'skyblue',
  'darkmagenta',
];

function getRandomNumber(min, max) {
  Math.floor(min + (max - min) * Math.random());
}

function getRandomArbitrary(min, max) {
  return Math.random() * (max - min) + min;
}

function generatePlayers(playerNumber) {
  const players = [];
  for (let i = 0; i < playerNumber; i++) {
    players.push({ color: colors[i], index: i });
  }
  return players;
}

function omitByIndex(target, array) {
  return array.filter((item) => item.index !== target.index);
}

function normalizeSize(size) {
  const {
    width: SCREEN_WIDTH,
  } = Dimensions.get('window');
  const scale = SCREEN_WIDTH / 320;
  const newSize = size * scale;
  if (Platform.OS === 'ios') {
    return Math.round(PixelRatio.roundToNearestPixel(newSize));
  }
  return Math.round(PixelRatio.roundToNearestPixel(newSize)) - 2;
}

export {
  getRandomArbitrary,
  getRandomNumber,
  generatePlayers,
  normalizeSize,
  omitByIndex,
};
