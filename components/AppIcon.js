import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';

export default class AppIcon extends React.Component {
  render() {
    return (
      <FontAwesomeIcon
        icon='fire'
        color={this.props.color || '#ff5722'}
        size={this.props.size || 16}
      />
    );
  }
}
