import React from 'react';
import {
  View, Text, Modal, TouchableOpacity, Button,
} from 'react-native';

const styles = {
  counter: {
    justifyContents: 'center',
    marginVertical: 0,
    paddingVertical: 10,
    paddingHorizontal: 5,
    width: '30%',
    borderRadius: 40,
    
    alignItem: 'center',
    alignSelf: 'center',
  },
  counterFaceFont: {
    alignSelf: 'center',
    textAlign: 'center',
    fontSize: 25,
    fontFamily: 'sans-serif-light',
  },
  modalCountFont: {
    alignSelf: 'center',
    textAlign: 'center',
    fontSize: 60,
    fontWeight: '400',
    fontFamily: 'sans-serif-light',
  },
  modalBackLayer: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.3)',
  },
  modalBody: {
    justifyContent: 'center',
    alignItems: 'center',
    width: '50%',
    height: '40%',
    borderRadius: 25,
    borderWidth: 3,
    borderColor: 'white',
  },
  modalContents: {
    flexDirection: 'column',
    justifyContent: 'space-around',
    alignItems: 'stretch',
    width: '90%',
    height: '90%',
  },
  customButtonText: {
    fontSize: 40,
    fontWeight: '400',
    color: 'white',
    fontFamily: 'sans-serif-light',
  },
  customButtonBG: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'black',
    paddingHorizontal: 30,
    paddingVertical: 5,
    borderRadius: 30
    }
};

class MiniCounter extends React.Component {
  state = {
    count: this.props.startingCount || 0,
    modalVisible: false,
  };

  setModalVisible = (visible) => () => {
    this.setState({ modalVisible: visible });
  };

  handleCountOnPress = (operation) => () => {
    const { count } = this.state;
    this.setState({
      count: operation === '+' ? count + 1 : count - 1,
    });
  };

  render() {
    const { count, modalVisible } = this.state;
    const { color, playerName, isUpperRow } = this.props;
    return (
      <TouchableOpacity
        style={{ ...styles.counter, backgroundColor: color || 'white' }}
        onPress={this.setModalVisible(true)}
      >
        <Text style={styles.counterFaceFont}>
          {count || 0}
        </Text>
        <Modal
          transparent
          animationType='fade'
          visible={modalVisible}
          onRequestClose={this.setModalVisible(false)}
        >
          <TouchableOpacity
            style={styles.modalBackLayer}
            activeOpacity={1}
            onPressOut={this.setModalVisible(false)}
          >
            <View
              style={{ ...styles.modalBody, backgroundColor: color }}
            >
              <View style={{
                ...styles.modalContents,
                transform: isUpperRow ? [{ rotate: '-180deg' }] : [],
              }}
              >
              <TouchableOpacity
                style={styles.customButtonBG}
                onPress={this.handleCountOnPress('+')}
                accessibilityLabel='+'
              >
                <Text style={styles.customButtonText}>+</Text>
              </TouchableOpacity>
              <Text>{`Damage by Player ${playerName}`}</Text>
              <Text style={styles.modalCountFont}>{count}</Text>              
              <TouchableOpacity
                style={styles.customButtonBG}
                onPress={this.handleCountOnPress('-')}
                accessibilityLabel='-'
              >
                <Text style={styles.customButtonText}>-</Text>
              </TouchableOpacity>
              </View>
            </View>
          </TouchableOpacity>
        </Modal>
      </TouchableOpacity>
    );
  }
}

export default MiniCounter;
