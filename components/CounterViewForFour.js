import React, { Component } from 'react';
import { View } from 'react-native';
import Counter from './Counter';

const styles = {
  screen: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    color: 'grey'
  },
  container: {
    flex: 1,
    flexDirection:'row',
    backgroundColor:'grey',
    justifyContent:'center',
    alignItems:'center'    
  },
  row: {
    flexDirection:'column',
    justifyContent:'center',
    alignItems:'center',
    alignSelf:'center'
  },
  box: {
    flex: 1,
    flexDirection:'row',
    margin:10
  },
  playerArea: {
    backgroundColor:'white',
    borderRadius:10,
    flexDirection:'column',
    height:100,
    width:100
  },
  toolBox: {
    justifyContent:'center',
    alignItems:'center',
    alignSelf:'center',
    position:'absolute',
  }
}

class CounterView extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const players = [{
      color: 'powderblue',
    },
    // {
    //   color: 'skyblue',
    // },
    // {
    //   color: 'steelblue',
    // },
    {
      color: 'pink',
    }];
    return (
    <View style={styles.screen}>
    {
      this.props.playerNumber === 2
      ? players.map((player, index) => 
        <View
          key={index}
          style={{
            flex: 1,
            margin: 3,
            borderRadius: 15,
            borderWidth: 3,
            borderColor: 'white',
            backgroundColor: player.color
          }}
          >
        </View>)
      : <View style={styles.container}>
        <View style={styles.row}>
          <View style={{...styles.box, alignItems:'flex-end', alignSelf:'flex-end'}}>
            <View style={styles.playerArea}></View>
          </View>
          <View style={{...styles.box, alignItems:'flex-start',alignSelf:'flex-end'}}>
            <View style={styles.playerArea}></View>
          </View>
        </View>
        <View style={styles.row}>
          <View style={{ ...styles.box, alignItems:'flex-end', alignSelf:'flex-start'}}>
            <View style={styles.playerArea}></View>
          </View>
          <View style={{...styles.box, alignItems:'flex-start',alignSelf:'flex-start'}}>
            <View style={styles.playerArea}></View>
          </View>
        </View>
        <View style={styles.toolBox}>
          <View style={{backgroundColor:'blue', borderRadius:10, height:100, width:100, borderRadius:100/2 }}/>
        </View>
      </View>
    }
    </View>
    );
  }
};

export default CounterView;
