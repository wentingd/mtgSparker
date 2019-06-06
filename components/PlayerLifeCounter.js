import React from 'react';
import {
  StyleSheet, Text, View, TouchableOpacity,
} from 'react-native';
import CommanderDamageZone from './CommanderDamageZone';
import { normalizeSize } from './Utils';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    margin: 5,
    alignItems: 'stretch',
    justifyContent: 'center',
  },
  infoArea: {
    flex: 1,
    position: 'absolute',
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'center',
    marginTop: -20,
    zIndex: 0,
  },
  touchableArea: {
    flex: 1,
    opacity: 0,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'white',
    zIndex: 1,
  },
  commanderDamageArea: {
    width: '60%',
    position: 'absolute',
    right: 0,
    bottom: 0,
    zIndex: 2,
  },
  touchableAreaFont: {
    fontSize: normalizeSize(80),
  },
  countFont: {
    fontSize: normalizeSize(120),
    fontFamily: 'sans-serif-thin',
  },
});

class PlayerZone extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: this.props.commanderMode ? 40 : (this.props.startingLife || 20),
    };
  }

  handleOnPress = (operation) => () => {
    const { count } = this.state;
    this.setState({
      count: operation === '+' ? count + 1 : count - 1,
    });
  };

  render() {
    const { count } = this.state;
    return (
      <View style={styles.container}>
        <View style={styles.infoArea}>
          <Text>
            {`Player ${this.props.playerName}`}
          </Text>
          <Text style={styles.countFont}>
            {count}
          </Text>
        </View>
        {
          this.props.commanderMode
            ? (
              <View style={styles.commanderDamageArea}>
                <CommanderDamageZone
                  opponents={this.props.opponents}
                />
              </View>
            )
            : null
        }
        <TouchableOpacity
          activeOpacity={0.5}
          style={styles.touchableArea}
          onPress={this.handleOnPress('+')}
        >
          <Text style={styles.touchableAreaFont}>+</Text>
        </TouchableOpacity>
        <TouchableOpacity
          activeOpacity={0.5}
          style={styles.touchableArea}
          onPress={this.handleOnPress('-')}
        >
          <Text style={styles.touchableAreaFont}>-</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

export default PlayerZone;
