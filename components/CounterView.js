import React, { Component } from 'react';
import { View } from 'react-native';
import Counter from './Counter';
import Utils from './Utils';
const styles = {
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'stretch',
    backgroundColor:'grey',
  },
  row: {
    flex: 1,
    flexDirection:'row',
    justifyContent:'center',
    alignItems: 'stretch',
    alignSelf:'center',
    borderColor: 'black',
  },
  upperRow: {
    flex: 1,
    flexDirection: 'row',
    justifyContent:'center',
    alignItems: 'stretch',
    alignSelf:'center',
    borderColor: 'black',
    transform: [{ rotate: '180deg'}],
  },
  playerArea: {
    flex: 1,
    margin: 3,
    borderRadius: 15,
    borderWidth: 3,
    borderColor: 'white',
  },
  toolBox: {
    justifyContent:'center',
    alignItems:'center',
    alignSelf:'center',
    position:'absolute',
  },
}

class CounterView extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const players = Utils.generatePlayers(this.props.playerNumber);
    const playersPerRow = this.props.playerNumber / 2;
    return (
    <View style={styles.container}>
      <View style={styles.upperRow}>
        {
          players.slice(0, playersPerRow).map((player) => 
            <View
              key={player.index}
              style={{...styles.playerArea, backgroundColor: player.color}}>
              <Counter/>
            </View>
          )
        }
      </View>
      <View style={styles.row}>
      {
          players.slice(playersPerRow, this.props.playerNumber).map((player) => 
            <View
              key={player.index}
              style={{...styles.playerArea, backgroundColor: player.color}}>
              <Counter/>
            </View>
          )
        }
      </View>
      <View style={styles.toolBox}>
        <View style={{
          backgroundColor:'blue',
          borderRadius:10,
          height:100,
          width:100,
          borderRadius:100/2 
        }}/>
      </View>
    </View>
    )
  }
};

export default CounterView;
