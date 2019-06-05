import React from 'react';
import { View } from 'react-native';

const styles = {
  icon: {
    backgroundColor: 'darkred',
    height: 50,
    width: 50,
    borderRadius: 25,
    borderColor: 'white',
    borderWidth: 5,
  },
};

class ToolBox extends React.Component {
  render() {
    return (
      <View style={styles.icon} />
    );
  }
}

export default ToolBox;
