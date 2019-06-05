import React from 'react';
import { View } from 'react-native';
import Counter from './Counter';
import ToolBox from './ToolBox';
import Utils from './Utils';

const styles = {
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'stretch',
    backgroundColor: 'grey',
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
    // transform: [{ rotate: '180deg' }],
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

const renderPlayerArea = (player) => (
  <View
    key={player.index}
    style={{ ...styles.playerArea, backgroundColor: player.color }}
  >
    <Counter
      playerName={player.index + 1}
    />
  </View>
);

class CounterView extends React.Component {
  render() {
    const players = Utils.generatePlayers(this.props.playerNumber);
    const playersPerRow = this.props.playerNumber / 2;
    return (
      <View style={styles.container}>
        <View style={styles.upperRow}>
          {
            players.slice(playersPerRow, this.props.playerNumber).map((player) => renderPlayerArea(player))
          }
        </View>
        <View style={styles.lowerRow}>
          {
            players.slice(0, playersPerRow).map((player) => renderPlayerArea(player))
          }
        </View>
        <View style={styles.toolBoxArea}>
          <ToolBox />
        </View>
      </View>
    );
  }
}

export default CounterView;
