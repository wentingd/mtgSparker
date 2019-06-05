import React from 'react';
import {
  StyleSheet, Text, View, TouchableOpacity, TouchableHighlight,
} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    margin: 5,
    alignItems: 'stretch',
    justifyContent: 'center',
  },
  infoArea: {
    position: 'absolute',
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    zIndex: 1,
  },
  touchableArea: {
    opacity: 0,
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'white',
  },
});

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      counterValue: this.props.startingValue || 20,
    };
  }

  handleOnPress = (operation) => () => {
    const { counterValue } = this.state;
    this.setState({
      counterValue: operation === '+' ? counterValue + 1 : counterValue - 1,
    });
  };

  render() {
    const { counterValue } = this.state;
    return (
      <View style={styles.container}>
        <View style={styles.infoArea}>
          <Text
            style={{ fontSize: 100 }}
          >
            {counterValue}
          </Text>
        </View>
        <TouchableOpacity
          activeOpacity={0.5}
          style={styles.touchableArea}
          onPress={this.handleOnPress('+')}
        >
          <Text style={{ fontSize: 50 }}>
            +
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          activeOpacity={0.5}
          style={styles.touchableArea}
          onPress={this.handleOnPress('-')}
        >
          <Text style={{ fontSize: 50 }}>
            -
          </Text>
        </TouchableOpacity>
      </View>
    );
  }
}

export default App;
