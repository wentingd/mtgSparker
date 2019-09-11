import React from 'react';
import { View } from 'react-native';
import PlayerZone from './PlayerZone';
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
    // TODO: remove this temporary fix when React-native merges #25836. see react-native/issues/19637
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

const renderPlayerArea = ({
  player, opponents, commanderMode, isUpperRow,
}) => (
  <View
    key={player.index}
    style={{ ...styles.playerArea, backgroundColor: player.color }}
  >
    <PlayerZone
      playerName={player.index + 1}
      opponents={opponents}
      commanderMode={commanderMode}
      isUpperRow={isUpperRow}
    />
  </View>
);

function CounterView({
  commanderMode, playerNumber, players, setDiceViewVisible, setGameConfig,
}) {
  const playersPerRow = playerNumber / 2;
  return (
    <View style={styles.container}>
      <View style={styles.upperRow}>
        {
          players.slice(playersPerRow, playerNumber).map(
            (player) => renderPlayerArea({
              player,
              opponents: omitByIndex(player, players),
              commanderMode,
              isUpperRow: true,
            }),
          )
        }
      </View>
      <View style={styles.lowerRow}>
        {
          players.slice(0, playersPerRow).map(
            (player) => renderPlayerArea({
              player,
              opponents: omitByIndex(player, players),
              commanderMode,
              isUpperRow: false,
            }),
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

export default CounterView;
