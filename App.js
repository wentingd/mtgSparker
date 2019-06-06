import React from 'react';
import {
  StatusBar, StyleSheet, View,
} from 'react-native';
import LifeCounterView from './components/LifeCounterView';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      playerNumber: 4,
      commanderMode: true,
    };
  }

  render() {
    const { playerNumber, commanderMode } = this.state;
    return (
      <View style={styles.screen}>
        <StatusBar hidden />
        <LifeCounterView
          playerNumber={playerNumber}
          commanderMode={commanderMode}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
