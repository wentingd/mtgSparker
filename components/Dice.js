import React from 'react';
import {
  View, Text,
} from 'react-native';

const styles = {
  face: {
    justifyContent: 'center',
    alignItem: 'center',
    height: 80,
    width: 80,
    borderRadius: 15,
    borderWidth: 3,
    borderColor: 'gainsboro',
  },
  faceText: {
    textAlign: 'center',
    color: 'white',
    fontSize: 50,
  },
};

class Dice extends React.Component {
  render() {
    return (
      <View style={{ ...styles.face, backgroundColor: this.props.color || 'rgba(0, 0, 0, 0.7)' }}>
        <Text style={styles.faceText}>
          {this.props.face}
        </Text>
      </View>
    );
  }
}

export default Dice;
