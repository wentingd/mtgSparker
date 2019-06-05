import React from 'react';
import { View } from 'react-native';

const styles = {
  icon: {
    backgroundColor: 'lightcoral',
    height: 80,
    width: 80,
    borderRadius: 40,
    borderColor: 'darkred',
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
