import React from 'react';
import {
  StyleSheet, Text, View, Button, TouchableOpacity,
} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: 5,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column',
  },
  buttonArea: {
    // width: '50%',
    // height: '90%',
    flex: 1,
    alignItems: 'stretch',
    justifyContent: 'center',
    backgroundColor: 'white',
    alignSelf: 'stretch',
  },
});

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      counterValue: this.props.startingValue || 20,
    };
  }

  handleOnPress = (operation) => (e) => {
    const { counterValue } = this.state;
    this.setState({
      counterValue: operation === '+' ? counterValue + 1 : counterValue - 1,
    });
  };

  render() {
    const { playerName } = this.props;
    const { counterValue } = this.state;
    return (
      <View style={styles.container}>
        <Text>
          {`Player ${playerName}`}
        </Text>
        <Text
          style={{ fontSize: 80 }}
        >
          {counterValue}
        </Text>
        <View styles={styles.buttonArea}>
          <Button title='+' onPress={this.handleOnPress('+')} />
          {/* <TouchableOpacity
            onPress={this.handleOnPress('+')}>
            <Text>
              +
            </Text>
          </TouchableOpacity> */}
        </View>
        <View styles={styles.buttonArea}>
          <Text>-</Text>
          {/* <TouchableHighlight
            onPress={this.handleOnPress('-')}>
              <Text styles={{ fontSize: 80 }}>
                -
              </Text>
          </TouchableHighlight> */}
        </View>
      </View>
    );
  }
}

export default App;
