import React from 'react';
import {
  View, Text, Modal, TouchableOpacity, Button,
} from 'react-native';

const styles = {
  counter: {
    width: '30%',
    borderRadius: 30,
    justifyContents: 'center',
    alignItem: 'center',
    alignSelf: 'center',
  },
  counterFaceFont: {
    alignSelf: 'center',
    textAlign: 'center',
    fontSize: 20,
    fontFamily: 'sans-serif-light',
  },
  modalCountFont: {
    alignSelf: 'center',
    textAlign: 'center',
    fontSize: 50,
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
    width: '80%',
    height: '80%',
  },
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
    const { color, playerName } = this.props;
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
              <View style={styles.modalContents}>
                <Button
                  title='+'
                  color='black'
                  onPress={this.handleCountOnPress('+')}
                />
                <Text>{`Damage by Player ${playerName}`}</Text>
                <Text style={styles.modalCountFont}>{count}</Text>
                <Button
                  title='-'
                  color='black'
                  onPress={this.handleCountOnPress('-')}
                />
              </View>
            </View>
          </TouchableOpacity>
        </Modal>
      </TouchableOpacity>
    );
  }
}

export default MiniCounter;
