import React from 'react';
import {
  StatusBar, StyleSheet, View,
} from 'react-native';
import LifeCounterView from './components/LifeCounterView';
import DiceView from './components/DiceView';
import { generatePlayers } from './components/Utils';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      playerNumber: 2,
      commanderMode: true,
      showDice: true,
    };
  }

  render() {
    const { playerNumber, commanderMode } = this.state;
    const players = generatePlayers(playerNumber);
    return (
      <View style={styles.screen}>
        <StatusBar hidden />
        <LifeCounterView
          players={players}
          playerNumber={playerNumber}
          commanderMode={commanderMode}
        />
        {
          this.state.showDice
            ? <DiceView players={players} />
            : null
        }
      </View>
    );
  }
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: 'black',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
