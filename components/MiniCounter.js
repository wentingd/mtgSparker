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
  modalContainer: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.3)',
  },
  modalBody: {
    justifyContent: 'center',
    alignItems: 'center',
    width: '40%',
    height: '40%',
    borderRadius: 25,
    borderWidth: 3,
    borderColor: 'white',
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

  onModalClose = () => {
    this.setState({ modalVisible: false });
  }

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
          visible={modalVisible}
          onRequestClose={this.onModalClose}
        >
          <View style={styles.modalContainer}>
            <View style={{ ...styles.modalBody, backgroundColor: color }}>
              <Text>{`Damage by Player ${playerName}`}</Text>
              <Button
                title='+'
                onPress={this.handleCountOnPress('+')}
              />
              <Text style={styles.modalCountFont}>{count}</Text>
              <Button
                title='-'
                onPress={this.handleCountOnPress('-')}
              />
            </View>
          </View>
        </Modal>
      </TouchableOpacity>
    );
  }
}

export default MiniCounter;
