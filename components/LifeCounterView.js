import React from 'react';
import { View } from 'react-native';
import PlayerLifeCounter from './PlayerLifeCounter';
import ToolBox from './ToolBox';
import { omitByIndex } from './Utils';

const styles = {
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'stretch',
    backgroundColor: 'transparent',
  },
  lowerRow: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'stretch',
    alignSelf: 'center',
  },
  upperRow: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'stretch',
    alignSelf: 'center',
    // TODO: using transform disturbs life counter display. see react-native/issues/19637
    transform: [{ rotate: '-180deg' }],
  },
  playerArea: {
    flex: 1,
    margin: 3,
    borderRadius: 15,
    borderWidth: 3,
    borderColor: 'white',
  },
  toolBoxArea: {
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    position: 'absolute',
  },
};

const renderPlayerArea = (player, opponents, commanderMode) => (
  <View
    key={player.index}
    style={{ ...styles.playerArea, backgroundColor: player.color }}
  >
    <PlayerLifeCounter
      playerName={player.index + 1}
      opponents={opponents}
      commanderMode={commanderMode}
    />
  </View>
);

class CounterView extends React.Component {
  render() {
    const {
      commanderMode, playerNumber, players, setDiceViewVisible, setGameConfig,
    } = this.props;
    const playersPerRow = playerNumber / 2;
    return (
      <View style={styles.container}>
        <View style={styles.upperRow}>
          {
            players.slice(playersPerRow, this.props.playerNumber).map(
              (player) => renderPlayerArea(player, omitByIndex(player, players), commanderMode),
            )
          }
        </View>
        <View style={styles.lowerRow}>
          {
            players.slice(0, playersPerRow).map(
              (player) => renderPlayerArea(player, omitByIndex(player, players), commanderMode),
            )
          }
        </View>
        <View style={styles.toolBoxArea}>
          <ToolBox
            setDiceViewVisible={setDiceViewVisible}
            setGameConfig={setGameConfig}
            players={players}
            playerNumber={playerNumber}
            commanderMode={commanderMode}
          />
        </View>
      </View>
    );
  }
}

export default CounterView;
