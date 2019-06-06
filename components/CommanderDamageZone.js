import React from 'react';
import {
  StyleSheet, View,
} from 'react-native';
import MiniCounter from './MiniCounter';

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row-reverse',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: 'transparent',
  },
});

class CommanderDamageZone extends React.Component {
  handleOnPress = (operation) => () => {
    const { lifeCount } = this.state;
    this.setState({
      lifeCount: operation === '+' ? lifeCount + 1 : lifeCount - 1,
    });
  };

  render() {
    return (
      <View style={styles.container}>
        {
          this.props.opponents.map((opponent) => (
            <MiniCounter
              key={opponent.index}
              playerName={opponent.index + 1}
              color={opponent.color}
            />
          ))
        }
      </View>
    );
  }
}

export default CommanderDamageZone;
