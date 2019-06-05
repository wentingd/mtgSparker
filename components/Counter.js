import React from 'react';
import {
  StyleSheet, Text, View, Button, TouchableHighlight, TouchableOpacity,
} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: 5,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column'
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
    this.setState({
      counterValue: operation === '+' ? this.state.counterValue + 1 : this.state.counterValue - 1,
    });
  };

  render() {
    return (
        <View style={styles.container}>
          <Text>
            Player {this.props.player}
          </Text>
          <Text
            style={{ fontSize: 80 }}>
            {this.state.counterValue}
          </Text>
          <View styles={styles.buttonArea}>
            <Button title='+' onPress={this.handleOnPress('+')}>
            </Button>
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
