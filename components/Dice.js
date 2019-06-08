import React from 'react';
import {
  View, Text, StyleSheet,
} from 'react-native';

const styles = StyleSheet.create({
  face: {
    // justifyContent: 'center',
    // alignItem: 'center',
    height: 80,
    width: 80,
    borderRadius: 15,
    borderWidth: 3,
    borderColor: 'gainsboro',
    display: 'flex',
    justifyContent: 'space-around',
  },
  faceText: {
    textAlign: 'center',
    color: 'white',
    fontSize: 50,
  },
  pip: {
    height: 20,
    width: 20,
    borderRadius: 20,
    backgroundColor: 'gainsboro',
  },
});

class Dice extends React.Component {
  render() {
    const { faceCount } = this.props;
    return (
      <View style={{ ...styles.face, backgroundColor: this.props.color || 'rgba(0, 0, 0, 0.7)' }}>
        {/* {
          [1, 2, 3, 4, 5].map((index) => (
            <View
              key={index}
              style={styles.pip}
            />
          ))
        } */}
        <Text style={styles.faceText}>
          {faceCount}
        </Text>
      </View>
    );
  }
}

export default Dice;
