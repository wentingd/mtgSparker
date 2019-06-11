import React from 'react';
import {
  View, StyleSheet, TouchableOpacity, Modal, Text,
} from 'react-native';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import AppIcon from './AppIcon';

const styles = StyleSheet.create({
  toolboxIconContainer: {
    height: 60,
    width: 60,
    borderRadius: 30,
    borderColor: 'white',
    backgroundColor: '#ffe57f',
    borderWidth: 5,
    justifyContent: 'center',
    alignItems: 'center',
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
    height: '60%',
    borderRadius: 25,
    borderWidth: 3,
    borderColor: 'white',
    backgroundColor: 'beige',
  },
  modalContents: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    alignItems: 'center',
    width: '60%',
    height: '60%',
  },
  iconButton: {
    height: 60,
    width: 60,
    backgroundColor: 'black',
    borderRadius: 5,
    margin: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  iconFont: {
    color: 'white',
  },
  faIcon: {
    color: 'white',
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
    const {
      setDiceViewVisible, setGameConfig, playerNumber, commanderMode,
    } = this.props;
    return (
      <TouchableOpacity
        style={{ ...styles.toolboxIconContainer }}
        onPress={this.setModalVisible(true)}
      >
        <AppIcon size={32} color='#ff5722' />
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
                  style={styles.iconButton}
                  onPress={this.onPressDice(setDiceViewVisible)}
                >
                  <FontAwesomeIcon
                    icon='dice'
                    style={styles.faIcon}
                    size={32}
                  />
                </TouchableOpacity>
                <TouchableOpacity
                  style={styles.iconButton}
                  onPress={setGameConfig(playerNumber, commanderMode)}
                >
                  <FontAwesomeIcon
                    icon='redo'
                    style={styles.faIcon}
                    size={32}
                  />
                </TouchableOpacity>
                <TouchableOpacity
                  style={styles.iconButton}
                  onPress={setGameConfig(2, false)}
                >
                  <FontAwesomeIcon
                    icon='user-friends'
                    style={styles.faIcon}
                  />
                  <Text style={styles.iconFont}>2</Text>
                </TouchableOpacity>
                <TouchableOpacity
                  style={styles.iconButton}
                  onPress={setGameConfig(4, false)}
                >
                  <FontAwesomeIcon
                    icon='users'
                    style={styles.faIcon}
                  />
                  <Text style={styles.iconFont}>4</Text>
                </TouchableOpacity>
                <TouchableOpacity
                  style={styles.iconButton}
                  onPress={setGameConfig(2, true)}
                >
                  <FontAwesomeIcon
                    icon='user-friends'
                    style={styles.faIcon}
                  />
                  <Text style={styles.iconFont}>EDH 2</Text>
                </TouchableOpacity>
                <TouchableOpacity
                  style={styles.iconButton}
                  onPress={setGameConfig(4, true)}
                >
                  <FontAwesomeIcon
                    icon='users'
                    style={styles.faIcon}
                  />
                  <Text style={styles.iconFont}>EDH 4</Text>
                </TouchableOpacity>
              </View>
            </View>
          </TouchableOpacity>
        </Modal>
      </TouchableOpacity>
    );
  }
}

export default ToolBox;
