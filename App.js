import React from 'react';
import {
  StyleSheet, View,
} from 'react-native';
import CounterView from './components/CounterView';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      playerNumber: 4,
    };
  }

  render() {
    const { playerNumber } = this.state;
    return (
      <View style={styles.container}>
        <CounterView
          playerNumber={playerNumber}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
