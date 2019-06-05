import React from 'react';
import {
  View, Text,
} from 'react-native';

const styles = {
  counter: {
    height: 30,
    width: 30,
    borderRadius: 15,
    justifyContents: 'center',
    alignItem: 'center',
  },
  font: {
    alignSelf: 'center',
    textAlign: 'center',
    fontSize: 20,
    fontFamily: 'sans-serif-light',
  },
};

class MiniCounter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: this.props.startingCount || 0,
    };
  }

  handleOnPress = (operation) => () => {
    const { count } = this.state;
    this.setState({
      count: operation === '+' ? count + 1 : count - 1,
    });
  };

  render() {
    return (
      <View style={{ ...styles.counter, backgroundColor: this.props.color || 'white' }}>
        <Text style={styles.font}>
          {this.state.count || 0}
        </Text>
      </View>
    );
  }
}

export default MiniCounter;
