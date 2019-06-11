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
  render() {
    const { opponents, refresh } = this.props;
    return (
      <View style={styles.container}>
        {
          opponents.map((opponent) => (
            <MiniCounter
              key={opponent.index}
              playerName={opponent.index + 1}
              color={opponent.color}
              refresh={refresh}
            />
          ))
        }
      </View>
    );
  }
}

export default CommanderDamageZone;
