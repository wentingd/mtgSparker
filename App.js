import React from 'react';
import {
  StatusBar, StyleSheet, View,
} from 'react-native';
import {
  faFire, faDice, faCogs, faRedo, faUsers, faUserFriends,
  faDiceOne, faDiceTwo, faDiceThree, faDiceFour, faDiceFive, faDiceSix,
} from '@fortawesome/free-solid-svg-icons';
import { library } from '@fortawesome/fontawesome-svg-core';
import CounterView from './components/CounterView';
import DiceView from './components/DiceView';
import { generatePlayers } from './components/Utils';

library.add(
  faFire, faDice, faCogs, faRedo, faUsers, faUserFriends,
  faDiceOne, faDiceTwo, faDiceThree, faDiceFour, faDiceFive, faDiceSix,
);

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      playerNumber: 2,
      commanderMode: true,
      diceView: false,
    };
  }

  setDiceViewVisible = (visible) => () => {
    this.setState({ diceView: visible });
  }

  setGameConfig = (playerNumber, commanderMode) => () => {
    this.setState({ playerNumber, commanderMode });
  }

  render() {
    const { playerNumber, commanderMode } = this.state;
    const players = generatePlayers(playerNumber);
    return (
      <View style={styles.screen}>
        <StatusBar hidden />
        <CounterView
          players={players}
          playerNumber={playerNumber}
          commanderMode={commanderMode}
          setDiceViewVisible={this.setDiceViewVisible}
          setGameConfig={this.setGameConfig}
        />
        {
          this.state.diceView
            ? (
              <DiceView
                players={players}
                setDiceViewVisible={this.setDiceViewVisible}
              />
            )
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
