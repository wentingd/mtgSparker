import React from 'react';
import {
  View, StyleSheet,
} from 'react-native';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    borderRadius: 20,
    borderWidth: 3,
    borderColor: 'gainsboro',
    display: 'flex',
  },
  pip: {
    color: 'gainsboro',
  },
  // faceText: {
  //   textAlign: 'center',
  //   color: 'white',
  //   fontSize: 50,
  // },
});

const convertFaceCountToWord = (number) => {
  const map = {
    1: 'one',
    2: 'two',
    3: 'three',
    4: 'four',
    5: 'five',
    6: 'six',
  };
  return map[number];
};

class Dice extends React.Component {
  render() {
    const { faceCount, color } = this.props;
    return (
      <View style={{
        ...styles.container,
        backgroundColor: 'rgba(0, 0, 0, 0.7)',
      }}
      >
        <FontAwesomeIcon
          icon={`dice-${convertFaceCountToWord(faceCount)}`}
          size={75}
          style={styles.pip}
        />
      </View>
    );
  }
}

export default Dice;
