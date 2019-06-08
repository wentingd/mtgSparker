import React from 'react';
import {
  View, StyleSheet, TouchableOpacity, Modal, Button, TouchableHighlight,
} from 'react-native';
// import AppIcon from './AppIcon';

const styles = StyleSheet.create({
  icon: {
    height: 50,
    width: 50,
    borderRadius: 25,
    borderColor: 'white',
    backgroundColor: '#C4360B',
    borderWidth: 5,
  },
  diceIcon: {
    height: 50,
    width: 50,
    backgroundColor: 'black',
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
    width: '80%',
    height: '40%',
    borderRadius: 25,
    borderWidth: 3,
    borderColor: 'white',
    backgroundColor: 'beige',
  },
  modalContents: {
    flexDirection: 'column',
    justifyContent: 'space-around',
    alignItems: 'stretch',
    width: '80%',
    height: '80%',
  },
});

class ToolBox extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      modalVisible: false,
    };
  }

  setModalVisible = (visible) => () => {
    this.setState({ modalVisible: visible });
  };

  onPressDice = (setDiceViewVisible) => () => {
    this.setModalVisible(false)();
    setDiceViewVisible(true)();
  };

  render() {
    const { modalVisible } = this.state;
    const { setDiceViewVisible } = this.props;
    return (
      <TouchableOpacity
        style={{ ...styles.icon }}
        onPress={this.setModalVisible(true)}
      >
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
              style={{ ...styles.modalBody }}
            >
              <View style={styles.modalContents}>
                <TouchableOpacity
                  style={styles.diceIcon}
                  onPress={this.onPressDice(setDiceViewVisible)}
                />
              </View>
            </View>
          </TouchableOpacity>
        </Modal>
      </TouchableOpacity>
    );
  }
}

export default ToolBox;
