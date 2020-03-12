import React from 'react';
import {
  StyleSheet, Text, View, TouchableOpacity,
} from 'react-native';
import CommanderDamageZone from './CommanderDamageZone';
import { normalizeSize } from './Utils';
// import { Striped } from './SvgPatterns';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    margin: 5,
    alignItems: 'stretch',
    justifyContent: 'center',
  },
  pattern: {
    zIndex: -200,
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
    // // for debugging
    // opacity: 1,
    // backgroundColor: 'pink',
    // borderColor: 'black',
    // borderWidth: 3,
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
  state = {
    count: this.props.commanderMode ? 40 : (this.props.startingLife || 20),
  };

  handleOnPress = (operation) => () => {
    const { count } = this.state;
    this.setState({
      count: operation === '+' ? count + 1 : count - 1,
    });
  };

  render() {
    const { count } = this.state;
    const {
      playerName, commanderMode, opponents, isUpperRow,
    } = this.props;
    return (
      <View style={styles.container}>
        <View style={styles.infoArea}>
          <Text>
            {`Player ${playerName}`}
          </Text>
          <Text style={styles.countFont}>
            {count}
          </Text>
        </View>
        {/* <Striped /> */}
        {
          commanderMode
            ? (
              <View style={styles.commanderDamageArea}>
                <CommanderDamageZone
                  opponents={opponents}
                  isUpperRow={isUpperRow}
                />
              </View>
            )
            : null
        }
        <TouchableOpacity
          activeOpacity={0.5}
          style={styles.touchableArea}
          onPress={this.handleOnPress('+')}
          // fordebugg
          // onPress={() => alert('+ pressed')}
        >
          <Text style={styles.touchableAreaFont}>+</Text>
        </TouchableOpacity>
        <TouchableOpacity
          activeOpacity={0.5}
          style={styles.touchableArea}
          onPress={this.handleOnPress('-')}
          // fordebugg
          // onPress={() => alert('- pressed')}
        >
          <Text style={styles.touchableAreaFont}>-</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

export default PlayerZone;
